"""Aplica um conjunto FIXO de mudanças na conta Google Ads 655-393-4709.

  python scripts/ads_alterar.py --simular   # validate_only=True, não altera nada
  python scripts/ads_alterar.py --aplicar   # altera de verdade e grava relatorios/alteracoes-AAAA-MM-DD.md

Só faz o que está listado em MUDANCAS abaixo. Se qualquer chamada falhar, para e mostra o erro.
"""
import csv
import re
import sys
import unicodedata
from datetime import date
from pathlib import Path

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

RAIZ = Path(__file__).resolve().parent.parent
CID = "6553934709"
CAMPANHA = "Pesquisa - Regularização Goiânia"
GRUPO = "Regularização"
KW_ANTIGA = "regularizar imóvel"
KW_NOVA = "regularizar imóvel goiânia"
LISTA = "Negativas - Informativas"
AJUSTE_DESKTOP = 0.7  # -30%

NEGATIVAS = [  # (texto, tipo) — exatamente as autorizadas
    ("como tirar", "PHRASE"), ("como solicitar", "PHRASE"), ("como requerer", "PHRASE"),
    ("como calcular", "PHRASE"), ("o que precisa", "PHRASE"), ("quanto tempo", "PHRASE"),
    ("alvara de construcao prefeitura", "PHRASE"), ("habite se prefeitura", "PHRASE"),
    ("direto no cartorio", "PHRASE"), ("existe", "BROAD"), ("alvara facil", "PHRASE"),
    ("alvara mais facil", "PHRASE"), ("alvara de construcao online", "PHRASE"),
]
PROIBIDAS = {"escritura", "sem escritura", "registrar", "documento", "documentos", "terreno", "custo", "prazo",
             "quanto custa", "qual o valor", "valor do", "valor da", "valor de", "valor para", "quanto cobra",
             "quanto fica", "qual valor", "quanto e"}


def norm(t):
    t = unicodedata.normalize("NFKD", t.lower())
    return re.sub(r"\s+", " ", "".join(c for c in t if not unicodedata.combining(c))).strip()


def cobre(neg, tipo, termo):
    t, ng = norm(termo), norm(neg)
    if tipo == "PHRASE":
        return f" {ng} " in f" {t} "
    return all(p in t.split() for p in ng.split())


def termos_que_converteram():
    pasta = sorted(p for p in (RAIZ / "dados-ads").iterdir() if p.is_dir() and re.fullmatch(r"\d{4}-\d\d-\d\d", p.name))[-1]
    out = {}
    for arq in ("termos_pesquisa_30d.csv", "termos_pesquisa_7d.csv"):
        with open(pasta / arq, encoding="utf-8-sig") as f:
            for r in csv.DictReader(f):
                if float(r["metrics_conversions"] or 0) > 0:
                    out[r["search_term_view_search_term"]] = float(r["metrics_conversions"])
    return out, pasta.name


def main():
    modo = sys.argv[1] if len(sys.argv) > 1 else ""
    if modo not in ("--simular", "--aplicar"):
        sys.exit(__doc__)
    simular = modo == "--simular"
    sys.stdout.reconfigure(encoding="utf-8")
    client = GoogleAdsClient.load_from_storage(str(RAIZ / "google-ads.yaml"))
    ga = client.get_service("GoogleAdsService")
    q = lambda x: list(ga.search(customer_id=CID, query=x))
    registro = []  # (mudança, antes, depois, ids, como desfazer)

    # ---------- 1. palavra-chave ----------
    linhas = q(f"""SELECT campaign.id, ad_group.id, ad_group.resource_name, ad_group_criterion.resource_name,
        ad_group_criterion.criterion_id, ad_group_criterion.status, ad_group_criterion.cpc_bid_micros,
        ad_group_criterion.keyword.text, ad_group_criterion.keyword.match_type, ad_group_criterion.final_urls,
        ad_group.cpc_bid_micros
        FROM ad_group_criterion WHERE campaign.name = '{CAMPANHA}' AND ad_group.name = '{GRUPO}'
        AND ad_group_criterion.type = 'KEYWORD' AND ad_group_criterion.negative = FALSE""")
    antiga = [r for r in linhas if r.ad_group_criterion.keyword.text == KW_ANTIGA and r.ad_group_criterion.status.name == "ENABLED"]
    ja_existe = [r for r in linhas if norm(r.ad_group_criterion.keyword.text) == norm(KW_NOVA)
                 and r.ad_group_criterion.keyword.match_type.name == "EXACT" and r.ad_group_criterion.status.name != "REMOVED"]
    if len(antiga) != 1:
        sys.exit(f"Esperava 1 palavra-chave ATIVA '{KW_ANTIGA}' no grupo; achei {len(antiga)}. Nada foi alterado.")
    if ja_existe:
        sys.exit("A palavra-chave exata nova já existe no grupo. Nada foi alterado.")
    a = antiga[0]
    lance = a.ad_group_criterion.cpc_bid_micros  # 0 = sem lance próprio (herda do grupo)

    # ---------- 2. negativas ----------
    lista = q(f"SELECT shared_set.resource_name, shared_set.id FROM shared_set WHERE shared_set.name = '{LISTA}' AND shared_set.type = 'NEGATIVE_KEYWORDS' AND shared_set.status = 'ENABLED'")
    if len(lista) != 1:
        sys.exit("Lista compartilhada não encontrada/ambígua.")
    ss = lista[0].shared_set.resource_name
    existentes = [(norm(r.shared_criterion.keyword.text), r.shared_criterion.keyword.match_type.name)
                  for r in q(f"SELECT shared_criterion.keyword.text, shared_criterion.keyword.match_type FROM shared_criterion WHERE shared_set.resource_name = '{ss}'")]
    conv, pasta_dados = termos_que_converteram()
    a_adicionar, puladas = [], []
    for txt, tipo in NEGATIVAS:
        assert norm(txt) not in PROIBIDAS, f"negativa proibida: {txt}"
        casa = [t for t in conv if cobre(txt, tipo, t)]
        if casa:
            puladas.append((txt, tipo, f"casa com termo que converteu: {casa}"))
        elif (norm(txt), tipo) in existentes:
            puladas.append((txt, tipo, "já existe na lista (mesmo texto e tipo)"))
        else:
            cobertas_por = [e for e, m in existentes if (m == "BROAD" and all(p in norm(txt).split() for p in e.split()))
                            or (m == "PHRASE" and f" {e} " in f" {norm(txt)} ")]
            a_adicionar.append((txt, tipo, cobertas_por))

    # ---------- 3. desktop ----------
    dev = q(f"""SELECT campaign_criterion.resource_name, campaign_criterion.bid_modifier, campaign.id
        FROM campaign_criterion WHERE campaign.name = '{CAMPANHA}' AND campaign_criterion.type = 'DEVICE'
        AND campaign_criterion.device.type = 'DESKTOP'""")
    if len(dev) != 1:
        sys.exit("Critério de dispositivo DESKTOP não encontrado/ambíguo.")
    dev_rn = dev[0].campaign_criterion.resource_name
    dev_antes = dev[0].campaign_criterion.bid_modifier

    # ---------- operações ----------
    agc = client.get_service("AdGroupCriterionService")
    op_pausa = client.get_type("AdGroupCriterionOperation")
    op_pausa.update.resource_name = a.ad_group_criterion.resource_name
    op_pausa.update.status = client.enums.AdGroupCriterionStatusEnum.PAUSED
    op_nova = client.get_type("AdGroupCriterionOperation")
    nova = op_nova.create
    nova.ad_group = a.ad_group.resource_name
    nova.status = client.enums.AdGroupCriterionStatusEnum.ENABLED
    nova.keyword.text = KW_NOVA
    nova.keyword.match_type = client.enums.KeywordMatchTypeEnum.EXACT
    if lance:
        nova.cpc_bid_micros = lance

    sc = client.get_service("SharedCriterionService")
    ops_neg = []
    for txt, tipo, _ in a_adicionar:
        op = client.get_type("SharedCriterionOperation")
        op.create.shared_set = ss
        op.create.keyword.text = txt
        op.create.keyword.match_type = getattr(client.enums.KeywordMatchTypeEnum, tipo)
        ops_neg.append(op)

    cc = client.get_service("CampaignCriterionService")
    op_dev = client.get_type("CampaignCriterionOperation")
    op_dev.update.resource_name = dev_rn
    op_dev.update.bid_modifier = AJUSTE_DESKTOP
    from google.api_core import protobuf_helpers
    client.copy_from(op_dev.update_mask, protobuf_helpers.field_mask(None, op_dev.update._pb))
    client.copy_from(op_pausa.update_mask, protobuf_helpers.field_mask(None, op_pausa.update._pb))

    # ---------- resumo "antes -> depois" ----------
    print(f"MODO: {'SIMULAÇÃO (validate_only, nada é alterado)' if simular else 'APLICAÇÃO REAL'}\n")
    print("1) Palavra-chave")
    print(f"   [{GRUPO}] \"{KW_ANTIGA}\" (frase, ID {a.ad_group_criterion.criterion_id}): ATIVA -> PAUSADA")
    print(f"   [{GRUPO}] nova: [{KW_NOVA}] (exata): não existe -> ATIVA; lance: "
          + (f"R$ {lance / 1e6:.2f} (igual ao da original)" if lance else "sem lance próprio, como a original (herda do grupo)"))
    print("\n2) Negativas na lista \"%s\" (%d hoje)" % (LISTA, len(existentes)))
    for t, tp, cob in a_adicionar:
        print(f"   + {'\"'+t+'\"' if tp == 'PHRASE' else t} ({tp})" + (f"   [já coberta por existente: {', '.join(cob)}]" if cob else ""))
    for t, tp, m in puladas:
        print(f"   - PULADA {t} ({tp}): {m}")
    print(f"\n3) Desktop em \"{CAMPANHA}\": ajuste de lance {'sem ajuste' if not dev_antes else f'{dev_antes:+.2f}'} -> -30% (modificador {AJUSTE_DESKTOP})")
    print(f"\nTermos que converteram (base {pasta_dados}): {sorted(conv)}\n")

    # ---------- execução ----------
    try:
        r1 = client.get_service("AdGroupCriterionService").mutate_ad_group_criteria(
            request=dict(customer_id=CID, operations=[op_pausa, op_nova], validate_only=simular))
        print("OK validação/execução 1 (palavra-chave)")
        r2 = sc.mutate_shared_criteria(request=dict(customer_id=CID, operations=ops_neg, validate_only=simular)) if ops_neg else None
        print("OK validação/execução 2 (negativas)")
        r3 = cc.mutate_campaign_criteria(request=dict(customer_id=CID, operations=[op_dev], validate_only=simular))
        print("OK validação/execução 3 (desktop)")
    except GoogleAdsException as e:
        for err in e.failure.errors:
            print("ERRO:", err.error_code, "-", err.message)
        sys.exit("Parei no primeiro erro; nada além do que já aparece como OK foi executado.")

    if simular:
        print("\nSimulação concluída sem erros. Nada foi alterado.")
        return

    # ---------- log ----------
    novos_rn = [x.resource_name for x in r1.results]
    neg_rn = [x.resource_name for x in r2.results] if r2 else []
    dia = date.today().isoformat()
    L = [f"# Alterações na conta Google Ads 655-393-4709 — {dia}\n",
         "Aplicadas por `scripts/ads_alterar.py --aplicar`.\n",
         "## 1. Palavra-chave\n",
         f"- Pausada: `{a.ad_group_criterion.resource_name}` (\"{KW_ANTIGA}\", frase). Desfazer: reativar no grupo \"{GRUPO}\" (status Ativa).",
         f"- Criada: `{novos_rn[1]}` ([{KW_NOVA}], exata). Desfazer: pausar ou remover essa palavra-chave.\n",
         f"## 2. Negativas na lista \"{LISTA}\"\n"]
    for (t, tp, _), rn in zip(a_adicionar, neg_rn):
        L.append(f"- `{t}` ({tp}) — `{rn}`. Desfazer: remover da lista.")
    for t, tp, m in puladas:
        L.append(f"- Não adicionada: `{t}` ({tp}) — {m}.")
    L += [f"\n## 3. Dispositivo Desktop\n",
          f"- `{dev_rn}`: modificador {dev_antes} (sem ajuste) -> {AJUSTE_DESKTOP} (-30%). Desfazer: ajuste de lance do Desktop de volta para 0% (modificador 1.0).\n"]
    out = RAIZ / "relatorios" / f"alteracoes-{dia}.md"
    out.parent.mkdir(exist_ok=True)
    out.write_text("\n".join(L) + "\n", encoding="utf-8")
    print(f"\nLog: {out}")


if __name__ == "__main__":
    main()
