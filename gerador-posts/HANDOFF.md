# HANDOFF — motor de posts da Vero (14/10/2026)

Nada foi publicado, enviado ou commitado. Tudo está em `gerador-posts/`.

## Feito
- **Marca** (`marca.json`): paleta do `_contexto/identidade-visual-vero.md` (creme #F5F1E6 como fundo claro e texto sobre escuro, tinta #052B5A, dourado #DEBB5F só como bloco/borda/marca-texto, escuro #192C4C). Tipografia: a tabela do documento define Playfair Display + DM Sans para web/peças fixas (Georgia/Arial só no deck), então **não usei Fraunces/Inter** do `vero.json`. Fontes variáveis (OFL) copiadas de `~/.claude/skills/video-marcas/fontes`. Logos HD navy/gold em `assets/`. Lema = assinatura-mestra "Vero. Uma escola para empresários de verdade." (D-009). Nada da B&B sobrou (grep limpo).
- **Núcleo, mudanças mínimas** (relatar às cópias B&B/VTC):
  - `gerar.py`: emite `--tinta` (cor de texto no tom claro; cai para `escuro` se `cores.tinta` não existir, compatível com as outras marcas).
  - `layouts/base.css`: `.tom-claro` usa `--tinta` (texto e CTA); logo 118px (era 230, o "V" quadrado ficava gigante); `lining-nums` (Playfair usa números old-style: "1" parecia "I"); destaque no tom claro virou marca-texto no terço inferior da linha (o bloco cheio de uma linha cobria a descida da linha de cima quando o título quebrava); `.rodape .lema` 24px/500 (lema longo quebrava em 2 linhas).
  - `fontes[].peso` aceita faixa ("400 900") para fontes variáveis, sem mudar código.
- **Banco**: 24 entradas, **todas `usar:false`**: 23 fotos de celular (`_artefatos/IMG_7559–7581`) de **apostila impressa de outro curso** (marca/texto de terceiro, um manuscrito de pessoa não identificada) e 1 contact sheet de teste de vídeo (720px). Mais 1 textura marinho gerada por mim em código (`textura-marinho-linhas`, `propria`, `usar:true`, não é foto). O projeto não tem nenhuma foto utilizável. `banco/FALTAM.md` lista o que produzir/buscar.
- **Pilares** (`conteudo/PILARES.md`) com a fonte de cada decisão, regras de redação e banco de pautas.
- **Fila** (`conteudo/fila.json`): 7 posts (1 carrossel `passo` de 4 slides, 2 `dica`, 1 `mito-verdade`, 1 `numero`, 1 `blog`, 1 `foto-titulo`), com `legenda` e `fonte`. Institucional: 1 de 7. Datas 19–27/10 são só sugestão de ordem.
- **Exemplos** reescritos para Vero em `conteudo/exemplos.json` (`python3 gerar.py conteudo/exemplos.json`).

## Validado (a olho)
Abri os PNGs: os 4 slides do carrossel, mito-verdade, dica (2), numero (fila e exemplo), blog feed, foto-titulo story e exemplo-mito. Texto sem corte, contraste ok: dourado sempre com texto marinho por cima no claro; dourado como texto só sobre #192C4C (alto contraste). Mesmo `gerar.py` renderizou 22 PNGs sem erro. Não abri um a um: `*-story` do blog, `exemplo-dica/passos/blog/institucional`, slide 02 do carrossel, `imprevisto` story (não existe) — mesmo layout dos conferidos.

## NÃO validado
- Nada passou por aprovação humana; nada foi publicado.
- Os textos seguem `vocabulario.md` (sem "crescer", "solução", "sucesso", "Canvas"), mas **Vera/Paulo/Ana não revisaram**.
- Contraste medido só a olho, sem ferramenta.

## Bugs/observações do núcleo (valem para B&B e VTC)
1. Fontes variáveis exigem `peso` em faixa; com valor único a Chrome pode sintetizar.
2. `foto-titulo`/`blog` sem foto real ficam com o terço superior vazio (só textura). O véu é preto, o que escurece o topo; para marca navy melhor véu na cor `escuro` (ainda não mudei).
3. `blog` traz chip "No blog" e CTA "Leia o artigo completo" fixos no `LAYOUTS`; usei override por post (`chip`, `cta`).
4. `catalogar.py` sem `--copiar` grava caminho relativo `../_artefatos/...`; funciona, mas quebra se a pasta do motor mudar. Também cataloga logos/contact sheets que não são foto.

## Pendências e perguntas ao Lucas
1. **Fotos**: produzir/escolher as de `banco/FALTAM.md` (retrato Lucas/Ernane, apostila Vero física, bastidor). Sem elas, `foto-titulo` fica sobre textura.
2. **Link da Análise de Maturidade** e onde os blocos serão publicados: as legendas dizem "link a confirmar"; o CTA dos PNGs é "Análise de Maturidade".
3. **Cadência** de redes (PILARES usa a do modelo): confirmar.
4. **Número externo com fonte** (Sebrae/IBGE etc.): o projeto não traz nenhum, não inventei. O `numero` da fila (8 itens fora do lucro) é da apostila (Financeiro Raiz 03).
5. Os blocos da apostila usam personagens com nome e valores (R$): não usei; confirmar se são fictícios/compostos antes de citar algum.
6. **Prova de execução com número real** depende do caso do Ernane (pendência #9 do PLANO da Imersão).
7. `docs/README.md` ainda diz "escola que comprova status através da execução" e "352 blocos": defasado frente a D-009/STATUS (fora desta pasta, não mexi).
8. Creme #F5F1E6 como "claro" (não branco puro): ok, ou prefere #FFFFFF no fundo?
9. `pendente` do `vero.json`: tipografia resolvida (Playfair/DM Sans), contraste do dourado resolvido, frase antiga não usada. Falta só tagline alternativa, se quiser lema mais curto no rodapé.
