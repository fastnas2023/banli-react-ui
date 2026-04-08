import type { Meta, StoryObj } from '@storybook/react'
import { NewsArticle } from './NewsArticle'
import { NewsGrid } from './NewsGrid'

const cover = new URL('../../../assets/images/news/s2.webp', import.meta.url).toString()

const meta: Meta = { title: 'Sections/News' }
export default meta
type Story = StoryObj

export const Grid: Story = { render: () => <NewsGrid /> }

export const Article: Story = {
  render: () => (
    <NewsArticle
      title="Transformers in 2025 — What's Next?"
      date="May 27, 2025"
      cover={cover}
      content={
        <>
          <p>Scaling laws, memory optimization, and new training recipes are reshaping what’s possible.</p>
          <p>We’ll explore practical strategies for building reliable, safe, and delightful AI products.</p>
        </>
      }
    />
  ),
}

