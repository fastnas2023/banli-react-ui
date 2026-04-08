import * as React from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { cn } from '../../lib/cn'

export const ToastProvider = ToastPrimitive.Provider

export const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={cn(
      'fixed bottom-4 right-4 z-50 flex max-h-screen w-[min(360px,calc(100vw-2rem))] flex-col gap-2 outline-none',
      className
    )}
    {...props}
  />
))

ToastViewport.displayName = 'ToastViewport'

export const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Root
    ref={ref}
    className={cn(
      'group pointer-events-auto relative flex w-full items-start justify-between gap-3 overflow-hidden rounded-xl2 border border-aivent-border bg-aivent-panel p-4 text-aivent-text shadow-glow',
      'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-2',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-bottom-2',
      className
    )}
    {...props}
  />
))

Toast.displayName = 'Toast'

export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Title ref={ref} className={cn('text-sm font-bold text-white', className)} {...props} />
))

ToastTitle.displayName = 'ToastTitle'

export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitive.Description ref={ref} className={cn('text-sm text-aivent-muted', className)} {...props} />
))

ToastDescription.displayName = 'ToastDescription'

export const ToastAction = ToastPrimitive.Action
export const ToastClose = ToastPrimitive.Close

