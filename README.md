
# Apresentação - XP Engineering

Apresentação interativa em React/Vite. O projeto original está disponível no Figma:
https://www.figma.com/design/LCkruRFucEFhu3hfPHgLPk/Apresenta%C3%A7%C3%A3o---XP-Engineering.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Publicando no GitHub Pages

Este projeto já inclui o workflow `.github/workflows/deploy.yml`.

1. Envie alterações para a branch `main`.
2. O workflow gera o build e publica `index.html` + `assets/` na raiz do repositório (necessário quando o Pages usa *Deploy from branch*).
3. Opcional (recomendado): em `Settings > Pages > Build and deployment`, selecione **GitHub Actions** em vez de publicar a pasta `/` da branch.

**Tela branca?** O site em produção precisa do **build** (`./assets/index-….js`), não do ficheiro de desenvolvimento `/src/main.tsx`. Confirme que `index.html` na raiz aponta para `./assets/…` após o workflow.

Depois do workflow concluir, o link ficará disponível em:

```text
https://SEU_UTILIZADOR.github.io/NOME_DO_REPOSITORIO/
```
