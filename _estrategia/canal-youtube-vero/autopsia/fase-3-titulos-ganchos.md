# FASE 3 — TÍTULOS E GANCHOS

> Base: 2.181 títulos + 30 transcrições completas dos outliers (legendas automáticas pt).
> Régua: mediana do canal = 70.000 views.
> ⚠️ **As transcrições são legendas automáticas** e contêm erros de reconhecimento (ex.: "no Bank" = Nubank, "sardinha rhai" = sardinha raiz, "financiamento de móvel" = imóvel). Preservei o texto como veio e sinalizo onde interpreto.

---

## 0. ACHADO PRÉVIO: os títulos deste canal não são fixos

Antes de analisar títulos, é preciso registrar algo que descobri por acidente e depois confirmei com amostragem controlada: **o canal roda teste A/B de título**, e o título muda de minuto a minuto.

Coletei o mesmo vídeo (`mAD55BIwCRg`) 5 vezes, com ~26 segundos entre coletas:

| Horário (UTC) | Título retornado |
|---|---|
| 22:20:23 | SUA **ESPOSA** PODE DESTRUIR O SEU FUTURO FINANCEIRO |
| 22:20:50 | SUA **ESPOSA** PODE DESTRUIR O SEU FUTURO FINANCEIRO |
| 22:21:16 | SUA **MULHER** PODE DESTRUIR O SEU FUTURO FINANCEIRO |
| 22:21:43 | SUA **ESPOSA** PODE DESTRUIR O SEU FUTURO FINANCEIRO |
| 22:22:09 | **O QUE EU FARIA SE COMEÇASSE A INVESTIR HOJE** |

**Três títulos distintos para o mesmo vídeo em 1 minuto e 46 segundos.** O vídeo `a4BU3TBY9ck` fez o mesmo em coletas anteriores: *"O dinheiro barato está acabando"* → *"Por que você deveria fazer uma dívida urgente?"* → *"O MELHOR MOMENTO PARA SE ENDIVIDAR É AGORA"*.

Isso é a ferramenta **"Testar e comparar"** do YouTube (até 3 variantes por vídeo). Duas consequências:

1. **Todo título citado neste relatório é uma fotografia de 31/07/2026**, não uma constante.
2. **Ele não adivinha o título: ele testa.** Note o par testado — *"SUA ESPOSA..."* (acusação/conflito doméstico) contra *"O QUE EU FARIA SE COMEÇASSE A INVESTIR HOJE"* (conselho neutro). São **teses opostas** sendo medidas, não sinônimos. É assim que ele acumula o repertório das seções abaixo.

> Para a Vero, isto é a coisa mais barata e mais imediatamente copiável de toda a autópsia: **o título é hipótese, não decisão.**

---

## 1. Estruturas sintáticas dos 30 títulos outliers

| Estrutura | n/30 | % |
|---|---|---|
| **Sentença-veredicto** (afirmação categórica, sem "?") | **16** | 53% |
| Pergunta direta (termina com "?") | 9 | 30% |
| Contém marca / nome próprio | 10 | 33% |
| Segunda pessoa (você/seu/sua) | 9 | 30% |
| Contém "COMO" | 6 | 20% |
| Numeral no início ("4 formas", "5 mentiras") | 5 | 17% |
| Emoji | 4 | 13% |
| Valor em R$ / US$ | 3 | 10% |

### O teste que separa correlação de superstição

Comparar só os outliers não prova nada — pode ser que 53% de *todos* os títulos do canal sejam veredictos. Por isso rodei uma comparação **controlada por época**: dentro dos últimos 24 meses (n=621), o quintil superior (n=124, mediana 385.500) contra o quintil inferior (n=124, mediana 92.000).

| Padrão | Top 20% | Bottom 20% | **Lift** |
|---|---|---|---|
| **Grupo social nomeado** (classe média, pobres, ricos) | 15% | 6% | **2,38x** ✅ |
| **Acusação** (burrice, mentira, erro, golpe, ilusão) | 10% | 6% | **1,86x** ✅ |
| Numeral | 31% | 23% | 1,31x |
| Segunda pessoa | 15% | 11% | 1,29x |
| "Como" | 11% | 9% | 1,27x |
| Marca/instituição nomeada | 23% | 21% | 1,12x |
| CAIXA ALTA | 35% | 43% | **0,83x** ❌ |
| Pergunta ("?") | 43% | 59% | **0,73x** ❌ |
| **Emoji** | 8% | 15% | **0,53x** ❌ |

> **Três superstições derrubadas por dado: CAIXA ALTA, ponto de interrogação e emoji NÃO ajudam — todos aparecem MAIS nos piores vídeos que nos melhores.** O emoji é o pior: quase o dobro de frequência no quintil inferior. O que sobra de verdade é: **nomear um grupo social (2,38x) e acusar (1,86x)**.

---

## 2. Palavras-gatilho — desempenho medido

Mediana de views por palavra presente no título (mínimo 10 ocorrências no catálogo):

### As que puxam para cima

| Palavra | n | Mediana | x canal |
|---|---|---|---|
| juntar | 14 | 283.500 | **4,0x** |
| aula | 13 | 224.000 | **3,2x** |
| carro | 11 | 220.000 | 3,1x |
| classe / média | 49 | 215.000 | 3,1x |
| trump | 42 | 210.500 | 3,0x |
| alerta | 17 | 208.000 | 3,0x |
| conta | 16 | 204.500 | 2,9x |
| casa | 13 | 194.000 | 2,8x |
| burrice | 25 | 174.000 | 2,5x |
| pobre(s) | 30 | ~160.000 | 2,3–2,5x |

### As que afundam

| Palavra | n | Mediana | x canal |
|---|---|---|---|
| notícias | 40 | 16.500 | **0,2x** |
| resultados | 30 | 14.000 | **0,2x** |
| giro | 31 | 5.500 | **0,1x** |
| "relevante" (fato relevante) | 16 | 5.500 | **0,1x** |
| fato | 15 | 5.200 | **0,1x** |
| shorts (no título) | 18 | 4.100 | **0,1x** |

> **O formato "giro de mercado / fato relevante / notícias / resultados" roda 10x ABAIXO da mediana do canal.** São ~100 vídeos de jornalismo financeiro diário com desempenho péssimo. Isso refina a conclusão da Fase 2: não é que "notícia funciona" — é que **notícia que mexe no bolso do espectador funciona (Receita Federal, 2,0x) e notícia de mercado para investidor não funciona (0,1x)**.
>
> Repare no contraste que resume o canal inteiro: **"juntar" (4,0x) contra "resultados" (0,2x)** — 20x de diferença. A palavra do espectador ganha da palavra do mercado.

---

## 3. As 10 fórmulas de título (com exemplos reais e contagem)

### Fórmula 1 — `[COISA COMUM] é BURRICE da classe média?`
A fórmula mais explorada do canal. **52 vídeos** com "burr*", mediana 180.000 (2,6x), 15 nos últimos 12 meses — **viva**.
- "Plano de saúde é BURRICE da classe média?" — 898.439
- "Seguro de carro é BURRICE da classe média?" — 841.408
- "Por que morar de aluguel é BURRICE da classe média?" — ~413.000
- "Investir em FIIs é BURRICE da classe média?" — ~405.000
- "As 8 maiores BURRICES da classe média!" — ~531.000
> Objeto banal e universal + veredicto acusatório + grupo social. O espectador **precisa** clicar para saber se ele é o burro.

### Fórmula 2 — `AULA COMPLETA sobre [TEMA]`
**13 vídeos, mediana 224.000 — o maior multiplicador do canal (3,2x)**, vivo (5 nos últimos 12m).
- "COMO CRIAR UMA CARTEIRA DE INVESTIMENTOS COM AÇÕES, FIIs e RENDA FIXA?" — 1.533.792 (**#1 do canal**)
- "Como comprar sua primeira casa e quitar em menos 5 anos [Aula financiamento imobiliário]" — 1.259.230 (**#2**)
- "AULA SOBRE CDB - O Investimento que RENDE MAIS DINHEIRO..." — ~552.000
> Promessa de completude. Os dois maiores vídeos da história do canal usam esta fórmula.

### Fórmula 3 — `[NÚMERO] formas/dicas/lições de [GANHO CONCRETO]`
5 dos 30 outliers começam com numeral.
- "4 FORMAS DE GANHAR DINHEIRO DO SEU BANCO!" — 1.246.198
- "4 dicas para atingir R$ 100 mil em POUCO TEMPO!" — 891.504
- "7 lições CURTAS para SAIR DA CLASSE MÉDIA!" — 753.022
- "5 mentiras em que a CLASSE MÉDIA BURRA acreditou..." — 602.210

### Fórmula 4 — `CHEGOU A HORA DE [AÇÃO CONTRA INSTITUIÇÃO]?`
- "CHEGOU A HORA DE TIRAR O SEU DINHEIRO DO NUBANK?" — 970.927
- "Fuja de comprar apartamentos, é latada!" — 645.958
> Urgência + ação concreta contra algo que o espectador **possui**. Não é opinião sobre o Nubank: é ordem sobre o dinheiro dele.

### Fórmula 5 — `O [SUPERLATIVO] de [NOME PRÓPRIO FAMOSO]`
- "O ROUBO DO BANCO PAN, O MAIOR ERRO DA VIDA DE SILVIO SANTOS" — 1.072.122
- "Como era o esquema do PCC que envolvia a Faria Lima?" — 645.539
> Empresta a audiência de um nome que já tem audiência. 33% dos outliers contêm nome próprio.

### Fórmula 6 — `A [AUTORIDADE] está [AÇÃO INVASIVA] o seu [BEM]`
- "Cuidado: Receita está monitorando PIX e gastos no cartão de crédito" — 597.169
- "Se você está sonegando PARE, o novo sistema da Receita Federal vai pegar todo mundo" — 658.158
- "A Receita Federal abriu a caixa preta do Brasil" — 589.361
> Estado + vigilância + patrimônio do espectador. 3 dos 30 outliers. (Receita/governo = 2,0x no catálogo.)

### Fórmula 7 — `[CRENÇA POPULAR] é MENTIRA?`
- "⚠️ ILUSÃO na bolsa de valores: viver de dividendos é MENTIRA?" — 662.846
- "Como os ricos ficaram ricos? Isso ninguém te conta!" — 598.618
> Ataca a crença, não a pessoa (ver Fase 2, mecanismo de desarme).

### Fórmula 8 — `[ATIVO] vai [COLAPSAR]`
- "💣 A BOLHA DOS CARROS estourou: o preço vai despencar!" — 732.587
- "🤯O DÓLAR VAI ACABAR? - Como se preparar para a maior crise financeira do século?" — 932.786

### Fórmula 9 — `[INSTITUIÇÃO GIGANTE] move [NÚMERO ENORME]: o que eles sabem?`
- "BLACKROCK move US$ 2,1 TRILHÕES: o que eles estão VENDO?" — 627.939
> Open loop puro: existe uma informação que "eles" têm e você não.

### Fórmula 10 — `De [VALOR BAIXO] a [VALOR ALTO]: o que eu faria diferente`
- "De R$ 3 a R$ 15 mil de salário o que aprendi e não faria de novo" — 662.677
- "POR QUE SUA VIDA MUDA DEPOIS DE JUNTAR R$ 100 MIL REAIS?" — 573.500
> "juntar" é a palavra de maior multiplicador do canal (4,0x).

---

## 4. ANATOMIA DO GANCHO — segundo a segundo

Medido sobre as **30 transcrições** dos outliers.

### 4.1 A frase de abertura padrão: **"Então vamos lá"** — 25/30 (83%)

O padrão mais forte de toda a autópsia.

> "**Então vamos lá.** Bom, a gente tem aí o novo sistema da Receita Federal..." — [`7rKnjDaiP0Q`](https://youtu.be/7rKnjDaiP0Q), [0:00]
> "**Então vamos lá.** Por que apartamentos são péssimos investimentos?" — [`-PB2TCoBT1s`](https://youtu.be/-PB2TCoBT1s), [0:00]
> "**Então vamos lá.** Bom, hoje a gente vai conversar aqui sobre cinco mentiras..." — [`PuGh2XT-RmM`](https://youtu.be/PuGh2XT-RmM), [0:00]
> "**Então vamos lá** bom tem um vídeo que tá rondando aí pela internet..." — [`opk_iKVlzsI`](https://youtu.be/opk_iKVlzsI), [0:00]
> "**Então vamos lá** bom uns dias atrás eu fiz aqui um vídeo sobre plano de saúde..." — [`3I3WS3x4_Ss`](https://youtu.be/3I3WS3x4_Ss), [0:00]

**Não há vinheta, saudação, apresentação nem "fala galera".** Ele entra como quem retoma uma conversa já em curso. Custo de produção: zero. Efeito: elimina a fricção dos primeiros segundos.

### 4.2 Tempo até a promessa: **mediana de 6 segundos**

Medi, em cada uma das 30 transcrições, o instante em que uma palavra-chave do título é pronunciada:

| Métrica | Valor |
|---|---|
| **Mediana** | **6 segundos** |
| 1º quartil | 2 segundos |
| 3º quartil | 16 segundos |
| Dentro de 10s | **20/30 (67%)** |

> **Regra: o tema do título tem que ser dito em voz alta antes dos 10 segundos.** Não há construção de suspense, contextualização longa nem "antes de começar, se inscreve".

### 4.3 O cold open — quando ele inverte a ordem

Em uma minoria dos vídeos, a frase de abertura padrão **vem depois** do gancho:

> "**A Receita Federal abriu a Caixa Preta do Brasil.** Eles pegaram todos os dados da declaração de imposto de renda e compilaram... Quais profissões mais ganham dinheiro no país? [...] Esse vídeo vai deixar você talvez um pouco irritado, talvez um pouco feliz. **Então vamos lá.**"
> — [`yCoHTnhkGRo`](https://youtu.be/yCoHTnhkGRo), 589.361 views, 09/07/2026, [0:00–0:29]

Aqui a **primeira frase falada É o título** — sincronia total entre o que foi clicado e o que se ouve. O "Então vamos lá" só chega aos 29 segundos, depois do gancho fechado.

O cold open mais radical é o do formato de confronto, que abre com fala de terceiro:

> "— Você se acha [palavrão] mesmo assim melhor que [nome]?"
> — *"1 COACH VS 50 POBRES PREMIUM"*, [`BdIfc-hvb2Y`](https://youtu.be/BdIfc-hvb2Y), 649.125 views, 09/11/2025, [0:00]

### 4.4 Open loop e promessa de desconforto

Ele **não** promete benefício. Promete incômodo:

> "Esse vídeo vai deixar você talvez um pouco irritado, talvez um pouco feliz." — [`yCoHTnhkGRo`](https://youtu.be/yCoHTnhkGRo), [0:25]

> "Bom, esse talvez seja um dos vídeos mais importantes do canal e **muito provavelmente um dos vídeos que mais vai gerar a reclamação de vocês**, dada a simplicidade com que nós vamos tratar alguns temas extremamente complexos [...] O que que é o compromisso desse vídeo aqui? E é um compromisso que **não adianta nada se você só assistir e não tomar nenhuma providência**."
> — *"DESF\*DENDO a sua vida em 32 minutos"*, [`BHzrlCqNH0I`](https://youtu.be/BHzrlCqNH0I), 600.962 views, 30/05/2025, [0:00–0:24]

⚠️ **2/30 — abaixo do limiar de 5. Registro como indício, não padrão.** Mas registro porque é o dispositivo mais diretamente transplantável para a Vero: **"não adianta assistir e não tomar providência"** é, palavra por palavra, a tese do método Vero.

### 4.5 Dado concreto cedo — 17/30 (57%)

Número, valor em R$ ou ano aparece nos primeiros 60 segundos em 57% dos outliers. Exemplo de densidade:

> "o Nubank ali ele possui um net promoter score de **87 pontos**. Mas pra gente entender se isso é alto [...] a gente precisa comparar com outros bancos. Só para você ter uma ideia, o **Itaú tem 34,8** de NPS, o **Bradesco tem 27**"
> — [`D_oiX4mMPpU`](https://youtu.be/D_oiX4mMPpU), 970.927 views, [0:47–1:02]

**A mecânica: o número não é enfeite — é a prova que autoriza a acusação do título.** Ele acusa no título e paga a acusação com dado no primeiro minuto.

### 4.6 O anti-CTA — pedir like recusando o like

> "antes de mais nada, quem é um **sardinha raiz** já sabe que o vídeo vai ser bom, né? Pode deixar o seu **like na confiança**. Se você não é um sardinha raiz ainda [...] **você segura sua mãozinha, não quero o seu like, não quero inscrição agora.** Agora, se o vídeo te agregar, te ajudar de alguma forma, aí eu quero que você se inscreva."
> — [`J6sjmko5Kv0`](https://youtu.be/J6sjmko5Kv0), 1.259.230 views, [0:40–0:59]

> "quem é um sardinha raiz vai deixar o like na confiança **antes mesmo do vídeo começar** [...] agora chegou agora no canal, não me conhece ainda, pode ficar tranquilo, assiste o vídeo com calma [...] **mas agora não precisa, tá? Presta sua atenção no vídeo mesmo.**"
> — [`R94Wym4KC0s`](https://youtu.be/R94Wym4KC0s), 898.439 views, [0:33–0:55]

Frequências medidas nos primeiros 60s: **"like na confiança" 6/30 (padrão)**, **"sardinha raiz" 5/30 (padrão)**, anti-CTA explícito 4/30 (indício).

**A engenharia é dupla:**
1. **Ao veterano:** dá identidade ("sardinha raiz") e pede o like *antes* do conteúdo — o like vira prova de pertencimento, não avaliação.
2. **Ao novato:** **recusa** o like. Isso inverte a relação de poder e é a versão em 15 segundos do funil AUVP ("o acesso não é para todos", Fase 0).

Resultado medido: **6,49% de likes/views** (Fase 1) — taxa muito acima do normal no YouTube.

### 4.7 Esqueleto do gancho (0–60s), consolidado

| Tempo | Movimento | Frequência medida |
|---|---|---|
| 0:00 | "Então vamos lá" (ou cold open com a frase do título) | 25/30 |
| 0:00–0:10 | Tema do título dito em voz alta | 20/30 (mediana 6s) |
| 0:05–0:30 | Origem do vídeo: pedido, polêmica, notícia ou conversa | 7/30 |
| 0:10–0:60 | Primeiro dado concreto (R$, %, ano) que sustenta a acusação | 17/30 |
| 0:30–0:60 | Like por identidade + recusa do like ao novato | 6/30 e 4/30 |
| 0:40–1:20 | Vinheta musical — **depois** do gancho, nunca antes | mediana 74s (n=7) |
| — | AUVP mencionada nos primeiros 60s | **apenas 2/30 (7%)** |

> **O último número é o mais importante da fase: em 93% dos outliers ele NÃO menciona a escola no primeiro minuto.** A venda não está no gancho. Ver Fase 6.

---

## O que isso muda para a Vero

- **Título é hipótese testável, não decisão de gosto.** Ele roda 3 variantes por vídeo com teses opostas e deixa o dado escolher. E o dado já derrubou três superstições: CAIXA ALTA (0,83x), "?" (0,73x) e emoji (0,53x) **atrapalham**. A Vero pode adotar isso no primeiro vídeo, custo zero — e o visual sóbrio (ouro/preto, sem emoji) que a marca já pede é, por acaso, o que performa.
- **"Então vamos lá" + tema em 6 segundos.** Sem vinheta, sem "fala pessoal", sem apresentação. Para a Vero: começar pela frase do bloco, dita em voz alta, antes dos 10 segundos. O ritual de abertura custa nada e elimina a fricção inicial.
- **Prometer desconforto, não benefício.** "Esse vídeo vai te deixar irritado" e "não adianta assistir e não tomar providência" são o gancho dele — e são literalmente o critério 9 de aprovação da Vera ("aprovado quando gera desconforto E ação"). A Vero não precisa suavizar para performar: precisa dizer o desconforto **em voz alta no primeiro minuto**.
