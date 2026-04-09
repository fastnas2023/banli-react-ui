import * as React from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'

import { Button } from '../components/primitives/Button'
import { Input } from '../components/primitives/Input'
import { Select } from '../components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Tree } from '../components/data/Tree'
import { Cascader } from '../components/data/Cascader'

afterEach(() => cleanup())

const axeRules = {
  rules: {
    // Color contrast is theme dependent; keep disabled for baseline gate.
    'color-contrast': { enabled: false },
    // In isolated component tests we don't enforce full-page landmark structure.
    region: { enabled: false },
  },
} as const

describe('a11y smoke (top components)', () => {
  it('Button + Input: no critical violations', async () => {
    render(
      <div>
        <Button>OK</Button>
        <label htmlFor="email">Email</label>
        <Input id="email" placeholder="you@cn111.net" />
      </div>
    )

    const results = await axe(document.body, axeRules)
    expect(results).toHaveNoViolations()
  })

  it('Select opened: no critical violations', async () => {
    const user = userEvent.setup()
    render(<Select options={[{ label: 'A', value: 'a' }]} defaultValue="a" />)

    await user.click(screen.getByRole('button'))
    const results = await axe(document.body, axeRules)
    expect(results).toHaveNoViolations()
  })

  it('Dialog opened: no critical violations', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent aria-label="Demo dialog">
          <DialogTitle>Demo</DialogTitle>
          <DialogDescription>Demo dialog description</DialogDescription>
          <div>Content</div>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByRole('button', { name: /open/i }))
    const results = await axe(document.body, axeRules)
    expect(results).toHaveNoViolations()
  })

  it('Tree + Cascader: no critical violations', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Tree
          data={[
            { key: 'p', title: 'Parent', children: [{ key: 'c', title: 'Child' }] },
            { key: 'o', title: 'Other' },
          ]}
          showSearch
        />
        <Cascader
          showSearch
          placeholder="Cascader"
          options={[
            { label: 'Zhejiang', value: 'zj', children: [{ label: 'Hangzhou', value: 'hz' }] },
            { label: 'Jiangsu', value: 'js', children: [{ label: 'Nanjing', value: 'nj' }] },
          ]}
        />
      </div>
    )

    // open cascader panel so listbox exists in DOM
    const cascaderTrigger = screen.getByRole('button', { name: /cascader/i })
    await user.click(cascaderTrigger)

    const results = await axe(document.body, axeRules)
    expect(results).toHaveNoViolations()
  })
})
