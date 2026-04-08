import * as React from 'react'
import { cn } from '../../../lib/cn'
import { useCountdown } from '../../../hooks/useCountdown'

function Unit({ value, label }: { value: number; label: string }) {
  const s = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg border border-aivent-border bg-white/5 px-3 py-2 font-mono text-lg font-bold text-white">
        {s}
      </div>
      <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-aivent-muted">
        {label}
      </div>
    </div>
  )
}

export function CountdownBlock({
  target,
  className,
}: {
  target: Date | number
  className?: string
}) {
  const { days, hours, minutes, seconds } = useCountdown(target)
  return (
    <div className={cn('flex items-center gap-3 rounded-xl2 border border-aivent-border bg-black/30 p-3 backdrop-blur', className)}>
      <Unit value={days} label="Days" />
      <Unit value={hours} label="Hours" />
      <Unit value={minutes} label="Min" />
      <Unit value={seconds} label="Sec" />
    </div>
  )
}

