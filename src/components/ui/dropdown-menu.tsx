import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { cn } from '../../lib/cn'
import { useAiventMotion } from '../../motion/provider'

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuContentInner ref={ref} sideOffset={sideOffset} className={className} {...props} />
  </DropdownMenuPrimitive.Portal>
))

DropdownMenuContent.displayName = 'DropdownMenuContent'

const DropdownMenuContentInner = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 8, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, ...props }, ref) => {
  const motion = useAiventMotion()
  return (
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      aria-label={ariaLabel}
      // Radix 会默认加 aria-labelledby（指向 trigger），会覆盖 aria-label 的可访问名称；
      // 在存在 aria-label 时，显式移除 aria-labelledby，便于按 label 查询并保持一致语义。
      aria-labelledby={ariaLabel ? undefined : ariaLabelledBy}
      className={cn(
        'z-50 min-w-44 overflow-hidden rounded-xl2 border border-aivent-border bg-aivent-panel p-1 text-sm text-aivent-text shadow-glow',
        motion.enabled ? 'animate-in fade-in-0 zoom-in-95' : '',
        className
      )}
      {...props}
    />
  )
})

DropdownMenuContentInner.displayName = 'DropdownMenuContentInner'

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-lg px-3 py-2 text-sm outline-none transition',
      'focus:bg-white/10 focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-40',
      className
    )}
    {...props}
  />
))

DropdownMenuItem.displayName = 'DropdownMenuItem'

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('my-1 h-px bg-aivent-border', className)}
    {...props}
  />
))

DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'
