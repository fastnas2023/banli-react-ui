import * as React from 'react'
import { useAiventMessages } from '../../../i18n/provider'
import { Container } from '../../primitives/Container'
import { Section } from '../../primitives/Section'

export function ContactInfo() {
  const m = useAiventMessages().contactInfo
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl2 border border-aivent-border bg-white/5 p-6">
            <div className="text-sm font-bold text-white">{m.locationLabel}</div>
            <a
              className="mt-2 inline-block text-sm text-aivent-muted hover:text-white transition"
              href="https://www.cn111.net"
              target="_blank"
              rel="noreferrer"
            >
              www.cn111.net
            </a>
          </div>
          <div className="rounded-xl2 border border-aivent-border bg-white/5 p-6">
            <div className="text-sm font-bold text-white">{m.emailLabel}</div>
            <div className="mt-2 text-sm text-aivent-muted">Jason Zhang</div>
          </div>
          <div className="rounded-xl2 border border-aivent-border bg-white/5 p-6">
            <div className="text-sm font-bold text-white">{m.phoneLabel}</div>
            <a
              className="mt-2 inline-block text-sm text-aivent-muted hover:text-white transition"
              href="https://www.cn111.net"
              target="_blank"
              rel="noreferrer"
            >
              WWW.CN111.NET
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
