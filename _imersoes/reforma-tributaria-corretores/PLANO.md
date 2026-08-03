# Plano — Apresentação Reforma Tributária para Corretores

> **Evento:** 1º treinamento modular Vero (primeiro movimento público da marca).
> **Data:** quarta-feira, **24/06/2026**. Hoje: 08/06 → **16 dias.**
> **Condutores:** Lucas e Ernane.
> **Objetivo:** entregar valor real sobre Reforma Tributária + posicionar a Vero (escola + hub + treinamentos modulares) + capturar leads para a comunidade.

---

## ⚠️ Regra de conteúdo (inegociável)

Reforma Tributária é **conteúdo factual e de alto risco** (corretores tomam decisão com base nisso).
**Não inventar números, alíquotas, prazos ou regras.** Todo dado técnico vem das **apresentações que o Lucas vai enviar** + fontes oficiais (LC 214/2025, CBS/IBS, transição 2026–2033). Claude estrutura, aplica o tom Vero e o visual — não cria fato tributário do nada.

---

## Os 8 entregáveis

| # | Entregável | Status | Bloqueio / Dependência | Quem |
|---|-----------|--------|------------------------|------|
| 1 | **Unificar apresentações de Reforma Tributária** (sem perder a essência de cada) | ✅ FEITO | deck unificado de 16 slides | Claude |
| 2 | **Identidade visual Vero** na apresentação | ✅ FEITO | aplicada no deck (QA visual 16/16) | Claude |
| 3 | **Exemplos práticos** p/ corretores e serviços | ✅ FEITO (validar nº) | Exemplo A indústria + Exemplo B corretor (slides 6-7) | Claude |
| 4 | **MEI + Imposto de Renda** | ✅ FEITO (validar regra) | slides 9-10 | Claude |
| 5 | **Posicionamento Vero** (escola + hub + treinamentos modulares) | ✅ FEITO | `posicionamento.md` + slides 15-16 | Claude |
| 6 | **Exercício A4 frente-e-verso** (provocar + mostrar o "como") | 🔜 Próximo | identidade impressão Vero | Claude |
| 7 | **Site institucional / landing** (agenda + link comunidade) | 🔜 | Landing nova, GitHub Pages | Claude + Lucas |
| 8 | **Comunidade no WhatsApp** | 🔜 | Comunidade WhatsApp; Lucas/Ernane criam, passam link | Lucas/Ernane |

**Deck entregue:** `deck/Vero_Reforma_Tributaria_Corretores.pptx` (16 slides, editável). Fontes arquivadas em `fontes/`. Build reproduzível: `deck/build_deck.js`.

### ⚠️ Itens [VALIDAR] no deck antes de apresentar
- **Slide 7 (Exemplo B corretor):** números são ilustrativos — Lucas valida/fornece os reais.
- **Slide 9 (MEI):** confirmar que corretor de imóveis (CRECI) não se enquadra no MEI.
- **Slide 10 (IR):** confirmar regra de dividendos/retiradas >R$50k até 15%.
- **Slide 16 (CTA):** colar link real da Comunidade + gerar QR Code.

---

## Caminho crítico

```
ARQUIVO do Lucas  →  #1 unificação  →  #3 exemplos + #4 MEI/IR  →  deck final (#2 aplicado)  →  #6 A4
Paralelo (sem bloqueio): #5 posicionamento · #7 site · #8 comunidade
```

O gargalo é o **arquivo das apresentações**. Quanto antes chegar, mais folga no fim.

---

## Cronograma proposto (16 dias)

| Janela | Foco |
|--------|------|
| **08–10/06** | Fundação: identidade (✓), rascunho do **posicionamento Vero (#5)**, esqueleto do deck, **aguardar arquivo** |
| **10–13/06** | Unificar decks (#1), montar **MEI/IR (#4)** e **exemplos práticos (#3)** com base nas fontes |
| **13–16/06** | **Exercício A4 (#6)** na identidade Vero |
| **14–18/06** | **Site (#7)** + **Comunidade (#8)** no ar |
| **19–22/06** | Ensaio completo Lucas + Ernane; ajustes de conteúdo e tempo |
| **23/06** | Polimento final, impressão dos A4, teste do projetor/links |
| **24/06** | 🎯 Apresentação |

---

## Estrutura proposta do deck (rascunho — ajustar com #1)

1. **Abertura Vero** — quem somos, o tom ("uma escola para empresários de verdade"), por que estamos falando disso.
2. **O que muda na Reforma** — visão geral honesta (sem terror, sem minimizar).
3. **Impacto no corretor / prestador de serviço** — ajuda ou atrapalha? (semântico vermelho/verde).
4. **MEI e Imposto de Renda** — o que o pequeno precisa saber.
5. **Exemplos práticos** — casos reais aplicados ao dia a dia do corretor.
6. **Mãos na massa** — exercício A4 (preparação, não teoria).
7. **A Vero** — escola + hub de negócios + treinamentos modulares; agenda + comunidade (CTA).

---

## Decisões tomadas (08/06)

- [x] **Tipo de corretor:** **Corretores de imóveis.** Exemplos e MEI/IR enquadrados nesse contexto (comissão por venda/locação, CRECI, sazonalidade). ⚠️ Verificar no #4: corretor de imóveis (profissão regulamentada) **não** pode ser MEI — confirmar na fonte; é um bom gancho de provocação Vero.
- [x] **Site:** **Landing dedicada nova** (institucional limpa, separada da apostila). GitHub Pages, pasta nova. Avaliar domínio próprio depois.
- [x] **Comunidade:** **Comunidade do WhatsApp** (canais + grupos, broadcast, moderação por admin). Criação da conta: Lucas/Ernane.

---

## Arquivos do projeto

```
_imersoes/reforma-tributaria-corretores/
├── PLANO.md            ← este arquivo
├── fontes/             ← decks originais do Lucas (a receber) + refs oficiais
├── deck/               ← apresentação unificada (HTML identidade Vero)
├── exercicio-a4/       ← A4 frente-e-verso
└── posicionamento.md   ← copy do bloco "A Vero" (#5)
```
