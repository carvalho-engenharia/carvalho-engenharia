"""Analisa os CSVs de ./dados-ads/AAAA-MM-DD e gera ./relatorios/analise-ads-AAAA-MM-DD.md.

Uso: python scripts/ads_analise.py [AAAA-MM-DD]   (padrão: pasta de dados mais recente)
Somente leitura de arquivos locais; não acessa a conta do Google Ads.
Compara com a pasta de dados anterior, quando existir. Também grava CSVs tratados em
dados-ads/AAAA-MM-DD/tratados/.
"""
import csv
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "dados-ads"
DIAS = {"MONDAY": "Seg", "TUESDAY": "Ter", "WEDNESDAY": "Qua", "THURSDAY": "Qui",
        "FRIDAY": "Sex", "SATURDAY": "Sáb", "SUNDAY": "Dom"}


# ---------- utilidades ----------
def norm(t):
    t = unicodedata.normalize("NFKD", t.lower())
    return re.sub(r"\s+", " ", "".join(c for c in t if not unicodedata.combining(c))).strip()


def ler(pasta, nome):
    arq = pasta / f"{nome}.csv"
    if not arq.exists():
        return []
    with open(arq, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def n(x, k):
    try:
        return float(x.get(k) or 0)
    except ValueError:
        return 0.0


def brl(v):
    return "R$ " + f"{v:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")


def pct(v):
    return f"{v * 100:.1f}%".replace(".", ",")


def tabela(cab, linhas):
    out = ["| " + " | ".join(cab) + " |", "|" + "|".join("---" for _ in cab) + "|"]
    out += ["| " + " | ".join(str(c) for c in l) + " |" for l in linhas]
    return "\n".join(out)


def salvar_csv(caminho, cab, linhas):
    caminho.parent.mkdir(parents=True, exist_ok=True)
    with open(caminho, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.writer(f)
        w.writerow(cab)
        w.writerows(linhas)


# ---------- classificação de termos ----------
NAO_FACO = r"usucapi|fundiari|reurb|rural|escritur|registrar (um )?terreno|terreno|inss|iptu|venda|comprar|aluguel|alugar|veicul|carro|detran|seduh|cnh"
PREFEITURA = r"gratis|gratuit|prefeitura|portal|alvara facil|mais facil|online|\bsite\b|2 via|segunda via|consulta|protocolo|sem custo|de graca"
CURIOSO = (r"o que e|\boq\b|o q |como (tirar|fazer|funciona|solicitar|requerer|averbar|conseguir|calcular|registrar|dar entrada|e calculado)|"
           r"quanto (custa|e |fica|cobr|tempo|leva|demora)|qual (o )?valor|\bvalor\b|\btaxa\b|tabela|prazo|documento|importancia|"
           r"passo a passo|modelo|significado|o que (precisa|fazer)|custo|existe|habits|habit |abts|abits|habitisse|calcul")
CONTRATAR = r"despachante|empresa|engenheir|escritorio|regulariz|averba|habite|alvara|laudo|vistoria|orcamento|contratar|servico|legaliz"


def classificar(termo):
    t = norm(termo)
    if re.search(NAO_FACO, t):
        return "serviço que não faço"
    if re.search(PREFEITURA, t):
        return "prefeitura/gratuito"
    if re.search(CURIOSO, t):
        return "curioso/informativo"
    if re.search(CONTRATAR, t):
        return "intenção de contratar"
    return "curioso/informativo"


# ---------- negativas ----------
# Negativas genéricas candidatas. NUNCA incluir aqui termos ligados aos serviços prestados
# (ver PROTEGIDOS) nem negativas de preço (ver OBSERVAR).
CANDIDATAS = [  # (texto, tipo)
    ("quanto tempo", "PHRASE"), ("como tirar", "PHRASE"), ("como solicitar", "PHRASE"), ("como requerer", "PHRASE"),
    ("como conseguir", "PHRASE"), ("como dar entrada", "PHRASE"), ("como calcular", "PHRASE"),
    ("o que precisa", "PHRASE"), ("o que fazer", "PHRASE"), ("direto no cartorio", "PHRASE"), ("existe", "BROAD"),
    ("o que e", "PHRASE"), ("gratis", "BROAD"), ("gratuito", "BROAD"), ("usucapiao", "BROAD"),
    ("reurb", "BROAD"), ("rural", "BROAD"), ("inss", "BROAD"),
]
# Preço e prazo: nunca sugeridos como negativa; só listados na seção "Observar".
OBSERVAR = [("quanto custa", "PHRASE"), ("qual o valor", "PHRASE"), ("qual valor", "PHRASE"), ("quanto fica", "PHRASE"),
            ("valor da", "PHRASE"), ("valor do", "PHRASE"), ("valor de", "PHRASE"), ("valor para", "PHRASE"),
            ("quanto cobra", "PHRASE"), ("quanto e", "PHRASE"), ("custo", "BROAD"), ("prazo", "BROAD")]
# Serviços que o escritório presta: termos com estes radicais nunca viram negativa genérica.
PROTEGIDOS = re.compile(r"escritur|registr|document|terreno|averba|habite|alvara|regulariz|despachant")
# Termos de portal da prefeitura / serviço gratuito: sempre checados e sugeridos como negativa (frase do termo inteiro).
PORTAL = re.compile(r"alvara facil|mais facil|online|site|portal|prefeitura|gratis|gratuit|2 via|segunda via|protocolo")


def cobre(neg, tipo, termo):
    t, ng = norm(termo), norm(neg)
    if tipo == "PHRASE":
        return f" {ng} " in f" {t} "
    if tipo == "EXACT":
        return t == ng
    palavras = set(t.split())
    return all(p in palavras or any(p == w for w in palavras) for p in ng.split())


def formatar_neg(txt, tipo):
    return {"PHRASE": f'"{txt}"', "EXACT": f"[{txt}]"}.get(tipo, txt)


# ---------- análise ----------
def agregar(linhas, chave, campos=("metrics_impressions", "metrics_clicks", "metrics_cost", "metrics_conversions")):
    ag = defaultdict(lambda: defaultdict(float))
    for l in linhas:
        for c in campos:
            ag[chave(l)][c] += n(l, c)
    return ag


def metricas(d):
    i, c, custo, cv = (d["metrics_impressions"], d["metrics_clicks"], d["metrics_cost"], d["metrics_conversions"])
    return dict(i=i, c=c, custo=custo, cv=cv, ctr=c / i if i else 0, cpc=custo / c if c else 0,
                cpa=custo / cv if cv else None)


def main():
    pastas = sorted(p for p in DADOS.iterdir() if p.is_dir() and re.fullmatch(r"\d{4}-\d\d-\d\d", p.name)) if DADOS.exists() else []
    if not pastas:
        sys.exit("Nenhuma pasta em dados-ads. Rode antes: python scripts/ads_report.py")
    pasta = DADOS / sys.argv[1] if len(sys.argv) > 1 else pastas[-1]
    anteriores = [p for p in pastas if p.name < pasta.name]
    ant = anteriores[-1] if anteriores else None
    dia = pasta.name
    L = []  # linhas do relatório
    add = L.append

    camp30, camp7 = ler(pasta, "campanhas_30d"), ler(pasta, "campanhas_7d")
    termos = ler(pasta, "termos_pesquisa_30d")
    kws = ler(pasta, "palavras_chave_30d")
    anuncios = ler(pasta, "anuncios_30d")
    recursos = ler(pasta, "recursos_anuncio_30d")
    acoes = ler(pasta, "acoes_conversao")
    acoes_desemp = ler(pasta, "acoes_conversao_desempenho_30d")
    neg_camp = ler(pasta, "negativas_campanha")
    neg_lista = ler(pasta, "listas_negativas_itens")
    c7 = {r["campaign_name"]: r for r in camp7}

    tot = defaultdict(float)
    for r in camp30:
        for k in ("metrics_impressions", "metrics_clicks", "metrics_cost", "metrics_conversions"):
            tot[k] += n(r, k)
    mt = metricas(tot)
    ativas = [r for r in camp30 if r["campaign_status"] == "ENABLED"]
    com_dados = [r for r in camp30 if n(r, "metrics_impressions") > 0]
    sem_dados = [r for r in ativas if n(r, "metrics_impressions") == 0]

    # ---- termos
    for t in termos:
        t["classe"] = classificar(t["search_term_view_search_term"])
    por_termo = defaultdict(lambda: defaultdict(float))
    for t in termos:
        k = (norm(t["search_term_view_search_term"]), t["classe"])
        for c in ("metrics_impressions", "metrics_clicks", "metrics_cost", "metrics_conversions"):
            por_termo[k][c] += n(t, c)
    custo_termos = sum(v["metrics_cost"] for v in por_termo.values())
    por_classe = defaultdict(lambda: defaultdict(float))
    for (_, cl), v in por_termo.items():
        for c, x in v.items():
            por_classe[cl][c] += x
        por_classe[cl]["n"] += 1

    # ---- negativas
    existentes = [(r["shared_criterion_keyword_text"], r["shared_criterion_keyword_match_type"]) for r in neg_lista] + \
                 [(r["campaign_criterion_keyword_text"], r["campaign_criterion_keyword_match_type"])
                  for r in neg_camp if "Regulariza" in r["campaign_name"]]
    sugeridas = []

    def avaliar(txt, tipo):
        """Devolve a tupla da sugestao ou None se nao deve ser sugerida."""
        if any(norm(txt) == norm(e) and tipo == m for e, m in existentes):
            return None
        casados = [(t, v) for (t, cl), v in por_termo.items() if cobre(txt, tipo, t)]
        if not casados or any(v["metrics_conversions"] > 0 for _, v in casados):
            return None  # nunca sugerir negativa que bloquearia termo que converteu
        if all(any(cobre(e, m, t) for e, m in existentes) for t, _ in casados):
            return None  # ja coberta
        return (txt, tipo, len(casados), sum(v["metrics_impressions"] for _, v in casados),
                sum(v["metrics_clicks"] for _, v in casados), sum(v["metrics_cost"] for _, v in casados))

    for txt, tipo in CANDIDATAS:
        if PROTEGIDOS.search(norm(txt)):
            continue
        r = avaliar(txt, tipo)
        if r and not (r[4] == 0 and any(cl.startswith("inten") for (t, cl) in por_termo if cobre(txt, tipo, t))):
            sugeridas.append(r)
    # portal da prefeitura / gratuito: o termo inteiro vira negativa de frase (isento de PROTEGIDOS)
    portal_termos = sorted({t for (t, cl) in por_termo if cl == "prefeitura/gratuito" or PORTAL.search(t)})
    portal_ok = []
    for t in portal_termos:
        if any(cobre(o, tp, t) for o, tp in OBSERVAR):
            continue  # termo de preço: só aparece em "Observar"
        r = avaliar(t, "PHRASE")
        if r and not any(r[0] == x[0] for x in sugeridas):
            sugeridas.append(r)
            portal_ok.append(t)
    observar = []
    for txt, tipo in OBSERVAR:
        casados = [(t, v) for (t, cl), v in por_termo.items() if cobre(txt, tipo, t)]
        if casados:
            observar.append((txt, tipo, len(casados), sum(v["metrics_clicks"] for _, v in casados),
                             sum(v["metrics_cost"] for _, v in casados), sum(v["metrics_conversions"] for _, v in casados)))
    sugeridas.sort(key=lambda s: (-s[5], -s[3]))

    # ---- palavras-chave
    kw_rows = []
    for k in kws:
        i, c, custo, cv = (n(k, "metrics_impressions"), n(k, "metrics_clicks"), n(k, "metrics_cost"), n(k, "metrics_conversions"))
        kw_rows.append(dict(grupo=k["ad_group_name"], kw=k["ad_group_criterion_keyword_text"],
                            mt=k["ad_group_criterion_keyword_match_type"], st=k["ad_group_criterion_status"],
                            qs=int(n(k, "ad_group_criterion_quality_info_quality_score")),
                            ctr_prev=k["ad_group_criterion_quality_info_search_predicted_ctr"],
                            anuncio=k["ad_group_criterion_quality_info_creative_quality_score"],
                            lp=k["ad_group_criterion_quality_info_post_click_quality_score"],
                            i=i, c=c, custo=custo, cv=cv))
    sem_retorno = sorted([k for k in kw_rows if k["custo"] >= 5 and k["cv"] == 0], key=lambda k: -k["custo"])
    melhores = sorted([k for k in kw_rows if k["cv"] > 0], key=lambda k: k["custo"] / k["cv"])
    avaliadas = [k for k in kw_rows if k["qs"] > 0]

    # ---- novas keywords
    novas = {}
    for t in termos:
        if t["search_term_view_status"] == "NONE" and t["classe"] == "intenção de contratar":
            v = por_termo[(norm(t["search_term_view_search_term"]), t["classe"])]
            if v["metrics_conversions"] > 0 or v["metrics_clicks"] >= 2:
                novas[norm(t["search_term_view_search_term"])] = v

    # ---- conversões
    principais = [a for a in acoes if a["conversion_action_status"] == "ENABLED" and a["conversion_action_primary_for_goal"] == "True"]
    contadas = defaultdict(float)
    todas = defaultdict(float)
    for r in acoes_desemp:
        contadas[r["segments_conversion_action_name"]] += n(r, "metrics_conversions")
        todas[r["segments_conversion_action_name"]] += n(r, "metrics_all_conversions")
    fortes = ("Clique WhatsApp", "Clique Telefone", "Calls from ads")
    conv_fortes = sum(v for k, v in contadas.items() if k in fortes)
    ga4_escondidas = [a for a in acoes if a["conversion_action_status"] == "HIDDEN"]

    # ================= relatório =================
    add(f"# Análise Google Ads — {dia}")
    add(f"\nConta 655-393-4709 (Regularização Imóveis). Fonte: Google Ads API, somente leitura. Período: últimos 30 dias (e 7 dias para comparação). "
        + (f"Comparado com a extração de {ant.name}." if ant else "Primeira extração: não há relatório anterior para comparar."))

    # resumo executivo
    add("\n## Resumo executivo\n")
    pior = max(com_dados, key=lambda r: n(r, "metrics_cost")) if com_dados else None
    perd_orc = n(com_dados[0], "metrics_search_budget_lost_impression_share") if com_dados else 0
    perd_rank = n(com_dados[0], "metrics_search_rank_lost_impression_share") if com_dados else 0
    add(f"1. Em 30 dias: {mt['i']:.0f} impressões, {mt['c']:.0f} cliques (CTR {pct(mt['ctr'])}, CPC médio {brl(mt['cpc'])}), "
        f"custo {brl(mt['custo'])} e {mt['cv']:.0f} conversões ({brl(mt['cpa']) if mt['cpa'] else 'sem conversões'} por conversão).")
    add(f"2. Conversões contadas: {conv_fortes:.0f} de ação direta (WhatsApp/telefone/ligação). São cliques de contato, não propostas fechadas: não dá para medir custo por cliente sem registrar o resultado dos contatos.")
    if com_dados:
        add(f"3. A campanha principal perde {pct(perd_orc)} das impressões por orçamento e {pct(perd_rank)} por classificação.")
    desperd = sum(k["custo"] for k in sem_retorno)
    add(f"4. {len(sem_retorno)} palavras-chave gastaram {brl(desperd)} (≥ R$ 5 cada) sem nenhuma conversão; "
        f"{sum(v['n'] for c, v in por_classe.items() if c != 'intenção de contratar'):.0f} dos {sum(v['n'] for v in por_classe.values()):.0f} termos de pesquisa visíveis não indicam intenção de contratar.")
    add("5. " + ("; ".join(f"{r['campaign_name']} está ativa mas sem impressões (aguardar dados)" for r in sem_dados) + ". " if sem_dados else "")
        + "Nenhuma campanha com gasto relevante e zero conversão: não há campanha para pausar com base nestes dados.")

    # métricas por campanha
    add("\n## Métricas por campanha (30 dias)\n")
    linhas = []
    for r in camp30:
        m = metricas({k: n(r, k) for k in ("metrics_impressions", "metrics_clicks", "metrics_cost", "metrics_conversions")})
        linhas.append([r["campaign_name"], r["campaign_status"], brl(n(r, "campaign_budget_amount")) + "/dia",
                       f"{m['i']:.0f}", f"{m['c']:.0f}", pct(m["ctr"]), brl(m["cpc"]), brl(m["custo"]),
                       f"{m['cv']:.0f}", brl(m["cpa"]) if m["cpa"] else "—",
                       pct(n(r, "metrics_search_budget_lost_impression_share")),
                       pct(n(r, "metrics_search_rank_lost_impression_share"))])
    linhas.append(["**Total**", "", "", f"{mt['i']:.0f}", f"{mt['c']:.0f}", pct(mt["ctr"]), brl(mt["cpc"]), brl(mt["custo"]),
                   f"{mt['cv']:.0f}", brl(mt["cpa"]) if mt["cpa"] else "—", "", ""])
    add(tabela(["Campanha", "Status", "Orçamento", "Impr.", "Cliques", "CTR", "CPC", "Custo", "Conv.", "Custo/conv.",
                "Perdida orçam.", "Perdida classif."], linhas))
    add("\n### Últimos 7 dias vs 30 dias\n")
    linhas = []
    for r in com_dados:
        s = c7.get(r["campaign_name"], {})
        m30 = metricas({k: n(r, k) for k in ("metrics_impressions", "metrics_clicks", "metrics_cost", "metrics_conversions")})
        m7 = metricas({k: n(s, k) for k in ("metrics_impressions", "metrics_clicks", "metrics_cost", "metrics_conversions")})
        linhas.append([r["campaign_name"], "30d", pct(m30["ctr"]), brl(m30["cpc"]), brl(m30["custo"]), f"{m30['cv']:.0f}", brl(m30["cpa"]) if m30["cpa"] else "—"])
        linhas.append(["", "7d", pct(m7["ctr"]), brl(m7["cpc"]), brl(m7["custo"]), f"{m7['cv']:.0f}", brl(m7["cpa"]) if m7["cpa"] else "—"])
    add(tabela(["Campanha", "Período", "CTR", "CPC", "Custo", "Conv.", "Custo/conv."], linhas))
    add("\nOs 7 dias fazem parte dos 30; a comparação mostra a tendência recente.")

    # comparação com relatório anterior
    if ant:
        add(f"\n### Variação vs extração de {ant.name}\n")
        antc = {r["campaign_name"]: r for r in ler(ant, "campanhas_30d")}
        linhas = []
        for r in camp30:
            a = antc.get(r["campaign_name"])
            if not a:
                continue
            f = lambda k: (n(r, k), n(a, k))
            linhas.append([r["campaign_name"]] + [f"{x:.2f} ({x - y:+.2f})" for x, y in (f("metrics_cost"), f("metrics_clicks"), f("metrics_conversions"))])
        add(tabela(["Campanha", "Custo", "Cliques", "Conversões"], linhas))

    # termos
    add("\n## Termos de pesquisa\n")
    add(f"O Google só mostra os termos com volume suficiente: aqui aparecem {brl(custo_termos)} dos {brl(mt['custo'])} gastos "
        f"({pct(custo_termos / mt['custo']) if mt['custo'] else '—'}). O restante é de termos ocultos por privacidade. A classificação é automática, por regras de texto: revise os casos limite.\n")
    linhas = []
    for cl in ("intenção de contratar", "curioso/informativo", "prefeitura/gratuito", "serviço que não faço"):
        v = por_classe.get(cl, defaultdict(float))
        linhas.append([cl, f"{v['n']:.0f}", f"{v['metrics_impressions']:.0f}", f"{v['metrics_clicks']:.0f}", brl(v["metrics_cost"]), f"{v['metrics_conversions']:.0f}"])
    add(tabela(["Classe", "Termos", "Impr.", "Cliques", "Custo", "Conv."], linhas))
    add("\n**Termos com custo (top 15):**\n")
    top = sorted(por_termo.items(), key=lambda kv: -kv[1]["metrics_cost"])[:15]
    add(tabela(["Termo", "Classe", "Cliques", "Custo", "Conv."],
               [[t, cl, f"{v['metrics_clicks']:.0f}", brl(v["metrics_cost"]), f"{v['metrics_conversions']:.1f}"] for (t, cl), v in top if v["metrics_cost"] > 0]))
    add("\n**Termos que converteram:**\n")
    add(tabela(["Termo", "Classe", "Cliques", "Custo", "Conv."],
               [[t, cl, f"{v['metrics_clicks']:.0f}", brl(v["metrics_cost"]), f"{v['metrics_conversions']:.1f}"]
                for (t, cl), v in sorted(por_termo.items(), key=lambda kv: -kv[1]["metrics_conversions"]) if v["metrics_conversions"] > 0]))
    if novas:
        add("\n**Termos para virar palavra-chave (conversão ou 2+ cliques, ainda não adicionados):**\n")
        for t, v in sorted(novas.items(), key=lambda kv: -kv[1]["metrics_conversions"]):
            add(f"- `{t}` — {v['metrics_clicks']:.0f} cliques, {brl(v['metrics_cost'])}, {v['metrics_conversions']:.1f} conv.")

    # negativas
    add("\n## Palavras negativas sugeridas (copiar e colar)\n")
    add(f"Já existem {len(existentes)} negativas ativas (lista compartilhada + campanha). Estas abaixo não duplicam as existentes e **nenhuma** casa com termo que converteu. "
        "Sintaxe: `\"frase\"` = correspondência de frase; sem aspas = ampla. Aplique à lista \"Negativas - Informativas\" (hoje vinculada às duas campanhas).\n")
    if sugeridas:
        add("```\n" + "\n".join(formatar_neg(t, tp) for t, tp, *_ in sugeridas) + "\n```")
        add("\n" + tabela(["Negativa", "Tipo", "Termos que bloqueia", "Impr.", "Cliques", "Custo evitado (30d)"],
                          [[formatar_neg(t, tp), tp, k, f"{i:.0f}", f"{c:.0f}", brl(cu)] for t, tp, k, i, c, cu in sugeridas]))
        add(f"\nTermos de portal da prefeitura/gratuito sempre são checados: {len(portal_ok)} termo(s) novo(s) entraram acima como frase. "
            "Termos ligados aos serviços (escritura, registro, documentação, terreno, averbação, habite-se, alvará, regularização, despachante) nunca são sugeridos como negativa genérica.")
    else:
        add("Nenhuma negativa nova identificada.")

    add("\n### Observar (preço e prazo: não são sugeridos como negativa)\n")
    if observar:
        add(tabela(["Expressão", "Tipo", "Termos", "Cliques", "Custo (30d)", "Conv."],
                   [[formatar_neg(t, tp), tp, k, f"{c:.0f}", brl(cu), f"{cv:.1f}"] for t, tp, k, c, cu, cv in observar]))
        add("\nQuem pesquisa preço pode contratar. Decida com base no custo e nas conversões acima, depois de mais dados.")
    else:
        add("Nenhum termo de preço ou prazo no período.")

    # palavras-chave
    add("\n## Palavras-chave\n")
    add("**Gastaram sem converter (≥ R$ 5):**\n")
    add(tabela(["Grupo", "Palavra-chave", "Status", "Cliques", "Custo", "IQ"],
               [[k["grupo"], k["kw"], k["st"], f"{k['c']:.0f}", brl(k["custo"]), k["qs"] or "—"] for k in sem_retorno]) if sem_retorno else "Nenhuma.")
    add("\n**Melhor custo por conversão:**\n")
    add(tabela(["Grupo", "Palavra-chave", "Cliques", "Custo", "Conv.", "Custo/conv."],
               [[k["grupo"], k["kw"], f"{k['c']:.0f}", brl(k["custo"]), f"{k['cv']:.1f}", brl(k["custo"] / k["cv"])] for k in melhores[:8]]))
    add("\n**Índice de qualidade (só as palavras-chave que o Google já avaliou; as demais têm pouco volume):**\n")
    add(tabela(["Grupo", "Palavra-chave", "IQ", "CTR previsto", "Relevância do anúncio", "Experiência na página"],
               [[k["grupo"], k["kw"], k["qs"], k["ctr_prev"], k["anuncio"], k["lp"]] for k in sorted(avaliadas, key=lambda k: k["qs"])]))
    n_phrase = sum(1 for k in kw_rows if k["mt"] == "PHRASE")
    add(f"\nTipos de correspondência: {n_phrase} de {len(kw_rows)} palavras-chave estão em correspondência de frase; quase nenhuma em exata.")

    # anúncios
    add("\n## Anúncios\n")
    linhas = []
    for a in anuncios:
        i, c, cu, cv = n(a, "metrics_impressions"), n(a, "metrics_clicks"), n(a, "metrics_cost"), n(a, "metrics_conversions")
        linhas.append([a["campaign_name"][:28], a["ad_group_name"], a["ad_group_ad_ad_strength"], f"{i:.0f}", f"{c:.0f}",
                       pct(c / i) if i else "—", brl(cu), f"{cv:.1f}", brl(cu / cv) if cv else "—"])
    add(tabela(["Campanha", "Grupo", "Força", "Impr.", "Cliques", "CTR", "Custo", "Conv.", "Custo/conv."], linhas))
    ass = defaultdict(lambda: [0.0, 0.0])
    for r in recursos:
        if r["ad_group_ad_asset_view_field_type"] in ("HEADLINE", "DESCRIPTION"):
            k = (r["ad_group_ad_asset_view_field_type"], r["asset_text_asset_text"])
            ass[k][0] += n(r, "metrics_impressions")
            ass[k][1] += n(r, "metrics_clicks")
    rank = sorted(((k, v) for k, v in ass.items() if v[0] >= 30), key=lambda kv: -(kv[1][1] / kv[1][0]))
    if rank:
        add("\n**Títulos/descrições com 30+ impressões, por CTR** (os rótulos oficiais BEST/LOW ainda não existem por baixo volume):\n")
        add(tabela(["Tipo", "Texto", "Impr.", "Cliques", "CTR"],
                   [["Título" if k[0] == "HEADLINE" else "Descrição", k[1], f"{v[0]:.0f}", f"{v[1]:.0f}", pct(v[1] / v[0])] for k, v in rank[:6]]))
        add("\nMenor CTR:\n")
        add(tabela(["Tipo", "Texto", "Impr.", "Cliques", "CTR"],
                   [["Título" if k[0] == "HEADLINE" else "Descrição", k[1], f"{v[0]:.0f}", f"{v[1]:.0f}", pct(v[1] / v[0])] for k, v in rank[-4:]]))
    add("\nSugestão para filtrar curiosos sem matar volume: incluir o preço de partida (\"A partir de R$ 2.000\") ou \"Engenheiro responsável (RT)\" em 1–2 títulos fixos; "
        "evitar promessas de \"grátis\", \"fácil\" e \"online\". Teste um título por vez e compare o CTR e as conversões em 2 semanas.")

    # segmentos
    add("\n## Dias, horas e dispositivos (30 dias)\n")
    for nome, arq, chave, fmt in (("Dia da semana", "dia_semana_30d", "segments_day_of_week", lambda x: DIAS.get(x, x)),
                                   ("Dispositivo", "dispositivo_30d", "segments_device", lambda x: x)):
        ag = agregar(ler(pasta, arq), lambda l, c=chave: l[c])
        ordem = list(DIAS) if "week" in chave else sorted(ag)
        add(f"**{nome}:**\n")
        add(tabela([nome, "Impr.", "Cliques", "CTR", "Custo", "Conv.", "Custo/conv."],
                   [[fmt(k), f"{metricas(ag[k])['i']:.0f}", f"{metricas(ag[k])['c']:.0f}", pct(metricas(ag[k])["ctr"]),
                     brl(metricas(ag[k])["custo"]), f"{metricas(ag[k])['cv']:.0f}",
                     brl(metricas(ag[k])["cpa"]) if metricas(ag[k])["cpa"] else "—"] for k in ordem if k in ag]))
        add("")
    horas = agregar(ler(pasta, "hora_30d"), lambda l: int(l["segments_hour"]))
    add("**Hora do dia:**\n")
    add(tabela(["Hora", "Impr.", "Cliques", "Custo", "Conv."],
               [[f"{h:02d}h", f"{horas[h]['metrics_impressions']:.0f}", f"{horas[h]['metrics_clicks']:.0f}",
                 brl(horas[h]["metrics_cost"]), f"{horas[h]['metrics_conversions']:.0f}"] for h in sorted(horas)]))
    max_hora = max((v["metrics_conversions"] for v in horas.values()), default=0)
    dias_ag = agregar(ler(pasta, "dia_semana_30d"), lambda l: l["segments_day_of_week"])
    max_dia = max((v["metrics_conversions"] for v in dias_ag.values()), default=0)
    if max_dia < 5 or max_hora < 5:
        add(f"\n**Sem recomendação por dia ou hora:** a regra é só recomendar quando o recorte tem 5+ conversões. "
            f"Maior recorte por dia: {max_dia:.0f}; por hora: {max_hora:.0f}.")
    fora = sum(v["metrics_cost"] for h, v in horas.items() if h < 7 or h >= 18)
    ag = ler(pasta, "agendamento")
    h7 = agregar(ler(pasta, "hora_7d"), lambda l: int(l["segments_hour"]))
    d7 = agregar(ler(pasta, "dia_semana_7d"), lambda l: l["segments_day_of_week"])
    fora7 = sum(v["metrics_cost"] for h, v in h7.items() if h < 7 or h >= 18)
    dom7 = d7.get("SUNDAY", {}).get("metrics_cost", 0)
    if ag:
        por_camp = defaultdict(list)
        for r in ag:
            por_camp[r["campaign_name"]].append(r)
        for cn, rs in por_camp.items():
            dias = ", ".join(DIAS[r["campaign_criterion_ad_schedule_day_of_week"]] for r in rs)
            add(f"Agendamento de **{cn}**: {dias}, {rs[0]['campaign_criterion_ad_schedule_start_hour']}h–{rs[0]['campaign_criterion_ad_schedule_end_hour']}h.")
    add(f"\nGasto fora de 07h–18h: {brl(fora)} nos 30 dias e {brl(fora7)} nos últimos 7 dias; gasto no domingo: {brl(dom7)} nos últimos 7 dias. "
        "Se os 30 dias têm gasto fora do agendamento e os 7 dias não, o agendamento foi aplicado recentemente e o problema já está corrigido.")
    desk = {k: metricas(v) for k, v in agregar(ler(pasta, "dispositivo_30d"), lambda l: l["segments_device"]).items()}
    for k, m in desk.items():
        if m["cv"] == 0 and mt["custo"] and m["custo"] / mt["custo"] >= 0.05:
            add(f"\nDispositivo {k}: {brl(m['custo'])} ({pct(m['custo'] / mt['custo'])} do gasto) com {m['c']:.0f} cliques e nenhuma conversão. "
                "Amostra pequena, mas vale um ajuste de lance negativo (-30% a -50%) para teste.")

    # conversões
    add("\n## Rastreamento de conversões\n")
    add(tabela(["Ação", "Status", "Origem", "Principal", "Conv. contadas (30d)", "Todas as conv. (30d)"],
               [[a["conversion_action_name"], a["conversion_action_status"], a["conversion_action_origin"],
                 "sim" if a["conversion_action_primary_for_goal"] == "True" else "não",
                 f"{contadas.get(a['conversion_action_name'], 0):.0f}", f"{todas.get(a['conversion_action_name'], 0):.0f}"] for a in acoes]))
    add("")
    if conv_fortes > 0:
        add(f"- **Funcionando:** {conv_fortes:.0f} conversões de contato (WhatsApp, telefone, ligação pelo anúncio) registradas no período.")
    else:
        add("- **PRIORIDADE 1:** nenhuma conversão de contato registrada no período. Verifique as tags.")
    google_hosted = [a["conversion_action_name"] for a in principais if a["conversion_action_origin"] == "GOOGLE_HOSTED"]
    if google_hosted:
        add("- Ações geradas pelo próprio Google marcadas como principais (" + ", ".join(google_hosted) + "): contam interações fracas (ex.: visitas a página, rotas). "
            "Nesta extração elas aparecem em \"todas as conversões\", mas não nas \"conversões\" das campanhas. Confirme que o objetivo da conta não as usa para otimizar lances.")
    if ga4_escondidas:
        add("- Ações importadas do GA4 estão ocultas (" + ", ".join(a["conversion_action_name"].split("(web) ")[-1] for a in ga4_escondidas) + "): não alimentam as campanhas.")
    add("- Não há ação de conversão de **lead qualificado ou contrato fechado**. Sem isso o Google otimiza para qualquer clique em WhatsApp, inclusive curiosos.")

    # ações
    add("\n## Top 5 ações priorizadas (impacto × esforço)\n")
    acoes_l = []
    acoes_l.append(("Registrar qual contato virou cliente (importar conversão offline ou marcar leads qualificados) e passar a medir custo por cliente", "alto impacto / médio esforço"))
    if sugeridas:
        acoes_l.append((f"Aplicar as {len(sugeridas)} negativas sugeridas (teriam evitado {brl(sum(s[5] for s in sugeridas))} em termos sem conversão, dentro dos termos visíveis)", "médio impacto / baixo esforço"))
    ativos_sem_retorno = [k for k in sem_retorno if k["st"] == "ENABLED"]
    if ativos_sem_retorno:
        top3 = ", ".join(f"\"{k['kw']}\" ({brl(k['custo'])})" for k in ativos_sem_retorno[:3])
        acoes_l.append((f"Revisar palavras-chave sem retorno, com destaque para {top3}: trocar para correspondência exata com \"goiânia\" ou reduzir lance", "médio impacto / baixo esforço"))
    lp_ruim = [k for k in avaliadas if k["lp"] == "BELOW_AVERAGE"]
    if lp_ruim:
        acoes_l.append((f"Melhorar a página de destino dos grupos com \"experiência na página\" abaixo da média ({', '.join(sorted({k['grupo'] for k in lp_ruim}))}): título igual ao termo buscado, preço de partida, botão de WhatsApp acima da dobra", "médio impacto / médio esforço"))
    if melhores:
        b = melhores[0]
        acoes_l.append((f"Reforçar o grupo \"{b['grupo']}\" / palavra-chave \"{b['kw']}\" ({brl(b['custo'] / b['cv'])} por conversão): validar se os contatos são bons e, se forem, separar em campanha própria com orçamento dedicado", "médio impacto / baixo esforço"))
    for i, (t, ie) in enumerate(acoes_l[:5], 1):
        add(f"{i}. {t} *({ie})*")

    # orçamento
    add("\n## Orçamento: pausar, reduzir ou reforçar\n")
    for r in camp30:
        i, cu, cv = n(r, "metrics_impressions"), n(r, "metrics_cost"), n(r, "metrics_conversions")
        orc = n(r, "metrics_search_budget_lost_impression_share")
        if i == 0:
            add(f"- **{r['campaign_name']}**: sem impressões em 30 dias. Se o início é futuro (previsto 23/10/2026), é esperado. Se a data já passou, verifique aprovação do anúncio e do orçamento. Reavaliar após 14 dias de veiculação; não pausar nem alterar orçamento agora.")
        elif cv == 0 and cu >= 100:
            add(f"- **{r['campaign_name']}**: gastou {brl(cu)} sem conversão. Pausar ou reduzir.")
        else:
            acao = "Manter o orçamento até aplicar as negativas e a medição de leads; só então considerar aumento" if orc > 0.2 else "Manter"
            add(f"- **{r['campaign_name']}**: {brl(cu)} → {cv:.0f} conversões ({brl(cu / cv) if cv else '—'} cada); perde {pct(orc)} das impressões por orçamento. {acao}. Não há campanha para pausar.")
    outras = [a for a in ("Regularização de Imóveis",) if not any(r["campaign_name"] == a for r in camp30)]
    for o in outras:
        add(f"- A campanha \"{o}\" (Maximizar conversões, R$ 13,40/dia) **não existe** na conta: \"{o}\" é só um grupo de anúncios dentro de \"Pesquisa - Regularização Goiânia\". Estratégia de lances atual: Maximizar cliques.")
    add("\n## Dados que não vieram da API / limitações\n")
    add("- Termos de pesquisa ocultos pelo Google (privacidade) não aparecem; só a parte visível foi classificada.\n"
        "- Custo por cliente fechado, e não por contato, exige dados de fora da conta (CRM/WhatsApp).\n"
        "- Valor monetário das conversões não está configurado, então não há ROAS.\n"
        "- O teto de CPC (CPC máx.) não foi lido nesta versão do script.")

    # arquivos
    destino = RAIZ / "relatorios" / f"analise-ads-{dia}.md"
    destino.parent.mkdir(exist_ok=True)
    destino.write_text("\n".join(L) + "\n", encoding="utf-8")
    trat = pasta / "tratados"
    salvar_csv(trat / "termos_classificados.csv", ["termo", "classe", "impressoes", "cliques", "custo", "conversoes"],
               [[t, cl, v["metrics_impressions"], v["metrics_clicks"], round(v["metrics_cost"], 2), v["metrics_conversions"]] for (t, cl), v in por_termo.items()])
    salvar_csv(trat / "negativas_sugeridas.csv", ["negativa", "tipo", "termos_bloqueados", "impressoes", "cliques", "custo"],
               [[t, tp, k, i, c, round(cu, 2)] for t, tp, k, i, c, cu in sugeridas])
    salvar_csv(trat / "palavras_chave.csv", ["grupo", "palavra_chave", "correspondencia", "status", "iq", "ctr_previsto", "anuncio", "pagina", "impressoes", "cliques", "custo", "conversoes"],
               [[k["grupo"], k["kw"], k["mt"], k["st"], k["qs"], k["ctr_prev"], k["anuncio"], k["lp"], k["i"], k["c"], k["custo"], k["cv"]] for k in kw_rows])
    print(f"Relatório: {destino}\nCSVs tratados: {trat}")


if __name__ == "__main__":
    sys.stdout.reconfigure(encoding="utf-8")
    main()
