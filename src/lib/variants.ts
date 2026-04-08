import { cn } from './cn'

type VariantsMap = Record<string, Record<string, string>>

export type VariantSelection<V extends VariantsMap> = {
  [K in keyof V]?: keyof V[K]
} & {
  className?: string
}

/**
 * 轻量 variant 工具（替代 cva 的最小实现）
 * - 统一组件的 `variant` / `size` 等 props 到 className
 * - 默认值通过 `defaultVariants` 提供
 */
export function createVariants<V extends VariantsMap>(
  base: string,
  variants: V,
  defaultVariants?: Partial<{ [K in keyof V]: keyof V[K] }>,
) {
  return function variantsClassName(props: VariantSelection<V> = {}) {
    const parts: Array<string | undefined | null | false> = [base]

    for (const key of Object.keys(variants) as Array<keyof V>) {
      const value = (props[key] ?? defaultVariants?.[key]) as keyof V[typeof key] | undefined
      if (!value) continue
      parts.push(variants[key][value])
    }

    parts.push(props.className)
    return cn(parts)
  }
}

