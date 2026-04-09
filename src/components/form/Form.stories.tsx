import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '../primitives/Input'
import { Button } from '../primitives/Button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './Form'

type Values = {
  email: string
}

const meta: Meta = {
  title: 'Form/Form',
}

export default meta
type Story = StoryObj

export const Basic: Story = {
  render: () => {
    function Demo() {
      const form = useForm<Values>({ defaultValues: { email: '' } })
      const [submitted, setSubmitted] = React.useState<Values | null>(null)

      return (
        <div className="bg-aivent-bg p-10 text-aivent-text">
          <Form {...form}>
            <form
              className="grid max-w-md gap-4 rounded-xl border border-aivent-border bg-aivent-panel p-6"
              onSubmit={form.handleSubmit((v) => setSubmitted(v))}
            >
              <FormField
                control={form.control}
                name="email"
                rules={{ required: 'Email is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>

              {submitted ? <div className="text-xs text-aivent-muted">submitted: {submitted.email}</div> : null}
            </form>
          </Form>
        </div>
      )
    }

    return <Demo />
  },
}

