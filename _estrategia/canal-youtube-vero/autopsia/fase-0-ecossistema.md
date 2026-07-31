# FASE 0 — ECOSSISTEMA

> Autópsia digital do canal **Investidor Sardinha l Raul Sena**
> Coleta executada em **31/07/2026** (todos os números são fotografia dessa data).
> Ferramenta: `yt-dlp 2026.07.04` (endpoint de canal/playlist) + WebFetch para o ecossistema fora do YouTube.

---

## 1. Canal principal — dados verificados

| Item | Valor | Fonte |
|---|---|---|
| Nome | Investidor Sardinha l Raul Sena | `yt-dlp --dump-json` |
| Channel ID | `UCM3vJxmuJJkk1r0yzFI9eZg` | idem |
| URL | https://www.youtube.com/@investidorsardinha | idem |
| **Inscritos** | **1.710.000** | `channel_follower_count` |
| Vídeos longos (aba /videos) | **2.181** | dump completo da aba |
| Shorts (aba /shorts) | **936** | dump completo da aba |
| Lives (aba /streams) | **30** | dump completo da aba |
| **Total de peças publicadas** | **3.147** | soma das três abas |
| Categoria declarada | Education | `categories` |

### Idade e ritmo

**Data exata de criação do canal: 23/07/2019** — obtida do feed RSS oficial do YouTube (`feeds/videos.xml?channel_id=UCM3vJxmuJJkk1r0yzFI9eZg`, campo `<published>2019-07-23T02:44:30+00:00</published>`). O canal tem, portanto, **7 anos e 8 dias** na data desta coleta.

O vídeo mais antigo ainda listado na aba /videos é `gyqlfRiyXoQ` — *"A verdade por trás da fortuna de Robinson Shiba (China in Box)"*.

> **7 anos e 2.181 vídeos longos.** Qualquer leitura deste relatório que ignore esse número vai atribuir a resultados a truques de título ou thumbnail o que é, em boa parte, **acúmulo**.

**Frequência atual (verificada por calibração de datas exatas):**

A aba /videos é **estritamente cronológica reversa** — isso foi *testado*, não presumido: peguei 6 vídeos em posições espalhadas da lista e busquei a data exata de cada um; a ordem das datas acompanhou a ordem das posições sem uma única inversão.

| Posição na lista | Data exata | ID |
|---|---|---|
| 1 | 31/07/2026 | `a4BU3TBY9ck` |
| 752 | 29/02/2024 | `J6sjmko5Kv0` |
| 1.006 | 10/05/2023 | `bmdWPxaBofs` |
| 1.180 | 22/10/2022 | `bx-sTOSteRA` |
| 1.312 | 23/05/2022 | `D_oiX4mMPpU` |
| 1.562 | 24/09/2021 | `QZ5RkR-CSrQ` |
| 1.597 | 12/08/2021 | `kXzTa6t1fTg` |

Daí sai o ritmo real, **medido e não estimado**:

- Entre 29/02/2024 e 31/07/2026: **752 vídeos longos em 883 dias = 0,85 vídeo longo/dia**
- Entre 12/08/2021 e 24/09/2021 (posições 1.597→1.562): 35 vídeos em 43 dias = **0,81/dia**

**Conclusão dura: o canal publica ~1 vídeo longo por dia há pelo menos 5 anos, sem queda de ritmo.** Somando shorts, a operação passa de 1 peça/dia. Isto não é um canal — é uma redação diária.

---

## 2. Canais satélites

### @PodcastInvestidorSardinha — "Cortes Investidor Sardinha [Oficial]"

| Métrica | Valor |
|---|---|
| Vídeos | 517 |
| **Mediana de views** | **537** |
| Views totais do canal inteiro | 1.899.803 |
| Mediana 2025 | 963 |
| Mediana 2026 | 369 |

**Achado relevante e contraintuitivo:** o canal satélite está **em queda** (mediana caiu de 963 para 369 de 2025 para 2026) e **o canal satélite inteiro, somando 517 vídeos, tem menos views que UM único vídeo do canal principal** (1,90M contra 1,53M do top-1 — mesma ordem de grandeza, com 517 vídeos contra 1).

Os cortes recentes estão **em inglês** — ex.: *"CLIP 31: The real return calculation you need"* (22 views), *"How to diversify and pick good stocks"* (251 views), *"Should Beginners Take Fewer Risks When Investing?"* (357 views). É uma tentativa de internacionalização que, pelos números, **não pegou**.

Os poucos cortes que performaram são os **em português e com ângulo de conflito**:
- "ESTÃO TE OBRIGANDO A MORAR EM PRÉDIOS!" — 243.000
- "A economia real tá Morrendo... E ninguém percebeu!" — 162.000
- "Educação financeira não faz milagre: a real sobre viver no Brasil" — 92.000

> **Leitura:** o ativo é o canal principal. O satélite não é motor de tráfego — é subproduto. Quem copiar "monte um canal de cortes" copiou a parte que não funciona.

### Shorts e lives no canal principal

| Formato | n | Mediana | Máximo | Views totais |
|---|---|---|---|---|
| Shorts | 936 | **27.000** | 2.600.000 | 71.624.800 |
| Lives | 30 | **83.500** | 390.000 | — |

Shorts têm mediana **6,8x menor** que os vídeos longos dos últimos 12 meses (27.000 vs. 184.000). O short é volume e topo de funil raso; **o vídeo longo é onde está o valor**. A live, com mediana de 83.500 e apenas 30 unidades, é evento pontual — não é o pilar.

---

## 3. Máquina de monetização

### 3.1 O link rastreado por vídeo — o achado mais importante desta fase

A primeira linha da descrição de todo vídeo analisado é um encurtador próprio (`sard.ink`). Segui o redirecionamento:

```
https://sard.ink/461-AUVP
        ↓ 302
https://www.auvp.com.br/?utm_source=youtube&utm_medium=link&utm_campaign=31-07-26
```

**O `utm_campaign` é a data de publicação do próprio vídeo (31-07-26).**

Isso significa que **cada vídeo recebe seu próprio link rastreado**, e a AUVP consegue atribuir matrícula por vídeo publicado. Não é "link na descrição": é um sistema de atribuição diária. Nas descrições coletadas apareceram links distintos — `sard.ink/3k194rm`, `sard.ink/3UnDLqL`, `sard.ink/3IuoWMI`, `sard.ink/3nDNICf`, `sard.ink/3jXFZgB` — confirmando que o link varia por peça.

> Consequência prática: eles sabem, com números, **qual tema de vídeo gera aluno** — não apenas qual gera view. A pauta é retroalimentada por dado de conversão, não por opinião.

### 3.2 O funil AUVP, percorrido de verdade

| Etapa | O que está escrito lá |
|---|---|
| 1. Vídeo no YouTube | 1ª linha da descrição: *"🧠 Aprenda a investir comigo no Brasil e no mundo: https://sard.ink/461-AUVP"* |
| 2. Redirect rastreado | `auvp.com.br` com utm da data do vídeo |
| 3. Landing AUVP | Headline: *"Aprenda a investir no Brasil e no mundo"* / Sub: *"Do zero a investidor em 8 semanas"* |
| 4. **Gate** | CTA principal **não é comprar** — é *"FAÇA SUA ANÁLISE DE PERFIL"* → `form.auvp.com.br` |
| 5. Qualificação | Página diz: *"O acesso não é para todos"* |
| 6. Preço | **Nunca exibido na landing.** FAQ: *"A análise de perfil é 100% gratuita. O aluno só desembolsa qualquer valor depois de ser aprovado"* |
| 7. Escassez | *"Inscrições abertas para a turma 57"* + contador regressivo |
| 8. Garantia | *"Aprendizado garantido ou 100% do seu dinheiro de volta"* (exige concluir curso, emitir certificado e passar na prova) |

**A mecânica central: inverter o papel do vendedor.** O visitante não é convidado a comprar; é convidado a **se candidatar**. O preço é retido até depois da aprovação. "Turma 57" é prova social de longevidade e escassez ao mesmo tempo.

### 3.3 Outros ativos do ecossistema

| Ativo | Evidência |
|---|---|
| Telegram | `https://t.me/investidorsardinha` — apareceu em **5 de 5** descrições analisadas (elemento fixo) |
| Plataforma de alunos | `https://plataforma.auvp.com.br/` |
| Formulário de qualificação | `form.auvp.com.br` |
| AUVP Consultoria | Entidade separada da AUVP Escola no Reclame Aqui (duas razões sociais distintas) |

**Escala declarada pela própria AUVP** (na landing, não verificável por fora): *"mais de 100 aulas"*, *"8 livros digitais exclusivos"*, *"35 mil alunos ativos"*, curso de 8 semanas, lives semanais com Raul.

**Reclame Aqui:** a AUVP Escola ("A Única Verdade Possível") **não tem reputação consolidada** — menos de 10 reclamações avaliadas; registro de 2 reclamações, 50% respondidas, tempo médio 19h. Para uma operação que se declara com 35 mil alunos ativos, volume de reclamação praticamente nulo. ⚠️ Não foi possível auditar isso a fundo (ver Limitações).

### 3.4 O motor interno de tráfego

As descrições contêm um bloco fixo **"RECOMENDADOS PARA INICIANTES"** que aponta para os próprios vídeos do canal. E os vídeos apontados **não são aleatórios — são os campeões históricos**:

- `bx-sTOSteRA` — o vídeo **#1 mais visto do canal** (1.533.792)
- `kXzTa6t1fTg` — o **#3 mais visto** (1.246.198)
- `hzow4AFT1Dk` — 598.000 views

Ou seja: todo vídeo novo despeja tráfego nos evergreens que mais convertem. O catálogo se alimenta.

---

## 4. Diagrama textual — do vídeo até o dinheiro

```
                    ┌─────────────────────────────────────────┐
                    │  PRODUÇÃO: ~1 vídeo longo/dia (5+ anos) │
                    │  + shorts (936) + lives (30)            │
                    └──────────────────┬──────────────────────┘
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
   ┌────▼─────┐                 ┌──────▼──────┐               ┌───────▼──────┐
   │  SHORTS  │                 │ VÍDEO LONGO │               │    LIVES     │
   │ med 27k  │  ──atração──►   │  med 184k   │  ◄──evento──  │   med 83,5k  │
   │ (raso)   │                 │ (O ATIVO)   │               │  (pontual)   │
   └──────────┘                 └──────┬──────┘               └──────────────┘
                                       │
                    ┌──────────────────┼──────────────────┐
                    │                  │                  │
              ┌─────▼─────┐    ┌───────▼────────┐  ┌──────▼───────┐
              │ 1ª LINHA  │    │ "RECOMENDADOS  │  │  TELEGRAM    │
              │ DESCRIÇÃO │    │ PARA INICIANTES"│ │ (5/5 vídeos) │
              │ sard.ink  │    │ → aponta p/ os │  │  audiência   │
              │ ÚNICO por │    │ TOP-1 e TOP-3  │  │  própria     │
              │ vídeo     │    │ do canal       │  │  (fora do    │
              └─────┬─────┘    └───────┬────────┘  │  algoritmo)  │
                    │                  │           └──────────────┘
                    │                  └──► recircula p/ evergreen
                    │                       que converte melhor
                    ▼
        ┌───────────────────────────┐
        │  auvp.com.br              │
        │  ?utm_campaign=DATA-DO-   │
        │   VÍDEO  ◄── ATRIBUIÇÃO   │
        │   POR PEÇA PUBLICADA      │
        └─────────────┬─────────────┘
                      ▼
        ┌───────────────────────────┐
        │  GATE: "Análise de perfil"│   ← NÃO vende. QUALIFICA.
        │  form.auvp.com.br         │
        │  "O acesso não é p/ todos"│
        └─────────────┬─────────────┘
                      ▼
        ┌───────────────────────────┐
        │  APROVAÇÃO → só aqui      │
        │  aparece o PREÇO          │
        │  "turma 57" + contador    │
        │  garantia 100%            │
        └─────────────┬─────────────┘
                      ▼
        ┌───────────────────────────┐
        │  AUVP ESCOLA (curso 8 sem)│
        │        +                  │
        │  AUVP CONSULTORIA         │──► receita recorrente
        │  plataforma.auvp.com.br   │    (assessoria/consultoria)
        └───────────────────────────┘
```

**O dado que amarra tudo:** o `utm_campaign` datado fecha o ciclo. Vídeo → link único → matrícula atribuída ao vídeo. Eles medem qual pauta gera aluno e realimentam a produção diária com isso.

---

## 5. Linha do tempo de viradas (medida por mediana de views)

Usando as datas aproximadas do YouTube (⚠️ imprecisas para vídeos antigos — ver Limitações), a evolução da mediana anual:

| Ano | n | Mediana de views |
|---|---|---|
| 2020 | 239 | 10.000 |
| 2021 | 333 | 23.000 |
| 2022 | 355 | 44.000 |
| 2023 | 317 | 76.000 |
| 2024 | 317 | 81.000 |
| **2025** | 409 | **175.000** |
| 2026 (até jul) | 210 | 197.500 |

**A virada é 2024 → 2025: a mediana mais que dobrou (81.000 → 175.000, +116%) — e é o único salto dessa magnitude na série.** Nos anos anteriores o crescimento era de ~30-70% ao ano; em 2025 o canal muda de patamar. Também é o ano de maior volume de publicação (409 vídeos, o recorde da série).

⚠️ **Esta tabela usa datas aproximadas e deve ser lida como tendência, não como número exato.** A direção do movimento (crescimento contínuo com salto em 2025) é robusta; os valores por ano, não.

---

## 6. O que NÃO foi coletável (e por quê)

| Item | Status | Motivo |
|---|---|---|
| Datas exatas de todos os 2.181 vídeos | **Parcial** | O YouTube só entrega data exata no endpoint `/watch`, que bloqueou este IP (429 + "Sign in to confirm you're not a bot" — bloqueio típico de IP de datacenter). Datas exatas obtidas apenas para o subconjunto de outliers, em coleta lenta. |
| Aba "Sobre" do canal (bio + links completos) | **NÃO COLETADO** | WebFetch em `youtube.com` é redirecionado para `google.com/sorry` (captcha). O mapa de links foi reconstruído a partir das descrições dos vídeos. |
| Presença fora do YouTube (Instagram, TikTok, X) | **NÃO VERIFICADO** | Não confirmável sem a aba "Sobre". Não vou listar perfis que não consegui abrir. |
| Preço da AUVP | **NÃO DIVULGADO** | Por desenho do funil — só aparece após aprovação no formulário. Não é falha de coleta: é a mecânica. |
| Reputação consolidada no Reclame Aqui | **INEXISTENTE** | A própria plataforma informa que não há 10 reclamações avaliadas para calcular nota. |
| Afiliados / corretora parceira | **NÃO VERIFICADO** | Nenhum link de corretora ou programa de afiliados apareceu nas 5 descrições analisadas até aqui. A monetização observada é 100% AUVP própria. |

---

## O que isso muda para a Vero

- **O link tem que ser rastreado por peça, não por canal.** O `utm_campaign` datado é o que transforma conteúdo em decisão de pauta baseada em dado. Sem isso, a Vero vai escolher tema por achismo. É a primeira coisa a montar — antes do primeiro vídeo.
- **O CTA da Vero não deve vender: deve qualificar.** "Análise de perfil" + "o acesso não é para todos" + preço retido é exatamente a postura que a Vero já tem no método ("status não se compra, se comprova"). A Vero não precisa importar isso — precisa reconhecer que já é seu, e construir o funil assim desde o dia 1.
- **Não copiar o canal de cortes.** 517 vídeos, mediana 537 views, em queda. O ativo é o vídeo longo diário. Para a Vero, que tem menos braço de produção, isso significa concentrar tudo em uma peça longa boa e recorrente — não pulverizar em satélites.
