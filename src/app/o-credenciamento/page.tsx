import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { SITE_CONFIG } from "@/content/site-config";
import { BASE_LEGAL, NATUREZA_HABILITACAO } from "@/content/edital";

export const metadata: Metadata = { title: "O credenciamento" };

const OBJETIVOS = [
  "Ensino",
  "Pesquisa",
  "Extensão",
  "Desenvolvimento institucional",
  "Desenvolvimento científico e tecnológico",
  "Estímulo à inovação",
];

export default function OCredenciamentoPage() {
  return (
    <Container className="flex flex-col gap-8 py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "O credenciamento" }]} />
      <SectionHeading
        eyebrow="Entenda o procedimento"
        title="O que é a habilitação institucional de fundações de apoio"
        description={`A ${SITE_CONFIG.instituicao}, na condição de Instituição Científica, Tecnológica e de Inovação (${SITE_CONFIG.ictNome}), promove um chamamento público permanente para habilitação institucional de fundações de apoio aptas a apoiar seus projetos — procedimento popularmente também chamado de "credenciamento".`}
      />

      <Alert tone="info" title="Habilitação institucional ≠ credenciamento ministerial">
        O termo técnico usado no edital é <strong>habilitação institucional</strong>: o
        procedimento interno pelo qual a AGU avalia a capacidade da fundação. Ele não se confunde
        com o <strong>credenciamento ministerial</strong>, que é o ato do MEC e do MCTI que
        reconhece a entidade como fundação de apoio — condição prévia para participar deste
        chamamento.
      </Alert>

      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <h2 className="font-semibold text-navy-950">Áreas de apoio</h2>
        <p className="mt-1 text-sm text-neutral-600">
          As fundações habilitadas poderão apoiar projetos nas seguintes áreas, conforme definido
          no edital:
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {OBJETIVOS.map((obj) => (
            <li key={obj} className="rounded-lg bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
              {obj}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <h2 className="font-semibold text-navy-950">O que a habilitação NÃO significa</h2>
        <p className="mt-1 text-sm text-neutral-600">Conforme a Seção 4 do edital, a habilitação:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-neutral-700">
          {NATUREZA_HABILITACAO.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <h2 className="font-semibold text-navy-950">Base legal</h2>
        <ul className="mt-3 grid gap-1.5 text-sm text-neutral-600 sm:grid-cols-2">
          {BASE_LEGAL.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <h2 className="font-semibold text-navy-950">Para quem é este portal</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Este portal destina-se a dirigentes e representantes legais de fundações de apoio,
          equipes jurídicas e administrativas, gestores de projetos, ICTs e instituições apoiadas,
          servidores da {SITE_CONFIG.siglaInstituicao} envolvidos no procedimento, e cidadãos
          interessados na transparência do processo.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/edital" variant="primary">Consultar o edital</Button>
        <Button href="/como-participar" variant="secondary">Ver como participar</Button>
      </div>
    </Container>
  );
}
