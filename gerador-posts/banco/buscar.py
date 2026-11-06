"""Busca no banco. Uso: python3 banco/buscar.py termo [termo...] [--orientacao vertical|horizontal|quadrada] [--todas]"""
import json, pathlib, sys
a = sys.argv[1:]
ori = a[a.index("--orientacao") + 1] if "--orientacao" in a else None
termos = [t.lower() for t in a if not t.startswith("--") and t != ori]
for it in json.loads((pathlib.Path(__file__).resolve().parent / "indice.json").read_text()):
    if not it.get("usar", True) and "--todas" not in a: continue
    if ori and it.get("orientacao") != ori: continue
    alvo = " ".join(it["tags"] + [it["id"]]).lower()
    if all(t in alvo for t in termos): print(f'{it["id"]:50} {it.get("orientacao","?"):10} {it.get("licenca","?")}')
