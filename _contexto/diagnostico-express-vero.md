# Diagnóstico Express Vero — Documentação Completa

> Documento de referência para qualquer agente que precise trabalhar,
> manter ou evoluir esta ferramenta. Leia integralmente antes de
> qualquer modificação.

---

## 1. O que é e para que serve

O **Diagnóstico Express Vero** é uma ferramenta de triagem de consciência
operacional, usada na abertura de imersões presenciais ou online da Vero.

**Não é** um diagnóstico completo. É uma fotografia rápida do estado atual
da empresa com base em um princípio único:

> "O que acontece com a empresa quando o empresário deixa de estar em cima?"

A ferramenta entrega ao empresário:
1. Estado operacional provável (Raiz, Trilha, Gestão ou Legado)
2. Pilar de maior dependência (Financeiro, Operação, Pessoas ou Vendas)
3. Leitura direta sobre o sistema
4. Frase de impacto

**A devolutiva não vende, não aconselha, não motiva e não promete.**
Ela apenas fotografa o estado atual, como definido no Método Vero.

---

## 2. Arquivos criados

```
_artefatos/
├── diagnostico-express-vero.html             ← Versão interativa (digital)
└── diagnostico-express-vero-imprimivel.html  ← Versão imprimível (papel A4)
```

### 2.1 Versão interativa (`diagnostico-express-vero.html`)

HTML/CSS/JavaScript puro, zero dependências externas.

- Uma pergunta por tela, com barra de progresso discreta
- Opções clicáveis — botão "Próxima" aparece após seleção
- Resultado calculado automaticamente ao final
- Tela de resultado com: nível, leitura, frase de impacto, mapa dos 4 pilares, pilar(es) limitante(s) e CTA cognitivo
- Botão para refazer o diagnóstico
- Responsivo (mobile e desktop)
- **Uso:** imersões online, landing pages, links diretos

### 2.2 Versão imprimível (`diagnostico-express-vero-imprimivel.html`)

HTML otimizado para `@media print`, layout A4.

- Abre no navegador com botão "Imprimir / Salvar PDF" (some na impressão)
- **Folhas 1–2:** 8 questões com círculos marcáveis à mão
- **Folha 3 (nova página forçada):** gabarito + planilha de cálculo passo a passo + leituras
- Campos Nome / Empresa / Data no topo
- Cálculo feito pelo próprio empresário — sem suporte externo
- A folha 3 é separada das questões intencionalmente: o empresário responde sem ver o gabarito
- **Uso:** imersões presenciais, impressão em quantidade

---

## 3. Metodologia e lógica de cálculo

### 3.1 Os 4 níveis Vero

| Nível   | Emoji | Descrição resumida                                               |
|---------|-------|------------------------------------------------------------------|
| Raiz    | 🌱    | Empresa depende diretamente da presença do empresário           |
| Trilha  | 🛤️   | Há estrutura, mas ela depende de vigilância contínua            |
| Gestão  | 🧠    | Funciona com previsibilidade, mas critérios ainda dependem dele  |
| Legado  | 🏛️   | Opera com autonomia institucional; decisões não centralizam      |

### 3.2 Os 4 pilares

Financeiro · Operação · Pessoas · Vendas

Cada pilar tem 2 perguntas (uma de dependência, uma de sustentação de 30 dias).

### 3.3 Lógica de cálculo (inegociável)

```
Score interno: Raiz=1, Trilha=2, Gestão=3, Legado=4

1. Score de cada pilar = MÍNIMO entre suas 2 perguntas
   (o pilar vale seu ponto mais fraco, não a média)

2. Resultado final = MÍNIMO entre os 4 pilares
   (o sistema cai pelo ponto fraco — princípio oficial Vero)

3. Se houver empate no pior pilar, todos os pilares empatados
   são exibidos como "limitantes". Não há desempate artificial.
```

**Exemplo:**
```
P1 Financeiro → Gestão (3)
P2 Financeiro → Trilha (2)   → Pilar Financeiro = Trilha (2)

P3 Operação   → Gestão (3)
P4 Operação   → Gestão (3)   → Pilar Operação   = Gestão (3)

P5 Pessoas    → Legado (4)
P6 Pessoas    → Gestão (3)   → Pilar Pessoas     = Gestão (3)

P7 Vendas     → Trilha (2)
P8 Vendas     → Gestão (3)   → Pilar Vendas      = Trilha (2)

Resultado final = mínimo(Trilha, Gestão, Gestão, Trilha) = Trilha
Pilares limitantes: Financeiro e Vendas
```

---

## 4. As 8 perguntas e mapeamento de respostas

As alternativas são embaralhadas em cada questão para que a progressão
Raiz→Trilha→Gestão→Legado não seja percebida. O empresário vê apenas
comportamentos, nunca rótulos de nível.

### Pergunta 1 — Financeiro / Dependência

> Quando surge uma despesa inesperada relevante, o que normalmente acontece?

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | Existe alguma organização, mas normalmente eu preciso intervir para ajustar. | Trilha |
| B | Eu preciso decidir rapidamente o que será pago, adiado ou sacrificado. | Raiz |
| C | Existem critérios claros para lidar com isso sem depender de mim. | Legado |
| D | A empresa consegue absorver boa parte da situação sem grande ruptura. | Gestão |

---

### Pergunta 2 — Financeiro / Sustentação

> Se você parar de acompanhar os números por 30 dias, o cenário mais provável é:

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | Eu provavelmente perderia a noção real do que está acontecendo. | Raiz |
| B | A maior parte continuaria sob controle, com poucos ajustes depois. | Gestão |
| C | Algumas coisas seguiriam, mas surgiriam surpresas no fechamento. | Trilha |
| D | Os critérios financeiros continuariam sendo seguidos sem minha presença. | Legado |

---

### Pergunta 3 — Operação / Dependência

> Quando surge um problema operacional importante, o que costuma acontecer?

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | Só situações específicas escalam para mim. | Gestão |
| B | A operação resolve usando critérios conhecidos. | Legado |
| C | Ele chega rapidamente até mim. | Raiz |
| D | Tentam resolver antes, mas normalmente eu acabo entrando. | Trilha |

---

### Pergunta 4 — Operação / Sustentação

> Se você parar de acompanhar a operação por 30 dias, o mais provável é:

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | O sistema continuaria se autorregulando. | Legado |
| B | O padrão se perderia rapidamente. | Raiz |
| C | A operação continuaria, mas começaria a variar. | Trilha |
| D | O padrão se manteria na maior parte do tempo. | Gestão |

---

### Pergunta 5 — Pessoas / Dependência

> Quando aparece um conflito interno relevante, o que normalmente acontece?

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | Os líderes absorvem a maior parte da situação. | Gestão |
| B | Eu sou chamado rapidamente. | Raiz |
| C | Existe um critério conhecido para tratar isso sem depender de mim. | Legado |
| D | Tentam resolver antes de me envolver. | Trilha |

---

### Pergunta 6 — Pessoas / Sustentação

> Se você parar de acompanhar o time por 30 dias, o cenário mais provável é:

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | Os líderes sustentariam boa parte da rotina. | Gestão |
| B | O ambiente continuaria, mas começaria a perder ritmo. | Trilha |
| C | Surgiriam conflitos ou desalinhamentos rapidamente. | Raiz |
| D | Os comportamentos esperados continuariam sendo reproduzidos. | Legado |

---

### Pergunta 7 — Vendas / Dependência

> Quando as vendas começam a cair, o que tende a acontecer primeiro?

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | O time reage, mas depende de mim para corrigir o caminho. | Trilha |
| B | O sistema comercial reage antes de depender de mim. | Gestão |
| C | Existem critérios claros para correção sem minha presença. | Legado |
| D | Eu preciso assumir a frente rapidamente. | Raiz |

---

### Pergunta 8 — Vendas / Sustentação

> Se você parar de acompanhar o comercial por 30 dias, o resultado mais provável é:

| Letra | Texto da opção | Nível |
|-------|----------------|-------|
| A | O processo continuaria seguindo critérios claros. | Legado |
| B | As vendas cairiam rapidamente. | Raiz |
| C | Boa parte da previsibilidade seria mantida. | Gestão |
| D | As vendas oscilariam bastante. | Trilha |

---

## 5. Gabarito consolidado (tabela rápida)

|  P  | Pilar      | A      | B      | C      | D      |
|-----|------------|--------|--------|--------|--------|
|  1  | Financeiro | Trilha | Raiz   | Legado | Gestão |
|  2  | Financeiro | Raiz   | Gestão | Trilha | Legado |
|  3  | Operação   | Gestão | Legado | Raiz   | Trilha |
|  4  | Operação   | Legado | Raiz   | Trilha | Gestão |
|  5  | Pessoas    | Gestão | Raiz   | Legado | Trilha |
|  6  | Pessoas    | Gestão | Trilha | Raiz   | Legado |
|  7  | Vendas     | Trilha | Gestão | Legado | Raiz   |
|  8  | Vendas     | Legado | Raiz   | Gestão | Trilha |

---

## 6. Textos de resultado (devolutiva)

### Leituras por nível

**Raiz:**
> Sua empresa ainda depende fortemente da sua presença para funcionar. Quando você não está, decisões travam, urgências crescem e o sistema perde clareza.

**Trilha:**
> Sua empresa já possui alguma estrutura, mas ela ainda depende da sua vigilância. Quando você afrouxa, o sistema continua por um tempo, mas começa a perder ritmo.

**Gestão:**
> Sua empresa já funciona com previsibilidade, mas ainda depende do seu critério para decisões relevantes. O desafio não é mais fazer funcionar; é decidir o que deve ou não continuar existindo.

**Legado:**
> Sua empresa demonstra sinais de autonomia institucional. As decisões não dependem apenas da sua presença, e parte importante do sistema continua mesmo sem sua intervenção.

### Frases de impacto por nível

| Nível | Frase |
|-------|-------|
| Raiz | "Hoje, o principal sistema da empresa ainda é você." |
| Trilha | "Hoje, a empresa funciona, mas ainda precisa que você vigie para não voltar ao improviso." |
| Gestão | "Hoje, o risco não é parar de funcionar; é continuar carregando complexidade demais." |
| Legado | "Hoje, a empresa começa a mostrar que consegue existir além da sua presença." |

### CTA cognitivo (único permitido — igual nas duas versões)

> Esse diagnóstico não pede ação imediata. Ele apenas mostra onde o sistema ainda depende de você. O próximo passo existe — mas a decisão de dar ou não não acontece aqui.

---

## 7. Regras que não podem ser alteradas

1. **Lógica do pior pilar** — o resultado final é sempre o pilar mais fraco, nunca a média.
2. **Mínimo por pilar** — cada pilar vale o menor nível entre suas duas perguntas.
3. **Embaralhamento** — nenhuma questão pode ter as opções na ordem Raiz→Trilha→Gestão→Legado (ascendente óbvia) nem Legado→Gestão→Trilha→Raiz (descendente óbvia).
4. **Nível invisível** — o empresário não vê os rótulos Raiz/Trilha/Gestão/Legado nas alternativas durante o preenchimento.
5. **Sem motivação** — proibido usar: "Parabéns", "Você mandou bem", "Está quase lá", "score", "nota", "ranking", "performance", "alta performance", "potencial", "evolução garantida".
6. **Sem CTA comercial** — a tela/folha de resultado não pode vender nada nem sugerir plano de ação.

---

## 8. Design e tom

- **Paleta (versão digital):** fundo `#F8F7F4`, texto `#18180E`, acento `#1D2C22` (verde-floresta)
- **Níveis:** Raiz `#9B7346` (âmbar), Trilha `#5B8B6A` (sálvia), Gestão `#4C6B96` (ardósia), Legado `#1D2C22` (floresta)
- **Tom:** adulto, direto, institucional, sem excesso de cores, sem linguagem motivacional
- **Princípio visual:** "Estou olhando para minha empresa com frieza" — não "Estou fazendo um teste de Instagram"

---

## 9. Decisões de embaralhamento (anti-viés)

A ordem das letras por questão foi definida para que:
- Nenhuma questão siga a ordem óbvia ascendente (R,T,G,L) ou descendente (L,G,T,R)
- A distribuição de quais letras mapeiam quais níveis seja aproximadamente equilibrada ao longo das 8 questões
- Opções do mesmo comprimento e sofisticação de linguagem não entreguem o nível pela forma

Padrão de níveis por letra, por questão:
```
Q1: T R L G
Q2: R G T L
Q3: G L R T
Q4: L R T G
Q5: G R L T
Q6: G T R L
Q7: T G L R
Q8: L R G T
```

---

## 10. Branch e histórico

- Branch: `claude/vero-express-diagnostic-eDHFt`
- Commits relevantes:
  - `f927188` — versão interativa digital
  - `fdf89a6` — versão imprimível A4
- Documentação (este arquivo): `_contexto/diagnostico-express-vero.md`
