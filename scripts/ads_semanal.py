"""Comando único: extrai os dados do Google Ads (somente leitura) e gera o relatório.

Uso: python scripts/ads_semanal.py
Grava o log em dados-ads/ads_semanal.log (útil quando roda pelo Agendador de Tarefas).
"""
import subprocess
import sys
from datetime import datetime
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
LOG = RAIZ / "dados-ads" / "ads_semanal.log"


def rodar(script):
    r = subprocess.run([sys.executable, "-X", "utf8", str(RAIZ / "scripts" / script)],
                       cwd=RAIZ, capture_output=True, text=True, encoding="utf-8")
    return r.returncode, r.stdout + r.stderr


def main():
    LOG.parent.mkdir(exist_ok=True)
    with open(LOG, "a", encoding="utf-8") as log:
        log.write(f"\n=== {datetime.now():%Y-%m-%d %H:%M} ===\n")
        for script in ("ads_report.py", "ads_analise.py"):
            codigo, saida = rodar(script)
            log.write(f"--- {script} (código {codigo}) ---\n{saida}\n")
            print(saida)
            if codigo != 0:
                sys.exit(f"{script} falhou. Veja {LOG}")


if __name__ == "__main__":
    main()
