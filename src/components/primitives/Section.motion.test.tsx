import { afterEach } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { expect, it, vi } from 'vitest'

import { AiventMotionProvider } from '../../motion/provider'
import { Section } from './Section'

afterEach(() => cleanup())

it('reveals section when it enters viewport (motion enabled)', async () => {
  const observe = vi.fn()

  // 最小可用的 IntersectionObserver mock：observe 时立刻触发 inView=true
  globalThis.IntersectionObserver = (class {
    private cb: IntersectionObserverCallback

    constructor(cb: IntersectionObserverCallback) {
      this.cb = cb
    }
    observe(el: Element) {
      observe()
      const entry = { isIntersecting: true, target: el } as IntersectionObserverEntry
      this.cb([entry], this as unknown as IntersectionObserver)
    }
    disconnect() {}
    unobserve() {}
  } as unknown as typeof IntersectionObserver)

  render(
    <AiventMotionProvider motion="full">
      <Section>hello</Section>
    </AiventMotionProvider>
  )

  expect(observe).toHaveBeenCalled()
  const el = screen.getByText('hello').closest('section')!

  await waitFor(() => {
    expect(el.className).toContain('opacity-100')
  })
})

it('does not apply reveal classes when motion is off', () => {
  globalThis.IntersectionObserver = (class {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  } as unknown as typeof IntersectionObserver)

  render(
    <AiventMotionProvider motion="off">
      <Section>hello</Section>
    </AiventMotionProvider>
  )

  const el = screen.getAllByText('hello')[0].closest('section')!
  expect(el.className).not.toContain('opacity-0')
  expect(el.className).not.toContain('translate-y-3')
})
