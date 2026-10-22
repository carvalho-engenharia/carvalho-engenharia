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
# A conta 655-393-4709 é acessada direto pelo login (não é filha da MCC 604-504-4742),
# então login_customer_id fica fora do yaml.
# Se a conta passar a ficar sob a MCC, coloque o ID da MCC aqui.
LOGIN_CUSTOMER_ID = ""


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
    candidatos = sorted(RAIZ.glob("client_secret*.json"))
    if not candidatos:
        sys.exit("client_secret*.json não encontrado na raiz do projeto.")
    segredo = candidatos[0]
    # Developer token é opcional: o acesso vem do nível do projeto no Google Cloud.
    token_dev = ler_env().get("GOOGLE_ADS_DEVELOPER_TOKEN", "")

    flow = InstalledAppFlow.from_client_secrets_file(str(segredo), SCOPE)
    cred = flow.run_local_server(port=0, prompt="consent", access_type="offline")
    if not cred.refresh_token:
        sys.exit("O Google não devolveu refresh token. Revogue o acesso do app em myaccount.google.com/permissions e rode de novo.")

    info = json.loads(segredo.read_text(encoding="utf-8"))
    info = info.get("installed") or info.get("web")
    yaml = (
        (f'developer_token: "{token_dev}"\n' if token_dev else "")
        + f'client_id: "{info["client_id"]}"\n'
        f'client_secret: "{info["client_secret"]}"\n'
        f'refresh_token: "{cred.refresh_token}"\n'
        f'login_customer_id: "{LOGIN_CUSTOMER_ID}"\n'
        "use_proto_plus: True\n"
    )
    (RAIZ / "google-ads.yaml").write_text(yaml, encoding="utf-8")
    print("google-ads.yaml criado. Teste com: python scripts/ads_report.py --testar")


if __name__ == "__main__":
    main()
