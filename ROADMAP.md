# ROADMAP VERO — Documento Central de Execução

> **O que é este arquivo**: a única fonte de verdade sobre *o que estamos fazendo agora, o que vem depois e o que está pendente*.
> Norte conceitual: `_contexto/conceitos-vero.md` (D-001 a D-014). Este documento não redefine conceito — só execução.
> **Regra de manutenção**: toda sessão de trabalho atualiza este arquivo ao encerrar. Sprint review: sábados, Lucas + Ernane (15 min).
> Última atualização: **02/08/2026**

---

## 🎯 O ALVO (12 meses)

Centro integrado de formação e serviços rodando: canal publicando 1 vídeo/semana sem quebra, Análise de Maturidade qualificando entrada, Imersão Vero como porta paga, primeiras turmas por nível em acompanhamento.

**Métrica-mãe**: empresários em acompanhamento ativo por nível (não views, não seguidores).

---

## 🏃 SPRINT ATUAL — Sprint 1 (02/08 → 09/08)

**Objetivo do sprint**: existir um funil mínimo — a Análise de Maturidade v1 pronta e o primeiro roteiro aprovado.

| # | Tarefa | Dono | Status | Critério de pronto |
|---|---|---|---|---|
| 1.1 | Integrar branch `claude/vero-express-diagnostic-eDHFt` (Diagnóstico Express) na main | Claude | ⬜ | Merge feito, arquivos em `_artefatos/` |
| 1.2 | Análise de Maturidade v1: evoluir o Diagnóstico Express com a régua dos 4 níveis + devolutiva + regra D-014 (aplicação com seleção) | Claude + Lucas | ⬜ | Formulário navegável + lógica de classificação + texto de devolutiva por nível |
| 1.3 | Roteiro-piloto (Raiz/Financeiro: empresa × pessoa física) refinado com história real | Lucas/Ernane + Claude | ⬜ | Roteiro aprovado no gate G2 (leitura em voz alta) |
| 1.4 | OAuth do canal YouTube (publicação + analytics) | Lucas | ⬜ | Claude consegue ler analytics e agendar upload |
| 1.5 | Agendar sessão de fotos (thumbs) e definir cenário fixo de gravação | Lucas + Ernane | ⬜ | Data marcada |
| 1.6 | Consolidar DOCUMENTO FUNDADOR v2.0 e MODELO DE NEGÓCIO v2.0 (sessão paralela centro-integrado) | Lucas + Claude | 🔄 | v2.0 revisados e commitados em `_contexto/` |

---

## 🗺️ ROADMAP POR HORIZONTE

### AGORA (Sprint 1) — funil mínimo
Ver sprint acima.

### PRÓXIMO (Sprints 2–5, ~ago/set)
- **Canal no ar**: Pauteiro como rotina cloud → 1ª gravação em lote (4 vídeos) → 1º vídeo publicado → ciclo semanal rodando com os 9 agentes do `_estrategia/canal-youtube-vero/guia-producao-canal.md`
- **Imersão Vero v1**: formato, conteúdo (curadoria da apostila) e **pricing** (resolve pendência P-02; princípio D-014: adequar ao mercado pensando em escala)
- **Condição de Fundador** operacional: 30% como permuta por case + depoimento (D-014)
- **Primeira turma-piloto de nível** (provável Raiz): desenho da entrega em sala invertida com a apostila
- Definição societária Proativo→Vero: prazo e forma (Lucas + Ernane)

### DEPOIS (Q4/2026+) — só quando o núcleo rodar
- Hub de negócios com prestadores curados ("status se comprova" governa a entrada — D-014)
- Comunidade no funil (Community-Led × Sales-Led — pendência P-04)
- Plataforma/site como produto (pendência P-08)
- Circuito Turismo Goiás (retomar com funil pronto para capturar os leads)
- Cases Proativo produtizados como cursos (pendência P-05)

### ❄️ CONGELADO (decisão explícita, não esquecimento)
- Certificação como produto de aluno (D-013/D-014 — horizonte de quem conclui acompanhamento)
- Saída compulsória do sistema (removida — D-014, destrói LTV)

---

## 📌 PENDÊNCIAS CONSOLIDADAS

### Decisões em aberto (precisam de Lucas e/ou Ernane)
| ID | Pendência | Necessária até |
|---|---|---|
| P-01 | Prazo e forma societária da fusão Proativo→Vero | Sprint 3 |
| P-02 | Pricing: Imersão Vero + acompanhamento por nível + módulos | Sprint 3 (trava a Imersão) |
| P-03 | Hub de especialistas: modelo de remuneração (revenue-share? parceria?) | Fase "Depois" |
| P-04 | Comunidade: papel no funil e moderação | Fase "Depois" |
| P-05 | Inventário de cases Proativo (quantos, quais documentáveis) | Sprint 4 |

### Técnicas
| ID | Pendência | Trava o quê |
|---|---|---|
| T-01 | OAuth YouTube | Publicação + analytics (sprint 1.4) |
| T-02 | Sessão de fotos | Thumbnails (sprint 1.5) |
| T-03 | Branch diagnóstico-express não integrada | Análise de Maturidade (sprint 1.1) |
| T-04 | Sessão paralela "centro-integrado" com arquivo não commitado (`MODELAGEM-COMPARADA.md`) | Consolidação v2.0 (sprint 1.6) |

### Fontes históricas (não editar mais — consolidadas aqui)
- `_estrategia/PENDENCIAS-ESTRATEGICAS.md` (reunião 08/06) → itens vivos migrados para P-01..P-05
- `_estrategia/ORGANIZACAO-2026-08.md` (organização 02/08) → prioridades absorvidas nos horizontes acima

---

## 📜 LOG DE SPRINTS

| Sprint | Período | Objetivo | Resultado |
|---|---|---|---|
| 1 | 02/08 → 09/08 | Funil mínimo (Análise v1 + roteiro-piloto) | *em andamento* |
