# Guia de Publicação — Apostila Vero

Este documento explica como publicar e gerenciar a apostila Vero usando GitHub Pages + CI/CD automático.

---

## ✅ O que foi preparado

Todos os arquivos estão prontos para publicação:

- ✅ Estrutura `docs/` completa (pilares, fases, blocos)
- ✅ 22 blocos Financeiro sincronizados e com CSS injetado
- ✅ Script Python (`_build/sync_to_docs.py`) para sincronização automática
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`) para CI/CD automático
- ✅ Índices HTML gerados (homepage, pilares, fases, blocos)
- ✅ `.gitignore` configurado
- ✅ `docs/README.md` com instruções para leitores

---

## 📋 Próximos Passos (Você faz estes)

### 1️⃣ Criar Repositório GitHub

```bash
cd ~/Vero\ -\ Escola\ de\ Empresários

# Inicializar git (se ainda não foi)
git init

# Adicionar GitHub como remote
git remote add origin https://github.com/SEU-USUARIO/vero-apostila.git

# Fazer push da branch main
git branch -M main
git add .
git commit -m "initial: apostila vero - financeiro completo"
git push -u origin main
```

**Importante**: O repositório deve ser **público** para que GitHub Pages funcione (gratuitamente).

### 2️⃣ Ativar GitHub Pages

1. Vá para `https://github.com/SEU-USUARIO/vero-apostila/settings/pages`
2. Em "Source", escolha:
   - **Branch**: `main`
   - **Folder**: `/docs`
3. Clique em "Save"
4. GitHub vai gerar a URL (geralmente `https://seu-usuario.github.io/vero-apostila/`)
5. Aguarde 1-2 minutos. O site estará online.

### 3️⃣ Testar o Site

Acesse: `https://seu-usuario.github.io/vero-apostila/`

Você deve ver:
- ✅ Homepage com 4 pilares (Financeiro ✅, outros ⬜)
- ✅ Menu do Financeiro listando 22 blocos
- ✅ Cada bloco abrindo P1 e P2 corretamente
- ✅ CSS carregando (fontes, cores, layout)
- ✅ Imagens das narrativas aparecendo

---

## 🔄 Fluxo de Atualização (Contínuo)

**A partir de agora, toda vez que você atualizar conteúdo:**

### Novo bloco (exemplo: Operação Raiz Bloco 01)

```bash
# 1. Marco/Íris escrevem os arquivos localmente:
#    ~/Vero - Escola de Empresários/apostila/operacao/raiz/bloco-01/p1.html
#    ~/Vero - Escola de Empresários/apostila/operacao/raiz/bloco-01/p2.html

# 2. Você faz commit e push (no terminal):
cd ~/Vero\ -\ Escola\ de\ Empresários
git add apostila/operacao/raiz/bloco-01/
git commit -m "content: operacao raiz bloco-01 (Marco + Iris)"
git push

# 3. GitHub Actions executa automaticamente:
#    - Roda _build/sync_to_docs.py
#    - Sincroniza apostila/ → docs/
#    - Injeta CSS nos blocos
#    - Gera índices atualizados
#    - Faz push dos arquivos gerados

# 4. GitHub Pages publica em ~60 segundos
#    Você acessa e o bloco novo já está lá!
```

### Atualizar bloco existente

```bash
# Editar qualquer arquivo em apostila/financeiro/raiz/bloco-01/p1.html
# (No seu editor preferido)

# Fazer commit e push
git add apostila/
git commit -m "fix: financeiro raiz bloco-01 ajustes redacionais"
git push

# Pronto! Site atualiza em 60s
```

### Corrigir CSS (afeta todos os blocos)

```bash
# Editar _estilo/estilo.css (local)

# Copiar para docs/
cp _estilo/estilo.css docs/assets/css/estilo.css

# Fazer commit
git add docs/assets/css/estilo.css
git commit -m "style: ajustes tipografia"
git push

# Todos os 22+ blocos atualizam instantaneamente
```

---

## 🔐 Controle de Acesso (Security by Obscurity)

**GitHub Pages não tem autenticação nativa.** Usamos "security by obscurity":

### Como compartilhar com clientes

1. **Não publicize a URL** — Mantenha-a privada
2. **Compartilhe apenas com clientes específicos** — WhatsApp, email, documento privado
3. **Documente em `_client-links.md`** (arquivo não publicado):

```markdown
| Cliente | Email | URL | Data Compartilhamento | Status |
|---------|-------|-----|----------------------|--------|
| Acme Corp | contato@acme.com.br | https://seu-usuario.github.io/vero-apostila/ | 2026-04-15 | Ativo |
| Tech Startup | founder@techstartup | https://seu-usuario.github.io/vero-apostila/ | 2026-04-16 | Ativo |
```

### Revogar acesso

Se um cliente cancela:
1. Remova a linha de `_client-links.md`
2. **Opcional**: Mude a URL para um caminho obscuro (requer mudança na estrutura do site)
3. **Não há forma simples de "desabilitar" acesso** — Se precisar de autenticação real, será necessário refatorar com backend (Node + JWT, por exemplo)

---

## 📊 Estrutura de Pastas (Resumo)

```
Vero - Escola de Empresários/
├── CLAUDE.md           ← Instruções do projeto
├── PUBLISH.md          ← Este arquivo
├── STATUS.md           ← Dashboard de progresso (atualize periodicamente)
├── DIARIO_DE_BORDO.md  ← Histórico de execução
│
├── apostila/           ← FONTE DE VERDADE (conteúdo local)
│   ├── financeiro/raiz/bloco-01/{p1.html, p1.md, p2.html, p2.md}
│   ├── operacao/, vendas/, pessoas/  ← Você preencherá aqui
│   └── _estilo/estilo.css
│
├── docs/               ← PUBLICADO (GitHub Pages serve desta pasta)
│   ├── index.html      ← Homepage (auto-gerado)
│   ├── assets/css/estilo.css
│   ├── financeiro/raiz/bloco-01/index.html (auto-gerado)
│   ├── financeiro/raiz/bloco-01/p1.html (copiado + CSS injetado)
│   ├── financeiro/raiz/bloco-01/p2.html (copiado + CSS injetado)
│   └── README.md       ← Instruções para leitores
│
├── _build/
│   └── sync_to_docs.py ← Script de sincronização (executado por GitHub Actions)
│
├── .github/
│   └── workflows/
│       └── deploy.yml  ← CI/CD automático
│
└── .gitignore          ← Ignora _rascunhos/, _docs-originais/, etc.
```

---

## 🚨 Checklist Antes de Usar

- [ ] Você criou o repositório GitHub
- [ ] O repositório é **público**
- [ ] Você ativou GitHub Pages (`main` → `/docs`)
- [ ] Você fez o primeiro push (`git push -u origin main`)
- [ ] GitHub Pages gerou a URL (verificar em Settings → Pages)
- [ ] Você testou acessando o site (deve carregar homepage com pilares)
- [ ] Criar arquivo `_client-links.md` para documentar clientes
- [ ] Atualizar `STATUS.md` com próximas ações

---

## 🔧 Troubleshooting

### Site não carrega ou mostra 404

- [ ] Verificar se repositório é **público**
- [ ] Verificar se GitHub Pages está **ativado** (Settings → Pages)
- [ ] Aguardar 2-3 minutos após ativar Pages
- [ ] Verificar que a pasta é `/docs` (não `/build`, não `/public`)
- [ ] Fazer `git push` novamente se recém-ativou

### CSS não carrega (página sem cores/fontes)

- [ ] Verificar que `docs/assets/css/estilo.css` existe
- [ ] Verificar que os HTMLs têm `<link rel="stylesheet" href="/assets/css/estilo.css">`
- [ ] Executar `python3 _build/sync_to_docs.py` localmente
- [ ] Fazer `git add docs/ && git commit && git push`

### Blocos novos não aparecem no índice

- [ ] Verificar que os arquivos estão em `apostila/operacao/raiz/bloco-01/{p1.html, p2.html}`
- [ ] Executar manualmente: `python3 _build/sync_to_docs.py`
- [ ] Verificar que os arquivos foram criados em `docs/`
- [ ] Fazer `git add docs/ && git commit && git push`
- [ ] Aguardar GitHub Actions completar (~1 min)

### Imagens não carregam em p1.html

- Provavelmente estão como URLs (Unsplash, etc.) — verificar se a internet está funcionando
- Se estiverem locais, verificar o caminho relativo

---

## 🎯 Próximas Fases (Depois de publicar Financeiro)

1. **Operação** — Marco/Íris escrevem 22 blocos
   - Commit → Push → GitHub Actions automaticamente publica
2. **Vendas** — Mesmo workflow
3. **Pessoas** — Mesmo workflow
4. **(Opcional) Autenticação real** — Se crescer para muitos clientes, implementar:
   - Backend Node.js + JWT
   - Painel de admins para gerar links com expiração
   - Sistema de revogação de acesso

---

## 📝 Dúvidas?

Consulte:
- `CLAUDE.md` — Instruções gerais do projeto
- `STATUS.md` — Dashboard de progresso
- `_contexto/` — Contexto de design e decisões
- `.github/workflows/deploy.yml` — Lógica de CI/CD
- `_build/sync_to_docs.py` — Lógica de sincronização

---

**Status**: ✅ Pronto para publicação
**Próximo passo**: Criar repositório GitHub e ativar Pages
