import * as React from 'react'
import { DayPicker, type DayPickerSingleProps } from 'react-day-picker'
import { cn } from '../../lib/cn'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined
  defaultValue: T
  onChange?: (v: T) => void
}) {
  const [uncontrolled, setUncontrolled] = React.useState<T>(defaultValue)
  const isControlled = value !== undefined
  const state = isControlled ? (value as T) : uncontrolled

  const setState = React.useCallback(
    (next: T) => {
      if (!isControlled) setUncontrolled(next)
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  return [state, setState] as const
}

export type DatePickerProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'defaultValue' | 'onChange'> & {
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date | undefined) => void
  disabled?: boolean
  placeholder?: string
  /**
   * 用于展示的格式化（不影响 DayPicker）
   * 默认：yyyy-mm-dd（使用本地时区）
   */
  format?: (date: Date) => string
  /**
   * 透传给 react-day-picker（已固定 mode=single，并由组件控制 selected/onSelect）
   */
  dayPickerProps?: Omit<DayPickerSingleProps, 'mode' | 'selected' | 'onSelect' | 'disabled'>
}

function defaultFormat(date: Date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function DatePicker({
  value,
  defaultValue,
  onChange,
  disabled = false,
  placeholder = '请选择日期',
  format = defaultFormat,
  dayPickerProps,
  className,
  ...buttonProps
}: DatePickerProps) {
  const [selected, setSelected] = useControllableState<Date | undefined>({
    value,
    defaultValue,
    onChange,
  })
  const [open, setOpen] = React.useState(false)

  const label = selected ? format(selected) : placeholder

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-disabled={disabled || undefined}
          disabled={disabled}
          className={cn(
            'inline-flex h-11 min-w-56 items-center justify-between gap-3 rounded-lg border border-aivent-border bg-aivent-panel px-3 text-sm text-aivent-text outline-none transition',
            'focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50',
            selected ? 'text-aivent-text' : 'text-aivent-muted',
            className
          )}
          onClick={(e) => {
            if (!disabled) setOpen((v) => !v)
            buttonProps.onClick?.(e)
          }}
          {...buttonProps}
        >
          <span className="truncate text-left">{label}</span>
          <span aria-hidden="true" className="text-white/60">
            ▾
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-3" align="start">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(d) => {
            setSelected(d)
            setOpen(false)
          }}
          weekStartsOn={1}
          showOutsideDays
          classNames={{
            months: 'flex flex-col',
            month: 'space-y-3',
            caption: 'flex items-center justify-between gap-2',
            caption_label: 'text-sm font-semibold text-aivent-text',
            nav: 'flex items-center gap-1',
            nav_button:
              'h-8 w-8 rounded-md border border-aivent-border bg-aivent-panel text-aivent-text transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20',
            table: 'w-full border-collapse space-y-1',
            head_row: 'flex',
            head_cell: 'w-9 text-center text-xs font-medium text-aivent-muted',
            row: 'flex w-full',
            cell: 'h-9 w-9 p-0 text-center',
            day: cn(
              'h-9 w-9 rounded-md text-sm text-aivent-text transition',
              'hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20'
            ),
            day_today: 'border border-aivent-secondary/60',
            day_selected: 'bg-aivent-secondary text-slate-950 hover:bg-aivent-secondary',
            day_outside: 'text-white/20',
            day_disabled: 'opacity-30',
          }}
          {...dayPickerProps}
        />
      </PopoverContent>
    </Popover>
  )
}

