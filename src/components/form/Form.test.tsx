import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it } from 'vitest'
import { useForm } from 'react-hook-form'

import { Input } from '../primitives/Input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './Form'

type Values = {
  email: string
}

afterEach(() => cleanup())

function Demo() {
  const form = useForm<Values>({ defaultValues: { email: '' } })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => void 0)}>
        <FormField
          control={form.control}
          name="email"
          rules={{ required: 'Email is required' }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </Form>
  )
}

it('associates label with control via id/htmlFor (click label focuses input)', async () => {
  const user = userEvent.setup()
  render(<Demo />)

  const label = screen.getByText('Email')
  const input = screen.getByPlaceholderText('Email')

  expect(label).toHaveAttribute('for')
  expect(input).toHaveAttribute('id', label.getAttribute('for'))

  await user.click(label)
  expect(input).toHaveFocus()
})

it('sets aria-describedby to error message id when invalid', async () => {
  const user = userEvent.setup()
  const { container } = render(<Demo />)

  await user.click(within(container).getByRole('button', { name: 'Submit' }))

  const msg = await screen.findByText('Email is required')
  const input = within(container).getByPlaceholderText('Email')

  expect(msg).toHaveAttribute('id')
  expect(input).toHaveAttribute('aria-invalid', 'true')
  expect(input.getAttribute('aria-describedby') ?? '').toContain(msg.getAttribute('id')!)
})
