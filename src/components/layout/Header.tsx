import * as React from 'react'
import logo from '../../assets/images/logo.webp'
import { cn } from '../../lib/cn'
import { deepMerge, type PartialDeep } from '../../i18n'
import { useAiventMessages } from '../../i18n/provider'
import { Button } from '../primitives/Button'
import { Container } from '../primitives/Container'
import { MobileMenu } from './MobileMenu'
import { Nav, type NavItem } from './Nav'

export function Header({
  items,
  ctaLabel,
  onCtaClick,
  className,
  messages,
}: {
  items?: NavItem[]
  ctaLabel?: string
  onCtaClick?: () => void
  className?: string
  messages?: PartialDeep<ReturnType<typeof useAiventMessages>['header']>
}) {
  const base = useAiventMessages().header
  const m = React.useMemo(() => deepMerge(base, messages), [base, messages])
  const defaultItems = React.useMemo<NavItem[]>(
    () => [
      { label: m.nav.home, href: '#home' },
      { label: m.nav.about, href: '#about' },
      { label: m.nav.speakers, href: '#speakers' },
      { label: m.nav.schedule, href: '#schedule' },
      { label: m.nav.tickets, href: '#tickets' },
      { label: m.nav.news, href: '#news' },
      { label: m.nav.contact, href: '#contact' },
    ],
    [m]
  )
  const [open, setOpen] = React.useState(false)

  return (
    <header className={cn('sticky top-0 z-40 border-b border-aivent-border bg-aivent-bg/80 backdrop-blur', className)}>
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="BanLi" className="h-7 w-auto" />
          </a>

          <div className="hidden lg:block">
            <Nav items={items ?? defaultItems} />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button
                variant="primary"
                onClick={(e) => {
                  e.preventDefault()
                  onCtaClick?.()
                }}
              >
                {ctaLabel ?? m.ctaLabel}
              </Button>
            </div>

            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-aivent-border bg-white/5 hover:bg-white/10"
              aria-label={m.openMenuAriaLabel}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span className="text-lg leading-none">≡</span>
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu open={open} items={items ?? defaultItems} onClose={() => setOpen(false)} />
    </header>
  )
}
