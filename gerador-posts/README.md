# Motor de posts

Gera PNGs para Instagram/LinkedIn (feed 1080×1350, story 1080×1920, quadrado 1080×1080) a partir de dados, sem editor visual.
Cada marca tem a sua cópia independente deste motor; o que muda entre elas é `marca.json`, `banco/` e `conteudo/`.

## Uso
```bash
python3 gerar.py                       # renderiza conteudo/fila.json inteiro
python3 gerar.py --so exemplo-dica     # renderiza um post
python3 gerar.py outra-fila.json
```
Requer Python 3 com `playwright` (Chromium instalado) e `Pillow`.

## Peças
| Pasta/arquivo | Papel |
|---|---|
| `marca.json` | Cores, fontes, logos e lema da marca. Única fonte dos tokens visuais do motor. |
| `layouts/` | `foto-titulo`, `blog`, `dica`, `passo` (carrossel), `numero`, `mito-verdade` + `base.css`. |
| `banco/` | Banco de imagens: `indice.json` (metadados), `fotos/`, `catalogar.py` (importa pasta), `buscar.py`. |
| `conteudo/fila.json` | Os posts. `layout`, `formatos`, textos, `foto` (id do banco). Carrossel = lista `slides`. |
| `conteudo/PILARES.md` | Temas editoriais da marca e a cadência. |
| `conteudo/BLOG-PARA-POSTS.md` | Como transformar um artigo do blog em posts. |
| `saida/` | PNGs gerados (não versionar). |

## Marcação de texto
`*palavra*` vira destaque (cor de destaque no fundo escuro, marca-texto no fundo claro).

## Regras do banco de imagens
- Imagem nova entra com `usar:false`. Só vira `true` depois de alguém conferir direito de uso e qualidade.
- `licenca`: `propria` (foto da empresa), `stock-livre` (Unsplash/Pexels etc., guardar URL de origem), `ia` (gerada; marcar no post se a plataforma exigir), `desconhecida` (não usar).
- Foto com pessoa identificável exige autorização de imagem; registrar em `origem`.
- Nunca copiar dado real de cliente, documento ou resposta individual para uma arte.

## Publicação
O motor só gera arquivos. Publicar é etapa separada e exige aprovação humana do post.

## Fotos de stock (Pexels)
```bash
python3 banco/baixar_stock.py "termo" --n 8 --orientacao landscape --dry   # só lista
python3 banco/baixar_stock.py "termo" --n 8 --tags a,b                      # baixa com usar:false
```
A chave fica no Chaveiro do macOS (item `pexels-api-key`) ou na variável `PEXELS_API_KEY`; nunca em arquivo do projeto.
Cada foto guarda a URL de origem e o fotógrafo. Regras de uso em `banco/LICENCAS.md`.

## Documentação geral
O documento-mãe (arquitetura das três cópias, fluxo de aprovação no n8n, decisões, segurança e próximos passos) está em `~/Projetos/B&B/Marketing/gerador-posts/DOCUMENTACAO.md`.
O fluxo de aprovação pelo WhatsApp ainda não foi montado para esta marca (previsto para o n8n da Gera-Leads).
