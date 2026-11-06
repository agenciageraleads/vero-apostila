# Do artigo do blog para posts

1. Ler o artigo inteiro. Anotar: tese em uma frase, 3–5 pontos, 1 número com fonte, 1 mito que ele desfaz.
2. Escolher no máximo 3 saídas:
   - `blog` (capa com título e "Leia o artigo completo"): sempre.
   - `dica` ou `passo`: se o artigo tem lista ou sequência.
   - `mito-verdade` ou `numero`: se tem um dado ou uma crença para corrigir.
3. Escrever na voz da marca; não copiar parágrafos do artigo, resumir.
4. Escolher a foto no banco (`python3 banco/buscar.py termo`). Sem foto adequada, registrar a falta em `banco/FALTAM.md`.
5. Acrescentar à `fila.json` com id `AAAA-MM-DD-slug`, rodar `gerar.py --so <id>`, conferir o PNG e o texto.
6. Data e o link do artigo vão para a legenda, não para a arte.
