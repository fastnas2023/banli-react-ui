import { afterEach } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { expect, it, vi } from 'vitest'

import { AiventMotionProvider } from '../../motion/provider'
import { Section } from './Section'

afterEach(() => cleanup())

it('reveals section when it enters viewport (motion enabled)', async () => {
  const observe = vi.fn()

  // 最小可用的 IntersectionObserver mock：observe 时立刻触发 inView=true
  ;(globalThis as any).IntersectionObserver = class {
    private cb: any
    constructor(cb: any) {
      this.cb = cb
    }
    observe(el: Element) {
      observe()
      this.cb([{ isIntersecting: true, target: el }])
    }
    disconnect() {}
    unobserve() {}
  }

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
  ;(globalThis as any).IntersectionObserver = class {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  }

  render(
    <AiventMotionProvider motion="off">
      <Section>hello</Section>
    </AiventMotionProvider>
  )

  const el = screen.getAllByText('hello')[0].closest('section')!
  expect(el.className).not.toContain('opacity-0')
  expect(el.className).not.toContain('translate-y-3')
})
