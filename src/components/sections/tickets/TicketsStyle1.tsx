import * as React from 'react'
import { cn } from '../../../lib/cn'
import { useAiventMessages } from '../../../i18n/provider'
import { Button } from '../../primitives/Button'
import { Container } from '../../primitives/Container'
import { Section } from '../../primitives/Section'

export type Ticket = {
  name: string
  price: string
  features: string[]
  highlight?: boolean
}

const DEFAULT_TICKETS: Ticket[] = [
  { name: 'Standard', price: '$299', features: ['Access to all talks', 'Networking lounge', 'Expo floor'] },
  {
    name: 'VIP',
    price: '$699',
    highlight: true,
    features: ['All Standard perks', 'VIP seating', 'Speaker dinner', 'Workshop priority'],
  },
  { name: 'Team', price: '$999', features: ['5 passes', 'Reserved table', 'Brand spotlight'] },
]

export function TicketsStyle1({ tickets = DEFAULT_TICKETS }: { tickets?: Ticket[] }) {
  const m = useAiventMessages().sections.tickets
  return (
    <Section>
      <Container>
        <div>
          <div className="text-sm font-semibold text-aivent-secondary">{m.eyebrow}</div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {m.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-aivent-muted">
            {m.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tickets.map((t) => (
            <div
              key={t.name}
              className={cn(
                'rounded-xl2 border bg-white/5 p-6',
                t.highlight ? 'border-aivent-primary shadow-glow' : 'border-aivent-border'
              )}
            >
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-bold text-white">{t.name}</div>
                {t.highlight ? (
                  <span className="rounded-full bg-aivent-primary/20 px-3 py-1 text-xs font-bold text-white">
                    {m.popular}
                  </span>
                ) : null}
              </div>
              <div className="mt-4 text-4xl font-extrabold text-white">{t.price}</div>
              <ul className="mt-6 space-y-2 text-sm text-aivent-muted">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-0.5 text-aivent-secondary">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant={t.highlight ? 'primary' : 'ghost'} className="w-full">
                  {m.buyPrefix} {t.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
