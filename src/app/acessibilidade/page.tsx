import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Acessibilidade" };

const COMPROMISSOS = [
  "Navegação completa por teclado, com foco visível em todos os elementos interativos.",
  "Contraste de cores adequado entre texto e plano de fundo.",
  "Estrutura semântica em HTML, compatível com leitores de tela.",
  "Botão \"Pular para o conteúdo\" no início de cada página.",
  "Layout responsivo, sem quebra em zoom de até 200%.",
  "Respeito à preferência do usuário por redução de movimento.",
];

export default function AcessibilidadePage() {
  return (
    <Container className="flex flex-col gap-6 py-10 max-w-3xl">
      <Breadcrumb items={[{ label: "Acessibilidade" }]} />
      <SectionHeading
        eyebrow="Compromisso"
        title="Acessibilidade"
        description="Este portal busca seguir as boas práticas da WCAG 2.1 nível AA e do eMAG."
      />
      <ul className="rounded-xl border border-neutral-200 bg-white p-6 list-disc pl-5 space-y-2 text-sm text-neutral-600">
        {COMPROMISSOS.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <p className="text-sm text-neutral-500">
        Encontrou uma barreira de acessibilidade? Informe pelo canal de{" "}
        <a href="/atendimento" className="font-medium text-blue-600 hover:underline">atendimento</a>.
      </p>
    </Container>
  );
}
