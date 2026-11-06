"""Busca e baixa fotos do Pexels para o banco. A chave vem da variável de ambiente PEXELS_API_KEY ou, no macOS,
do Chaveiro (item "pexels-api-key"). Nunca de arquivo do projeto.
Uso: python3 banco/baixar_stock.py "termo" [--n 8] [--orientacao portrait|landscape|square]
                                   [--tags a,b,c] [--min-largura 1600] [--dry]
--dry lista os resultados sem baixar nem alterar o índice.
Toda foto entra com usar:false, licenca 'stock-livre' e o crédito do fotógrafo: revise antes de liberar."""
import json, os, pathlib, re, ssl, subprocess, sys, urllib.error, urllib.parse, urllib.request

AQUI = pathlib.Path(__file__).resolve().parent
API = "https://api.pexels.com/v1/search"
UA = "gerador-posts/1.0"

def _contexto_ssl():
    # O Python instalado pelo python.org no macOS não traz certificados; usa certifi ou o pacote do sistema.
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        for c in ("/etc/ssl/cert.pem", "/private/etc/ssl/cert.pem"):
            if os.path.exists(c): return ssl.create_default_context(cafile=c)
    return ssl.create_default_context()
CTX = _contexto_ssl()

def pedir(url, chave):
    req = urllib.request.Request(url, headers={"Authorization": chave, "User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30, context=CTX) as r:
        return json.load(r)

def baixar(url, destino):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60, context=CTX) as r:
        destino.write_bytes(r.read())

def obter_chave():
    chave = os.environ.get("PEXELS_API_KEY")
    if chave: return chave
    try:
        r = subprocess.run(["security", "find-generic-password", "-s", "pexels-api-key", "-a", os.environ.get("USER", ""), "-w"],
                           capture_output=True, text=True, timeout=10)
        return r.stdout.strip() if r.returncode == 0 else None
    except (FileNotFoundError, subprocess.TimeoutExpired):
        return None

def opcao(a, nome, padrao=None):
    return a[a.index(nome) + 1] if nome in a else padrao

def main(argv=None):
    a = list(sys.argv[1:] if argv is None else argv)
    termos = [t for t in a if not t.startswith("--") and t not in (opcao(a, "--n"), opcao(a, "--orientacao"), opcao(a, "--tags"), opcao(a, "--min-largura"))]
    if not termos: raise SystemExit(__doc__)
    chave = obter_chave()
    if not chave:
        raise SystemExit("Sem chave: defina PEXELS_API_KEY no ambiente ou guarde no Chaveiro (item pexels-api-key). Nunca grave a chave em arquivo do projeto.")
    consulta = " ".join(termos); n = int(opcao(a, "--n", 8)); minimo = int(opcao(a, "--min-largura", 1600))
    params = {"query": consulta, "per_page": min(n * 3, 80), "locale": "pt-BR"}
    if opcao(a, "--orientacao"): params["orientation"] = opcao(a, "--orientacao")
    try:
        dados = pedir(f"{API}?{urllib.parse.urlencode(params)}", chave)
    except urllib.error.HTTPError as e:
        raise SystemExit(f"Pexels respondeu {e.code}: " + ("chave inválida ou revogada." if e.code in (401, 403) else "tente de novo mais tarde." if e.code == 429 else "erro na busca."))
    idx_arq = AQUI / "indice.json"
    idx = json.loads(idx_arq.read_text()) if idx_arq.exists() else []
    ja = {it.get("pexels_id") for it in idx}
    extras = [t.strip().lower() for t in (opcao(a, "--tags", "") or "").split(",") if t.strip()]
    novos = 0
    for f in dados.get("photos", []):
        if novos >= n: break
        if f["id"] in ja or f["width"] < minimo: continue
        slug = f"pexels-{f['id']}"
        print(f"{slug:18} {f['width']}x{f['height']}  {f.get('photographer','?'):24} {f.get('alt','')[:60]}")
        if "--dry" in a: novos += 1; continue
        destino = AQUI / "fotos" / f"{slug}.jpg"; destino.parent.mkdir(exist_ok=True)
        baixar(f["src"]["large2x"], destino)
        tags = sorted(set(extras + [t for t in re.split(r"[^a-zà-ú0-9]+", (consulta + " " + f.get("alt", "")).lower()) if len(t) > 2]))
        idx.append({"id": slug, "arquivo": f"fotos/{slug}.jpg", "pexels_id": f["id"], "tags": tags,
                    "orientacao": "vertical" if f["height"] > f["width"] * 1.1 else "horizontal" if f["width"] > f["height"] * 1.1 else "quadrada",
                    "largura": f["width"], "altura": f["height"], "origem": f["url"], "fonte": "pexels",
                    "fotografo": f.get("photographer"), "fotografo_url": f.get("photographer_url"),
                    "licenca": "stock-livre", "consulta": consulta, "usar": False})
        novos += 1
    if "--dry" not in a: idx_arq.write_text(json.dumps(idx, ensure_ascii=False, indent=1))
    print(f"{novos} foto(s) {'encontradas (dry-run)' if '--dry' in a else 'baixadas com usar:false'}. Revise em banco/ e ligue usar:true.")

if __name__ == "__main__":
    main()
