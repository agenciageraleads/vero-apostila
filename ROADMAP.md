# ROADMAP VERO — Documento Central de Execução

> **O que é este arquivo**: a única fonte de verdade sobre *o que estamos fazendo agora, o que vem depois e o que está pendente*.
> Norte conceitual: `_contexto/conceitos-vero.md` (D-001 a D-014). Este documento não redefine conceito — só execução.
> **Regra de manutenção**: toda sessão de trabalho atualiza este arquivo ao encerrar. Sprint review: sábados, Lucas + Ernane (15 min).
> **Coordenação**: a sessão "Sessão Coordenadora - Vero" (criada em 06/11/2026) mantém este arquivo e distribui o trabalho por frente.
> Última atualização: **06/11/2026** (auditoria das sessões abertas + working tree)

---

## 🎯 O ALVO (12 meses)

Centro integrado de formação e serviços rodando: canal publicando 1 vídeo/semana sem quebra, Análise de Maturidade qualificando entrada, Imersão Vero como porta paga, primeiras turmas por nível em acompanhamento.

**Métrica-mãe**: empresários em acompanhamento ativo por nível (não views, não seguidores).

---

## ⚠️ ONDE ESTAMOS DE VERDADE (auditoria 06/11)

- **Três meses parados.** Último commit em 02/08; última sessão de trabalho em 04/08. Única exceção: o motor de posts (`gerador-posts/`, 14/10), feito fora das sessões da Vero e nunca commitado.
- **O Sprint 1 (02/08 → 09/08) não fechou.** Das 6 tarefas, nenhuma tem prova de conclusão no repositório (ver tabela abaixo).
- **Working tree com ~330 arquivos alterados e sem commit**: repaleta da apostila (88 blocos em `apostila/` e `docs/`), Documento Fundador v2, Modelo de Negócio v2, Plano Ernane, correção da D-012, plano e deck da Imersão, motor de posts e testes de vídeo. Risco real de perder trabalho.
- **351 arquivos de `node_modules` versionados** em `_imersoes/reforma-tributaria-corretores/` aparecem como apagados: precisam sair do git e entrar no `.gitignore`.
- **Branch do Diagnóstico Express** (`claude/vero-express-diagnostic-eDHFt`, 4 commits, 5 arquivos) continua fora da main.
- **MCP `instagram-vero`** (prova de conceito) não conecta nesta pasta.

### Fechamento do Sprint 1

| # | Tarefa | Situação em 06/11 |
|---|---|---|
| 1.1 | Integrar branch do Diagnóstico Express | ⬜ não feito — branch intacta |
| 1.2 | Análise de Maturidade v1 | ⬜ não iniciada (depende de 1.1) |
| 1.3 | Roteiro-piloto Raiz/Financeiro aprovado no G2 | ❓ sem registro no repo — **Lucas confirma** |
| 1.4 | OAuth do canal YouTube | ❓ sem registro — **Lucas confirma** |
| 1.5 | Sessão de fotos + cenário de gravação | ❓ sem registro — **Lucas confirma** (o motor de posts também precisa dessas fotos) |
| 1.6 | Documento Fundador v2 + Modelo de Negócio v2 | 🟡 rascunhos existem desde 02/08 (`_contexto/*-v2.md`), **não revisados nem commitados** |

---

## 🧭 FRENTES DE TRABALHO

Cada frente tem um dono, um próximo passo e o que a trava. A coordenadora abre uma sessão filha por frente **só quando ela tiver trabalho independente para fazer** — frente travada em decisão de Lucas/Ernane não vira sessão.

| # | Frente | Dono | Estado | Próximo passo | Travada por |
|---|---|---|---|---|---|
| **F0** | **Casa em ordem** (repo, commits, sessões) | Claude (coordenadora) | ✅ 06/11 | Working tree commitado em 7 commits por assunto, `node_modules` fora do git, 10 sessões arquivadas. Falta só o push | Lucas autorizar o push |
| **F1** | **Funil de entrada — Análise de Maturidade** | Claude + Lucas | 🟡 v1 pronta no PR #2 (06/11) | Lucas lê o PR e decide: 12 ou 8 perguntas, texto das Q9–Q12, canal de recebimento das candidaturas, critério de seleção, versão imprimível | Decisões do Lucas no PR #2 |
| **F2** | **Imersão Vero** (dia inteiro, porta paga) | Lucas + Ernane | 🟡 deck v5 pronto, bloqueada | Fechar data; ingresso (proposta: R$ 197 por empresa, até 2 pessoas, R$ 100 creditáveis); pricing da matrícula | P-02 pricing · P-06 cadência por nível · P-07 caso real · data |
| **F3** | **Apostila** (88/88 escrita) | Claude | 🟡 acabamento | Validar e commitar a repaleta (tokens navy/dourado em todos os blocos); PDFs por nível com capa nova; Apostila da Imersão (edição curada) | Lucas aprovar o novo visual |
| **F4** | **Canal YouTube** | Lucas/Ernane + Claude | ❓ | Confirmar 1.3–1.5; depois Pauteiro como rotina → 1ª gravação em lote | T-01 OAuth · T-02 fotos · roteiro-piloto |
| **F5** | **Redes / Instagram** | Claude | 🟡 motor pronto, nada publicado | Commitar `gerador-posts/`; revisão Vera/Paulo/Ana dos 7 posts da fila; responder as 9 perguntas do `gerador-posts/HANDOFF.md` | Fotos reais (T-02) · link da Análise (F1) · MCP instagram-vero |
| **F6** | **Institucional e societário** | Lucas + Ernane | 🟡 rascunhos | Revisar Documento Fundador v2, Modelo de Negócio v2 e `PLANO-ERNANE.html`; levar a Ernane a proposta de unificação com a Proativo | P-01 (decisão do Ernane, não do Lucas — D-012 corrigida) |
| **F7** | **Circuito Turismo Goiás** | Lucas | ❄️ aguardando funil | One-pager e planilha de custo prontos; faltam contato real nos placeholders e valores reais da planilha | Retomar só com F1 no ar |

**Histórico encerrado:** Imersão Reforma Tributária para corretores (apresentada em 24/06/2026) — sem pendência viva.

---

## 🏃 SPRINT 2 (proposto) — 07/11 → 14/11

**Objetivo do sprint**: casa em ordem e funil destravado. Nada novo antes de o trabalho de agosto estar salvo.

| # | Tarefa | Frente | Dono | Critério de pronto |
|---|---|---|---|---|
| 2.1 | ✅ Commitar o working tree em commits por assunto; remover `node_modules` do git | F0 | Claude | Feito 06/11 (`0f0bfc3`..`e427bd5`), local, sem push |
| 2.2 | ✅ Arquivar as 10 sessões antigas da seção Vero | F0 | Claude | Feito 06/11 — só a coordenadora aberta na seção |
| 2.3 | ✅ Integrar a branch do Diagnóstico Express | F1 | Claude | Feito 06/11 (merge na main, enviado) |
| 2.4 | 🟡 Análise de Maturidade v1 — PR #2 aberto, aguardando Lucas | F1 | Sessão filha `analise-maturidade` | Formulário + lógica de classificação + devolutiva por nível para Lucas ler |
| 2.5 | Lucas responde: status de 1.3/1.4/1.5 e aprova (ou não) a repaleta da apostila | F3/F4 | Lucas | Respostas registradas aqui |
| 2.6 | Conversa de 15 min com Ernane: caso real (P-07) + cadência por nível (P-06) + data da Imersão | F2 | Lucas → Ernane | Respostas, mesmo informais, trazidas para a coordenadora |

---

## 🗺️ ROADMAP POR HORIZONTE

### AGORA (Sprint 2) — casa em ordem + funil destravado
Ver sprint acima.

### PRÓXIMO (Sprints 3–6, ~nov/dez)
- **Imersão Vero v1 com data marcada**: pricing fechado (P-02), ingresso, oferta de matrícula (anuidade com renovação — decidido 18/07), Apostila da Imersão impressa
- **Análise de Maturidade no ar** com link público (é o CTA do motor de posts e do canal)
- **Canal no ar**: Pauteiro como rotina → 1ª gravação em lote (4 vídeos) → 1º vídeo publicado → ciclo semanal com os 9 agentes do `_estrategia/canal-youtube-vero/guia-producao-canal.md`
- **Instagram publicando** pelo motor de posts, depois da revisão do time
- **Condição de Fundador** operacional: 30% como permuta por case + depoimento (D-014)
- **Primeira turma-piloto de nível** (provável Raiz): sala invertida com a apostila

### DEPOIS (2027+) — só quando o núcleo rodar
- Hub de negócios com prestadores curados ("status se comprova" governa a entrada — D-014)
- Comunidade no funil (P-04)
- Plataforma/site como produto (P-08)
- Circuito Turismo Goiás (F7)
- Cases Proativo produtizados como cursos (P-05)

### ❄️ CONGELADO (decisão explícita, não esquecimento)
- Certificação como produto de aluno (D-013/D-014 — horizonte de quem conclui acompanhamento)
- Saída compulsória do sistema (removida — D-014, destrói LTV)

---

## 📌 PENDÊNCIAS CONSOLIDADAS

### Decisões em aberto (precisam de Lucas e/ou Ernane)
| ID | Pendência | Necessária até |
|---|---|---|
| P-01 | Unificação Proativo→Vero: **proposta**, decisão é do Ernane (dono da Proativo) — D-012 corrigida em 02/08 | Sem prazo forçado |
| P-02 | Pricing: matrícula da Imersão + acompanhamento por nível + módulos | Sprint 3 (trava a Imersão) |
| P-03 | Hub de especialistas: modelo de remuneração | Fase "Depois" |
| P-04 | Comunidade: papel no funil e moderação | Fase "Depois" |
| P-05 | Inventário de cases Proativo (quantos, quais documentáveis) | Sprint 4 |
| P-06 | Cadência de acompanhamento por nível (frequência, formato, quem faz, duração) — dela sai a carga horária semanal do slide 54 | Sprint 3 |
| P-07 | Caso real com número para o palco (prioridade: nível Gestão). **Não fabricar número** | Sprint 3 |
| P-08 | Plataforma/site como produto | Fase "Depois" |
| P-09 | Data e ingresso da Imersão Vero (proposta: R$ 197 por empresa, até 2 pessoas) | Sprint 3 |

### Técnicas
| ID | Pendência | Trava o quê |
|---|---|---|
| T-01 | OAuth YouTube | Canal (F4) |
| T-02 | Sessão de fotos (Lucas, Ernane, apostila física, bastidor) | Thumbnails (F4) e posts com foto (F5) |
| T-03 | ✅ Branch diagnóstico-express integrada (06/11) | — |
| T-04 | ✅ ~330 arquivos sem commit desde 02/08 — commitados em 06/11 | — |
| T-05 | ✅ `node_modules` fora do git e no `.gitignore` (06/11) | — |
| T-06 | MCP `instagram-vero` não conecta | Publicação no Instagram (F5) |
| T-07 | `docs/README.md` defasado ("comprova status", "352 blocos") | Site público da apostila (F3) |

### Fontes históricas (não editar mais — consolidadas aqui)
- `_estrategia/PENDENCIAS-ESTRATEGICAS.md` (reunião 08/06) → itens vivos migrados para P-01..P-05
- `_estrategia/ORGANIZACAO-2026-08.md` (organização 02/08) → prioridades absorvidas nos horizontes acima
- Sessões encerradas em 06/11 (apostila, conceitos, apresentação, Goiás, Sardinha, reforma tributária) → pendências vivas migradas para F1–F7, P-06..P-09 e T-04..T-07

---

## 📜 LOG DE SPRINTS

| Sprint | Período | Objetivo | Resultado |
|---|---|---|---|
| 1 | 02/08 → 09/08 | Funil mínimo (Análise v1 + roteiro-piloto) | ❌ Não fechou. Trabalho parou em 04/08; só 1.6 avançou (rascunhos sem commit). Revisado em 06/11 |
| 2 | 07/11 → 14/11 | Casa em ordem + funil destravado | *proposto* |
