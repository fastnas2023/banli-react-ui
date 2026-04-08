import * as React from 'react'
import { cn } from '../../../lib/cn'
import { Button } from '../../primitives/Button'
import { Container } from '../../primitives/Container'
import { Section } from '../../primitives/Section'

export type ContactValues = {
  name: string
  email: string
  message: string
}

function Input({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <label className="block">
      <div className="text-xs font-bold text-white">{label}</div>
      <input
        {...props}
        className={cn(
          'mt-2 h-11 w-full rounded-lg border bg-black/20 px-3 text-sm text-white outline-none placeholder:text-white/30',
          error ? 'border-red-500/70 focus:border-red-500' : 'border-aivent-border focus:border-aivent-secondary/70'
        )}
      />
      {error ? <div className="mt-1 text-xs text-red-300">{error}</div> : null}
    </label>
  )
}

function Textarea({
  label,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }) {
  return (
    <label className="block">
      <div className="text-xs font-bold text-white">{label}</div>
      <textarea
        {...props}
        className={cn(
          'mt-2 min-h-[140px] w-full rounded-lg border bg-black/20 px-3 py-3 text-sm text-white outline-none placeholder:text-white/30',
          error ? 'border-red-500/70 focus:border-red-500' : 'border-aivent-border focus:border-aivent-secondary/70'
        )}
      />
      {error ? <div className="mt-1 text-xs text-red-300">{error}</div> : null}
    </label>
  )
}

export function ContactForm({
  onSubmit,
}: {
  onSubmit?: (values: ContactValues) => Promise<void> | void
}) {
  const [values, setValues] = React.useState<ContactValues>({ name: '', email: '', message: '' })
  const [errors, setErrors] = React.useState<Partial<Record<keyof ContactValues, string>>>({})
  const [submitting, setSubmitting] = React.useState(false)

  const validate = () => {
    const e: Partial<Record<keyof ContactValues, string>> = {}
    if (!values.name.trim()) e.name = '请输入姓名'
    if (!values.email.trim()) e.email = '请输入邮箱'
    else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(values.email)) e.email = '邮箱格式不正确'
    if (!values.message.trim()) e.message = '请输入消息内容'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold text-aivent-secondary">Contact</div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Let’s talk
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-aivent-muted">
              想合作、赞助或咨询票务？给我们留言，我们会尽快回复。
            </p>
          </div>

          <form
            className="rounded-xl2 border border-aivent-border bg-white/5 p-6"
            onSubmit={async (e) => {
              e.preventDefault()
              if (!validate()) return
              try {
                setSubmitting(true)
                await onSubmit?.(values)
              } finally {
                setSubmitting(false)
              }
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input
                label="姓名"
                placeholder="Your name"
                value={values.name}
                error={errors.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              />
              <Input
                label="邮箱"
                placeholder="you@example.com"
                value={values.email}
                error={errors.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              />
            </div>

            <div className="mt-4">
              <Textarea
                label="消息"
                placeholder="How can we help?"
                value={values.message}
                error={errors.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-xs text-aivent-muted">
                提交将调用 onSubmit 回调，方便你接入真实接口。
              </div>
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send Message'}
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  )
}

