import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChecklistClient } from "@/components/checklist/ChecklistClient";
import { CHECKLIST, AVISO_CHECKLIST } from "@/content/checklist";

export const metadata: Metadata = { title: "Prepare sua documentação" };

export default function ChecklistPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Prepare sua documentação" }]} />
      <SectionHeading
        eyebrow="Checklist"
        title="Prepare sua documentação"
        description="Marque os itens conforme forem concluídos. Seu progresso é salvo automaticamente neste navegador."
      />
      <ChecklistClient grupos={CHECKLIST} aviso={AVISO_CHECKLIST} />
    </Container>
  );
}
