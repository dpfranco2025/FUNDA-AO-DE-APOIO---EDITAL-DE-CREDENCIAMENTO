import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center gap-4 py-24 text-center">
      <FileQuestion className="h-12 w-12 text-neutral-400" aria-hidden />
      <h1 className="text-2xl font-bold text-navy-950">Página não encontrada</h1>
      <p className="max-w-md text-neutral-600">
        O conteúdo procurado não existe ou foi movido. Utilize a busca ou volte para a página
        inicial.
      </p>
      <div className="flex gap-3">
        <Button href="/" variant="primary">Ir para o início</Button>
        <Link href="/busca" className="inline-flex items-center px-4 text-sm font-medium text-blue-600 hover:underline">
          Buscar no portal
        </Link>
      </div>
    </Container>
  );
}
