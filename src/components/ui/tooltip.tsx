import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '../../lib/cn'
import { useAiventMotion } from '../../motion/provider'

export const TooltipProvider = TooltipPrimitive.Provider
export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => (
  // Tooltip Content 必须是组件（为了读取 motion context），因此这里做一次包装
  <TooltipPrimitive.Portal>
    <TooltipContentInner ref={ref} sideOffset={sideOffset} className={className} {...props} />
  </TooltipPrimitive.Portal>
))

TooltipContent.displayName = 'TooltipContent'

const TooltipContentInner = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, ...props }, ref) => {
  const motion = useAiventMotion()
  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-lg border border-aivent-border bg-aivent-panel px-3 py-2 text-xs font-semibold text-white shadow-glow',
        motion.enabled ? 'animate-in fade-in-0 zoom-in-95' : '',
        className
      )}
      {...props}
    />
  )
})

TooltipContentInner.displayName = 'TooltipContentInner'
