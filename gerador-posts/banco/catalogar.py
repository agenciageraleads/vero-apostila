"""Varre uma pasta de imagens e acrescenta ao indice.json o que ainda não está nele.
Uso: python3 banco/catalogar.py <pasta> [--licenca propria|stock-livre|ia|desconhecida] [--copiar]
Entradas novas nascem com usar:false e tags tiradas do nome do arquivo: revise, ajuste e ligue usar:true."""
import json, pathlib, shutil, sys, re, hashlib
from PIL import Image
AQUI = pathlib.Path(__file__).resolve().parent
EXT = {".jpg", ".jpeg", ".png", ".webp"}
def main():
    a = sys.argv[1:]
    if not a: raise SystemExit(__doc__)
    pasta = pathlib.Path(a[0]).expanduser()
    lic = a[a.index("--licenca") + 1] if "--licenca" in a else "desconhecida"
    idx_arq = AQUI / "indice.json"
    idx = json.loads(idx_arq.read_text()) if idx_arq.exists() else []
    hashes = {it.get("sha1") for it in idx}
    novos = 0
    for f in sorted(pasta.rglob("*")):
        if f.suffix.lower() not in EXT: continue
        sha = hashlib.sha1(f.read_bytes()).hexdigest()
        if sha in hashes: continue
        try: w, h = Image.open(f).size
        except Exception: continue
        slug = re.sub(r"[^a-z0-9]+", "-", f.stem.lower()).strip("-")[:60] or sha[:8]
        destino = AQUI / "fotos" / f"{slug}{f.suffix.lower()}"
        if "--copiar" in a:
            destino.parent.mkdir(exist_ok=True); shutil.copy2(f, destino); arq = f"fotos/{destino.name}"
        else: arq = str(f)
        idx.append({"id": slug, "arquivo": arq, "sha1": sha,
                    "tags": [t for t in re.split(r"[^a-zà-ú0-9]+", f.stem.lower()) if len(t) > 2],
                    "orientacao": "vertical" if h > w * 1.1 else "horizontal" if w > h * 1.1 else "quadrada",
                    "largura": w, "altura": h, "origem": str(f), "licenca": lic, "usar": False})
        novos += 1
    idx_arq.write_text(json.dumps(idx, ensure_ascii=False, indent=1))
    print(f"{novos} imagens novas no índice (usar:false até revisão). Total: {len(idx)}")
main()
