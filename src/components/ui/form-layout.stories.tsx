import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '../primitives/Input'
import { Button } from '../primitives/Button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../form/Form'
import { FormCol, FormLayout, FormRow, FormSection } from './form-layout'

type Values = {
  email: string
  name: string
}

const meta: Meta = { title: 'UI/FormLayout' }
export default meta
type Story = StoryObj

export const Vertical: Story = {
  render: () => (
    <div className="bg-aivent-bg p-10 text-aivent-text">
      <div className="max-w-2xl rounded-xl border border-aivent-border bg-aivent-panel p-6">
        <FormLayout layout="vertical">
          <FormSection>
            <FormRow>
              <FormCol label="Email">
                <Input placeholder="you@example.com" />
              </FormCol>
              <FormCol label="Name">
                <Input placeholder="Your name" />
              </FormCol>
            </FormRow>
          </FormSection>
        </FormLayout>
      </div>
    </div>
  ),
}

export const HorizontalWithRHF: Story = {
  render: () => {
    function Demo() {
      const form = useForm<Values>({ defaultValues: { email: '', name: '' } })
      return (
        <div className="bg-aivent-bg p-10 text-aivent-text">
          <Form {...form}>
            <form className="grid max-w-2xl gap-4 rounded-xl border border-aivent-border bg-aivent-panel p-6">
              <FormLayout layout="horizontal" labelWidth={120}>
                <FormSection>
                  <FormRow className="gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ required: 'Email is required' }}
                      render={({ field }) => (
                        <FormCol asItem>
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </FormCol>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormCol asItem>
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </FormCol>
                      )}
                    />
                  </FormRow>
                </FormSection>
              </FormLayout>

              <div className="mt-2 flex items-center justify-end gap-3">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      )
    }
    return <Demo />
  },
}

export const Inline: Story = {
  render: () => (
    <div className="bg-aivent-bg p-10 text-aivent-text">
      <div className="max-w-3xl rounded-xl border border-aivent-border bg-aivent-panel p-6">
        <FormLayout layout="inline" labelWidth={88}>
          <FormRow>
            <FormCol label="关键词">
              <Input placeholder="Search…" />
            </FormCol>
            <FormCol label="作者">
              <Input placeholder="Author" />
            </FormCol>
            <div className="ml-auto flex items-center gap-3">
              <Button variant="ghost" type="button">
                Reset
              </Button>
              <Button type="button">Search</Button>
            </div>
          </FormRow>
        </FormLayout>
      </div>
    </div>
  ),
}

