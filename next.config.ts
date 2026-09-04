import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático (sem rotas de API nem recursos dinâmicos de servidor),
  // exportado como HTML/CSS/JS puro em `out/` — compatível com Cloudflare
  // Pages, GitHub Pages, Vercel (modo estático) ou qualquer host de arquivos
  // estáticos. Ver README.md para instruções de deploy.
  output: "export",
};

export default nextConfig;
