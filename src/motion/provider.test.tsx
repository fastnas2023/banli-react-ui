import { render } from '@testing-library/react'
import { expect, it } from 'vitest'

import { AiventMotionProvider } from './provider'

it('sets data-aivent-motion=off on documentElement when motion=off', () => {
  render(
    <AiventMotionProvider motion="off">
      <div />
    </AiventMotionProvider>
  )
  expect(document.documentElement.getAttribute('data-aivent-motion')).toBe('off')
})

