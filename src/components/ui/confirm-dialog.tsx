import * as React from 'react'
import { cn } from '../../lib/cn'
import { Button } from '../primitives/Button'
import { Spinner } from '../primitives/Spinner'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './dialog'

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined
  defaultValue: T
  onChange?: (v: T) => void
}) {
  const [uncontrolled, setUncontrolled] = React.useState<T>(defaultValue)
  const isControlled = value !== undefined
  const state = isControlled ? (value as T) : uncontrolled

  const setState = React.useCallback(
    (next: T) => {
      if (!isControlled) setUncontrolled(next)
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  return [state, setState] as const
}

export type ConfirmDialogProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void

  /** 可选：提供触发器时自动包裹 DialogTrigger(asChild) */
  trigger?: React.ReactNode

  /** a11y：DialogContent 内必须包含 title/description */
  title: React.ReactNode
  description: React.ReactNode

  /** 额外内容（位于 description 下方） */
  children?: React.ReactNode

  confirmText?: React.ReactNode
  cancelText?: React.ReactNode
  danger?: boolean

  /** 支持 async；resolve 后自动关闭，reject 则保持打开并结束 loading */
  onConfirm?: () => void | Promise<unknown>
  onCancel?: () => void

  /** 传递给 DialogContent 的 className（用于自定义宽度/间距等） */
  contentClassName?: string
}

export function ConfirmDialog({
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  danger = false,
  onConfirm,
  onCancel,
  contentClassName,
}: ConfirmDialogProps) {
  const [isOpen, setIsOpen] = useControllableState<boolean>({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })

  const [isLoading, setIsLoading] = React.useState(false)

  const close = React.useCallback(() => setIsOpen(false), [setIsOpen])

  const handleCancel = React.useCallback(() => {
    if (isLoading) return
    onCancel?.()
    close()
  }, [close, isLoading, onCancel])

  const handleConfirm = React.useCallback(async () => {
    if (isLoading) return
    try {
      const result = onConfirm?.()
      if (result && typeof (result as Promise<unknown>).then === 'function') {
        setIsLoading(true)
        await result
        setIsLoading(false)
        close()
        return
      }
      close()
    } catch {
      setIsLoading(false)
      // 保持对外“失败不自动关闭”的语义；错误交给调用方处理（可在 onConfirm 内捕获/提示）
    }
  }, [close, isLoading, onConfirm])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
      <DialogContent
        className={contentClassName}
        onEscapeKeyDown={(e) => {
          if (isLoading) e.preventDefault()
        }}
        onPointerDownOutside={(e) => {
          if (isLoading) e.preventDefault()
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        {children ? <div className="mt-4">{children}</div> : null}

        <div className="mt-6 flex justify-end gap-2">
          <Button variant="ghost" onClick={handleCancel} disabled={isLoading}>
            {cancelText}
          </Button>

          <Button
            onClick={handleConfirm}
            disabled={isLoading}
            className={cn(
              danger ? 'bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-500/40' : '',
              isLoading ? 'cursor-wait' : ''
            )}
          >
            {isLoading ? <Spinner size="sm" label="Loading" className="mr-2" /> : null}
            {confirmText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
