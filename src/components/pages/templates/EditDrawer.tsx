import * as React from 'react'
import { useForm, type FieldValues, type UseFormReturn } from 'react-hook-form'
import { cn } from '../../../lib/cn'

import { Button } from '../../primitives/Button'
import { Spinner } from '../../primitives/Spinner'
import { Form } from '../../form/Form'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '../../ui/drawer'
import { Toast, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../../ui/toast'

export type EditDrawerToastCopy = {
  successTitle?: string
  successDescription?: string
  errorTitle?: string
  errorDescription?: string
}

export type EditDrawerProps<TFieldValues extends FieldValues> = {
  trigger: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  defaultValues: TFieldValues
  /**
   * 由调用方提供字段渲染（使用 FormField/FormItem/FormControl/FormMessage 等）。
   */
  renderFields: (form: UseFormReturn<TFieldValues>) => React.ReactNode
  /**
   * 保存逻辑（支持 async）。抛错会触发 error toast。
   */
  onSubmit: (values: TFieldValues) => void | Promise<void>
  submitText?: string
  cancelText?: string
  toastCopy?: EditDrawerToastCopy
  /**
   * DrawerContent 自定义 className（例如宽度、padding）。
   */
  contentClassName?: string
}

/**
 * EditDrawer（后台编辑抽屉模板）
 *
 * - Drawer（Radix Dialog）作为容器
 * - react-hook-form + Form 组件族用于表单与校验
 * - Toast（Radix Toast）用于保存结果反馈
 */
export function EditDrawer<TFieldValues extends FieldValues>({
  trigger,
  title,
  description,
  defaultValues,
  renderFields,
  onSubmit,
  submitText = '保存',
  cancelText = '取消',
  toastCopy,
  contentClassName,
}: EditDrawerProps<TFieldValues>) {
  const [open, setOpen] = React.useState(false)
  const [toastOpen, setToastOpen] = React.useState(false)
  const [toastKind, setToastKind] = React.useState<'success' | 'error'>('success')

  const form = useForm<TFieldValues>({
    defaultValues,
    mode: 'onBlur',
  })

  const submit = form.handleSubmit(async (values) => {
    try {
      await onSubmit(values)
      setToastKind('success')
      setToastOpen(true)
      setOpen(false)
      // 保存成功后，以当前值为准重置 dirty 状态，便于下一次打开抽屉继续编辑
      form.reset(values)
    } catch {
      setToastKind('error')
      setToastOpen(true)
    }
  })

  const copy: Required<EditDrawerToastCopy> = {
    successTitle: toastCopy?.successTitle ?? '已保存',
    successDescription: toastCopy?.successDescription ?? '你的修改已成功提交。',
    errorTitle: toastCopy?.errorTitle ?? '保存失败',
    errorDescription: toastCopy?.errorDescription ?? '请稍后重试，或检查表单字段。',
  }

  const saving = form.formState.isSubmitting

  return (
    <ToastProvider swipeDirection="right">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
        <DrawerContent className={cn(contentClassName)}>
          <DrawerTitle>{title}</DrawerTitle>
          {description ? <DrawerDescription>{description}</DrawerDescription> : null}

          <div className="mt-6">
            <Form<TFieldValues> {...form}>
              <form className="grid gap-4" onSubmit={submit}>
                {renderFields(form)}

                <div className="mt-4 flex items-center justify-end gap-3">
                  <DrawerClose asChild>
                    <Button variant="ghost" type="button" disabled={saving}>
                      {cancelText}
                    </Button>
                  </DrawerClose>
                  <Button type="submit" disabled={saving}>
                    {saving ? (
                      <span className="inline-flex items-center gap-2">
                        <Spinner size="sm" label="Saving" />
                        保存中…
                      </span>
                    ) : (
                      submitText
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </DrawerContent>
      </Drawer>

      <Toast open={toastOpen} onOpenChange={setToastOpen} duration={3500}>
        <div className="grid gap-1">
          <ToastTitle>{toastKind === 'success' ? copy.successTitle : copy.errorTitle}</ToastTitle>
          <ToastDescription>{toastKind === 'success' ? copy.successDescription : copy.errorDescription}</ToastDescription>
        </div>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}
