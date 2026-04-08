import { useEffect, useMemo, useState } from 'react'

export function getTimeParts(ms: number) {
  const clamped = Math.max(0, ms)
  const days = Math.floor(clamped / 86400000)
  const hours = Math.floor((clamped % 86400000) / 3600000)
  const minutes = Math.floor((clamped % 3600000) / 60000)
  const seconds = Math.floor((clamped % 60000) / 1000)
  return { days, hours, minutes, seconds }
}

export function useCountdown(target: Date | number) {
  const targetMs = useMemo(() => (typeof target === 'number' ? target : target.getTime()), [target])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const diff = Math.max(0, targetMs - now)
  const parts = getTimeParts(diff)
  return { ...parts, isExpired: diff <= 0 }
}

