# Organização do Workspace — 02/08/2026

> Fotografia de tudo que existe, decisão do que priorizar/pausar, e próximos passos.
> Decisões novas registradas: D-010 (execução guiada via consultoria) e D-011 (canal YouTube) em `_contexto/decisoes.md`.

---

## O QUE EXISTE HOJE (inventário)

| Frente | Estado | Onde está |
|---|---|---|
| **Apostila (88 blocos)** | ✅ COMPLETA — 4 pilares × 22 blocos escritos e aprovados | `apostila/` + publicada via `docs/` (CI) |
| **Identidade visual v2 (marinho + ouro)** | 🔄 Em migração — caderno de marca pronto, apostila re-estilizada (commitada nesta organização) | `_contexto/caderno-marca-vero.html`, `_contexto/identidade-visual-vero.md` |
| **Assinatura-mestra D-009** | ✅ Decidida e documentada ("de verdade") | `_contexto/decisoes.md`, CLAUDE.md |
| **Autópsia Investidor Sardinha** | ✅ Completa e verificada (10 fases, dados reais) | `_estrategia/canal-youtube-vero/autopsia/` |
| **Guia de produção do canal** | ✅ Escrito — 9 agentes + gates humanos | `_estrategia/canal-youtube-vero/guia-producao-canal.md` |
| **Imersão Reforma Tributária (corretores)** | ✅ Material pronto, apresentação feita (24/06) | `_imersoes/reforma-tributaria-corretores/`, `Treinamento Corretores/` |
| **Imersão Método Vero** | 🔄 Plano pronto (17/07), travada em pricing | `_imersoes/imersao-metodo-vero/` |
| **Circuito Turismo Goiás** | 📋 Estratégia desenhada, sem execução iniciada | `_estrategia/circuito-turismo-goias/` |
| **Pendências estratégicas (reunião 08/06)** | 📋 10 itens documentados | `_estrategia/PENDENCIAS-ESTRATEGICAS.md` |

---

## PRIORIDADES (decisão desta organização)

### 🥇 P1 — Canal YouTube (motor de demanda)
A apostila está completa: o estoque editorial existe. As decisões D-010/D-011 destravam a pauta.
Sequência: **Análise de Maturidade Operacional** (destino do CTA — bloqueia o 1º vídeo) → roteiro-piloto → OAuth do canal + sessão de fotos → Pauteiro como rotina cloud → 1º vídeo no ar.

### 🥈 P2 — Análise de Maturidade Operacional (o funil)
Não é só o CTA do canal: é a porta de entrada da **consultoria por nível (D-010)** para qualquer origem (canal, imersões, indicação). Formulário + lógica de classificação Raiz/Trilha/Gestão/Legado + devolutiva. Reaproveita a régua dos 4 níveis que já existe na apostila.

### 🥉 P3 — Consultoria personalizada (a oferta)
Definir o desenho mínimo vendável: o que é a execução guiada em cada nível, cadência, preço inicial (resolve também a trava de pricing da Imersão Método Vero — pendência #2 de 08/06).

### ⏸️ PAUSADO (não abandonado — sem energia até P1–P3 rodarem)
- **Circuito Turismo Goiás** — depende de articulação pública; retomar quando o funil (P2) existir para aproveitar os leads.
- **Imersão Método Vero** — destrava automaticamente quando P3 definir pricing; não trabalhar como frente separada.
- **Pendências 3, 4, 5, 8, 9 de 08/06** (hub de especialistas, comunidade, cases como cursos, plataforma) — todas dependem de funil + oferta rodando.

### ✅ ENCERRADO COMO FRENTE ATIVA
- **Produção da apostila** — 88/88. Passa a ser insumo (pauta do canal, material de consultoria), não projeto.
- **Reforma Tributária corretores** — entregue; vira case/modelo de treinamento modular.

---

## HIGIENE DO REPOSITÓRIO (feita nesta organização)

- ~350 arquivos pendentes commitados em grupos lógicos (posicionamento, identidade visual, imersões, estratégia)
- `main` local × remota reconciliadas; tudo sincronizado com o GitHub
- PR #1 (mega prompt) e branch `autopsia-sardinha` integrados à `main`
- Branch `claude/vero-express-diagnostic-eDHFt` avaliada: contém o **Diagnóstico Express Vero** (HTML interativo + versão imprimível + docs) — **protótipo direto da Análise de Maturidade Operacional (P2)**. Mantida para servir de base ao P2; integrar na próxima sessão

## PRÓXIMA SESSÃO COMEÇA POR

1. Desenhar a **Análise de Maturidade Operacional** (P2) — perguntas, régua de classificação, devolutiva
2. Refinar o **roteiro-piloto** da Fase 9 com história real de Lucas/Ernane
3. Checklist técnico: OAuth YouTube, sessão de fotos, cenário de gravação
