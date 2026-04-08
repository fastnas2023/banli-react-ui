import * as React from 'react'
import logo from '../../assets/images/logo.webp'
import { cn } from '../../lib/cn'
import { Button } from '../primitives/Button'
import { Container } from '../primitives/Container'
import { MobileMenu } from './MobileMenu'
import { Nav, type NavItem } from './Nav'

const DEFAULT_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

export function Header({
  items = DEFAULT_ITEMS,
  ctaLabel = 'Get Tickets',
  onCtaClick,
  className,
}: {
  items?: NavItem[]
  ctaLabel?: string
  onCtaClick?: () => void
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <header className={cn('sticky top-0 z-40 border-b border-aivent-border bg-aivent-bg/80 backdrop-blur', className)}>
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="AIvent" className="h-7 w-auto" />
          </a>

          <div className="hidden lg:block">
            <Nav items={items} />
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
                {ctaLabel}
              </Button>
            </div>

            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-aivent-border bg-white/5 hover:bg-white/10"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span className="text-lg leading-none">≡</span>
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu open={open} items={items} onClose={() => setOpen(false)} />
    </header>
  )
}

