import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it } from 'vitest'
import * as React from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '../primitives/Input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form/Form'
import { FormCol, FormLayout, FormRow } from './form-layout'

afterEach(() => cleanup())

it('passes labelWidth via CSS variable', () => {
  render(
    <FormLayout layout="horizontal" labelWidth={160} data-testid="layout">
      <FormRow>
        <FormCol label="Email">
          <input aria-label="email" />
        </FormCol>
      </FormRow>
    </FormLayout>
  )

  const layout = screen.getByTestId('layout')
  expect(layout.getAttribute('style') ?? '').toContain('--aivent-form-label-width: 160px')
})

it('uses flex row for inline layout', () => {
  render(
    <FormLayout layout="inline">
      <FormRow data-testid="row">
        <div />
      </FormRow>
    </FormLayout>
  )
  expect(screen.getByTestId('row')).toHaveClass('flex')
})

it('FormCol asItem clones single child and adds `contents` class', () => {
  render(
    <FormLayout layout="horizontal">
      <FormCol asItem>
        <div data-testid="item" className="foo">
          <label>Label</label>
          <input aria-label="x" />
        </div>
      </FormCol>
    </FormLayout>
  )
  expect(screen.getByTestId('item')).toHaveClass('foo')
  expect(screen.getByTestId('item')).toHaveClass('contents')
})

it('works with RHF FormItem/FormLabel association in horizontal layout', async () => {
  const user = userEvent.setup()

  type Values = { email: string }

  function Demo() {
    const form = useForm<Values>({ defaultValues: { email: '' } })
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => void 0)}>
          <FormLayout layout="horizontal" labelWidth={120}>
            <FormRow>
              <FormField
                control={form.control}
                name="email"
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                  <FormCol asItem>
                    <FormItem data-testid="form-item">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormCol>
                )}
              />
            </FormRow>
          </FormLayout>

          <button type="submit">Submit</button>
        </form>
      </Form>
    )
  }

  render(<Demo />)

  expect(screen.getByTestId('form-item')).toHaveClass('contents')

  const label = screen.getByText('Email')
  const input = screen.getByPlaceholderText('Email')
  await user.click(label)
  expect(input).toHaveFocus()
})
