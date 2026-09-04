import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Alert } from "@/components/ui/Alert";
import { TextoLegalSecao } from "@/components/edital/TextoLegal";
import { EDITAL_TEXTO } from "@/content/edital-texto";

export const metadata: Metadata = { title: "Texto integral do edital" };

export default function EditalTextoPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Edital", href: "/edital" }, { label: "Texto integral" }]} />
      <SectionHeading
        eyebrow="Aprovado pelo CG-AGU"
        title="Texto integral do edital"
        description="Reprodução do conteúdo normativo aprovado pelo Comitê de Governança da AGU (CG-AGU)."
      />

      <Alert tone="info" title="Aprovado pelo Comitê de Governança da AGU">
        Este texto foi aprovado pelo Comitê de Governança da Advocacia-Geral da União (CG-AGU) e
        aguarda publicação oficial. Trechos entre colchetes (como o número do edital, do processo
        administrativo e a data) serão preenchidos nesse momento. Em caso de divergência com a
        versão oficialmente publicada, esta prevalecerá.
      </Alert>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Sumário do edital" className="lg:sticky lg:top-20 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Sumário</p>
          <ul className="mt-2 flex flex-col gap-1 text-sm">
            {EDITAL_TEXTO.map((bloco) => (
              <li key={bloco.id}>
                <a href={`#${bloco.id}`} className="block rounded-md px-2 py-1.5 text-blue-600 hover:bg-blue-50">
                  {bloco.titulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-10">
          {EDITAL_TEXTO.map((bloco) => (
            <div key={bloco.id} id={bloco.id} className="scroll-mt-24 rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-bold text-navy-950">{bloco.titulo}</h2>
              <div className="mt-2 flex flex-col">
                {bloco.secoes.map((secao) => (
                  <TextoLegalSecao key={secao.id} secao={secao} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
