import type { EtapaJornada } from "@/types/content";

export function JourneyTimeline({
  etapas,
  etapaAtualId,
}: {
  etapas: EtapaJornada[];
  etapaAtualId?: string;
}) {
  return (
    <div className="relative">
      {/* Mobile: cards verticais */}
      <ol className="flex flex-col gap-3 md:hidden">
        {etapas.map((etapa) => (
          <li key={etapa.id} className="relative pl-8">
            <span
              className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                etapa.id === etapaAtualId
                  ? "bg-gold-500 text-navy-950"
                  : "bg-navy-900 text-white"
              }`}
              aria-hidden
            >
              {etapa.ordem}
            </span>
            <div className="rounded-lg border border-neutral-200 bg-white p-3">
              <p className="font-semibold text-navy-950 text-sm">{etapa.nome}</p>
              <p className="mt-0.5 text-xs text-neutral-500">{etapa.objetivo}</p>
              {etapa.id === etapaAtualId && (
                <span className="mt-1 inline-block text-[11px] font-semibold text-gold-600">
                  Você está aqui
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: linha horizontal */}
      <ol className="hidden md:grid md:grid-cols-5 md:gap-3 lg:grid-cols-11 relative">
        <div
          className="absolute left-0 right-0 top-4 hidden h-px bg-neutral-200 md:block"
          aria-hidden
          style={{ marginInline: `calc(100% / ${etapas.length * 2})` }}
        />
        {etapas.map((etapa) => (
          <li key={etapa.id} className="relative flex flex-col items-center text-center">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                etapa.id === etapaAtualId
                  ? "bg-gold-500 text-navy-950"
                  : "bg-navy-900 text-white"
              }`}
              aria-hidden
            >
              {etapa.ordem}
            </span>
            <span className="mt-2 text-[11px] font-medium leading-tight text-neutral-700">
              {etapa.nome}
            </span>
            {etapa.id === etapaAtualId && (
              <span className="mt-1 text-[10px] font-semibold text-gold-600">Você está aqui</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
