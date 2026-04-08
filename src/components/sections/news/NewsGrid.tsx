import * as React from 'react'
import { cn } from '../../../lib/cn'
import { useAiventMessages } from '../../../i18n/provider'
import { Container } from '../../primitives/Container'
import { Section } from '../../primitives/Section'

export type NewsItem = {
  title: string
  date: string
  cover: string
  excerpt: string
}

const DEFAULT_NEWS: NewsItem[] = [
  {
    title: 'Global Design Minds to Converge at 2025 Design Expo Conference',
    date: 'May 28',
    cover: new URL('../../../assets/images/news/s1.webp', import.meta.url).toString(),
    excerpt: 'A quick overview of the most anticipated talks, demos, and workshops.',
  },
  {
    title: 'From Transformers to Multimodal: What’s Next in 2025',
    date: 'May 27',
    cover: new URL('../../../assets/images/news/s2.webp', import.meta.url).toString(),
    excerpt: 'Scaling, memory optimization, and frontier applications beyond text.',
  },
  {
    title: 'AI Policy & Governance: A Global Overview',
    date: 'May 26',
    cover: new URL('../../../assets/images/news/s3.webp', import.meta.url).toString(),
    excerpt: 'Frameworks for privacy, bias mitigation, and accountability in deployment.',
  },
]

export function NewsGrid({
  items = DEFAULT_NEWS,
  onSelect,
}: {
  items?: NewsItem[]
  onSelect?: (item: NewsItem) => void
}) {
  const m = useAiventMessages().sections.news
  return (
    <Section>
      <Container>
        <div>
          <div className="text-sm font-semibold text-aivent-secondary">{m.eyebrow}</div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">{m.title}</h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((n) => (
            <article
              key={n.title}
              className={cn(
                'group overflow-hidden rounded-xl2 border border-aivent-border bg-white/5',
                onSelect && 'cursor-pointer'
              )}
              onClick={() => onSelect?.(n)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={n.cover}
                  alt={n.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute left-4 top-4 rounded-lg bg-aivent-primary/80 px-3 py-1 text-xs font-bold text-white">
                  {n.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-aivent-muted">{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
