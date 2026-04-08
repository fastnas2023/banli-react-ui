import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Typography } from './Typography'

it('renders semantic element based on variant and forwards ref', () => {
  const ref = React.createRef<HTMLElement>()
  render(
    <Typography ref={ref} variant="h2">
      Title
    </Typography>
  )
  expect(screen.getByRole('heading', { name: 'Title', level: 2 })).toBeInTheDocument()
  expect(ref.current?.tagName).toBe('H2')
})

it('supports className override', () => {
  render(
    <Typography data-testid="t" className="underline">
      Text
    </Typography>
  )
  expect(screen.getByTestId('t')).toHaveClass('underline')
})

