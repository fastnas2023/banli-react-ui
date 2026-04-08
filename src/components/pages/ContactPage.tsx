import * as React from 'react'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { ContactForm } from '../sections/contact/ContactForm'
import { ContactInfo } from '../sections/contact/ContactInfo'

export function ContactPage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-aivent-bg text-aivent-text">
      <Header />
      <main>
        {children ?? (
          <>
            <ContactForm onSubmit={async (v) => console.log('contact submit', v)} />
            <ContactInfo />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
