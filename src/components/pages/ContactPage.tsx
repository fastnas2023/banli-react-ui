import * as React from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'

export function ContactPage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-aivent-bg text-aivent-text">
      <Header />
      <main>{children ?? <div className="p-10 text-aivent-muted">Contact sections coming next…</div>}</main>
      <Footer />
    </div>
  )
}

