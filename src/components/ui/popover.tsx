import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { cn } from '../../lib/cn'
import { useAiventMotion } from '../../motion/provider'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverAnchor = PopoverPrimitive.Anchor

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 8, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverContentInner ref={ref} align={align} sideOffset={sideOffset} className={className} {...props} />
  </PopoverPrimitive.Portal>
))

PopoverContent.displayName = 'PopoverContent'

const PopoverContentInner = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 8, ...props }, ref) => {
  const motion = useAiventMotion()
  return (
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'z-50 w-72 rounded-xl2 border border-aivent-border bg-aivent-panel p-4 text-sm text-aivent-text shadow-glow outline-none',
        motion.enabled ? 'animate-in fade-in-0 zoom-in-95' : '',
        className
      )}
      {...props}
    />
  )
})

PopoverContentInner.displayName = 'PopoverContentInner'
