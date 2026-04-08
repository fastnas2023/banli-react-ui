import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'

it('shows tooltip content on hover', async () => {
  const user = userEvent.setup()

  render(
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  await user.hover(screen.getByRole('button', { name: /hover me/i }))
  const tip = await screen.findByRole('tooltip')
  expect(tip).toHaveTextContent('Tip')
})
