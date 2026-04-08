import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'

import { Header } from '../components/layout/Header'
import { AiventI18nProvider } from './provider'

it('allows overriding messages via provider', () => {
  render(
    <AiventI18nProvider messages={{ header: { ctaLabel: '立即购票' } }}>
      <Header />
    </AiventI18nProvider>
  )
  expect(screen.getByRole('button', { name: '立即购票' })).toBeInTheDocument()
})

