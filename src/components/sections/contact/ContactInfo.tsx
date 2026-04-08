import * as React from 'react'
import { Container } from '../../primitives/Container'
import { Section } from '../../primitives/Section'

export function ContactInfo() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 border border-aivent-border bg-white/5 p-6">
            <div className="text-sm font-bold text-white">Location</div>
            <div className="mt-2 text-sm text-aivent-muted">San Francisco, CA</div>
          </div>
          <div className="rounded-xl2 border border-aivent-border bg-white/5 p-6">
            <div className="text-sm font-bold text-white">Email</div>
            <div className="mt-2 text-sm text-aivent-muted">hello@aivent.example</div>
          </div>
          <div className="rounded-xl2 border border-aivent-border bg-white/5 p-6">
            <div className="text-sm font-bold text-white">Phone</div>
            <div className="mt-2 text-sm text-aivent-muted">+1 (555) 123-4567</div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

