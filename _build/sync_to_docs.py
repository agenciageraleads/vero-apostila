#!/usr/bin/env python3
"""
Vero Apostila — Script de Sincronização
Sincroniza apostila/ → docs/ e gera índices de navegação
"""

import os
import shutil
from pathlib import Path
from typing import Dict, List

# Configurações
APOSTILA_DIR = Path(__file__).parent.parent / "apostila"
DOCS_DIR = Path(__file__).parent.parent / "docs"
CSS_URL = "/vero-apostila/assets/css/estilo.css"

PILARES = ["financeiro", "operacao", "vendas", "pessoas"]
FASES = ["raiz", "trilha", "gestao", "legado"]
NUM_BLOCOS = 22

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 1. COPIAR BLOCOS E INJETAR CSS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def ensure_css_link(html_content: str) -> str:
    """Garante que o link do CSS está no <head> do HTML."""
    if CSS_URL in html_content:
        return html_content

    # Injetar link antes de </head>
    if "</head>" in html_content:
        link = f'<link rel="stylesheet" href="{CSS_URL}">\n  </head>'
        html_content = html_content.replace("</head>", link, 1)
    else:
        # Se não houver </head>, adicionar no topo
        link = f'<link rel="stylesheet" href="{CSS_URL}">\n'
        html_content = link + html_content

    return html_content


def sync_blocos():
    """Sincroniza blocos de apostila/ para docs/."""
    synced = 0

    for pilar in PILARES:
        pilar_src = APOSTILA_DIR / pilar
        pilar_dst = DOCS_DIR / pilar

        if not pilar_src.exists():
            continue

        for fase in FASES:
            fase_src = pilar_src / fase
            fase_dst = pilar_dst / fase

            if not fase_src.exists():
                continue

            for bloco_num in range(1, NUM_BLOCOS + 1):
                bloco_dir = f"bloco-{bloco_num:02d}"
                bloco_src = fase_src / bloco_dir
                bloco_dst = fase_dst / bloco_dir

                if not bloco_src.exists():
                    continue

                # Criar diretório destino
                bloco_dst.mkdir(parents=True, exist_ok=True)

                # Copiar e injetar CSS em p1.html e p2.html
                for page in ["p1.html", "p2.html"]:
                    src_file = bloco_src / page
                    dst_file = bloco_dst / page

                    if src_file.exists():
                        with open(src_file, "r", encoding="utf-8") as f:
                            content = f.read()

                        content = ensure_css_link(content)

                        with open(dst_file, "w", encoding="utf-8") as f:
                            f.write(content)

                        synced += 1

                # Copiar p1.md e p2.md (sem modificação)
                for page in ["p1.md", "p2.md"]:
                    src_file = bloco_src / page
                    dst_file = bloco_dst / page

                    if src_file.exists():
                        shutil.copy2(src_file, dst_file)

    print(f"✓ {synced} arquivos sincronizados (blocos HTML + CSS injected)")
    return synced > 0


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 2. CONTAR BLOCOS COMPLETADOS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def contar_blocos() -> Dict[str, int]:
    """Conta quantos blocos foram completados por pilar."""
    contagem = {}

    for pilar in PILARES:
        pilar_dir = DOCS_DIR / pilar
        total = 0

        if pilar_dir.exists():
            for bloco_dir in pilar_dir.rglob("bloco-*"):
                if (bloco_dir / "p1.html").exists() and (bloco_dir / "p2.html").exists():
                    total += 1

        contagem[pilar] = total

    return contagem


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# 3. GERAR ÍNDICES HTML
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


def gerar_homepage(contagem: Dict[str, int]) -> str:
    """Gera index.html da homepage."""

    pilares_html = ""
    for pilar in PILARES:
        total = contagem.get(pilar, 0)
        status = "✅" if total >= 22 else "⬜"
        progress = f"{total}/22"

        pilares_html += f"""
    <div class="pilar-card">
      <h3>{pilar.capitalize()}</h3>
      <p class="status">{status} {progress} blocos</p>
      <a href="/{pilar}/" class="btn-pilar">Ver Pilar</a>
    </div>
"""

    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vero — Apostila de Formação</title>
    <link rel="stylesheet" href="/assets/css/estilo.css">
    <style>
        body {{
            padding: 3rem 1rem;
            max-width: 1200px;
            margin: 0 auto;
        }}
        h1 {{
            text-align: center;
            color: var(--ink);
            margin-bottom: 1rem;
            font-family: 'Playfair Display', serif;
        }}
        .subtitle {{
            text-align: center;
            color: var(--ink-light);
            margin-bottom: 3rem;
            font-size: 1.1rem;
        }}
        .pilares {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }}
        .pilar-card {{
            background: var(--surface);
            border: 1px solid var(--border);
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
        }}
        .pilar-card:hover {{
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }}
        .pilar-card h3 {{
            font-family: 'Playfair Display', serif;
            color: var(--ink);
            margin-bottom: 0.5rem;
        }}
        .pilar-card .status {{
            color: var(--ink-light);
            margin-bottom: 1.5rem;
            font-size: 0.95rem;
        }}
        .btn-pilar {{
            display: inline-block;
            background: var(--ink);
            color: var(--white);
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 500;
            transition: background 0.3s;
        }}
        .btn-pilar:hover {{
            background: var(--gold);
            color: var(--ink);
        }}
        .footer {{
            margin-top: 4rem;
            padding-top: 2rem;
            border-top: 1px solid var(--border);
            text-align: center;
            color: var(--ink-light);
            font-size: 0.9rem;
        }}
    </style>
</head>
<body>
    <h1>Vero — Escola de Empresários</h1>
    <p class="subtitle">Apostila de Formação, Validação e Certificação</p>

    <div class="pilares">
{pilares_html}
    </div>

    <div class="footer">
        <p>Formação sem critério gera ilusão. Execução sustentada comprova status.</p>
        <p style="margin-top: 1rem; font-size: 0.85rem;">Gerado automaticamente. Última atualização: <span id="timestamp"></span></p>
    </div>

    <script>
        document.getElementById('timestamp').textContent = new Date().toLocaleString('pt-BR');
    </script>
</body>
</html>
"""

    return html


def gerar_pilar_index(pilar: str) -> str:
    """Gera index.html para cada pilar."""

    fases_html = ""
    for fase in FASES:
        fases_html += f"""
    <div class="fase-section">
        <h3>{fase.capitalize()}</h3>
        <ul class="bloco-list">
"""

        for bloco_num in range(1, NUM_BLOCOS + 1):
            bloco_dir = f"bloco-{bloco_num:02d}"
            bloco_path = DOCS_DIR / pilar / fase / bloco_dir

            if (bloco_path / "p1.html").exists():
                bloco_link = f"/{pilar}/{fase}/{bloco_dir}/"
                fases_html += f'            <li><a href="{bloco_link}">Bloco {bloco_num:02d}</a></li>\n'

        fases_html += """        </ul>
    </div>
"""

    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{pilar.capitalize()} — Vero Apostila</title>
    <link rel="stylesheet" href="/assets/css/estilo.css">
    <style>
        body {{
            padding: 2rem 1rem;
            max-width: 900px;
            margin: 0 auto;
        }}
        h1 {{
            font-family: 'Playfair Display', serif;
            color: var(--ink);
            margin-bottom: 2rem;
        }}
        .breadcrumb {{
            color: var(--ink-light);
            margin-bottom: 2rem;
            font-size: 0.95rem;
        }}
        .breadcrumb a {{
            color: var(--ink);
            text-decoration: none;
        }}
        .breadcrumb a:hover {{
            color: var(--gold);
        }}
        .fases {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }}
        .fase-section {{
            background: var(--surface);
            border: 1px solid var(--border);
            padding: 1.5rem;
            border-radius: 8px;
        }}
        .fase-section h3 {{
            color: var(--ink);
            border-bottom: 2px solid var(--gold);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }}
        .bloco-list {{
            list-style: none;
            padding: 0;
        }}
        .bloco-list li {{
            margin-bottom: 0.5rem;
        }}
        .bloco-list a {{
            color: var(--ink);
            text-decoration: none;
            padding: 0.5rem;
            display: block;
            border-left: 3px solid transparent;
            transition: all 0.3s;
        }}
        .bloco-list a:hover {{
            border-left-color: var(--gold);
            padding-left: 1rem;
            color: var(--gold);
        }}
    </style>
</head>
<body>
    <div class="breadcrumb">
        <a href="/">← Voltar para Home</a>
    </div>

    <h1>{pilar.capitalize()}</h1>

    <div class="fases">
{fases_html}
    </div>
</body>
</html>
"""

    return html


def gerar_bloco_index(pilar: str, fase: str, bloco_num: int) -> str:
    """Gera index.html para cada bloco (wrapper para P1 e P2)."""

    bloco_dir = f"bloco-{bloco_num:02d}"

    html = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{bloco_dir} — {pilar.capitalize()}</title>
    <link rel="stylesheet" href="/assets/css/estilo.css">
    <style>
        body {{
            padding: 2rem 1rem;
            max-width: 900px;
            margin: 0 auto;
        }}
        .breadcrumb {{
            color: var(--ink-light);
            margin-bottom: 2rem;
            font-size: 0.95rem;
        }}
        .breadcrumb a {{
            color: var(--ink);
            text-decoration: none;
            margin: 0 0.5rem;
        }}
        .breadcrumb a:hover {{
            color: var(--gold);
        }}
        .bloco-nav {{
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
        }}
        .page-btn {{
            padding: 0.75rem 1.5rem;
            background: var(--ink);
            color: var(--white);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            font-weight: 500;
            transition: background 0.3s;
        }}
        .page-btn:hover {{
            background: var(--gold);
            color: var(--ink);
        }}
        .page-btn.active {{
            background: var(--gold);
            color: var(--ink);
        }}
    </style>
</head>
<body>
    <div class="breadcrumb">
        <a href="/">Home</a> /
        <a href="/{pilar}/">{pilar.capitalize()}</a> /
        <a href="/{pilar}/{fase}/">{fase.capitalize()}</a> /
        <span>{bloco_dir}</span>
    </div>

    <div class="bloco-nav">
        <a href="./p1.html" class="page-btn">Página 1 — Narrativa</a>
        <a href="./p2.html" class="page-btn">Página 2 — Canvas</a>
    </div>
</body>
</html>
"""

    return html


def gerar_todos_indices():
    """Gera todos os índices (homepage, pilares, blocos)."""

    # Homepage
    contagem = contar_blocos()
    homepage = gerar_homepage(contagem)
    with open(DOCS_DIR / "index.html", "w", encoding="utf-8") as f:
        f.write(homepage)
    print(f"✓ Gerado: /docs/index.html")

    # Pilares
    for pilar in PILARES:
        pilar_index = gerar_pilar_index(pilar)
        pilar_dir = DOCS_DIR / pilar
        pilar_dir.mkdir(parents=True, exist_ok=True)
        with open(pilar_dir / "index.html", "w", encoding="utf-8") as f:
            f.write(pilar_index)
        print(f"✓ Gerado: /docs/{pilar}/index.html")

        # Blocos
        for fase in FASES:
            fase_dir = pilar_dir / fase
            fase_dir.mkdir(parents=True, exist_ok=True)

            for bloco_num in range(1, NUM_BLOCOS + 1):
                bloco_dir = f"bloco-{bloco_num:02d}"
                bloco_path = pilar_dir / fase / bloco_dir

                if (bloco_path / "p1.html").exists():
                    bloco_index = gerar_bloco_index(pilar, fase, bloco_num)
                    with open(bloco_path / "index.html", "w", encoding="utf-8") as f:
                        f.write(bloco_index)


# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# MAIN
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


if __name__ == "__main__":
    print("🔄 Sincronizando apostila/ → docs/...")
    sync_blocos()

    print("\n📄 Gerando índices...")
    gerar_todos_indices()

    print("\n✅ Sincronização completa!")
    contagem = contar_blocos()
    for pilar, total in contagem.items():
        print(f"  {pilar.capitalize()}: {total}/22 blocos")
