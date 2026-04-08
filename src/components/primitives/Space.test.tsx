import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Space } from './Space'

it('renders children and supports direction classes', () => {
  render(
    <Space direction="vertical">
      <div>One</div>
      <div>Two</div>
    </Space>
  )
  const el = screen.getByText('One').parentElement!
  expect(el.className).toContain('flex-col')
})

it('supports numeric gap via style and forwards ref', () => {
  const ref = React.createRef<HTMLDivElement>()
  render(
    <Space ref={ref} size={12}>
      <div>One</div>
    </Space>
  )
  expect(ref.current).toBeTruthy()
  expect(ref.current?.style.gap).toBe('12px')
})

