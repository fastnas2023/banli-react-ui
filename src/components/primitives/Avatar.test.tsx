import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Avatar } from './Avatar'

it('renders initials fallback from alt and forwards ref', () => {
  const ref = React.createRef<HTMLSpanElement>()
  render(<Avatar ref={ref} alt="Jane Doe" />)
  expect(screen.getByRole('img', { name: 'Jane Doe' })).toHaveTextContent('JD')
  expect(ref.current?.tagName).toBe('SPAN')
})

it('falls back when image errors', () => {
  render(<Avatar src="bad-url" alt="John Smith" />)
  const img = screen.getByRole('img', { name: 'John Smith' })
  fireEvent.error(img)
  expect(screen.getByRole('img', { name: 'John Smith' })).toHaveTextContent('JS')
})

