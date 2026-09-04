import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Alert } from "@/components/ui/Alert";
import { TextoLegalSecao } from "@/components/edital/TextoLegal";
import { ANEXO_I_TEXTO } from "@/content/anexo-i-texto";

export const metadata: Metadata = { title: "Anexo I — Áreas e atividades passíveis de apoio" };

export default function AnexoIPage() {
  return (
    <Container className="flex flex-col gap-8 py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Documentos", href: "/documentos" }, { label: "Anexo I" }]} />
      <SectionHeading
        eyebrow="Anexo I do edital · aprovado pelo CG-AGU"
        title="Áreas e atividades passíveis de apoio"
        description="Relação exemplificativa das áreas e atividades que poderão ser objeto de apoio pelas fundações habilitadas."
      />

      <Alert tone="info">
        Este é um documento de referência (não é um formulário a preencher). O texto foi aprovado
        pelo Comitê de Governança da AGU (CG-AGU) e aguarda publicação oficial do edital.
      </Alert>

      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <div className="flex flex-col">
          {ANEXO_I_TEXTO.map((secao) => (
            <TextoLegalSecao key={secao.id} secao={secao} />
          ))}
        </div>
      </div>
    </Container>
  );
}
