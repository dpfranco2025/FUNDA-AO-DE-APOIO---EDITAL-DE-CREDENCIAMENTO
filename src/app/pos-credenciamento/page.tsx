import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Alert } from "@/components/ui/Alert";
import { TOPICOS_POS_CREDENCIAMENTO } from "@/content/pos-credenciamento";

export const metadata: Metadata = { title: "Após o credenciamento" };

export default function PosCredenciamentoPage() {
  return (
    <Container className="flex flex-col gap-8 py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Após o credenciamento" }]} />
      <SectionHeading
        eyebrow="Relacionamento futuro"
        title="Após o credenciamento"
        description="Entenda como poderá ocorrer a atuação da fundação junto à ICT-AGU depois de concluído o credenciamento."
      />

      <Alert tone="warning" title="Habilitação não é contratação">
        A habilitação institucional não representa contratação automática. A atuação em projetos
        específicos depende de seleção própria e de instrumentos jurídicos próprios, celebrados
        posteriormente.
      </Alert>

      <div className="flex flex-col divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
        {TOPICOS_POS_CREDENCIAMENTO.map((topico) => (
          <section key={topico.id} className="p-5">
            <h2 className="font-semibold text-navy-950">{topico.titulo}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{topico.conteudo}</p>
          </section>
        ))}
      </div>
    </Container>
  );
}
