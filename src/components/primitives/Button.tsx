import * as React from 'react'
import { cn } from '../../lib/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-banli-secondary/60 disabled:pointer-events-none disabled:opacity-50'

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-aivent-primary text-white hover:brightness-110 shadow-glow',
    secondary: 'bg-aivent-secondary text-slate-950 hover:brightness-110',
    ghost: 'border border-aivent-border bg-white/0 text-white hover:bg-white/10',
  }

  const sizes: Record<ButtonSize, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base',
  }

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
}
