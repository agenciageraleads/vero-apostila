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

## Template para Novas Decisoes

```
### D-XXX: [Titulo]
**Data**: YYYY-MM-DD
**Decisao**: [O que foi decidido]
**Motivo**: [Por que foi decidido assim]
```
