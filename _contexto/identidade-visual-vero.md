# Identidade Visual Vero

> Fonte de verdade para QUALQUER peça visual da Vero (apresentações, A4, site, social).
> **Paleta oficial extraída das logos da marca** (pixels amostrados em `_contexto/logos/`).
> Substitui a paleta antiga ouro+preto que vinha dos artefatos da Sofia.

---

## Princípio

> "Design não decora. Amplifica o que o texto já faz." — Sofia

Marca **adulta, sóbria, premium**. Azul-marinho + dourado + creme. Nada de cores de "startup", ícones fofos ou gradiente alegre. Vero parece **escola séria + autoridade**.

---

## Paleta oficial (das logos)

```css
--navy:       #052B5A;   /* PRIMÁRIA — cor de comando: títulos, texto, tiles */
--navy-deep:  #192C4C;   /* marinho escuro — painéis, rodapé, slide de capa */
--gold:       #DEBB5F;   /* ACENTO — bordas, destaques, o "V", divisórias */
--cream:      #F2E4B6;   /* texto/realce sobre o marinho */

/* apoio para tema claro */
--white:      #FFFFFF;   /* fundo principal (projetor) */
--panel:      #F5F1E6;   /* cartão claro quente */
--panel-cool: #F2F4F7;   /* cartão claro frio (alternativo) */
--body:       #3D4658;   /* corpo de texto (slate-navy) */
--mute:       #8A91A0;   /* legendas/labels discretos */
--line:       #E3DECF;   /* bordas */

/* semânticos (ajustados para fundo claro) */
--red:        #C0392B;   /* risco / "atrapalha" */
--red-bg:     #FBEDEA;
--green:      #2E7D46;   /* oportunidade / "ajuda" */
--green-bg:   #EAF3EC;
--gold-dk:    #B08D2E;   /* dourado escuro p/ rótulos legíveis sobre branco */
```

**Regra do dourado:** é acento — borda, bloco de preenchimento, o "V". **Dourado como texto pequeno sobre branco tem contraste baixo** → para rótulos sobre branco usar `--navy` ou `--gold-dk`. Texto-comando é sempre marinho.

---

## Tema padrão: CLARO (projetor-safe)

Decisão (09/06): apresentações ao vivo usam **fundo branco** — projetor "lava" fundo escuro (preto vira cinza, dourado perde brilho).

- Fundo: `--white`. Texto-comando: `--navy`. Corpo: `--body`. Acento: `--gold` (blocos/bordas).
- Cartões: `--panel` com título marinho + borda dourada à esquerda.
- Marinho entra como **bloco de cor** (tiles, caixas de destaque, capa/fecho) — não como fundo de slide inteiro.
- Capa/fecho podem ter **tile marinho** (com "V" dourado) sem escurecer o slide todo.

## Tema alternativo: ESCURO (social/tela)
Fundo `--navy-deep`/`--navy`, texto creme, acento dourado. Usar só em peças digitais, **nunca em projetor**.

---

## Logos (arquivos em `_contexto/logos/`)

| Arquivo | O que é | Usar em |
|---------|---------|---------|
| `vero-logo-1.jpeg` | "V" marinho sobre branco | fundo claro |
| `vero-logo-2.jpeg` | "V" marinho sobre dourado | tile/acento |
| `vero-logo-3.jpeg` | wordmark "vero" creme sobre marinho | peça escura |
| `vero-logo-4.jpeg` | "V" dourado sobre marinho | tile na capa (fundo claro) |
| **`vero-v-navy.png`** | **"V" marinho, fundo transparente** | marca/rodapé em slide claro |
| **`vero-v-gold.png`** | **"V" dourado, fundo transparente** | sobre painel marinho |

Wordmark = "vero" em script. Símbolo = "V" script.

---

## Tipografia

| Uso | Fonte (deck portável) | Marca/web |
|-----|----------------------|-----------|
| Títulos / headlines | **Georgia** (serif) | Playfair Display |
| Corpo | **Arial** | DM Sans |
| Rótulos / labels | Arial caps + `charSpacing` | DM Mono |

Deck editável usa Georgia+Arial (abrem em qualquer máquina). Web/peças fixas podem usar Playfair/DM Sans.

---

## Frases-assinatura Vero
- "Status não se compra. Status se comprova."
- "Quem executa, permanece."
- "Formação sem critério gera ilusão."

## Vocabulário
- **Proibido:** crescer (promessa), solução, sucesso (outcome), "você consegue", motivacional, coach.
- **Encorajado:** controle, previsibilidade, improviso, critério, sustentação, renúncia, preparação.
