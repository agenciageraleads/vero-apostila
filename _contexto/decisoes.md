# Registro de Decisoes — Projeto Apostila Vero

> Decisoes estrategicas tomadas ao longo do projeto.
> Cada decisao inclui data, contexto e motivo.

---

## Decisoes de Arquitetura

### D-001: Artefatos locais, sem scripts
**Data**: 2026-04-09
**Decisao**: Trabalhar com arquivos locais (Markdown + HTML + PDF), sem scripts Node/Python.
**Motivo**: Simplicidade. Lucas cria e aprova no chat Claude, salva localmente em pastas organizadas. Sem complexidade desnecessaria.

### D-002: HTML com @media print para design
**Data**: 2026-04-09
**Decisao**: Sofia diagrama em HTML com CSS de impressao. PDF gerado via Print do browser.
**Motivo**: Sem dependencia de Word, Canva ou ferramentas externas. Tudo nasce no chat e sai como PDF profissional.

### D-003: Um bloco por vez
**Data**: 2026-04-09
**Decisao**: Nunca escrever dois blocos simultaneamente. Cada bloco passa por todos os 9 passos antes do proximo comecar.
**Motivo**: Garante qualidade e consistencia. Nada avanca com problema escondido.

---

## Decisoes de Conteudo

### D-004: Iris absorve canvas personalizado (Opcao A)
**Data**: 2026-04-09
**Decisao**: Iris faz tanto o canvas estrutural (modelo da apostila) quanto o canvas personalizado (com exemplos reais).
**Motivo**: Um agente, duas entregas. Mais simples que criar um agente separado. Iris ja conhece o formato e a funcao do canvas.

### D-005: Canvas fisico para preenchimento manual
**Data**: 2026-04-09
**Decisao**: O canvas da apostila e um documento fisico. Campos abertos para o empresario preencher com caneta. Nao e digital.
**Motivo**: A apostila sera impressa. Campos precisam ser espacos reais com explicacao, nao campos de formulario.

### D-006: Ordem de escrita por pilar
**Data**: 2026-04-09
**Decisao**: Financeiro (completo) → Operacao → Vendas → Pessoas. Dentro de cada pilar: Raiz → Trilha → Gestao → Legado.
**Motivo**: Documento oficial "Ordem Oficial de Escrita". Financeiro e menos subjetivo e calibra o tom adulto. Pessoas e o mais abstrato e depende de tudo antes.

---

## Decisoes de Processo

### D-007: Lucas como coautor e arbitro final
**Data**: 2026-04-09
**Decisao**: Lucas le cada bloco como se fosse o empresario-alvo. Sua aprovacao tem prioridade sobre qualquer decisao do time de agentes.
**Motivo**: Lucas e o fundador da Vero. Ninguem conhece o empresario-alvo melhor que ele.

### D-008: Interface Claude como ambiente de trabalho
**Data**: 2026-04-09
**Decisao**: Usar a interface do Claude Code como ambiente principal de criacao. Sem app web, sem ferramentas externas.
**Motivo**: Economiza tokens. Mantém tudo numa thread. Lucas aprova em tempo real.

---

## Decisoes de Marca e Posicionamento

### D-009: Nova assinatura-mestra — "Vero. Uma escola para empresarios de verdade."
**Data**: 2026-07-18
**Decisao**: A assinatura publica da Vero passa a ser **"Vero. Uma escola para empresarios de verdade."**, com o "de verdade" como dispositivo verbal recorrente (alusao ao significado do nome: *vero* = verdadeiro, em italiano). A frase "Status nao se compra. Status se comprova." deixa de ser slogan publico e passa a ser **regra interna da camada avancada de certificacao**, onde a comprovacao por execucao continua literal.
**Motivo**: A Vero esta ampliando o rumo para formacao educacional (treinamentos modulares, imersoes, circuito de turismo) — porta de entrada aberta, sem tribunal de status. O principio permanece intacto: execucao, mao na massa, exemplos reais, conexao com o publico. O que muda e o mecanismo da promessa publica: de "status que se comprova" para "formacao de verdade". A certificacao continua existindo como camada avancada, e la a frase antiga segue valendo.

**Sistema verbal "de verdade" (aplicacao por contexto):**
| Contexto | Linha |
|----------|-------|
| Assinatura-mestra | Vero. Uma escola para empresarios de verdade. |
| Metodo | Formacao de verdade acontece na pratica. |
| Imersoes (porta de entrada) | Problemas de verdade, do seu negocio. |
| Apostila / conteudo | Exemplos de verdade, de empresas como a sua. |
| Camada avancada (certificacao) | Aqui, "de verdade" se comprova. (frase antiga vive aqui) |
| Storytelling institucional | Vero, do italiano: verdadeiro. O nome ja diz o metodo. |

---

### D-010: Oferta central — execucao guiada, nao validacao
**Data**: 2026-08-02
**Decisao**: O enquadramento "a Vero vende validacao" esta aposentado. A oferta central da Vero e **execucao guiada atraves de consultoria personalizada para cada nivel de maturidade do empresario** (Raiz/Trilha/Gestao/Legado). A certificacao/validacao permanece como camada avancada (coerente com D-009), mas nao e o mecanismo comercial principal.
**Motivo**: Decisao de Lucas ao revisar a estrategia do canal YouTube (02/08). O que o empresario compra e acompanhamento na execucao — o conteudo aberto gera demanda por essa execucao guiada, nao por um selo.

---

### D-011: Canal YouTube — cadencia, conteudo aberto e funil
**Data**: 2026-08-02
**Decisao**: (1) Cadencia de **1 video longo por semana** (15–25 min), gravacao em lote de 1 manha/mes, compromisso de sustentacao por anos — permanencia acima de pico. (2) **Blocos completos da apostila (narrativa + canvas) sao publicados de graca** no canal: o conteudo aberto e o motor de demanda pela consultoria (D-010). (3) O CTA dos videos aponta para a **Analise de Maturidade Operacional** — formulario que devolve ao empresario a fase dele e qualifica a conversa de consultoria; sem escassez artificial, sem venda direta no video. (4) Sem avatar de IA e sem voz sintetica — rosto e voz sao de Lucas/Ernane, inegociavel por coerencia com "de verdade".
**Motivo**: Fundamentado na autopsia do canal Investidor Sardinha (dados verificados em `_estrategia/canal-youtube-vero/autopsia/`): o motor e mediana sustentada e nao viral; os dois maiores videos do canal analisado sao aulas pagas liberadas; o CTA que qualifica supera o que vende. Guia de producao: `_estrategia/canal-youtube-vero/guia-producao-canal.md`.

---

### D-012: Marca unica — tudo e Vero, Proativo aposentada
**Data**: 2026-08-02
**Decisao**: A consultoria por nivel e produto **Vero**. A Proativo deixa de existir como marca comercial — o hands-on personalizado que ela representava vive dentro do braco Vero Consultoria. Resolve a contradicao entre a reuniao de 08/06 (Proativo = consultoria) e a D-010 (Vero vende consultoria).
**Motivo**: Uma marca so, mensagem limpa, funil sem passagem de bastao. Decisao de Lucas em 02/08.

---

### D-013: Arquitetura da oferta — escola com dois bracos, Imersao como produto principal
**Data**: 2026-08-02
**Decisao**: A Vero e uma **escola com dois bracos**: Vero Formacao (conteudo aberto, treinamentos modulares, Imersao Vero) e Vero Consultoria (Metodo Vero aplicado nos 4 niveis — execucao guiada/acompanhamento). Jornada oficial: conteudo aberto (aquisicao) → **Analise de Maturidade** (qualificador obrigatorio — impede matricula em nivel errado, nos dois sentidos) → **Imersao Vero** (produto principal, porta de entrada paga) → **Metodo Vero aplicado por nivel** (continuidade/receita recorrente). Treinamentos modulares sao complementos e canais extras, nunca o centro. **Certificacao: congelada no roadmap** — nao se comunica nem se constroi agora; horizonte de quem conclui a execucao guiada.
**Motivo**: Havia candidatos demais a produto principal e cada frente puxava para um lado. Consolidado em `_contexto/conceitos-vero.md` (documento-norte).

---

## Template para Novas Decisoes

```
### D-XXX: [Titulo]
**Data**: YYYY-MM-DD
**Decisao**: [O que foi decidido]
**Motivo**: [Por que foi decidido assim]
```
