import * as React from 'react'
import { useAiventMessages } from '../../i18n/provider'
import { Container } from '../primitives/Container'

export function Footer() {
  const m = useAiventMessages().footer
  const LINKS: Array<{ title: string; items: Array<{ label: string; href?: string }> }> = [
    {
      title: m.columns.event,
      items: [
        { label: m.links.about, href: '#about' },
        { label: m.links.speakers, href: '#speakers' },
        { label: m.links.schedule, href: '#schedule' },
      ],
    },
    {
      title: m.columns.resources,
      items: [
        { label: m.links.tickets, href: '#tickets' },
        { label: m.links.news, href: '#news' },
        { label: m.links.contact, href: '#contact' },
      ],
    },
  ]

  return (
    <footer className="border-t border-aivent-border bg-aivent-bg">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold">{m.brand}</div>
            <p className="mt-3 max-w-sm text-sm text-aivent-muted">
              {m.description}
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
          <div>
            © {new Date().getFullYear()} {m.brand}. {m.rights}
          </div>
          <div>{m.builtWith}</div>
        </div>
      </Container>
    </footer>
  )
}
