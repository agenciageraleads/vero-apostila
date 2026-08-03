# Plano — Imersão Método Vero (dia completo)

> **Evento:** Imersão de apresentação do Método Vero completo (4 níveis × 4 pilares).
> **Formato:** Dia inteiro (8h). **Público:** prospects — empresários que ainda não são alunos.
> **Objetivo:** entregar diagnóstico e método de verdade + converter matrículas para a escola no fechamento.
> **Condutores:** Lucas e Ernane.
> **Data:** a confirmar — janela de 2–4 semanas a partir de 17/07/2026.
> **Decisão de material (17/07):** cada empresário recebe a **Apostila da Imersão** (edição curada), não a apostila completa. A apostila completa continua sendo valor da escola.

---

## Lógica comercial do dia

O dia inteiro **entrega** diagnóstico e método de verdade; a venda no fim é consequência:
"vocês acabaram de ver onde estão; a escola é onde isso vira execução sustentada."
Sem motivacional, sem pitch antecipado. Tom Vero do início ao fim: provocar + mostrar o "como".

---

## Arquitetura do dia (8h)

> **Redesenho pós-simulação (18/07):** após simular a imersão com 100 empresários sintéticos
> (`SIMULACAO-100-EMPRESARIOS.md`), Vendas migrou para a tarde (evita a fadiga do fim do dia),
> Pessoas ganhou módulo próprio, os exercícios escritos foram ampliados (12→18-20 min) e Vendas
> passou a usar um debrief falado por segmento em vez de canvas escrito. Ver mudanças completas
> na seção "Redesenho pós-simulação" abaixo.

| Horário | Módulo | Conteúdo |
|---------|--------|----------|
| 9h00–10h30 | **1. Abertura + Provocação** | "Vero. Uma escola para empresários de verdade." O custo do improviso — narrativa padrão P1 (base: Financeiro Raiz). Desconforto primeiro, sem pitch. |
| 10h45–12h30 | **2. O Método** | 4 níveis de maturidade × 4 pilares. Cada fase cobra um preço diferente. **Exercício 1: Diagnóstico de fase** — o empresário marca onde está em cada pilar (canvas na apostila impressa). |
| 12h30–14h00 | Almoço | — |
| 14h00–15h40 | **3. Financeiro + Operação + Vendas** | Financeiro (18min) e Operação (18min): narrativa + canvas ao vivo. Vendas: narrativa + **debrief falado por segmento** (comércio/serviço/indústria) — sem canvas escrito. |
| 15h40–15h55 | Pausa | — |
| 15h55–16h40 | **4. Pessoas** | Módulo dedicado só a este pilar — narrativa Eduardo + Mapa de Tolerância (18min), sem a fadiga de ser o 2º exercício seguido da tarde. |
| 16h40–18h00 | **5. Fechamento + Oferta** | Plano de execução (20min, dobrado) → objeção de tempo respondida com número → a escola → **trilha própria para Gestão/Legado** (conversa individual) → oferta Raiz/Trilha → CTA de matrícula. |

---

## Os 9 entregáveis

| # | Entregável | Status | Dependência | Quem |
|---|-----------|--------|-------------|------|
| 1 | ~~Roteiro do dia separado~~ **absorvido pelo deck** (decisão 17/07): notas do apresentador = run of show; tabela de horários do PLANO = agenda de 1 página | ✅ decidido | — | — |
| 2 | **Deck** (62 slides, 5 módulos, notas de apresentador embutidas) — `deck/Vero_Imersao_Metodo_v5.pptx` (build: `deck/build_deck.js`) | 🎨 v5 gerado 18/07 — redesenhado após simulação; 3 placeholders vivos: tempo semanal (novo), prova de caixa (novo), oferta Raiz/Trilha | #6, #8, #9 fecham os placeholders | Claude (Sofia) |
| 3 | **Apostila da Imersão** (~24–32 págs A4, curadoria abaixo) | 🔜 S2 | blocos prontos + #4 + #5 | Claude (Sofia) |
| 4 | **Bloco Pessoas Raiz 01** — "Ninguém combinou, mas todo mundo faz assim" (Eduardo / Mapa de Tolerância) | ✅ JÁ EXISTIA — apostila está 88/88 (STATUS.md estava defasado); usado no deck desde a v4 | — | — |
| 5 | **Canvas Diagnóstico de Fase** (novo — onde estou em cada pilar) | 🔜 S1 | — | Íris |
| 6 | **Oferta / pricing da matrícula (Raiz/Trilha)** | 📄 FAIXAS DOCUMENTADAS em `_docs-originais/MODELO DE NEGÓCIO VERO.docx` (§10). Falta: valor exato dentro da faixa + os 2 pontos da proposta de reenquadramento (item #8) | Lucas + Ernane | Lucas + Ernane |
| 7 | **Simulação de 100 empresários** — `SIMULACAO-100-EMPRESARIOS.md` | ✅ FEITA 18/07 — gerou os itens #8, #9 e o redesenho da tarde já aplicado no deck v5 | — | Claude |
| 8 | **Proposta de reenquadramento da mensalidade** — `_estrategia/proposta-reenquadramento-mensalidade.md` | ✍️ RASCUNHO pronto, 2 campos `[DEFINIR]`: duração do ciclo por nível + cadência de validação por nível | Lucas + Ernane preenchem os 2 campos | Lucas + Ernane |
| 9 | **Prova de execução para o palco** (1-2 casos reais com número, priorizando Gestão) | ⚠️ BLOQUEIO DE CONTEÚDO — precisa de caso real (Proativo ou piloto Vero); **não fabricar número** | Lucas + Ernane fornecem o caso | Lucas + Ernane |
| 10 | **Ensaio + logística** (impressão, projetor, links) | 🔜 S3 | #2, #3, #6, #8, #9 prontos | Lucas + Ernane |

### ⚠️ Bloqueios reais (produção não resolve sozinha)

1. **Pricing exato + reenquadramento da mensalidade** (#6 + #8) — a oferta de matrícula é
   o slide 59. Pendente desde 08/06 (`_estrategia/PENDENCIAS-ESTRATEGICAS.md`, item 2).
2. **Caso real para prova de execução** (#9) — sem isso, Gestão (o nível de maior tíquete)
   continua sem argumento no palco; a simulação apontou essa lacuna como a principal causa
   da conversão de só 20% nesse nível.
3. **Carga horária semanal real do método** — usada no slide 54 (placeholder "quanto tempo
   por semana"); objeção nº1 de quem já diria sim, maior preditor de churn segundo a simulação.

Nenhum dos três é produção de conteúdo — são decisões/dados que só Lucas e Ernane têm.
**Precisam fechar até a S2.**

---

## Curadoria da Apostila da Imersão

Estrutura: capa · diagnóstico de fase (#5) · blocos curados · plano de execução · página da escola.

| Ordem | Bloco | Por quê |
|-------|-------|---------|
| 1 | Canvas Diagnóstico de Fase (novo) | Exercício 1 da manhã |
| 2 | Financeiro Raiz 02 — Misturar empresa e vida pessoal | Bloco-referência; melhor cartão de visita do método |
| 3 | Financeiro Raiz 01 — Dinheiro entra, mas some | Narrativa de abertura do pilar |
| 4 | Operação Raiz 01 — Operação depende do dono | Núcleo do pilar Operação |
| 5 | Vendas Raiz 01 — Venda depende do dono | Núcleo do pilar Vendas |
| 6 | Pessoas Raiz 01 — Sistema permite comportamento (novo, #4) | Representa o 4º pilar |
| 7 | Operação Gestão 14 — Padronizar, automatizar ou aceitar | Mostra a profundidade das fases seguintes |
| 8 | Plano de execução pessoal (página nova) | Fechamento do dia; ponte para a oferta |

Todos os blocos curados (exceto os novos) já têm HTML de impressão pronto em `apostila/`.

---

## Deck (~55–65 slides)

### ⚠️ Princípio inegociável: o deck é guia, não cópia da apostila (Lucas, 17/07)

- **Slide de narrativa não reproduz a P1.** A história é contada pelo condutor; a tela carrega
  só a frase-síntese ou o dado que dói. Texto completo vai para as **notas do apresentador**.
- **Slide de exercício é comando, não conteúdo.** "Abra a página X. N minutos." O canvas
  existe só na apostila impressa — nunca projetado inteiro (no máximo um recorte para
  explicar o mecanismo).
- **O deck dá ordem, ritmo e tensão; a profundidade fica no papel.** Mesma divisão do método:
  o deck faz o papel da P1 ao vivo (sentido), a apostila impressa faz o da P2 (ação).
- **Proteção do produto:** o deck sozinho não entrega nada executável. Quem sai do dia leva
  um guia iniciado, não um curso completo — a apostila completa é valor de quem entra na escola.

### Especificação

- 6 módulos espelhando a arquitetura do dia.
- Pipeline reaproveitado de `_imersoes/reforma-tributaria-corretores/deck/build_deck_v5.js` (pptxgenjs).
- Identidade: `_contexto/caderno-marca-vero.html` (ouro + preto, Playfair / DM Sans / DM Mono).
- Padrões de slide: **narrativa** (frase-síntese/dado na tela; história completa nas notas do apresentador) · **conceito** (método/mapas) · **exercício** (comando + tempo + página da apostila) · **transição de módulo**.

---

## Redesenho pós-simulação (18/07/2026)

A simulação de 100 empresários sintéticos (`SIMULACAO-100-EMPRESARIOS.md`) gerou 5 mudanças,
todas já aplicadas no deck v5 ou registradas como pendência explícita:

1. **Vendas migrou para a tarde**, junto com Financeiro e Operação (módulo 3), antes da pausa —
   evita a fadiga que a simulação flagrou no fim do dia. Pessoas ganhou módulo próprio (4),
   com mais respiro logo após a pausa.
2. **Exercícios escritos ampliados**: Financeiro, Operação e Pessoas foram de 12 para 18 min;
   o Plano de Execução final dobrou de 10 para 20 min — era o mais elogiado como acionável e
   o mais espremido em tempo.
3. **Vendas trocou o canvas escrito por um debrief falado em 3 lentes** (comércio · serviço ·
   indústria) — resposta direta à crítica de que o exemplo único (Gustavo, serviço) não
   traduzia para quem vende produto físico ou tem chão de fábrica.
4. **Trilha própria para Gestão/Legado** — novo slide antes da oferta, direcionando o público
   de maior tíquete (pior conversão simulada: 20%) para conversa individual em vez da oferta
   genérica.
5. **Dois placeholders novos e propositais**: objeção de tempo (slide 54) e prova de execução
   com caso real (slide 57) — ambos aguardam dado real de Lucas/Ernane, não foram fabricados.

---

## Cronograma (3 semanas)

| Semana | Foco |
|--------|------|
| **S1** | ~~Estrutura do deck validada~~ ✅ · ~~Bloco Pessoas Raiz 01~~ ✅ (já existia) · Canvas Diagnóstico de Fase (Íris) |
| **S2** | Apostila da Imersão montada · **pricing + reenquadramento da mensalidade fechados** (Lucas + Ernane, entregáveis #6 e #8) · **caso real de execução definido** (#9) |
| **S3** | Placeholders do deck preenchidos com os dados de S2 · revisão final · ensaio Lucas + Ernane · impressão e teste de projetor |

---

## Decisões tomadas (17/07/2026)

- [x] Escopo: **método completo** (visão geral 4 níveis × 4 pilares), não fase ou pilar isolado.
- [x] Formato: **dia inteiro (8h)** com exercícios de canvas ao vivo.
- [x] Público: **prospects** — o dia vende a escola pelo valor entregue, CTA só no fechamento.
- [x] Impresso: **Apostila da Imersão curada** (não a apostila completa; não acelerar os 38 blocos restantes pulando gates).
- [x] Único conteúdo novo de apostila para o dia: **Pessoas Raiz 01**, pelo workflow normal de 10 passos.

## Não-decisões (não reabrir sem motivo)

- A produção da apostila completa (Vendas Trilha→Legado + Pessoas) **segue em paralelo por sessão**, sem vínculo com a data da imersão.
- Pendências estratégicas continuam em `_estrategia/PENDENCIAS-ESTRATEGICAS.md` — exceto pricing (#2), que este projeto promove a bloqueio ativo.

---

## Arquivos do projeto

```
_imersoes/imersao-metodo-vero/
├── PLANO.md                          ← este arquivo
├── SIMULACAO-100-EMPRESARIOS.md      ← simulação + achados que geraram o redesenho v5
├── deck/
│   ├── ESTRUTURA-DECK.md             ← estrutura slide a slide (desatualizada — reflete v4; atualizar p/ v5)
│   ├── build_deck.js                 ← script gerador (pptxgenjs)
│   └── Vero_Imersao_Metodo_v5.pptx   ← deck atual
└── apostila-imersao/                 ← edição curada A4 (S2)

_estrategia/
└── proposta-reenquadramento-mensalidade.md   ← entregável #8, aguarda Lucas + Ernane
```
