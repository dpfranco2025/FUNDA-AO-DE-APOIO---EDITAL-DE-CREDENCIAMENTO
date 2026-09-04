const STORAGE_KEY = "portal-credenciamento-agu:checklist";

type Progresso = Record<string, boolean>;

function lerStorage(): Progresso {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as Progresso) : {};
  } catch {
    return {};
  }
}

let cache: Progresso = {};
let cacheCarregado = false;
const listeners = new Set<() => void>();

function notificar() {
  for (const listener of listeners) listener();
}

export function inscrever(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function obterSnapshot(): Progresso {
  if (!cacheCarregado) {
    cache = lerStorage();
    cacheCarregado = true;
  }
  return cache;
}

const SNAPSHOT_VAZIO: Progresso = {};

export function obterSnapshotServidor(): Progresso {
  return SNAPSHOT_VAZIO;
}

export function definirProgresso(atualizar: (atual: Progresso) => Progresso): void {
  cache = atualizar(obterSnapshot());
  cacheCarregado = true;
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cache));
    } catch {
      // Armazenamento indisponível (modo privado, cota excedida): falha silenciosa.
    }
  }
  notificar();
}
