export type PartialDeep<T> = {
  [K in keyof T]?: T[K] extends (infer U)[]
    ? PartialDeep<U>[]
    : T[K] extends object
      ? PartialDeep<T[K]>
      : T[K]
}

export function deepMerge<T extends Record<string, unknown>>(base: T, override?: PartialDeep<T>): T {
  if (!override) return base
  const out = (Array.isArray(base) ? [...(base as unknown as unknown[])] : { ...base }) as T
  const outRecord = out as unknown as Record<string, unknown>

  for (const k of Object.keys(override) as Array<keyof T>) {
    const ov = override[k]
    if (ov === undefined) continue

    const bv = base[k]
    if (Array.isArray(bv) && Array.isArray(ov)) {
      outRecord[k as string] = ov as unknown
      continue
    }
    if (bv && typeof bv === 'object' && !Array.isArray(bv) && ov && typeof ov === 'object' && !Array.isArray(ov)) {
      outRecord[k as string] = deepMerge(bv as Record<string, unknown>, ov as PartialDeep<Record<string, unknown>>)
      continue
    }
    outRecord[k as string] = ov as unknown
  }

  return out
}
