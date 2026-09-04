import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, ShieldAlert, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Alert } from "@/components/ui/Alert";
import { SITE_CONFIG } from "@/content/site-config";

export const metadata: Metadata = { title: "Atendimento" };

export default function AtendimentoPage() {
  return (
    <Container className="flex flex-col gap-8 py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Atendimento" }]} />
      <SectionHeading
        eyebrow="Fale conosco"
        title="Canais de atendimento"
        description="Utilize os canais oficiais abaixo para dúvidas sobre o procedimento de credenciamento."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-navy-800">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <p className="mt-3 text-sm font-semibold text-navy-950">Canal oficial</p>
          <p className="mt-1 text-sm text-neutral-600">{SITE_CONFIG.contato.canalOficial}</p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-navy-800">
            <Clock className="h-5 w-5" aria-hidden />
          </span>
          <p className="mt-3 text-sm font-semibold text-navy-950">Horário de atendimento</p>
          <p className="mt-1 text-sm text-neutral-600">{SITE_CONFIG.contato.horarioAtendimento}</p>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-navy-950">
          <HelpCircle className="h-4 w-4" aria-hidden /> Que tipo de dúvida posso enviar?
        </p>
        <ul className="mt-2 list-disc pl-5 text-sm text-neutral-600 space-y-1">
          <li>Dúvidas sobre requisitos, documentação e formulários.</li>
          <li>Dúvidas sobre prazos e etapas do procedimento.</li>
          <li>Problemas técnicos de acesso a esta plataforma.</li>
        </ul>
        <p className="mt-3 text-sm text-neutral-600">
          Antes de entrar em contato, consulte as{" "}
          <Link href="/faq" className="font-medium text-blue-600 hover:underline">perguntas frequentes</Link>.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          Ao entrar em contato, informe o número do processo, quando aplicável, para agilizar o
          atendimento.
        </p>
      </div>

      <Alert tone="danger" title="Atenção à proteção de dados">
        <span className="flex items-start gap-2">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          Não envie dados pessoais sensíveis em campos de texto aberto ou canais não oficiais.
        </span>
      </Alert>
    </Container>
  );
}
