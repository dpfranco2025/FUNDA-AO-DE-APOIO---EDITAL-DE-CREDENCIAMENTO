import type { SecaoEdital } from "@/content/edital-texto";

export function TextoLegalSecao({ secao }: { secao: SecaoEdital }) {
  return (
    <section id={secao.id} className="scroll-mt-24 border-b border-neutral-100 py-6 last:border-b-0">
      <h3 className="font-semibold text-navy-950">{secao.titulo}</h3>
      <div className="mt-2 flex flex-col gap-3">
        {secao.paragrafos.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-neutral-700">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
