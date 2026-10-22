"""Extrai dados do Google Ads (SOMENTE LEITURA via GAQL) para ./dados-ads/AAAA-MM-DD/*.csv.

Uso:
  python scripts/ads_report.py --testar     # lista campanhas e sai
  python scripts/ads_report.py              # extrai 30 e 7 dias
"""
import csv
import sys
from datetime import date, timedelta
from pathlib import Path

from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

RAIZ = Path(__file__).resolve().parent.parent
CUSTOMER_ID = "6553934709"

METRICAS = (
    "metrics.impressions, metrics.clicks, metrics.ctr, metrics.average_cpc, "
    "metrics.cost_micros, metrics.conversions, metrics.cost_per_conversion"
)

# Consultas com período: {ini}/{fim} são preenchidos; arquivo -> GAQL
CONSULTAS_PERIODO = {
    "campanhas": f"""
        SELECT campaign.id, campaign.name, campaign.status, campaign.bidding_strategy_type,
               campaign_budget.amount_micros, {METRICAS},
               metrics.search_impression_share, metrics.search_budget_lost_impression_share,
               metrics.search_rank_lost_impression_share
        FROM campaign
        WHERE segments.date BETWEEN '{{ini}}' AND '{{fim}}' AND campaign.status != 'REMOVED'""",
    "termos_pesquisa": f"""
        SELECT campaign.name, ad_group.name, search_term_view.search_term,
               search_term_view.status, segments.search_term_match_type, {METRICAS}
        FROM search_term_view
        WHERE segments.date BETWEEN '{{ini}}' AND '{{fim}}'""",
    "palavras_chave": f"""
        SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text,
               ad_group_criterion.keyword.match_type, ad_group_criterion.status,
               ad_group_criterion.quality_info.quality_score,
               ad_group_criterion.quality_info.search_predicted_ctr,
               ad_group_criterion.quality_info.creative_quality_score,
               ad_group_criterion.quality_info.post_click_quality_score, {METRICAS}
        FROM keyword_view
        WHERE segments.date BETWEEN '{{ini}}' AND '{{fim}}' AND ad_group_criterion.negative = FALSE""",
    "anuncios": f"""
        SELECT campaign.name, ad_group.name, ad_group_ad.ad.id, ad_group_ad.ad.type,
               ad_group_ad.status, ad_group_ad.ad_strength, {METRICAS}
        FROM ad_group_ad
        WHERE segments.date BETWEEN '{{ini}}' AND '{{fim}}' AND ad_group_ad.status != 'REMOVED'""",
    "recursos_anuncio": """
        SELECT campaign.name, ad_group.name, ad_group_ad.ad.id,
               ad_group_ad_asset_view.field_type, ad_group_ad_asset_view.performance_label,
               asset.text_asset.text, metrics.impressions, metrics.clicks, metrics.ctr
        FROM ad_group_ad_asset_view
        WHERE segments.date BETWEEN '{ini}' AND '{fim}'""",
    "dia_semana": f"""
        SELECT campaign.name, segments.day_of_week, {METRICAS}
        FROM campaign WHERE segments.date BETWEEN '{{ini}}' AND '{{fim}}' AND campaign.status != 'REMOVED'""",
    "hora": f"""
        SELECT campaign.name, segments.hour, {METRICAS}
        FROM campaign WHERE segments.date BETWEEN '{{ini}}' AND '{{fim}}' AND campaign.status != 'REMOVED'""",
    "dispositivo": f"""
        SELECT campaign.name, segments.device, {METRICAS}
        FROM campaign WHERE segments.date BETWEEN '{{ini}}' AND '{{fim}}' AND campaign.status != 'REMOVED'""",
    "acoes_conversao_desempenho": """
        SELECT campaign.name, segments.conversion_action_name, metrics.conversions, metrics.all_conversions
        FROM campaign
        WHERE segments.date BETWEEN '{ini}' AND '{fim}' AND campaign.status != 'REMOVED'""",
}

# Consultas sem período (configuração atual)
CONSULTAS_FIXAS = {
    "acoes_conversao": """
        SELECT conversion_action.id, conversion_action.name, conversion_action.status,
               conversion_action.type, conversion_action.category, conversion_action.origin,
               conversion_action.primary_for_goal, conversion_action.counting_type
        FROM conversion_action WHERE conversion_action.status != 'REMOVED'""",
    "negativas_campanha": """
        SELECT campaign.name, campaign_criterion.keyword.text, campaign_criterion.keyword.match_type
        FROM campaign_criterion
        WHERE campaign_criterion.negative = TRUE AND campaign_criterion.type = 'KEYWORD'""",
    "negativas_grupo": """
        SELECT campaign.name, ad_group.name, ad_group_criterion.keyword.text,
               ad_group_criterion.keyword.match_type
        FROM ad_group_criterion
        WHERE ad_group_criterion.negative = TRUE AND ad_group_criterion.type = 'KEYWORD'""",
    "listas_negativas": """
        SELECT shared_set.id, shared_set.name, shared_set.status, shared_set.member_count
        FROM shared_set WHERE shared_set.type = 'NEGATIVE_KEYWORDS' AND shared_set.status != 'REMOVED'""",
    "listas_negativas_itens": """
        SELECT shared_set.name, shared_criterion.keyword.text, shared_criterion.keyword.match_type
        FROM shared_criterion WHERE shared_set.type = 'NEGATIVE_KEYWORDS'""",
    "listas_negativas_campanhas": """
        SELECT campaign.name, shared_set.name FROM campaign_shared_set
        WHERE shared_set.type = 'NEGATIVE_KEYWORDS' AND campaign_shared_set.status = 'ENABLED'""",
}


def valor(obj, caminho):
    for parte in caminho.split("."):
        obj = getattr(obj, parte)
    if hasattr(obj, "name") and not isinstance(obj, str) and hasattr(obj, "value"):
        return obj.name  # enum
    return obj


def coluna(caminho):
    return caminho.split(".", 1)[-1].replace(".", "_") if caminho.count(".") else caminho


def campos_da_consulta(gaql):
    sel = gaql.split("SELECT", 1)[1].split("FROM", 1)[0]
    return [c.strip() for c in sel.replace("\n", " ").split(",") if c.strip()]


def executar(client, gaql, destino):
    campos = campos_da_consulta(gaql)
    servico = client.get_service("GoogleAdsService")
    linhas = []
    for r in servico.search(customer_id=CUSTOMER_ID, query=gaql):
        linha = {}
        for c in campos:
            try:
                v = valor(r, c)
            except AttributeError:
                v = ""
            nome = c.replace(".", "_")
            if c.endswith("_micros"):
                nome, v = nome.replace("_micros", ""), round(v / 1e6, 2)
            linha[nome] = v
        linhas.append(linha)
    cab = list(linhas[0].keys()) if linhas else [
        c.replace(".", "_").replace("_micros", "") for c in campos]
    with open(destino, "w", newline="", encoding="utf-8-sig") as f:
        w = csv.DictWriter(f, fieldnames=cab)
        w.writeheader()
        w.writerows(linhas)
    return len(linhas)


def main():
    cfg = RAIZ / "google-ads.yaml"
    if not cfg.exists():
        sys.exit("google-ads.yaml não existe. Rode: python scripts/ads_auth.py")
    client = GoogleAdsClient.load_from_storage(str(cfg))

    if "--testar" in sys.argv:
        gaql = "SELECT campaign.name, campaign.status FROM campaign WHERE campaign.status != 'REMOVED'"
        try:
            for r in client.get_service("GoogleAdsService").search(customer_id=CUSTOMER_ID, query=gaql):
                print(f"{r.campaign.status.name:8} {r.campaign.name}")
        except GoogleAdsException as e:
            for err in e.failure.errors:
                print("ERRO:", err.error_code, "-", err.message)
            sys.exit(1)
        return

    hoje = date.today()
    fim = (hoje - timedelta(days=1)).isoformat()  # ontem (dia completo)
    pasta = RAIZ / "dados-ads" / hoje.isoformat()
    pasta.mkdir(parents=True, exist_ok=True)

    tarefas = []
    for dias in (30, 7):
        ini = (hoje - timedelta(days=dias)).isoformat()
        for nome, q in CONSULTAS_PERIODO.items():
            tarefas.append((f"{nome}_{dias}d", q.format(ini=ini, fim=fim)))
    tarefas += list(CONSULTAS_FIXAS.items())

    for nome, gaql in tarefas:
        try:
            n = executar(client, gaql, pasta / f"{nome}.csv")
            print(f"ok   {nome}: {n} linhas")
        except GoogleAdsException as e:
            msg = "; ".join(f"{x.error_code}: {x.message}" for x in e.failure.errors)
            print(f"FALHA {nome}: {msg}")
    print(f"\nDados salvos em {pasta}")


if __name__ == "__main__":
    main()
