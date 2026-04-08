import * as React from 'react'
import { cn } from '../../../lib/cn'
import { Button } from '../../primitives/Button'
import { Container } from '../../primitives/Container'
import { Section } from '../../primitives/Section'
import type { Ticket } from './TicketsStyle1'

const DEFAULT_TICKETS: Ticket[] = [
  { name: 'Standard', price: '$299', features: ['Access to all talks', 'Networking lounge', 'Expo floor'] },
  { name: 'VIP', price: '$699', highlight: true, features: ['VIP seating', 'Speaker dinner', 'Workshop priority'] },
]

export function TicketsStyle2({ tickets = DEFAULT_TICKETS }: { tickets?: Ticket[] }) {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl2 border border-aivent-border bg-white/5 p-6">
            <div className="text-sm font-semibold text-aivent-secondary">Tickets</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Ticket Style 2
            </h2>
            <p className="mt-3 text-sm text-aivent-muted">
              A compact layout suitable for checkout-style sections.
            </p>

            <div className="mt-8 space-y-3">
              {tickets.map((t) => (
                <div
                  key={t.name}
                  className={cn(
                    'rounded-xl border p-4',
                    t.highlight ? 'border-aivent-primary bg-aivent-primary/10' : 'border-aivent-border bg-black/20'
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-base font-bold text-white">{t.name}</div>
                      <div className="mt-1 text-sm text-aivent-muted">{t.features.slice(0, 2).join(' • ')}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-white">{t.price}</div>
                      <Button size="sm" variant={t.highlight ? 'primary' : 'ghost'} className="mt-2">
                        Select
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl2 border border-aivent-border bg-black/30 p-6">
            <div className="text-sm font-bold text-white">Cart</div>
            <div className="mt-4 space-y-3 text-sm text-aivent-muted">
              <div className="flex items-center justify-between">
                <span>Standard</span>
                <span>$299</span>
              </div>
              <div className="flex items-center justify-between">
                <span>VAT</span>
                <span>$0</span>
              </div>
              <div className="h-px bg-aivent-border" />
              <div className="flex items-center justify-between text-white">
                <span className="font-bold">Total</span>
                <span className="font-extrabold">$299</span>
              </div>
            </div>

            <Button className="mt-6 w-full" size="lg">
              Checkout
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

