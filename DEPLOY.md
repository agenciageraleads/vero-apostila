# Deploy Rápido — 3 Passos para Publicar

## ⏱️ Tempo total: 5 minutos

---

## Passo 1: Criar repositório GitHub (no seu terminal)

```bash
cd ~/Vero\ -\ Escola\ de\ Empresários

git init
git remote add origin https://github.com/SEU-USUARIO/vero-apostila.git
git branch -M main
git add .
git commit -m "initial: apostila vero - financeiro 22/22 completo"
git push -u origin main
```

**Importante**: Substitua `SEU-USUARIO` pelo seu usuário GitHub real.

---

## Passo 2: Ativar GitHub Pages (no navegador)

1. Vá para: `https://github.com/SEU-USUARIO/vero-apostila/settings/pages`
2. Em "Source", escolha:
   - **Branch**: `main`
   - **Folder**: `/ docs`
3. Clique em **Save**
4. Aguarde 1-2 minutos (a página vai recarregar)

---

## Passo 3: Acessar o site (no navegador)

```
https://seu-usuario.github.io/vero-apostila/
```

✅ **Pronto!** Você vê:
- Homepage com 4 pilares (Financeiro ✅ 22/22, outros ⬜)
- Navegação funcionando
- CSS carregando (cores, fontes, layout)
- Blocos abertos

---

## A partir de agora (atualizar conteúdo)

```bash
# 1. Editar um bloco localmente em apostila/
#    (Marco/Íris escrevem os .html)

# 2. Fazer commit e push
cd ~/Vero\ -\ Escola\ de\ Empresários
git add apostila/
git commit -m "content: seu-pilar seu-fase seu-bloco"
git push

# 3. Site atualiza em ~60 segundos automaticamente ✓
```

---

## Precisa ajuda?

- **Arquivo do deploy**: [`PUBLISH.md`](./PUBLISH.md) (guia completo)
- **Resumo técnico**: [`IMPLEMENTATION_SUMMARY.md`](./IMPLEMENTATION_SUMMARY.md)
- **Instruções Vero**: [`CLAUDE.md`](./CLAUDE.md)

---

**Pronto?** → Execute o Passo 1 no seu terminal agora! 🚀
