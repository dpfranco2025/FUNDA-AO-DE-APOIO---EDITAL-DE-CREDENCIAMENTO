import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DocumentLibrary } from "@/components/documentos/DocumentLibrary";
import { DOCUMENTOS } from "@/content/documentos";

export const metadata: Metadata = { title: "Documentos" };

export default function DocumentosPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Documentos" }]} />
      <SectionHeading
        eyebrow="Biblioteca"
        title="Documentos, formulários e modelos"
        description="Pesquise, filtre e baixe os documentos relacionados ao credenciamento de fundações de apoio."
      />
      <DocumentLibrary documentos={DOCUMENTOS} />
    </Container>
  );
}
