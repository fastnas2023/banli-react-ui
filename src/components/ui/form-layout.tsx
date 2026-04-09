import * as React from 'react'
import { cn } from '../../lib/cn'

export type FormLayoutVariant = 'horizontal' | 'vertical' | 'inline'

type FormLayoutContextValue = {
  layout: FormLayoutVariant
  /**
   * 作为 CSS 变量传递给子组件。
   * - horizontal / inline：作为 label 列宽
   * - vertical：不使用（保留变量不影响）
   */
  labelWidth?: string
}

const FormLayoutContext = React.createContext<FormLayoutContextValue | null>(null)

function normalizeLabelWidth(v: number | string | undefined) {
  if (v === undefined) return undefined
  if (typeof v === 'number') return `${v}px`
  return v
}

export type FormLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  layout?: FormLayoutVariant
  /**
   * horizontal / inline 模式下 label 列宽（px 或任意 CSS 长度字符串，如 "10rem"）。
   *
   * 默认：120px
   */
  labelWidth?: number | string
}

/**
 * FormLayout（表单布局容器）
 *
 * - 提供 layout（horizontal/vertical/inline）
 * - 提供 labelWidth（以 CSS 变量形式下发给 FormCol）
 *
 * 说明：
 * - 本组件不依赖 react-hook-form；可与现有 FormField/FormItem/FormLabel/FormControl/FormMessage 混用。
 * - 当你想将 RHF 的 <FormItem> 转为“横向 label + 控件”布局时，推荐将 <FormItem> 放在 <FormCol asItem> 内，
 *   FormCol 会自动为该子节点追加 `contents`，从而让 label/控件/错误信息参与 FormCol 的 grid 布局。
 */
export const FormLayout = React.forwardRef<HTMLDivElement, FormLayoutProps>(
  ({ layout = 'vertical', labelWidth = 120, className, style, ...props }, ref) => {
    const labelWidthCss = normalizeLabelWidth(labelWidth)
    const ctx = React.useMemo<FormLayoutContextValue>(
      () => ({
        layout,
        labelWidth: labelWidthCss,
      }),
      [layout, labelWidthCss]
    )

    return (
      <FormLayoutContext.Provider value={ctx}>
        <div
          ref={ref}
          data-form-layout={layout}
          className={cn('w-full', className)}
          style={
            {
              ...(style as React.CSSProperties),
              ...(labelWidthCss ? ({ ['--aivent-form-label-width']: labelWidthCss } as React.CSSProperties) : null),
            } as React.CSSProperties
          }
          {...props}
        />
      </FormLayoutContext.Provider>
    )
  }
)

FormLayout.displayName = 'FormLayout'

export type FormSectionProps = React.HTMLAttributes<HTMLElement>

/**
 * FormSection（表单分区容器）
 *
 * 仅提供结构化分组与统一 spacing；内容完全由 children 决定。
 */
export const FormSection = React.forwardRef<HTMLElement, FormSectionProps>(({ className, ...props }, ref) => {
  return <section ref={ref} className={cn('grid gap-4', className)} {...props} />
})

FormSection.displayName = 'FormSection'

export type FormRowProps = React.HTMLAttributes<HTMLDivElement>

/**
 * FormRow（表单行）
 *
 * - vertical / horizontal：默认 grid gap
 * - inline：默认 flex wrap，更适合查询条件类表单
 */
export const FormRow = React.forwardRef<HTMLDivElement, FormRowProps>(({ className, ...props }, ref) => {
  const ctx = React.useContext(FormLayoutContext)
  const layout = ctx?.layout ?? 'vertical'
  return (
    <div
      ref={ref}
      data-form-row=""
      className={cn(layout === 'inline' ? 'flex flex-wrap items-end gap-4' : 'grid gap-4', className)}
      {...props}
    />
  )
})

FormRow.displayName = 'FormRow'

export type FormColProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 便捷适配 RHF 的 FormItem：
   * - 当 children 是单个 ReactElement 时，FormCol 会 clone 并为其追加 `contents` class。
   * - 这样 FormItem 本身不会产生额外布局容器，其内部 label/控件/错误信息可以直接参与 FormCol 的 grid。
   */
  asItem?: boolean
  /**
   * 非 RHF 场景：直接由 FormCol 渲染 label 区域。
   * RHF 场景推荐使用 <FormLabel> 放在 <FormItem> 内，配合 asItem。
   */
  label?: React.ReactNode
  htmlFor?: string
  labelClassName?: string
  contentClassName?: string
  /** 覆盖 FormLayout 的 labelWidth（px 或 CSS 长度）。 */
  labelWidth?: number | string
}

export const FormCol = React.forwardRef<HTMLDivElement, FormColProps>(
  (
    {
      asItem = false,
      label,
      htmlFor,
      labelClassName,
      contentClassName,
      labelWidth,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const ctx = React.useContext(FormLayoutContext)
    const layout = ctx?.layout ?? 'vertical'
    const labelWidthCss = normalizeLabelWidth(labelWidth ?? ctx?.labelWidth)

    const isHorizontal = layout === 'horizontal' || layout === 'inline'

    const nextChildren = React.useMemo(() => {
      if (!asItem) return children
      if (!React.isValidElement(children)) return children
      const el = children as React.ReactElement<{ className?: string }>
      return React.cloneElement(el, {
        className: cn(el.props.className, 'contents'),
      })
    }, [asItem, children])

    return (
      <div
        ref={ref}
        data-form-col={layout}
        className={cn(
          'min-w-0',
          layout === 'vertical' ? 'grid gap-2' : null,
          layout === 'horizontal'
            ? cn(
                'grid items-start gap-x-4 gap-y-2',
                // label in col1; everything else in col2
                '[&>label]:col-start-1 [&>[data-form-col-label]]:col-start-1',
                '[&>*:not(label):not([data-form-col-label])]:col-start-2'
              )
            : null,
          layout === 'inline'
            ? cn(
                'grid items-center gap-x-3 gap-y-1',
                '[&>label]:col-start-1 [&>[data-form-col-label]]:col-start-1',
                '[&>*:not(label):not([data-form-col-label])]:col-start-2'
              )
            : null,
          isHorizontal ? 'grid-cols-[var(--aivent-form-label-width,_120px)_minmax(0,1fr)]' : null,
          className
        )}
        style={
          {
            ...(style as React.CSSProperties),
            ...(labelWidthCss
              ? ({ ['--aivent-form-label-width']: labelWidthCss } as React.CSSProperties)
              : null),
          } as React.CSSProperties
        }
        {...props}
      >
        {label !== undefined ? (
          htmlFor ? (
            <label
              data-form-col-label=""
              htmlFor={htmlFor}
              className={cn(
                'text-sm font-medium leading-none text-aivent-text',
                layout === 'inline' ? 'whitespace-nowrap' : null,
                labelClassName
              )}
            >
              {label}
            </label>
          ) : (
            <div
              data-form-col-label=""
              className={cn(
                'text-sm font-medium leading-none text-aivent-text',
                layout === 'inline' ? 'whitespace-nowrap' : null,
                labelClassName
              )}
            >
              {label}
            </div>
          )
        ) : null}

        {label !== undefined && isHorizontal ? (
          <div data-form-col-content="" className={cn('min-w-0', contentClassName)}>
            {nextChildren}
          </div>
        ) : (
          <React.Fragment>{nextChildren}</React.Fragment>
        )}
      </div>
    )
  }
)

FormCol.displayName = 'FormCol'
