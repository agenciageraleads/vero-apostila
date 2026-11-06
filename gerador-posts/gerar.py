"""Motor de posts. Uso: python3 gerar.py [fila.json] [--so ID]
Lê marca.json + layouts/ + banco/indice.json e grava PNGs em saida/."""
import json, re, html, sys, pathlib
from playwright.sync_api import sync_playwright

RAIZ = pathlib.Path(__file__).resolve().parent
TAMANHOS = {"feed": (1080, 1350), "story": (1080, 1920), "quadrado": (1080, 1080)}
# layout -> (tom, usa_foto, padrões)
LAYOUTS = {
    "foto-titulo": ("escuro", True,  {}),
    "blog":        ("escuro", True,  {"_base": "foto-titulo", "chip": "No blog", "cta": "Leia o artigo completo"}),
    "dica":        ("claro",  False, {"chip": "Dica"}),
    "passo":       ("claro",  False, {}),
    "numero":      ("escuro", False, {}),
    "mito-verdade":("claro",  False, {}),
}

def marca():
    return json.loads((RAIZ / "marca.json").read_text())

def esc(t):  # escapa e transforma *destaque* em <em>
    return re.sub(r"\*(.+?)\*", r"<em>\1</em>", html.escape(str(t), quote=False))

def uri(p):
    p = pathlib.Path(p)
    return (p if p.is_absolute() else RAIZ / p).resolve().as_uri()

def foto_de(ref):
    if not ref: return None
    idx = RAIZ / "banco" / "indice.json"
    if idx.exists():
        for it in json.loads(idx.read_text()):
            if it["id"] == ref:
                if not it.get("usar", True):
                    raise SystemExit(f"foto '{ref}' marcada como usar:false no banco")
                return uri(RAIZ / "banco" / it["arquivo"])
    return uri(ref)

def css(m):
    c, t = m["cores"], m["tipos"]
    faces = "".join(
        f"@font-face{{font-family:'{f['familia']}';font-weight:{f['peso']};src:url({uri(f['arquivo'])})}}"
        for f in m["fontes"])
    return faces + ":root{" + ";".join([
        f"--escuro:{c['escuro']}", f"--claro:{c['claro']}", f"--acento:{c['acento']}",
        f"--acento-texto:{c['acento_texto']}", f"--destaque:{c.get('destaque', c['acento'])}",
        f"--mudo:{c['mudo']}", f"--linha:{c['linha']}", f"--tinta:{c.get('tinta', c['escuro'])}",
        f"--veu-meio:{c['escuro']}d1", f"--veu-fim:{c['escuro']}f7",
        f"--fonte-titulo:'{t['titulo']}'", f"--fonte-texto:'{t['texto']}'",
        f"--peso-forte:{t.get('peso_titulo', 700)}"]) + "}"

def rodape(m, p):
    return f'<div class="rodape"><span class="lema">{esc(p.get("lema", m.get("lema","")))}</span><span class="cta">{esc(p.get("cta",""))}</span></div>' if p.get("cta") or m.get("lema") or p.get("lema") else ""

def montar(m, p, fmt, n=1, total=1):
    nome = p["layout"]
    tom, usa_foto, padrao = LAYOUTS[nome]
    p = {**padrao, **p}
    base = padrao.get("_base", nome)
    frag = (RAIZ / "layouts" / f"{base}.html").read_text()
    logo = m["logos"]["escuro" if tom == "escuro" else "claro"]
    itens = "".join(f"<li><b>{i}</b><span>{esc(t)}</span></li>" for i, t in enumerate(p.get("itens", []), 1))
    prog = "".join(f'<i class="{"on" if i <= n else ""}"></i>' for i in range(1, total + 1))
    campos = {"FOTO": foto_de(p.get("foto")) or "", "LOGO": uri(logo), "CHIP": esc(p.get("chip", "")),
              "TITULO": esc(p.get("titulo", "")), "APOIO": esc(p.get("apoio", "")), "ITENS": itens,
              "NUMERO": f'<span style="font-size:{min(340, int(900 / max(len(str(p.get("numero",""))) * 0.62, 1)))}px">{esc(p.get("numero", ""))}</span>', "N": n, "TOTAL": total, "PROGRESSO": prog,
              "MITO": esc(p.get("mito", "")), "VERDADE": esc(p.get("verdade", "")),
              "ROTULO_MITO": esc(p.get("rotulo_mito", "Mito")), "ROTULO_VERDADE": esc(p.get("rotulo_verdade", "Verdade")),
              "RODAPE": rodape(m, p)}
    if usa_foto and not campos["FOTO"]:
        raise SystemExit(f"post '{p.get('id')}': layout {nome} precisa de 'foto'")
    for k, v in campos.items(): frag = frag.replace("{{%s}}" % k, str(v))
    return (f'<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>{css(m)}'
            f'{(RAIZ/"layouts"/"base.css").read_text()}</style></head>'
            f'<body class="{fmt} tom-{tom}">{frag}</body></html>')

def main():
    args = sys.argv[1:]
    so = args[args.index("--so") + 1] if "--so" in args else None
    arq = next((a for a in args if a.endswith(".json")), "conteudo/fila.json")
    m, fila = marca(), json.loads((RAIZ / arq).read_text())
    (RAIZ / "saida").mkdir(exist_ok=True)
    tmp = RAIZ / "_tmp.html"
    with sync_playwright() as pw:
        nav = pw.chromium.launch()
        for post in fila:
            if so and post["id"] != so: continue
            slides = post.get("slides") or [post]
            for fmt in post.get("formatos", ["feed"]):
                w, h = TAMANHOS[fmt]
                for i, s in enumerate(slides, 1):
                    dados = {**{k: v for k, v in post.items() if k != "slides"}, **s}
                    tmp.write_text(montar(m, dados, fmt, i, len(slides)))
                    pg = nav.new_page(viewport={"width": w, "height": h})
                    pg.goto(tmp.as_uri()); pg.wait_for_load_state("networkidle"); pg.evaluate("document.fonts.ready")
                    suf = f"-{i:02d}" if len(slides) > 1 else ""
                    out = RAIZ / "saida" / f"{post['id']}{suf}-{fmt}.png"
                    pg.screenshot(path=str(out)); pg.close(); print(out.name)
        nav.close()
    tmp.unlink(missing_ok=True)

if __name__ == "__main__":
    main()
