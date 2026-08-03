# FASE 4 — THUMBNAILS

> Base: **30 thumbnails dos outliers** + **11 thumbnails de vídeos medianos do mesmo período** (150–210 mil views, últimos 24 meses), baixadas de `i.ytimg.com/vi/<ID>/maxresdefault.jpg` e inspecionadas visualmente uma a uma.
> Também rodei análise de cor por pixel nas 41 imagens.

---

## 1. O ACHADO PRINCIPAL: o template NÃO é o que separa outlier de mediano

Esta é a conclusão mais importante — e a mais fácil de errar.

Comparei lado a lado as 30 thumbs dos outliers e as 11 dos medianos. **São visualmente indistinguíveis em template:**

| Elemento | Outliers (n=30) | Medianos (n=11) |
|---|---|---|
| Rosto do Raul presente | 30/30 | 11/11 |
| Texto em 2 linhas, CAIXA ALTA | 30/30 | 11/11 |
| Fonte condensada pesada, itálica | 30/30 | 11/11 |
| Branco + destaque amarelo/ouro | 30/30 | 11/11 |
| Fundo escuro alto contraste | 30/30 | 11/11 |

Medição por pixel confirma:

| Métrica | Outliers | Medianos |
|---|---|---|
| Brilho médio (0–255) | 79,8 | 76,2 |
| % pixels amarelo/ouro | 9,7% | **11,6%** |
| % pixels vermelho/quente | **26,1%** | 14,9% |
| Saturação média | 46,9% | 43,9% |

**Os medianos têm até MAIS amarelo que os outliers.** A única diferença apreciável é vermelho/laranja (26,1% vs 14,9%, ~1,75x). ⚠️ **n=11 no grupo mediano — amostra pequena; trate como indicação, não prova.**

> **Conclusão: o template visual é constante do canal, não variável de desempenho.** Copiar o template não gera outlier — o template é o piso de entrada. O que varia é **o que está dentro dele**, e é isso que as regras abaixo capturam.

### O que realmente diferencia (leitura do conteúdo das imagens)

| | Outliers | Medianos |
|---|---|---|
| **Objeto mostrado** | Coisas que o espectador **possui ou é**: carro, casa, plano de saúde, cartão de crédito, PIX, condomínio, app do banco | Coisas que **o mercado faz**: gráfico de pizza REITs/ETFs, logos Petrobras/Eletrobras/Coteminas/Springs Global, seta de índice, "Selic 14,75%" |
| **Sujeito** | "você", "classe média", um vilão com nome (PCC, BlackRock, Receita, Silvio Santos, Barsi) | o investidor genérico, o cenário macro |
| **Metáfora visual** | burro (burrice), leão, caveira, ampulheta, cofre | ticker, gráfico, bandeira de país |

**O outlier mostra a vida do espectador. O mediano mostra o mercado.** É a mesma conclusão da Fase 2 ("juntar" 4,0x vs "resultados" 0,2x), agora em imagem.

---

## 2. AS 10 REGRAS (cada uma com ≥3 exemplos reais)

### Regra 1 — O texto da thumb NUNCA repete o título; ele é um SEGUNDO gancho
**Medido: em ~22 das 30 thumbs (73%) o texto acrescenta informação que não está no título.** Este é o mecanismo mais subestimado do canal: título e thumb são **duas iscas diferentes** para o mesmo vídeo.

| Título | Texto da thumb |
|---|---|
| "4 FORMAS DE GANHAR DINHEIRO DO SEU BANCO!" | **"COMO DAR PREJUÍZO NO SEU BANCO?"** (inverte de ganho para vingança) |
| "O ROUBO DO BANCO PAN, O MAIOR ERRO DA VIDA DE SILVIO SANTOS" | **"ELE FALIU UM BANCO"** (3 palavras, sem nome — a foto entrega o nome) |
| "Como a tragédia do Rio Grande do Sul AFETA VOCÊ?" | **"O QUE VAI SER DA ECONOMIA BRASILEIRA?"** |
| "Fuja de comprar apartamentos, é latada!" | **"A ARMADILHA DOS PRÉDIOS NOVOS"** |
| "De R$ 3 a R$ 15 mil de salário o que aprendi e não faria de novo" | **"EU FARIA TUDO DIFERENTE!"** |
| "BLACKROCK move US$ 2,1 TRILHÕES: o que eles estão VENDO?" | **"O SINAL FOI DADO"** |

### Regra 2 — Rosto em 100% dos casos, e o rosto FAZ a emoção do texto
30/30. Não é foto neutra: a expressão encena a frase.
- `BHzrlCqNH0I` "CHEGA DESSA M*RDA!" — rosto de raiva/fartura
- `Nvspt_Y4n6E` "O QUE VAI SER DA ECONOMIA BRASILEIRA?" — mãos na cabeça, desespero
- `7rKnjDaiP0Q` "VÃO PEGAR TODO MUNDO!" — olhos arregalados, alarme
- `R94Wym4KC0s` "PLANO DE SAÚDE NÃO PASSA DE BURRICE..." — mão no queixo, desdém

### Regra 3 — 3 a 8 palavras, sempre em 2 linhas
Nunca mais que ~8 palavras. A quebra em duas linhas é onde mora o contraste de cor (Regra 4).
- "ELE FALIU UM BANCO" (4)
- "O SINAL FOI DADO" (4)
- "VÃO PEGAR TODO MUNDO!" (4)
- "A CAIXA PRETA ABRIU" (4)
- "DEU RUIM PRO NUBANK?" (4)

### Regra 4 — Branco na primeira linha, AMARELO/OURO na palavra-veredicto
O amarelo nunca é decoração: cai exatamente sobre a palavra que carrega o julgamento.
- "PLANO DE SAÚDE NÃO PASSA DE / **BURRICE DA CLASSE MÉDIA?**"
- "A ILUSÃO DOS DIVIDENDOS: / **BARSI MENTIU PRA VOCÊ?**"
- "FIIS: A CILADA DA / **CLASSE MÉDIA?**"
- "CARTEIRA DE INVESTIMENTOS / **PARA INICIANTES!**"

### Regra 5 — Objeto físico que o espectador possui
Não é conceito abstrato: é a coisa dele.
- `3I3WS3x4_Ss` — carro + burro
- `Mz13HoS4Ipk` — logo do PIX + cartão de crédito
- `-PB2TCoBT1s` — placa "CONDOMÍNIO" + prédio
- `J6sjmko5Kv0` — casa

### Regra 6 — Metáfora visual literal para o insulto
O burro (animal) aparece toda vez que o tema é "burrice". O trocadilho é executado em imagem.
- `R94Wym4KC0s` — burro ao lado do rosto ("burrice da classe média")
- `3I3WS3x4_Ss` — burro + carro
- `bHh-t34vJGQ` — burro + placa de FII ("a cilada da classe média")
- `PuGh2XT-RmM` — burro + megafone ("tão te fazendo de trouxa")

### Regra 7 — Vilão com rosto ou logo reconhecível
- `QZ5RkR-CSrQ` — Silvio Santos + fachada "PanAmericano"
- `D_oiX4mMPpU` — logo Nubank
- `5gyAqoE0_qU` — prédio "BLACKROCK"
- `7rKnjDaiP0Q` — selo "SONEGADOR DETECTADO! Receita Federal"
- `opk_iKVlzsI` — rosto de Barsi (**nomeado na thumb, não no título**)

### Regra 8 — Seta vermelha / selo de carimbo apontando a prova
- `bx-sTOSteRA` — seta vermelha para a planilha da carteira
- `QZ5RkR-CSrQ` — seta vermelha para a fachada do banco
- `bmdWPxaBofs` — seta vermelha para a tabela de classes sociais
- `7rKnjDaiP0Q` — selo "SONEGADOR DETECTADO!"

### Regra 9 — Fundo escuro com fogo/vermelho quando o tema é perda
Confirmado pela medição: outliers têm 26,1% de pixels quentes contra 14,9% dos medianos.
- `kXzTa6t1fTg` — fundo em chamas
- `En1Ef6ras1E` — fogo + bandeira do Brasil
- `m26jCNsiMSo` — carro batido, vidro quebrado
- `yCoHTnhkGRo` — caixa preta com fogo saindo

### Regra 10 — Zero emoji na thumb (ao contrário do título)
Nas 30 thumbs inspecionadas **não há um único emoji**, embora 4 dos mesmos vídeos tenham emoji no título. Coerente com o dado da Fase 3: emoji no título tem lift **0,53x** (aparece mais nos piores). **A thumb é o canal disciplinado; o título é onde ele experimenta.**

---

## 3. TRÊS TEMPLATES PARA O DESIGNER

Descritos para execução direta. Proporção 1280×720. Todos assumem a identidade Vero: **ouro (#C9A227 ou similar) + preto**, tipografia display para o veredicto.

### TEMPLATE A — "O VEREDICTO"
> Uso: bloco que acusa um comportamento (o equivalente Vero de "burrice da classe média").

```
┌────────────────────────────────────────────┐
│                      ░░░░░░░░░░░░░░░░░░░░  │
│   [OBJETO FÍSICO]      ROSTO (recorte,     │  ← objeto à esquerda, rosto à direita
│   planilha, caderno    3/4, expressão de   │     fundo preto texturizado
│   de anotação,         desconfiança seca)  │
│   chave, porta)                            │
│ ┌────────────────────────────────────────┐ │
│ │ LINHA 1 EM BRANCO (setup, 3-4 palavras)│ │  ← 2 linhas, CAIXA ALTA, condensada
│ │ LINHA 2 EM OURO (veredicto, 2-3 palav.)│ │     ouro só na palavra-julgamento
│ └────────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```
- Texto: 5–7 palavras no total, nunca mais.
- Ouro exclusivamente sobre o julgamento ("VIRA REFÉM", "NÃO É EMPRESA").
- **Sem fogo, sem explosão** — a Vero substitui o sensacionalismo quente por preto sólido e ouro. O contraste vem da tipografia, não do incêndio.

### TEMPLATE B — "A PROVA NA MESA"
> Uso: bloco com número/critério (fluxo de caixa, margem, pró-labore).

```
┌────────────────────────────────────────────┐
│  ROSTO à esquerda   │  [DOCUMENTO REAL]    │
│  (olhando para o    │  planilha, extrato,  │  ← documento legível, ocupando 40%
│   documento, não    │  canvas preenchido   │     com UM número em destaque ouro
│   para a câmera)    │  à mão               │
│ ┌────────────────────────────────────────┐ │
│ │ O NÚMERO QUE VOCÊ                      │ │
│ │ NUNCA OLHOU                            │ │
│ └────────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```
- Um único número grande e legível (ex.: "R$ 0" no campo pró-labore).
- Marcação manuscrita em ouro circulando o número — o equivalente sóbrio da seta vermelha (Regra 8).
- O rosto **não** olha para a câmera: olha para a prova. Direciona o olhar do espectador.

### TEMPLATE C — "AS DUAS TRAJETÓRIAS"
> Uso: blocos de Gestão e Legado (trade-off, renúncia, dependência do dono).

```
┌────────────────────────────────────────────┐
│   LADO A          │  │        LADO B       │
│  (mesma cena,     │▐▌│   (mesma cena,      │  ← divisória vertical em ouro, 6px
│   dono presente,  │▐▌│    dono ausente,    │
│   tudo aceso)     │▐▌│    tudo funcionando)│
│ ┌────────────────────────────────────────┐ │
│ │ COM VOCÊ  │  SEM VOCÊ                  │ │  ← 2-4 palavras, uma de cada lado
│ └────────────────────────────────────────┘ │
└────────────────────────────────────────────┘
```
- Sem rosto ou com rosto pequeno num dos lados — aqui o contraste **é** a mensagem.
- Máximo 4 palavras.
- Serve à tese da Vero (dispensabilidade) sem precisar de insulto.

---

## 4. O que NÃO foi coletável

| Item | Status | Motivo |
|---|---|---|
| CTR das thumbnails | **IMPOSSÍVEL** | Dado privado do YouTube Analytics. Ninguém fora do canal tem acesso — qualquer afirmação de CTR alheio é invenção. |
| Histórico de thumbs trocadas | **NÃO COLETÁVEL** | O YouTube não expõe versões anteriores. Como o canal testa títulos (Fase 3), é provável que teste thumbs também, mas **não verifiquei**. |
| Amostra de medianos | **PEQUENA (n=11)** | Suficiente para mostrar que o template é o mesmo; insuficiente para estatística fina de cor. |

---

## O que isso muda para a Vero

- **Título e thumb precisam ser duas iscas diferentes, não a mesma frase repetida.** É a regra mais barata e mais ignorada: 73% das thumbs dele dizem algo que o título não diz. Para a Vero: o título nomeia o problema, a thumb mostra a prova.
- **Copiar o template não gera resultado — o template é o piso.** Outliers e medianos dele são visualmente idênticos. O que separa é o objeto: **coisa que o espectador possui** (2,6x) contra **coisa que o mercado faz** (0,1–0,2x). Para a Vero: mostrar o caderno, o extrato, a porta da loja — nunca gráfico de mercado.
- **A Vero pode manter ouro+preto e ganhar disciplina onde ele perde.** Zero emoji nas thumbs dele já confirma a direção, e o dado do título (emoji 0,53x) diz que sobriedade não custa alcance. A Vero troca fogo e caveira por preto sólido, tipografia forte e um número real — mesmo contraste, sem sensacionalismo.
