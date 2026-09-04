import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/content/site-config";

export const metadata: Metadata = { title: "Termos de uso" };

export default function TermosPage() {
  return (
    <Container className="flex flex-col gap-6 py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Termos de uso" }]} />
      <SectionHeading eyebrow="Condições de uso" title="Termos de uso" />
      <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-neutral-600">
        <p>{SITE_CONFIG.avisoJuridicoGeral}</p>
        <ul className="mt-3 list-disc pl-5 space-y-1">
          {SITE_CONFIG.avisosComplementares.map((aviso) => (
            <li key={aviso}>{aviso}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
