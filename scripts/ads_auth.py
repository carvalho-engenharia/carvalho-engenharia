"""Fluxo OAuth local do Google Ads (somente leitura) e geração do google-ads.yaml.

Uso: python scripts/ads_auth.py
Requer: client_secret.json na raiz e GOOGLE_ADS_DEVELOPER_TOKEN no .env.
O navegador abre; clique em Permitir. O refresh token é salvo só no google-ads.yaml (ignorado pelo git).
"""
import json
import sys
from pathlib import Path

from google_auth_oauthlib.flow import InstalledAppFlow

RAIZ = Path(__file__).resolve().parent.parent
SCOPE = ["https://www.googleapis.com/auth/adwords"]
LOGIN_CUSTOMER_ID = "6045044742"


def ler_env():
    env = {}
    arq = RAIZ / ".env"
    if arq.exists():
        for linha in arq.read_text(encoding="utf-8-sig").splitlines():
            if "=" in linha and not linha.lstrip().startswith("#"):
                k, v = linha.split("=", 1)
                env[k.strip()] = v.strip().strip('"').strip("'")
    return env


def main():
    segredo = RAIZ / "client_secret.json"
    if not segredo.exists():
        sys.exit("client_secret.json não encontrado na raiz do projeto.")
    token_dev = ler_env().get("GOOGLE_ADS_DEVELOPER_TOKEN", "")
    if not token_dev:
        sys.exit("Defina GOOGLE_ADS_DEVELOPER_TOKEN no .env antes de continuar.")

    flow = InstalledAppFlow.from_client_secrets_file(str(segredo), SCOPE)
    cred = flow.run_local_server(port=0, prompt="consent", access_type="offline")
    if not cred.refresh_token:
        sys.exit("O Google não devolveu refresh token. Revogue o acesso do app em myaccount.google.com/permissions e rode de novo.")

    info = json.loads(segredo.read_text(encoding="utf-8"))
    info = info.get("installed") or info.get("web")
    yaml = (
        f'developer_token: "{token_dev}"\n'
        f'client_id: "{info["client_id"]}"\n'
        f'client_secret: "{info["client_secret"]}"\n'
        f'refresh_token: "{cred.refresh_token}"\n'
        f'login_customer_id: "{LOGIN_CUSTOMER_ID}"\n'
        "use_proto_plus: True\n"
    )
    (RAIZ / "google-ads.yaml").write_text(yaml, encoding="utf-8")
    print("google-ads.yaml criado. Teste com: python scripts/ads_report.py --testar")


if __name__ == "__main__":
    main()
