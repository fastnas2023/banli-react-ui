import * as React from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'

import { Button } from '../components/primitives/Button'
import { Cascader } from '../components/data/Cascader'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger } from '../components/ui/drawer'
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover'
import { Select } from '../components/ui/select'
import { DatePicker } from '../components/ui/date-picker'
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../components/ui/toast'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip'

afterEach(() => cleanup())

const axeRules = {
  rules: {
    // Color contrast is theme dependent; keep disabled for baseline gate.
    'color-contrast': { enabled: false },
    // In isolated component tests we don't enforce full-page landmark structure.
    region: { enabled: false },
  },
} as const

describe('a11y smoke (overlay critical path)', () => {
  it('Dialog open/close: no violations and focus returns to trigger', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent aria-label="Demo dialog">
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Desc</DialogDescription>
          <div>Body</div>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByRole('button', { name: /open dialog/i })
    await user.click(trigger)
    expect(await screen.findByText('Body')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()

    await user.click(screen.getByRole('button', { name: /close/i }))
    await waitFor(() => expect(screen.queryByText('Body')).not.toBeInTheDocument())
    expect(trigger).toHaveFocus()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })

  it('Drawer open/close: no violations and focus returns to trigger', async () => {
    const user = userEvent.setup()
    render(
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent aria-label="Demo drawer">
          <DrawerTitle>Title</DrawerTitle>
          <DrawerDescription>Desc</DrawerDescription>
          <div>Drawer body</div>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    )

    const trigger = screen.getByRole('button', { name: /open drawer/i })
    await user.click(trigger)
    expect(await screen.findByText('Drawer body')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()

    await user.click(screen.getByRole('button', { name: /close/i }))
    await waitFor(() => expect(screen.queryByText('Drawer body')).not.toBeInTheDocument())
    expect(trigger).toHaveFocus()
  })

  it('DropdownMenu: opened state has no violations', async () => {
    const user = userEvent.setup()
    render(
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent aria-label="Actions">
          <DropdownMenuItem onSelect={() => {}}>Action A</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => {}}>Action B</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByRole('button', { name: /^menu$/i }))
    expect(await screen.findByRole('menu')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })

  it('Popover: opened state has no violations', async () => {
    const user = userEvent.setup()
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open popover</Button>
        </PopoverTrigger>
        <PopoverContent aria-label="Popover panel">
          <div>Panel</div>
          <Button>Inside</Button>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByRole('button', { name: /open popover/i }))
    expect(await screen.findByText('Panel')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })

  it('Tooltip: visible state has no violations', async () => {
    const user = userEvent.setup()
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover</Button>
          </TooltipTrigger>
          <TooltipContent>Tip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    await user.hover(screen.getByRole('button', { name: /hover/i }))
    expect(await screen.findByRole('tooltip')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })

  it('Toast: opened state has no violations', async () => {
    const user = userEvent.setup()

    function Demo() {
      const [open, setOpen] = React.useState(false)
      return (
        <ToastProvider>
          <Button onClick={() => setOpen(true)}>Show</Button>
          <Toast open={open} onOpenChange={setOpen}>
            <ToastTitle>Saved</ToastTitle>
            <ToastDescription>All good</ToastDescription>
            <ToastClose asChild>
              <Button>Close</Button>
            </ToastClose>
          </Toast>
          <ToastViewport />
        </ToastProvider>
      )
    }

    render(<Demo />)
    await user.click(screen.getByRole('button', { name: /show/i }))
    expect(await screen.findByText('Saved')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })

  it('Select opened + keyboard close: no violations', async () => {
    const user = userEvent.setup()
    render(<Select options={[{ label: 'A', value: 'a' }, { label: 'B', value: 'b' }]} defaultValue="a" />)

    const trigger = screen.getByRole('button')
    await user.click(trigger)
    expect(await screen.findByRole('listbox')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()

    await user.keyboard('{Escape}')
    await waitFor(() => expect(screen.queryByRole('listbox')).not.toBeInTheDocument())
    expect(trigger).toHaveFocus()
  })

  it('DatePicker opened: no violations', async () => {
    const user = userEvent.setup()
    render(<DatePicker dayPickerProps={{ defaultMonth: new Date(2026, 0, 1) }} />)

    await user.click(screen.getByRole('button'))
    expect(await screen.findByLabelText(/date picker/i)).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })

  it('Cascader search panel: no violations while searching', async () => {
    const user = userEvent.setup()
    render(
      <Cascader
        showSearch
        placeholder="Cascader"
        options={[
          { label: 'Zhejiang', value: 'zj', children: [{ label: 'Hangzhou', value: 'hz' }] },
          { label: 'Jiangsu', value: 'js', children: [{ label: 'Nanjing', value: 'nj' }] },
        ]}
      />
    )

    await user.click(screen.getByRole('button', { name: /cascader/i }))
    const search = await screen.findByRole('textbox', { name: '搜索' })
    await user.type(search, 'nan')
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })

  it('Nested overlays: Dialog + DropdownMenu opened together: no violations', async () => {
    const user = userEvent.setup()
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <DialogContent aria-label="Dialog with menu">
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Desc</DialogDescription>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent aria-label="Dialog actions">
              <DropdownMenuItem onSelect={() => {}}>Action</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByRole('button', { name: /open dialog/i }))
    await user.click(await screen.findByRole('button', { name: /^menu$/i }))
    expect(await screen.findByRole('menu')).toBeInTheDocument()
    expect(await axe(document.body, axeRules)).toHaveNoViolations()
  })
})

