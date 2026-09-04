import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BuscaResultados } from "./BuscaResultados";

export const metadata: Metadata = { title: "Busca" };

export default function BuscaPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Busca" }]} />
      <SectionHeading eyebrow="Encontre o que precisa" title="Busca no portal" />
      <Suspense fallback={<p className="text-sm text-neutral-500">Carregando busca...</p>}>
        <BuscaResultados />
      </Suspense>
    </Container>
  );
}
