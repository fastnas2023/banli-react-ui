import * as React from 'react'
import { Container } from '../../primitives/Container'
import { Section } from '../../primitives/Section'

export function NewsArticle({
  title,
  date,
  cover,
  content,
}: {
  title: string
  date: string
  cover: string
  content: React.ReactNode
}) {
  return (
    <Section>
      <Container>
        <article className="mx-auto max-w-3xl">
          <div className="text-sm font-semibold text-aivent-secondary">{date}</div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">{title}</h1>

          <div className="mt-8 overflow-hidden rounded-xl2 border border-aivent-border">
            <img src={cover} alt={title} className="h-auto w-full object-cover" />
          </div>

          <div className="mt-8 space-y-4 text-aivent-muted">
            {content}
          </div>
        </article>
      </Container>
    </Section>
  )
}
