import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Alert } from "@/components/ui/Alert";
import { CRONOGRAMA, PRAZOS_PROCESSUAIS } from "@/content/cronograma";
import { SITUACAO_CRONOGRAMA_CLASSES, SITUACAO_CRONOGRAMA_LABEL } from "@/content/cronograma-labels";
import { diasRestantes, formatarData } from "@/lib/format";

export const metadata: Metadata = { title: "Cronograma" };

export default function CronogramaPage() {
  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Cronograma" }]} />
      <SectionHeading
        eyebrow="Datas oficiais"
        title="Cronograma do procedimento"
        description="Acompanhe as etapas e prazos do procedimento. Datas ainda não confirmadas aparecem como “Data a confirmar”."
      />

      <Alert tone="warning" title="Cronograma será atualizado após a publicação oficial">
        O edital foi aprovado pelo Comitê de Governança da AGU (CG-AGU), mas ainda não foi
        publicado oficialmente. Todas as datas abaixo — incluindo o cronograma detalhado do
        Anexo XV e os ciclos trimestrais de análise — serão inseridas e atualizadas nesta página
        assim que a publicação oficial ocorrer.
      </Alert>

      <Alert tone="info" title="Chamamento público permanente">
        Este edital não tem prazo de inscrição nem data de encerramento: fica aberto por prazo
        indeterminado e os requerimentos podem ser apresentados a qualquer tempo. A AGU pode
        organizar a análise em ciclos trimestrais, sem prejuízo do recebimento contínuo de novos
        requerimentos.
      </Alert>

      <ol className="flex flex-col gap-4">
        {CRONOGRAMA.map((etapa) => {
          const restantes = diasRestantes(etapa.dataFinal);
          return (
            <li key={etapa.id} className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-navy-800">
                <CalendarDays className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-semibold text-navy-950">{etapa.etapa}</h2>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${SITUACAO_CRONOGRAMA_CLASSES[etapa.situacao]}`}
                  >
                    {SITUACAO_CRONOGRAMA_LABEL[etapa.situacao]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{etapa.descricao}</p>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500">
                  <span>Início: {formatarData(etapa.dataInicial)}</span>
                  <span>Encerramento: {formatarData(etapa.dataFinal)}</span>
                  {restantes !== null && restantes >= 0 && etapa.situacao !== "concluida" && (
                    <span className="font-semibold text-amber-700">
                      {restantes === 0 ? "Encerra hoje" : `${restantes} dia(s) restante(s)`}
                    </span>
                  )}
                </div>
                {etapa.alteracao && (
                  <p className="mt-2 text-xs font-medium text-amber-700">Alteração: {etapa.alteracao}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="rounded-xl border border-neutral-200 bg-white p-6">
        <h2 className="font-semibold text-navy-950">Prazos processuais</h2>
        <p className="mt-1 text-sm text-neutral-600">
          Prazos fixos que se aplicam a cada requerimento, independentemente do calendário de
          ciclos trimestrais.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 text-xs uppercase text-neutral-500">
                <th className="py-2 pr-4">Evento</th>
                <th className="py-2 pr-4">Prazo</th>
                <th className="py-2">Observação</th>
              </tr>
            </thead>
            <tbody>
              {PRAZOS_PROCESSUAIS.map((p) => (
                <tr key={p.id} className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium text-neutral-800">{p.titulo}</td>
                  <td className="py-2 pr-4 text-neutral-600">{p.prazo}</td>
                  <td className="py-2 text-neutral-500">{p.observacao ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Alert tone="info">
        Em caso de dúvida, consulte sempre o texto integral do edital e eventuais retificações.
      </Alert>
    </Container>
  );
}
