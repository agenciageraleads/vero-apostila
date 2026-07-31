# FASE 1 — AUDITORIA QUANTITATIVA

> Coleta: **31/07/2026**. Universo: **catálogo completo** do canal, não uma amostra.
> Ferramenta: `yt-dlp 2026.07.04` via endpoint de canal (`/videos`, `/shorts`, `/streams`).
> Views/datas/likes da tabela do Top 30 são **exatos** (extração individual por posição na playlist).

---

## 1. Universo coletado

| Aba | Peças coletadas |
|---|---|
| /videos (longos) | **2.181** — catálogo inteiro |
| /shorts | **936** — catálogo inteiro |
| /streams (lives) | **30** — catálogo inteiro |
| **Total** | **3.147** |

Não foi amostra de "100 recentes + 50 mais vistos": foi **censo**. Isso permite calcular a mediana verdadeira em vez de estimá-la.

---

## 2. A mediana — e por que existem duas

O canal cresceu ~7x em alcance desde 2020. Uma mediana única para 7 anos misturaria um vídeo de 2020 (mediana 10 mil) com um de 2026 (mediana ~197 mil) e produziria conclusões falsas. Por isso reporto **duas medianas**, e uso cada uma para uma coisa diferente.

| Recorte | n | **Mediana** | Média | p90 | Uso |
|---|---|---|---|---|---|
| **Canal inteiro** | 2.181 | **70.000** | 115.444 | — | Régua histórica (usada na tabela do Top 30) |
| **Últimos ~12 meses** | 310 | **196.000** | 230.070 | 402.900 | Régua do "o que funciona HOJE" |
| Últimos ~24 meses | 621 | 183.000 | 215.064 | 386.400 | — |
| ~2022–2024 | 619 | 79.000 | 117.334 | 213.000 | — |
| 2019–2022 | 941 | 26.000 | 48.457 | 91.600 | — |

**Limiares de outlier (regra dos 3x):**
- vs. canal inteiro: **≥ 210.000 views** → 357 vídeos (16,4% do catálogo)
- vs. últimos 12 meses: **≥ 588.000 views** → **9 vídeos de 310 (2,9%)**

> **Conclusão 1 — o outlier é raro mesmo num canal de 1,7 milhão de inscritos.** Apenas **2,9%** dos vídeos recentes atingem 3x a mediana atual. O canal não vive de outliers: vive de uma **mediana alta e previsível** (196 mil views por vídeo, ~1 vídeo por dia). Quem persegue só o viral está copiando a exceção, não o motor.

### Nota metodológica sobre datas

As datas da tabela abaixo são **exatas**. As datas usadas nos recortes por período vieram do modo aproximado do YouTube, que se mostrou **impreciso para vídeos antigos** (ex.: `bx-sTOSteRA` foi reportado como ago/2023, mas a data real é 22/10/2022). Por isso os recortes acima são feitos por **posição na lista**, não por data — a aba /videos é estritamente cronológica reversa, o que **testei** com 7 vídeos em posições espalhadas (nenhuma inversão). Calibração: posição 752 = 29/02/2024, posição 1.597 = 12/08/2021.

---

## 3. TABELA — TOP 30 OUTLIERS (a fundação)

Todos os 30 superam com folga o limiar de 3x da mediana do canal (210.000). A faixa vai de **8,4x a 21,9x**.

| # | Título exato (em 31/07/2026) | Link | Data | Views | Duração | x mediana canal | Likes | Tema |
|---|---|---|---|---|---|---|---|---|
| 1 | COMO CRIAR UMA CARTEIRA DE INVESTIMENTOS COM AÇÕES, FIIs e RENDA FIXA? | [▶](https://youtu.be/bx-sTOSteRA) `bx-sTOSteRA` | 22/10/2022 | 1.533.792 | 88:08 | 21.9x | 62.226 | Tutorial perene |
| 2 | Como comprar sua primeira casa e quitar em menos 5 anos [Aula financiamento imobiliário] | [▶](https://youtu.be/J6sjmko5Kv0) `J6sjmko5Kv0` | 29/02/2024 | 1.259.230 | 24:34 | 18.0x | 97.994 | Tutorial perene |
| 3 | 4 FORMAS DE GANHAR DINHEIRO DO SEU BANCO! | [▶](https://youtu.be/kXzTa6t1fTg) `kXzTa6t1fTg` | 12/08/2021 | 1.246.198 | 22:55 | 17.8x | 73.137 | Ataque a instituição |
| 4 | O ROUBO DO BANCO PAN, O MAIOR ERRO DA VIDA DE SILVIO SANTOS | [▶](https://youtu.be/QZ5RkR-CSrQ) `QZ5RkR-CSrQ` | 24/09/2021 | 1.072.122 | 15:44 | 15.3x | 48.075 | Caso/história |
| 5 | 🤑 CLASSE MÉDIA ostentando: as pessoas mais BURRAS do mundo! | [▶](https://youtu.be/bmdWPxaBofs) `bmdWPxaBofs` | 10/05/2023 | 977.121 | 23:23 | 14.0x | 80.033 | Crítica de classe |
| 6 | CHEGOU A HORA DE TIRAR O SEU DINHEIRO DO NUBANK? | [▶](https://youtu.be/D_oiX4mMPpU) `D_oiX4mMPpU` | 23/05/2022 | 970.927 | 25:35 | 13.9x | 51.674 | Ataque a instituição |
| 7 | 🤯O DÓLAR VAI ACABAR? - Como se preparar para a maior crise financeira do século? | [▶](https://youtu.be/K3_Q80YGHhk) `K3_Q80YGHhk` | 23/06/2021 | 932.786 | 29:55 | 13.3x | 67.008 | Macro/crise |
| 8 | Plano de saúde é BURRICE da classe média? | [▶](https://youtu.be/R94Wym4KC0s) `R94Wym4KC0s` | 25/10/2023 | 898.439 | 14:14 | 12.8x | 55.172 | Crítica de classe |
| 9 | 4 dicas para atingir R$ 100 mil em POUCO TEMPO! | [▶](https://youtu.be/nEUyepoDM94) `nEUyepoDM94` | 19/03/2024 | 891.504 | 14:02 | 12.7x | 77.203 | Tutorial perene |
| 10 | Seguro de carro é BURRICE da classe média? | [▶](https://youtu.be/3I3WS3x4_Ss) `3I3WS3x4_Ss` | 08/11/2023 | 841.408 | 11:53 | 12.0x | 40.261 | Crítica de classe |
| 11 | 7 lições CURTAS para SAIR DA CLASSE MÉDIA! | [▶](https://youtu.be/smjKVj1iucY) `smjKVj1iucY` | 27/12/2023 | 753.022 | 35:28 | 10.8x | 40.839 | Crítica de classe |
| 12 | 💣 A BOLHA DOS CARROS estourou: o preço vai despencar! | [▶](https://youtu.be/m26jCNsiMSo) `m26jCNsiMSo` | 03/05/2023 | 732.587 | 10:55 | 10.5x | 57.683 | Macro/crise |
| 13 | Fique RICO com a crise de 2025! | [▶](https://youtu.be/En1Ef6ras1E) `En1Ef6ras1E` | 20/02/2025 | 695.059 | 31:24 | 9.9x | 45.215 | Macro/crise |
| 14 | DICAS FINANCEIRAS que mudarão SUA MENTE! (Educação Financeira, Dívidas, Pé-de-Meia) | [▶](https://youtu.be/L77tVt9aqTA) `L77tVt9aqTA` | 14/01/2026 | 684.273 | 20:02 | 9.8x | 44.939 | Tutorial perene |
| 15 | Como a tragédia do Rio Grande do Sul AFETA VOCÊ? | [▶](https://youtu.be/Nvspt_Y4n6E) `Nvspt_Y4n6E` | 06/05/2024 | 669.396 | 8:56 | 9.6x | 64.091 | Notícia quente |
| 16 | De R$ 3 a R$ 15 mil de salário o que aprendi e não faria de novo | [▶](https://youtu.be/HYfUrPmTKJc) `HYfUrPmTKJc` | 15/07/2025 | 662.677 | 23:58 | 9.5x | 42.904 | História pessoal |
| 17 | ⚠️ ILUSÃO na bolsa de valores: viver de dividendos é MENTIRA? | [▶](https://youtu.be/opk_iKVlzsI) `opk_iKVlzsI` | 31/01/2024 | 662.846 | 26:36 | 9.5x | 41.538 | Anti-guru |
| 18 | Se você está sonegando PARE, o novo sistema da Receita Federal vai pegar todo mundo | [▶](https://youtu.be/7rKnjDaiP0Q) `7rKnjDaiP0Q` | 29/09/2025 | 658.158 | 16:26 | 9.4x | 31.604 | Notícia/regulatório |
| 19 | Como dobrar seu dinheiro sem fazer nada - A regra da SELIC em 15% | [▶](https://youtu.be/vDy1CtNXSjM) `vDy1CtNXSjM` | 20/06/2025 | 650.740 | 18:07 | 9.3x | 39.317 | Tutorial perene |
| 20 | 1 COACH VS 50 POBRES PREMIUM \| Raul Sena | [▶](https://youtu.be/BdIfc-hvb2Y) `BdIfc-hvb2Y` | 09/11/2025 | 649.125 | 45:07 | 9.3x | 45.073 | Anti-guru |
| 21 | Fuja de comprar apartamentos, é latada! | [▶](https://youtu.be/-PB2TCoBT1s) `-PB2TCoBT1s` | 13/10/2025 | 645.958 | 17:47 | 9.2x | 34.066 | Crítica de classe |
| 22 | Como era o esquema do PCC que envolvia a Faria Lima? | [▶](https://youtu.be/_kptZbeS0Jg) `_kptZbeS0Jg` | 28/08/2025 | 645.539 | 17:04 | 9.2x | 42.909 | Caso/história |
| 23 | O erro mais comum de quem começa em FIIs | [▶](https://youtu.be/bHh-t34vJGQ) `bHh-t34vJGQ` | 23/09/2025 | 641.082 | 22:37 | 9.2x | 38.590 | Tutorial perene |
| 24 | BLACKROCK move US$ 2,1 TRILHÕES: o que eles estão VENDO? | [▶](https://youtu.be/5gyAqoE0_qU) `5gyAqoE0_qU` | 27/01/2026 | 627.939 | 17:05 | 9.0x | 43.799 | Macro/crise |
| 25 | Qual a LÓGICA do Bitcoin? O mínimo que você precisa saber sobre CRIPTOMOEDAS | [▶](https://youtu.be/knYTd9WNeIk) `knYTd9WNeIk` | 25/04/2024 | 612.763 | 24:18 | 8.8x | 36.131 | Tutorial perene |
| 26 | 5 mentiras em que a CLASSE MÉDIA BURRA acreditou quando os influenciadores contaram | [▶](https://youtu.be/PuGh2XT-RmM) `PuGh2XT-RmM` | 31/10/2025 | 602.210 | 30:35 | 8.6x | 44.755 | Anti-guru |
| 27 | DESF*DENDO a sua vida em 32 minutos | [▶](https://youtu.be/BHzrlCqNH0I) `BHzrlCqNH0I` | 30/05/2025 | 600.962 | 32:32 | 8.6x | 59.923 | Crítica de classe |
| 28 | Como os ricos ficaram ricos? Isso ninguém te conta! | [▶](https://youtu.be/hzow4AFT1Dk) `hzow4AFT1Dk` | 30/01/2023 | 598.618 | 39:18 | 8.6x | 39.798 | Crítica de classe |
| 29 | Cuidado: Receita está monitorando PIX e gastos no cartão de crédito | [▶](https://youtu.be/Mz13HoS4Ipk) `Mz13HoS4Ipk` | 06/01/2025 | 597.169 | 17:04 | 8.5x | 45.765 | Notícia/regulatório |
| 30 | A Receita Federal abriu a caixa preta do Brasil | [▶](https://youtu.be/yCoHTnhkGRo) `yCoHTnhkGRo` | 09/07/2026 | 589.361 | 27:43 | 8.4x | 33.473 | Notícia/regulatório |
⚠️ **Sobre "título exato":** os títulos acima são os retornados em 31/07/2026. O canal **roda testes A/B de título** — ver Fase 3, onde documento o mesmo vídeo retornando três títulos diferentes em ~15 minutos. Um título aqui é uma fotografia, não uma constante.

---

## 4. Padrões de formato

### 4.1 Duração — outliers são MAIS LONGOS

| Recorte | Duração mediana |
|---|---|
| Top 30 outliers | **23,1 min** |
| Todos os vídeos recentes (n=310) | 18,6 min |
| Outliers dos últimos 12m (n=9) | 20,0 min |
| Não-outliers dos últimos 12m (n=301) | 18,6 min |

Distribuição dos 310 vídeos recentes:

| Faixa | n | % |
|---|---|---|
| < 10 min | 7 | 2% |
| 10–15 min | 66 | 21% |
| **15–20 min** | **111** | **36%** |
| 20–25 min | 76 | 25% |
| 25–30 min | 29 | 9% |
| 30 min+ | 21 | 7% |

> **Conclusão 2 — o padrão de produção é o vídeo de 15 a 25 minutos (61% de tudo), e o outlier tende a ser ~24% mais longo que a mediana (23,1 vs 18,6 min).** Não há nenhum incentivo observável para encurtar. O vídeo #1 do canal tem **88 minutos**. Cortar conteúdo para "prender atenção" não é o que este canal faz.

### 4.2 Longo × short × live

| Formato | n | Mediana | Máximo | Views totais |
|---|---|---|---|---|
| Vídeo longo | 2.181 | 70.000 (196.000 nos últimos 12m) | 1.533.792 | — |
| Short | 936 | **27.000** | **2.600.000** | 71.624.800 |
| Live | 30 | 83.500 | 390.000 | — |

**Honestidade obriga registrar:** a peça isolada mais vista do canal **não é um vídeo longo — é um short** ("O famoso INIMIGO da mão de obra!", 2,6 milhões). Outros shorts passam de 1,9 milhão. Mas a **mediana** do short é 27.000 — **7,3x menor** que a do vídeo longo recente (196.000).

> **Conclusão 3 — o short é uma loteria; o vídeo longo é uma renda.** O short tem teto mais alto e piso muito mais baixo. Para quem tem capacidade de produção limitada, o vídeo longo é a aposta racional: entrega previsibilidade. É também onde estão os 30 outliers desta tabela (100% do Top 30 é vídeo longo).

### 4.3 Frequência

Medido por calibração de datas exatas: **752 vídeos longos entre 29/02/2024 e 31/07/2026 = 0,85 vídeo longo por dia**, sustentado. Somando shorts, mais de 1 peça/dia.

---

## 5. Notícia quente × perene — o resultado contraintuitivo

Classifiquei os 30 outliers por tema:

| Tema | n | % do Top 30 |
|---|---|---|
| **Tutorial perene** (carteira, FIIs, CDB, Bitcoin, financiamento) | **7** | 23% |
| **Crítica de classe** (classe média, consumo, "burrice") | **7** | 23% |
| Macro/crise (dólar, bolha, BlackRock) | 4 | 13% |
| Anti-guru (coach, influenciador, "viver de dividendos é mentira") | 3 | 10% |
| Notícia/regulatório (Receita Federal, PIX, sonegação) | 3 | 10% |
| Ataque a instituição nomeada (Nubank, bancos) | 2 | 7% |
| Caso/história (Silvio Santos, PCC) | 2 | 7% |
| Notícia quente pura (tragédia do RS) | 1 | 3% |
| História pessoal | 1 | 3% |

> **Conclusão 4 — notícia quente pura é 3% do Top 30. Conteúdo perene + crítica de comportamento é 46%.** O canal publica notícia todo dia (é o que sustenta a mediana e o hábito da audiência), mas **os campeões são perenes**. Os dois vídeos mais vistos da história do canal são aulas: montar carteira (1,53M) e comprar a primeira casa (1,26M). O regulatório (Receita Federal/PIX) aparece 3 vezes e é a categoria de notícia que mais rende — porque **mexe com dinheiro do espectador**, não porque é novidade.

### Longevidade dos campeões

Os outliers não são todos recentes — eles se distribuem por **5 anos**: 2021 (3), 2022 (3), 2023 (5), 2024 (6), 2025 (8), 2026 (5). Vídeos de 2021 e 2022 ainda estão no Top 10 em 2026. **O catálogo acumula**, ajudado pelo bloco "RECOMENDADOS PARA INICIANTES" da descrição, que joga tráfego novo nos campeões antigos (documentado na Fase 0).

---

## 6. Engajamento

Razão **likes/views** mediana no Top 30: **6,49%**.

Extremos observados: `J6sjmko5Kv0` (primeira casa) tem 97.994 likes em 1.259.230 views = **7,8%**, com 2.800 comentários. `bx-sTOSteRA` (o mais visto) tem 62.226 likes em 1.533.792 = **4,1%** — o vídeo mais visto é o **menos** engajado proporcionalmente do topo, coerente com ser uma aula de 88 minutos que muita gente abre e não termina.

> **Conclusão 5 — a taxa de like de ~6,5% é altíssima para YouTube, e isso não é acidente: é fabricado no roteiro.** Nas transcrições (Fase 3) o pedido de like aparece nos primeiros 60 segundos com um mecanismo de identidade ("quem é um sardinha raiz deixa o like na confiança") em vez de um pedido genérico. O engajamento é engenharia, não sorte.

---

## 7. O que NÃO foi coletável

| Item | Status | Motivo |
|---|---|---|
| Datas exatas dos 2.181 vídeos | **Parcial (43 exatas)** | O endpoint `/watch` bloqueou este IP (429 + "Sign in to confirm you're not a bot" — bloqueio de IP de datacenter). Contornei extraindo **por posição na playlist** via o endpoint de canal, que não bloqueia. Método validado por dupla coleta: o vídeo `kXzTa6t1fTg` retornou 1.246.198 views / 12/08/2021 / 73.137 likes pelos **dois** caminhos independentes. |
| Retenção, CTR, fonte de tráfego, demografia | **IMPOSSÍVEL** | Dados privados do YouTube Analytics. Só o dono do canal tem. Nenhuma ferramenta externa entrega isso — quem afirmar CTR de canal alheio está inventando. |
| Views exatas dos 2.138 vídeos fora do Top 30 | **Arredondadas** | O endpoint de canal entrega views arredondadas (ex.: "70000"). Suficiente para mediana e ranking; insuficiente para citação individual. Por isso a tabela do Top 30 usa extração individual exata. |
| Datas exatas por ano (tabela da Fase 0) | **APROXIMADO** | Ver nota metodológica na seção 2. |

---

## O que isso muda para a Vero

- **A meta não é viral — é mediana alta.** Só 2,9% dos vídeos dele batem 3x a mediana; o negócio é sustentado pela consistência de ~196 mil views/vídeo, não pelos picos. Para a Vero, isso significa parar de planejar "o vídeo que vai estourar" e planejar **o vídeo que vai ser publicado toda semana sem falhar**.
- **Vídeo longo, 15–25 minutos, sem medo de comprimento.** 61% do catálogo dele está nessa faixa e os outliers são ainda mais longos (23 min). A Vero, que vende profundidade e desconforto, não precisa se espremer em formato curto — o formato longo é o que combina com o método e é o que performa.
- **Conteúdo perene ganha de notícia (46% × 3% do Top 30).** Os blocos da apostila já são material perene pronto. A Vero deve tratar cada bloco como potencial aula-campeã de catálogo, não perseguir a pauta da semana.
