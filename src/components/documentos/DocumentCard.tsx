import { Eye, Download, FileText, Sparkles, Clock } from "lucide-react";
import type { Documento } from "@/types/content";
import { formatarData } from "@/lib/format";
import { Button } from "@/components/ui/Button";

const OBRIGATORIEDADE_LABEL: Record<Documento["obrigatorio"], string> = {
  obrigatorio: "Obrigatório",
  facultativo: "Facultativo",
  condicional: "Condicional",
  informativo: "Informativo",
};

const OBRIGATORIEDADE_CLASSES: Record<Documento["obrigatorio"], string> = {
  obrigatorio: "bg-red-50 text-red-700 border-red-600/20",
  facultativo: "bg-neutral-100 text-neutral-700 border-neutral-300",
  condicional: "bg-amber-50 text-amber-700 border-amber-600/20",
  informativo: "bg-blue-50 text-navy-800 border-blue-500/20",
};

export function DocumentCard({ documento }: { documento: Documento }) {
  const urlVisualizar = documento.urlVisualizar ?? documento.urlDownloadPdf;

  return (
    <article className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-start gap-3 min-w-0">
          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
            <FileText className="h-4.5 w-4.5" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
              {documento.numero && <span className="font-semibold text-navy-800">{documento.numero}</span>}
              <span>{documento.categoria}</span>
            </div>
            <h3 className="font-semibold text-navy-950 leading-snug">{documento.titulo}</h3>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-1.5">
          {documento.novo && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-semibold text-navy-800">
              <Sparkles className="h-3 w-3" aria-hidden /> Novo
            </span>
          )}
          {documento.atualizadoRecentemente && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
              <Clock className="h-3 w-3" aria-hidden /> Atualizado
            </span>
          )}
        </div>
      </div>

      <p className="text-sm text-neutral-600">{documento.finalidade}</p>
      {documento.quandoUtilizar && (
        <p className="text-sm text-neutral-500">
          <span className="font-medium text-neutral-700">Quando utilizar: </span>
          {documento.quandoUtilizar}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span
          className={`rounded-full border px-2 py-0.5 font-medium ${OBRIGATORIEDADE_CLASSES[documento.obrigatorio]}`}
        >
          {OBRIGATORIEDADE_LABEL[documento.obrigatorio]}
        </span>
        <span className="rounded-full border border-neutral-300 px-2 py-0.5 text-neutral-600">
          {documento.formatos.join(" · ")}
        </span>
        <span className="text-neutral-400">Versão: {documento.versao}</span>
        <span className="text-neutral-400">Atualizado em: {formatarData(documento.dataAtualizacao)}</span>
      </div>

      <div className="mt-1 flex flex-wrap gap-2">
        {documento.disponivel ? (
          <>
            {urlVisualizar && (
              <Button
                href={urlVisualizar}
                variant="secondary"
                external={!documento.urlVisualizar || urlVisualizar === documento.urlDownloadPdf}
                ariaLabel={`Visualizar ${documento.numero ?? documento.titulo}`}
              >
                <Eye className="h-4 w-4" aria-hidden /> Visualizar
              </Button>
            )}
            {documento.urlDownloadPdf && (
              <Button href={documento.urlDownloadPdf} variant="primary" external>
                <Download className="h-4 w-4" aria-hidden /> Baixar em PDF
              </Button>
            )}
            {documento.urlDownloadDocx && (
              <Button href={documento.urlDownloadDocx} variant="secondary" external>
                <Download className="h-4 w-4" aria-hidden /> Baixar em Word
              </Button>
            )}
          </>
        ) : (
          <span className="rounded-lg bg-neutral-100 px-3 py-2 text-xs font-medium text-neutral-500">
            Documento disponível após a publicação
          </span>
        )}
      </div>
    </article>
  );
}
