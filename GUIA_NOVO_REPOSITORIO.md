# Publicação limpa — Portal de Credenciamento

## 1. GitHub

Crie um repositório vazio e envie **o conteúdo deste pacote diretamente para a raiz**.

Na primeira tela do repositório devem aparecer imediatamente `src`, `public`,
`package.json`, `package-lock.json`, `next.config.ts` e `wrangler.jsonc`.

Não crie uma pasta intermediária para guardar esses arquivos.

## 2. Cloudflare Workers & Pages

Conecte o novo repositório e utilize:

- Branch de produção: `main`
- Comando de build: `npm run build`
- Comando de deploy: `npx wrangler deploy`
- Versão do Node: 20 ou superior
- Diretório raiz: vazio (raiz do repositório)

O arquivo `wrangler.jsonc` já determina que os arquivos estáticos gerados em
`out/` serão publicados. Não selecione adaptador OpenNext, SSR ou preset de
framework para Workers.

## 3. Verificação

Antes da publicação, o processo deve executar `npm ci` e `npm run build`. O
build correto gera 18 páginas estáticas na pasta `out/`.
