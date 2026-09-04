# Portal de Habilitação de Fundações de Apoio (ICT-AGU)

Portal público de orientação, transparência e apoio às fundações interessadas
no chamamento público permanente para habilitação institucional junto à
Instituição Científica, Tecnológica e de Inovação da Advocacia-Geral da União
(ICT-AGU).

Desenvolvido para a equipe **LABORI — Laboratório de Inovação da AGU**.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript estrito
- [Tailwind CSS 4](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- Sem backend: conteúdo 100% em arquivos TypeScript tipados, exportado como
  site estático (`output: "export"`) — sem rotas de API nem servidor Node em
  produção.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run lint       # ESLint
npx tsc --noEmit   # checagem de tipos
npm run build      # build de produção (gera a pasta out/)
npm run preview    # serve a pasta out/ localmente, como em produção
```

## Deploy

O projeto é exportado como HTML/CSS/JS estático puro na pasta `out/` — não
depende de um runtime Node em produção. Funciona em qualquer host de
arquivos estáticos.

### Cloudflare (Pages ou Workers)

O repositório inclui um `wrangler.jsonc` já configurado para servir `out/`
como site estático (`assets.directory`, sem `main`/Worker script). Isso é
necessário porque, ao conectar um repositório Next.js sem esse arquivo, a
Cloudflare tenta aplicar automaticamente o adaptador OpenNext (voltado a
SSR em Workers), que falha com um projeto exportado estaticamente
(`output: "export"`). Com o `wrangler.jsonc` presente, esse passo
automático é ignorado e o deploy é puramente estático.

1. Conecte o repositório no painel da Cloudflare (Workers & Pages).
2. Configurações de build:
   - **Framework preset:** `None`
   - **Build command:** `npm run build`
   - **Build output directory / deploy command:** deixe o padrão — o
     `wrangler.jsonc` já aponta para `out/`.
   - **Node version:** 20 ou superior (variável de ambiente `NODE_VERSION`,
     se solicitado).
3. Deploy.

### Outras opções

- **Vercel:** funciona automaticamente (detecta Next.js).
- **GitHub Pages / Netlify / qualquer CDN:** publique o conteúdo da pasta
  `out/` gerada por `npm run build`.

## Estrutura do conteúdo editável

Todo o conteúdo textual e os dados do edital ficam centralizados em
`src/content/*.ts`, sem necessidade de mexer em componentes visuais:

| Arquivo | O que edita |
|---|---|
| `site-config.ts` | Nome da plataforma, status do edital, avisos jurídicos, contatos |
| `edital.ts` | Metadados do edital (título, versão, links de download) |
| `edital-texto.ts` | Texto integral do edital, por Bloco/Seção |
| `anexo-i-texto.ts` | Texto integral do Anexo I (áreas e atividades) |
| `documentos.ts` | Biblioteca de documentos/anexos (15 itens do edital) |
| `jornada.ts` | Etapas da jornada de habilitação |
| `checklist.ts` | Itens do checklist de preparação documental |
| `cronograma.ts` | Etapas e prazos processuais |
| `faq.ts` | Perguntas frequentes, por categoria |
| `pos-credenciamento.ts` | Tópicos sobre a atuação após a habilitação |
| `navegacao.ts` | Itens do menu principal e do rodapé |

Os PDFs reais dos documentos (edital e Anexos I a VII, aprovados pelo
Comitê de Governança da AGU) estão em `public/documentos/`.

## Pendências que dependem de documentos oficiais

- Número do edital, número do processo administrativo e data de publicação
  (ainda entre colchetes no texto original — serão preenchidos na
  publicação oficial).
- Anexos VIII a XV (matriz de avaliação, certificado, relatório anual,
  matriz de escolha por projeto, proposta técnica, declaração de proteção
  de dados, termo de ciência, cronograma) — citados no edital mas cujo
  arquivo ainda não foi fornecido.
- Canal oficial de protocolo do requerimento (SAPIENS, protocolo digital ou
  outro, a definir pela AGU).
- Datas do cronograma (Anexo XV) e dos ciclos trimestrais de análise.
