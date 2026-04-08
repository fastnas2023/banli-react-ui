import type { Meta, StoryObj } from '@storybook/react'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

const meta: Meta = { title: 'Sections/Contact' }
export default meta
type Story = StoryObj

export const Form: Story = { render: () => <ContactForm onSubmit={async (v) => console.log(v)} /> }
export const Info: Story = { render: () => <ContactInfo /> }

