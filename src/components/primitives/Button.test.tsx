import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Button } from './Button'

it('renders label and supports variant classes', () => {
  render(<Button variant="primary">Buy ticket</Button>)
  expect(screen.getByRole('button', { name: /buy ticket/i })).toBeInTheDocument()
})
