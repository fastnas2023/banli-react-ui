import * as React from 'react'

export type MotionMode = 'auto' | 'full' | 'reduced' | 'off'

type MotionState = {
  mode: MotionMode
  enabled: boolean
  reduced: boolean
}

const MotionContext = React.createContext<MotionState>({
  mode: 'auto',
  enabled: true,
  reduced: false,
})

function getPrefersReducedMotion() {
  if (typeof window === 'undefined') return false
  const mm = (window as any).matchMedia
  if (typeof mm !== 'function') return false
  return mm('(prefers-reduced-motion: reduce)').matches
}

function resolveMode(mode: MotionMode): MotionState {
  const prefersReduced = getPrefersReducedMotion()

  if (mode === 'off') return { mode, enabled: false, reduced: true }
  if (mode === 'reduced') return { mode, enabled: false, reduced: true }
  if (mode === 'full') return { mode, enabled: true, reduced: false }

  // auto
  return prefersReduced ? { mode: 'reduced', enabled: false, reduced: true } : { mode: 'full', enabled: true, reduced: false }
}

export function AiventMotionProvider({
  motion = 'auto',
  children,
}: {
  motion?: MotionMode
  children: React.ReactNode
}) {
  const state = React.useMemo(() => resolveMode(motion), [motion])

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    const el = document.documentElement
    el.setAttribute('data-aivent-motion', state.mode)
    return () => {
      el.removeAttribute('data-aivent-motion')
    }
  }, [state.mode])

  return <MotionContext.Provider value={state}>{children}</MotionContext.Provider>
}

export function useAiventMotion() {
  return React.useContext(MotionContext)
}
