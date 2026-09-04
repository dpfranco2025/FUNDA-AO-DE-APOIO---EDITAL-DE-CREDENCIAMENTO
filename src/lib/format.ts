export function formatarData(iso: string | null | undefined): string {
  if (!iso) return "Data a confirmar";
  const data = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(data.getTime())) return "Data a confirmar";
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function diasRestantes(iso: string | null | undefined): number | null {
  if (!iso) return null;
  const alvo = new Date(`${iso}T23:59:59`);
  if (Number.isNaN(alvo.getTime())) return null;
  const hoje = new Date();
  const diffMs = alvo.getTime() - hoje.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
