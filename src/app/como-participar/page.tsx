import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JourneyTimeline } from "@/components/jornada/JourneyTimeline";
import { Alert } from "@/components/ui/Alert";
import { obterDocumentoPorId } from "@/content/documentos";
import { ETAPAS_JORNADA } from "@/content/jornada";

export const metadata: Metadata = { title: "Como participar" };

export default function ComoParticiparPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Como participar" }]} />
      <SectionHeading
        eyebrow="Guia da jornada"
        title="Como participar do credenciamento"
        description="Conheça cada etapa do procedimento, o que se espera da fundação e os cuidados recomendados."
      />

      <JourneyTimeline etapas={ETAPAS_JORNADA} />

      <ol className="flex flex-col gap-4">
        {ETAPAS_JORNADA.map((etapa) => (
          <li key={etapa.id} className="rounded-xl border border-neutral-200 bg-white p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                  {etapa.ordem}
                </span>
                <div>
                  <h2 className="font-semibold text-navy-950">{etapa.nome}</h2>
                  <p className="mt-0.5 text-sm text-neutral-500">{etapa.objetivo}</p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
                Responsável: {etapa.responsavel}
              </span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase text-neutral-500">Providência esperada</p>
                <p className="mt-1 text-sm text-neutral-700">{etapa.providenciaEsperada}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-neutral-500">Resultado esperado</p>
                <p className="mt-1 text-sm text-neutral-700">{etapa.resultadoEsperado}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-neutral-500">Prazo</p>
                <p className="mt-1 text-sm text-neutral-700">{etapa.prazo ?? "Data a confirmar"}</p>
              </div>
              {etapa.documentosRelacionados.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase text-neutral-500">Documentos relacionados</p>
                  <ul className="mt-1 flex flex-col gap-0.5 text-sm text-blue-600">
                    {etapa.documentosRelacionados.map((id) => {
                      const doc = obterDocumentoPorId(id);
                      return doc ? (
                        <li key={id}>
                          <Link href="/documentos" className="hover:underline">{doc.titulo}</Link>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
            </div>

            {etapa.cuidados.length > 0 && (
              <Alert tone="warning" title="Principais cuidados" className="mt-4">
                <ul className="list-disc pl-4">
                  {etapa.cuidados.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Alert>
            )}

            {etapa.linkRelacionado && (
              <Link
                href={etapa.linkRelacionado.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
              >
                {etapa.linkRelacionado.label} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </li>
        ))}
      </ol>

      <Alert tone="info" title="Aviso importante">
        <span className="flex items-start gap-2">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          As etapas descritas nesta página têm caráter orientativo e serão validadas e ajustadas
          conforme o texto final do edital publicado.
        </span>
      </Alert>
    </Container>
  );
}
