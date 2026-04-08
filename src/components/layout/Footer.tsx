import * as React from 'react'
import { Container } from '../primitives/Container'

const LINKS: Array<{ title: string; items: Array<{ label: string; href?: string }> }> = [
  {
    title: 'Event',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Speakers', href: '#speakers' },
      { label: 'Schedule', href: '#schedule' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Tickets', href: '#tickets' },
      { label: 'News', href: '#news' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-aivent-border bg-aivent-bg">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold">AIvent</div>
            <p className="mt-3 max-w-sm text-sm text-aivent-muted">
              A modern event template, rebuilt as a reusable React component library.
            </p>
          </div>

          {LINKS.map((col) => (
            <div key={col.title}>
              <div className="text-sm font-bold">{col.title}</div>
              <ul className="mt-3 space-y-2 text-sm">
                {col.items.map((i) => (
                  <li key={i.label}>
                    <a className="text-aivent-muted hover:text-white transition" href={i.href ?? '#'}>
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-aivent-border py-6 text-xs text-aivent-muted md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} AIvent. All rights reserved.</div>
          <div>Built with React + Tailwind + Storybook.</div>
        </div>
      </Container>
    </footer>
  )
}

