export type PartialDeep<T> = {
  [K in keyof T]?: T[K] extends (infer U)[]
    ? PartialDeep<U>[]
    : T[K] extends object
      ? PartialDeep<T[K]>
      : T[K]
}

export function deepMerge<T extends Record<string, any>>(base: T, override?: PartialDeep<T>): T {
  if (!override) return base
  const out: any = Array.isArray(base) ? [...base] : { ...base }

  for (const k of Object.keys(override) as Array<keyof T>) {
    const ov: any = (override as any)[k]
    if (ov === undefined) continue

    const bv: any = (base as any)[k]
    if (Array.isArray(bv) && Array.isArray(ov)) {
      out[k] = ov
      continue
    }
    if (bv && typeof bv === 'object' && !Array.isArray(bv) && ov && typeof ov === 'object' && !Array.isArray(ov)) {
      out[k] = deepMerge(bv, ov)
      continue
    }
    out[k] = ov
  }

  return out
}

