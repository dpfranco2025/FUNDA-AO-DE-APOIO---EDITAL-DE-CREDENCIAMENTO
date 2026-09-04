"use client";

import { useMemo, useSyncExternalStore } from "react";
import { AlertTriangle, Printer, RotateCcw } from "lucide-react";
import type { ChecklistGrupo } from "@/types/content";
import { definirProgresso, inscrever, obterSnapshot, obterSnapshotServidor } from "@/lib/checklist-storage";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

export function ChecklistClient({
  grupos,
  aviso,
}: {
  grupos: ChecklistGrupo[];
  aviso: string;
}) {
  const progresso = useSyncExternalStore(inscrever, obterSnapshot, obterSnapshotServidor);

  const todosItens = useMemo(() => grupos.flatMap((g) => g.itens), [grupos]);
  const totalConcluidos = todosItens.filter((item) => progresso[item.id]).length;
  const percentual = todosItens.length > 0 ? Math.round((totalConcluidos / todosItens.length) * 100) : 0;

  function alternarItem(id: string) {
    definirProgresso((atual) => ({ ...atual, [id]: !atual[id] }));
  }

  function reiniciar() {
    definirProgresso(() => ({}));
  }

  return (
    <div className="flex flex-col gap-6">
      <Alert tone="warning" title="Caráter orientativo">
        {aviso}
      </Alert>

      <div className="no-print rounded-xl border border-neutral-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-navy-950">
            Progresso: {totalConcluidos} de {todosItens.length} itens ({percentual}%)
          </span>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => window.print()}>
              <Printer className="h-4 w-4" aria-hidden /> Imprimir
            </Button>
            <Button variant="ghost" onClick={reiniciar}>
              <RotateCcw className="h-4 w-4" aria-hidden /> Reiniciar
            </Button>
          </div>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
          <div
            className="h-full bg-green-600 transition-all"
            style={{ width: `${percentual}%` }}
            role="progressbar"
            aria-valuenow={percentual}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progresso de preparação da documentação"
          />
        </div>
      </div>

      {grupos.map((grupo) => (
        <section key={grupo.id} className="rounded-xl border border-neutral-200 bg-white p-5">
          <h3 className="font-semibold text-navy-950">{grupo.titulo}</h3>
          <ul className="mt-3 flex flex-col divide-y divide-neutral-100">
            {grupo.itens.map((item) => {
              const concluido = !!progresso[item.id];
              return (
                <li key={item.id} className="py-3">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={concluido}
                      onChange={() => alternarItem(item.id)}
                      className="mt-1 h-4.5 w-4.5 shrink-0 accent-green-600"
                    />
                    <span>
                      <span className="flex flex-wrap items-center gap-2">
                        <span className={`font-medium ${concluido ? "text-neutral-400 line-through" : "text-navy-950"}`}>
                          {item.titulo}
                        </span>
                        {item.obrigatorio ? (
                          <span className="rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-700">
                            Obrigatório
                          </span>
                        ) : (
                          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600">
                            Condicional
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-sm text-neutral-600">{item.descricao}</span>
                      <span className="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-neutral-500">
                        {item.quemEmite && <span>Quem emite/assina: {item.quemEmite}</span>}
                        {item.exigeValidadeOuAssinatura && <span>{item.exigeValidadeOuAssinatura}</span>}
                      </span>
                      {item.alertaComum && (
                        <span className="mt-1 flex items-center gap-1 text-xs font-medium text-amber-700">
                          <AlertTriangle className="h-3.5 w-3.5" aria-hidden /> {item.alertaComum}
                        </span>
                      )}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
