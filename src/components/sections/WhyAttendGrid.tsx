import * as React from 'react'
import { useAiventMessages } from '../../i18n/provider'
import { Container } from '../primitives/Container'
import { Section } from '../primitives/Section'

const ITEMS = [
  { title: 'Cutting-Edge Knowledge', desc: 'Stay ahead with insights from AI leaders shaping tomorrow.' },
  { title: 'Hands-On Learning', desc: 'Workshops and labs to build practical skills.' },
  { title: 'Global Networking', desc: 'Meet founders, developers, and researchers worldwide.' },
  { title: 'Startup Showcase', desc: 'Explore demos from promising teams and labs.' },
  { title: 'AI Career Boost', desc: 'Mentorship sessions and recruiting events.' },
  { title: 'Ethics & Future', desc: 'Conversations around AI ethics, policy and governance.' },
]

export function WhyAttendGrid() {
  const m = useAiventMessages().sections.whyAttend
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-aivent-secondary">{m.eyebrow}</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {m.title}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="rounded-xl2 border border-aivent-border bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <div className="h-10 w-10 rounded-lg bg-aivent-primary/20 ring-1 ring-aivent-primary/30" />
              <h3 className="mt-4 text-lg font-bold text-white">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-aivent-muted">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
