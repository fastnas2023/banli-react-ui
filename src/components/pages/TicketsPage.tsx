import * as React from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { TicketsStyle1 } from '../sections/tickets/TicketsStyle1'
import { TicketsStyle2 } from '../sections/tickets/TicketsStyle2'

export function TicketsPage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-aivent-bg text-aivent-text">
      <Header />
      <main>
        {children ?? (
          <>
            <TicketsStyle1 />
            <TicketsStyle2 />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
