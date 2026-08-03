# GUIA DE PRODUÇÃO — CANAL VERO NO YOUTUBE

> Baseado na autópsia do canal Investidor Sardinha (branch `autopsia-sardinha`).
> Princípio herdado do dado: **o motor é a mediana sustentada, não o viral**. Cadência inegociável antes de qualidade pontual.
> Princípio herdado da marca: **a Vero não pode ser sintética onde promete verdade**. Automatiza-se o processo, nunca a autenticidade.

---

## A REGRA DE OURO DA DIVISÃO

**Agentes fazem tudo que é processo. Lucas e Ernane fazem tudo que é presença, história real e decisão.**

O teste para qualquer etapa: *"Se o espectador descobrisse que isso foi feito por IA, quebraria a confiança?"*
- Roteiro estruturado por agente e falado por Lucas → não quebra (todo canal grande tem roteirista).
- Rosto/voz sintéticos, histórias inventadas, respostas automáticas fingindo ser o Lucas → **quebra. Proibido.**

---

## O PIPELINE COMPLETO (9 etapas)

### Etapa 1 — PAUTA (concepção do tema)
**Executor: AGENTE (Pauteiro) · Gate humano: aprovação em 10 min/semana**

O agente roda semanalmente (rotina cloud) e entrega 5 candidatos de pauta, cada um com:
- Tema + qual bloco da apostila sustenta (a apostila com 88 blocos é o estoque editorial — nenhum canal concorrente tem isso)
- 3 títulos no padrão validado (veredicto + grupo nomeado; sem emoji, sem interrogação, sem caixa alta)
- Ângulo de notícia quando houver (reforma tributária, juros, dados de PME — news-jacking com ângulo próprio)
- Fase-alvo (Raiz/Trilha/Gestão/Legado) respeitando a progressão dos pilares

**Humano decide**: qual dos 5 vai para roteiro. Veto por instinto é legítimo — o agente propõe, não decide.

### Etapa 2 — ROTEIRO
**Executor: AGENTE (Roteirista + Crítico + Guardiã) · Gate humano: leitura final de Lucas/Ernane**

Espelho do workflow da apostila, adaptado a vídeo:
1. **Roteirista** escreve no esqueleto validado pela autópsia: cold open com a tese na primeira frase → promessa de desconforto → desarme da ofensa → desenvolvimento com critério (não conclusão pronta) → CTA que qualifica aos ~75%
2. **Crítico** (Paulo do canal) devolve diagnóstico: onde suavizou, onde virou palestra, onde falta desconforto
3. **Guardiã** (Vera do canal) valida vocabulário Vero, regra da fase e os padrões medidos (bordão de abertura, "a gente" como pronome, timestamps de retenção)

**Humano faz**: a passada final de oralidade ("eu falaria assim?") e — crítico — **injeta a história real**: o caso do cliente, o número da própria empresa, o erro que vocês cometeram. Essa matéria-prima só existe na cabeça de vocês, e é ela que impede o roteiro de soar genérico. 20–30 min por roteiro.

### Etapa 3 — GRAVAÇÃO
**Executor: HUMANO (Lucas e/ou Ernane). Inautomatizável por decisão de marca.**

- **Sem avatar de IA, sem voz clonada, nunca.** O canal de uma escola "para empresários de verdade" com apresentador sintético é uma contradição que a audiência pune.
- **Gravação em lote**: 1 manhã por mês grava 4–5 vídeos (a cadência é 1/semana — Decisão 1 da autópsia). Teleprompter com o roteiro aprovado.
- Setup fixo (mesmo enquadramento, mesma luz) para reduzir fricção de edição — o Sardinha muda pouco o cenário; o ativo é o rosto conhecido, não a produção.

### Etapa 4 — EDIÇÃO
**Executor: AGENTE (Editor) com revisão humana de 15 min por vídeo**

Pipeline semi-automatizado (o corte 100% automático ainda produz resultado medíocre — honestidade):
1. Transcrição automática (Whisper) → corte de silêncios e erros de gravação (auto-editor/ffmpeg)
2. Agente marca no roteiro os pontos de B-roll/print/gráfico e gera as artes de apoio (números na tela, tabelas no padrão visual Vero)
3. Legendas queimadas no padrão da marca (DM Sans, ouro sobre preto)
4. Corte de 2–3 shorts por vídeo longo (o dado: short é loteria com teto alto — custo marginal quase zero, vale colher)

**Humano faz**: assistir o corte final em 1,5x e aprovar/apontar ajustes. Não é edição — é controle de qualidade.

### Etapa 5 — THUMBNAIL
**Executor: AGENTE (Designer) via regras da Fase 4 + identidade Vero · Gate: escolher 1 de 3**

- 1 sessão de fotos por trimestre (Lucas/Ernane, expressões variadas: sério, cético, veredicto) abastece meses de thumbs
- Agente monta 3 opções por vídeo: rosto + máximo 4 palavras que complementam (nunca repetem) o título + ouro/preto
- Sem emoji, sem seta vermelha genérica, sem cara de guru — as regras extraídas da autópsia filtradas pela marca

### Etapa 6 — METADADOS E PUBLICAÇÃO
**Executor: AGENTE (Distribuidor), 100% automatizável · Gate: nenhum (após aprovação do corte)**

- Título (o aprovado na pauta) + descrição templatizada (CTA da Análise de Maturidade → resumo SEO → links de vídeos relacionados → capítulos com timestamps — estrutura idêntica à mapeada na Fase 6)
- Agendamento via YouTube API (dia/hora fixos — consistência acima de otimização fina)
- Shorts publicados nos dias seguintes; cortes adaptados para Instagram/TikTok via n8n

### Etapa 7 — COMUNIDADE (comentários)
**Executor: AGENTE tria, HUMANO responde o que importa**

O achado da Fase 7: a audiência vem **prestar contas** — o comentário campeão é relato com números. Isso é ouro e não pode ser respondido por robô fingindo ser Lucas.
- Agente tria diariamente: separa relatos com números (responder), dúvidas técnicas (responder), spam/ofensa (ignorar/moderar), e **sinaliza os 5 que mais merecem resposta**
- Lucas/Ernane respondem esses 5 em ~10 min/dia, em nome próprio
- Comentário fixado: agente propõe, humano aprova (é ferramenta editorial, não atendimento)

### Etapa 8 — ANÁLISE
**Executor: AGENTE (Analista), rotina semanal · Gate: leitura de 5 min**

Vantagem decisiva sobre a autópsia: **no canal próprio temos retenção, CTR e fonte de tráfego reais** (o que era invisível no canal alheio). Rotina semanal entrega:
- Desempenho vs. mediana do próprio canal (a régua certa desde o dia 1)
- Curva de retenção por vídeo: onde caiu, qual dispositivo faltou
- CTR por thumbnail (e teste A/B de título quando o volume permitir)
- 1 recomendação concreta para a próxima pauta — fechando o ciclo: análise alimenta a Etapa 1

### Etapa 9 — REVISÃO ESTRATÉGICA
**Executor: HUMANO (Lucas + Ernane), mensal, 1 h**

Agente prepara o dossiê do mês; vocês decidem: manter cadência? pilar do próximo mês? ajustar o funil? É a única reunião fixa do sistema.

---

## RESUMO: O QUE É DE QUEM

| | Agentes (automatizado) | Lucas + Ernane (inautomatizável) |
|---|---|---|
| Pauta | Gera 5 candidatos com títulos | Escolhe 1, veta |
| Roteiro | Escreve, critica, valida método | História real + passada de oralidade |
| Gravação | Teleprompter, checklist | **Rosto, voz, presença — 1 manhã/mês** |
| Edição | Corte, legendas, artes, shorts | QC de 15 min/vídeo |
| Thumbnail | 3 opções nas regras | Escolhe 1 · fotos 1x/trimestre |
| Publicação | 100% (metadados, agenda, cortes) | — |
| Comunidade | Tria e sinaliza top 5 | Responde os 5 (10 min/dia) |
| Análise | Relatório semanal com recomendação | Lê (5 min) |
| Estratégia | Prepara dossiê | **Decide — 1 h/mês** |

**Custo humano total do sistema: ~1 manhã/mês de gravação + ~2 h/semana de gates e comunidade.**
É isso que substitui uma equipe de pauteiro, roteirista, editor, designer, social media e analista.

---

## TIME DE AGENTES DO CANAL (espelho do time da apostila)

| Agente | Papel | Herda de |
|---|---|---|
| 📋 Pauteiro | Pauta semanal com títulos validados | — |
| ✍️ Roteirista | Roteiro no esqueleto medido | Marco |
| 🔬 Crítico | Diagnóstico de suavização | Paulo |
| 🏛 Guardiã | Vocabulário, fase, padrões medidos | Vera |
| 🎬 Editor | Pipeline de corte + shorts | — |
| 🎨 Designer | Thumbs nas regras + marca | Sofia |
| 📤 Distribuidor | Metadados, agendamento, cross-post | — |
| 📊 Analista | Retenção/CTR semanal + recomendação | — |
| 💬 Curador | Triagem de comentários | — |

Gates humanos: **G1** pauta · **G2** roteiro · **G3** gravação · **G4** corte final · **G5** thumb — mesmo espírito do workflow de 10 passos da apostila: nada publica sem passar pelos gates.

---

## INFRAESTRUTURA (o que já temos)

- **Rotinas cloud** (claude.ai/code) → Pauteiro semanal e Analista semanal, como a autópsia rodou
- **n8n** → publicação, cross-post, alertas
- **Windsor.ai** (conector YouTube) → dados de analytics para o Analista
- **Canva** (conector) → montagem de thumbs
- **Evolution API (WhatsApp)** → gates no seu bolso: o Pauteiro manda os 5 temas no WhatsApp, você responde "2" e o pipeline segue
- **Apostila (88 blocos)** → estoque editorial de anos

## PENDÊNCIAS QUE TRAVAM O INÍCIO

1. **As 3 decisões da autópsia** (cadência sustentada / publicar blocos de graça / funil que qualifica) — a Decisão 2 define metade da pauta
2. OAuth do canal do YouTube (publicação + analytics)
3. Sessão de fotos inicial (thumbs)
4. Definir a "Análise de Maturidade Operacional" (destino do CTA) — sem ela, o funil da Etapa 6 não tem para onde apontar
