import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { FAQ, FAQ_CATEGORIAS } from "@/content/faq";

export const metadata: Metadata = { title: "Perguntas frequentes" };

export default function FaqPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Perguntas frequentes" }]} />
      <SectionHeading
        eyebrow="Dúvidas comuns"
        title="Perguntas frequentes"
        description="Pesquise por tema ou palavra-chave para encontrar respostas rápidas sobre o credenciamento."
      />
      <FaqAccordion perguntas={FAQ} categorias={FAQ_CATEGORIAS} />
    </Container>
  );
}
