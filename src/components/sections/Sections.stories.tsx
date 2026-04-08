import type { Meta, StoryObj } from '@storybook/react'
import { ScheduleTabs } from './ScheduleTabs'
import { SpeakersGrid } from './SpeakersGrid'
import { SponsorsMarquee } from './SponsorsMarquee'
import { WhyAttendGrid } from './WhyAttendGrid'

const meta: Meta = { title: 'Sections/Overview' }
export default meta

type Story = StoryObj

export const WhyAttend: Story = { render: () => <WhyAttendGrid /> }
export const Speakers: Story = { render: () => <SpeakersGrid /> }
export const Sponsors: Story = { render: () => <SponsorsMarquee /> }
export const Schedule: Story = { render: () => <ScheduleTabs /> }

