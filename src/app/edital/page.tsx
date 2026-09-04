import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Download, FileCheck2, Paperclip, History } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { EDITAL } from "@/content/edital";
import { formatarData } from "@/lib/format";

export const metadata: Metadata = { title: "Edital" };

export default function EditalPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Edital" }]} />

      <SectionHeading
        eyebrow="Central do edital"
        title="Edital de Habilitação Institucional"
        description="Consulte a minuta do chamamento público permanente e os anexos relacionados à habilitação de fundações de apoio junto à ICT-AGU."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Card 1 — Versão publicada do edital */}
        <article className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6">
          <div className="flex items-start justify-between gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-navy-800">
              <FileCheck2 className="h-5 w-5" aria-hidden />
            </span>
            <StatusBadge status={EDITAL.status} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy-950">{EDITAL.titulo}</h2>
            <p className="mt-1 text-sm text-neutral-500">
              {EDITAL.numero ? `Edital nº ${EDITAL.numero}` : "Número a ser informado após a publicação"}
            </p>
          </div>

          <p className="text-sm text-neutral-600">{EDITAL.descricao}</p>

          <dl className="grid grid-cols-2 gap-3 rounded-lg bg-neutral-50 p-4 text-sm">
            <div>
              <dt className="text-xs text-neutral-500">Publicação</dt>
              <dd className="font-medium text-neutral-800">{formatarData(EDITAL.dataPublicacao)}</dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Versão</dt>
              <dd className="font-medium text-neutral-800">{EDITAL.versaoAtual}</dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Última atualização</dt>
              <dd className="font-medium text-neutral-800">{formatarData(EDITAL.dataUltimaAtualizacao)}</dd>
            </div>
            <div>
              <dt className="text-xs text-neutral-500">Formato / tamanho</dt>
              <dd className="font-medium text-neutral-800">
                {EDITAL.formato}{EDITAL.tamanhoArquivo ? ` · ${EDITAL.tamanhoArquivo}` : ""}
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-2">
            {EDITAL.urlVisualizar && (
              <Button href={EDITAL.urlVisualizar} variant="secondary">
                <Eye className="h-4 w-4" aria-hidden /> Ler edital (texto integral)
              </Button>
            )}
            {EDITAL.disponivel && EDITAL.urlDownloadPdf && (
              <Button href={EDITAL.urlDownloadPdf} variant="primary" external>
                <Download className="h-4 w-4" aria-hidden /> Baixar edital em PDF
              </Button>
            )}
            {EDITAL.disponivel && EDITAL.urlDownloadEditavel && (
              <Button href={EDITAL.urlDownloadEditavel} variant="secondary" external>
                <Download className="h-4 w-4" aria-hidden /> Baixar versão editável
              </Button>
            )}
          </div>

          <Alert tone="info">
            Este texto foi aprovado pelo Comitê de Governança da Advocacia-Geral da União
            (CG-AGU). Aguarda apenas a publicação oficial, quando serão preenchidos o número do
            edital, o número do processo administrativo e a data.
          </Alert>

          <p className="text-xs text-neutral-400">Fonte oficial: {EDITAL.fonteOficial}</p>

          <div className="border-t border-neutral-100 pt-4">
            <p className="flex items-center gap-1.5 text-sm font-medium text-navy-900">
              <History className="h-4 w-4" aria-hidden /> Histórico de versões e retificações
            </p>
            {EDITAL.historico.length === 0 ? (
              <p className="mt-1 text-sm text-neutral-500">Nenhuma retificação publicada até o momento.</p>
            ) : (
              <ul className="mt-2 flex flex-col gap-2 text-sm">
                {EDITAL.historico.map((v) => (
                  <li key={v.versao} className="flex justify-between gap-2 text-neutral-600">
                    <span>{v.descricao}</span>
                    <span className="shrink-0 text-neutral-400">{formatarData(v.data)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>

        {/* Card 2 — Anexos do edital */}
        <article className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-navy-800">
            <Paperclip className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <h2 className="text-lg font-bold text-navy-950">Anexos do edital</h2>
            <p className="mt-1 text-sm text-neutral-600">
              Formulários, declarações e modelos que acompanham o edital. Cada documento indica sua
              finalidade, se o preenchimento é obrigatório ou facultativo, e os formatos disponíveis
              para download.
            </p>
          </div>
          <Alert tone="warning" title="Atenção">
            Utilize sempre a versão mais recente de cada anexo disponibilizada nesta página. Caso
            uma retificação seja publicada, os arquivos aqui serão atualizados.
          </Alert>
          <Button href="/documentos" variant="primary" className="self-start">
            Acessar biblioteca de anexos
          </Button>
        </article>
      </div>

      <p className="text-sm text-neutral-500">
        Dúvidas sobre o conteúdo do edital? Consulte as{" "}
        <Link href="/faq" className="font-medium text-blue-600 hover:underline">perguntas frequentes</Link>{" "}
        ou o canal de{" "}
        <Link href="/atendimento" className="font-medium text-blue-600 hover:underline">atendimento</Link>.
      </p>
    </Container>
  );
}
