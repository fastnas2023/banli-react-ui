import * as React from 'react'
import {
  FormProvider,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  Controller,
  useFormContext,
} from 'react-hook-form'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../lib/cn'

/**
 * Form（react-hook-form 组件族）
 *
 * 目标：
 * - Label 与控件关联（id/htmlFor）
 * - invalid 时 aria-describedby 指向错误信息
 * - 支持 className
 */

export type FormProps<TFieldValues extends FieldValues = FieldValues> = React.ComponentProps<
  typeof FormProvider<TFieldValues>
>

export function Form<TFieldValues extends FieldValues = FieldValues>(props: FormProps<TFieldValues>) {
  return <FormProvider {...props} />
}

type FormFieldContextValue<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

export function FormField<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = any>(
  props: ControllerProps<TFieldValues, TName>
) {
  return (
    <FormFieldContext.Provider value={{ name: props.name as FieldPath<TFieldValues> }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

export const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId()
    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn('grid gap-2', className)} {...props} />
      </FormItemContext.Provider>
    )
  }
)
FormItem.displayName = 'FormItem'

function useFormField() {
  const fieldCtx = React.useContext(FormFieldContext)
  const itemCtx = React.useContext(FormItemContext)

  if (!fieldCtx) throw new Error('useFormField must be used within <FormField>.')
  if (!itemCtx) throw new Error('useFormField must be used within <FormItem>.')

  const { getFieldState, formState } = useFormContext()
  const fieldState = getFieldState(fieldCtx.name, formState)

  const id = itemCtx.id
  const formItemId = `${id}-form-item`
  const formMessageId = `${id}-form-item-message`

  return {
    name: fieldCtx.name,
    id,
    formItemId,
    formMessageId,
    ...fieldState,
  }
}

export const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { formItemId } = useFormField()
  return (
    <LabelPrimitive.Root
      ref={ref}
      {...props}
      htmlFor={formItemId}
      className={cn('text-sm font-medium leading-none text-aivent-text', className)}
    />
  )
})
FormLabel.displayName = 'FormLabel'

export const FormControl = React.forwardRef<React.ElementRef<typeof Slot>, React.ComponentPropsWithoutRef<typeof Slot>>(
  ({ className, id: _id, 'aria-describedby': ariaDescribedBy, ...props }, ref) => {
    const { error, formItemId, formMessageId } = useFormField()
    const describedBy = [ariaDescribedBy, error ? formMessageId : null].filter(Boolean).join(' ') || undefined

    return (
      <Slot
        {...props}
        ref={ref}
        id={formItemId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(className)}
      />
    )
  }
)
FormControl.displayName = 'FormControl'

export const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, id: _id, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error?.message ? String(error.message) : children
    if (!body) return null

    return (
      <p
        {...props}
        ref={ref}
        id={formMessageId}
        className={cn('text-sm font-medium text-red-500/90', className)}
      >
        {body}
      </p>
    )
  }
)
FormMessage.displayName = 'FormMessage'
