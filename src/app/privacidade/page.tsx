import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Política de privacidade" };

export default function PrivacidadePage() {
  return (
    <Container className="flex flex-col gap-6 py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Política de privacidade" }]} />
      <SectionHeading eyebrow="Proteção de dados" title="Política de privacidade" />
      <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed text-neutral-600">
        <p>
          Este portal tem caráter informativo. O tratamento de eventuais dados pessoais coletados
          observará os princípios da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>
        <p className="mt-3">Informação a ser inserida com o texto oficial da política de privacidade.</p>
      </div>
    </Container>
  );
}
