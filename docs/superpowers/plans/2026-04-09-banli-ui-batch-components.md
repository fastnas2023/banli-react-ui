# BanLi UI Batch Components Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development（推荐）或 executing-plans 按任务逐个实现。步骤使用 `- [ ]` 复选框追踪。

**Goal:** 一次性补齐 Empty/Result、Skeleton、ConfirmDialog、FormLayout 四类通用组件，全部带 stories + 单测 + 导出到 `src/library.ts`（不导出 demo pages/sections），并保证全量门禁通过后 push + deploy。

**Architecture:** 新组件统一放入 `src/components/ui/`（与现有 Checkbox/Select 等一致），必要时仅增加极少量 shared helper（同目录），不改动业务 pages/sections 的对外导出面。

**Tech Stack:** React 19 + TypeScript + Tailwind + Storybook + Vitest + Testing Library + jest-axe（a11y）

---

## 文件结构（本次新增/修改）

### Create
- `src/components/ui/empty.tsx`
- `src/components/ui/empty.test.tsx`
- `src/components/ui/empty.stories.tsx`
- `src/components/ui/result.tsx`
- `src/components/ui/result.test.tsx`
- `src/components/ui/result.stories.tsx`
- `src/components/ui/skeleton.tsx`
- `src/components/ui/skeleton.test.tsx`
- `src/components/ui/skeleton.stories.tsx`
- `src/components/ui/confirm-dialog.tsx`
- `src/components/ui/confirm-dialog.test.tsx`
- `src/components/ui/confirm-dialog.stories.tsx`
- `src/components/ui/form-layout.tsx`
- `src/components/ui/form-layout.test.tsx`
- `src/components/ui/form-layout.stories.tsx`

### Modify
- `src/components/ui/index.ts`（新增导出）
- `src/library.ts`（新增导出；仍保持不导出 demo pages/sections）

---

## Task 1: Empty + Result

**Files:**
- Create: `src/components/ui/empty.tsx`
- Create: `src/components/ui/result.tsx`
- Test: `src/components/ui/empty.test.tsx`, `src/components/ui/result.test.tsx`
- Story: `src/components/ui/empty.stories.tsx`, `src/components/ui/result.stories.tsx`

- [ ] Step 1: 写单测（先失败）

`src/components/ui/empty.test.tsx`
```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Empty } from './empty'

describe('Empty', () => {
  it('renders title/description and actions', () => {
    render(<Empty title="Empty" description="No data" actions={<button>Retry</button>} />)
    expect(screen.getByText('Empty')).toBeInTheDocument()
    expect(screen.getByText('No data')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument()
  })
})
```

`src/components/ui/result.test.tsx`
```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Result } from './result'

describe('Result', () => {
  it('uses role=alert by default', () => {
    render(<Result status="success" title="OK" description="Saved" />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
```

- [ ] Step 2: 实现组件

`Empty`/`Result` API（最小集）：
```ts
export type EmptyProps = {
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export type ResultStatus = 'success' | 'info' | 'warning' | 'error' | '403' | '404' | '500'
export type ResultProps = {
  status: ResultStatus
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  role?: 'alert' | 'status'
}
```

- [ ] Step 3: 写 stories（至少 Default / WithActions / Sizes）
- [ ] Step 4: 跑单测与 Storybook 构建

Run:
```bash
npm run test:run -- src/components/ui/empty.test.tsx src/components/ui/result.test.tsx
npm run build-storybook
```

---

## Task 2: Skeleton

**Files:**
- Create: `src/components/ui/skeleton.tsx`
- Test: `src/components/ui/skeleton.test.tsx`
- Story: `src/components/ui/skeleton.stories.tsx`

- [ ] Step 1: 单测（a11y + 属性）
```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './skeleton'

describe('Skeleton', () => {
  it('renders with aria-busy', () => {
    render(<Skeleton data-testid="sk" />)
    expect(screen.getByTestId('sk')).toHaveAttribute('aria-busy', 'true')
  })
})
```

- [ ] Step 2: 实现

最小 API：
```ts
export type SkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'text' | 'block' | 'avatar'
  size?: 'sm' | 'md' | 'lg'
}
```

实现要点：使用 `animate-pulse` + 可控圆角/尺寸；默认 `role="status"` + `aria-busy`.

- [ ] Step 3: stories（Text / Card / Avatar）
- [ ] Step 4: 跑 `npm run test:run -- src/components/ui/skeleton.test.tsx`

---

## Task 3: ConfirmDialog（组件式封装）

**Files:**
- Create: `src/components/ui/confirm-dialog.tsx`
- Test: `src/components/ui/confirm-dialog.test.tsx`
- Story: `src/components/ui/confirm-dialog.stories.tsx`

- [ ] Step 1: 单测（打开、确认、异步 loading）
```tsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ConfirmDialog, ConfirmTrigger, ConfirmContent } from './confirm-dialog'
import { Button } from '../primitives/Button'

describe('ConfirmDialog', () => {
  it('calls onConfirm', async () => {
    const user = userEvent.setup()
    const onConfirm = vi.fn().mockResolvedValue(undefined)
    render(
      <ConfirmDialog onConfirm={onConfirm}>
        <ConfirmTrigger asChild>
          <Button>Delete</Button>
        </ConfirmTrigger>
        <ConfirmContent title="Confirm" description="Are you sure?" />
      </ConfirmDialog>
    )
    await user.click(screen.getByRole('button', { name: 'Delete' }))
    await user.click(screen.getByRole('button', { name: /confirm/i }))
    await waitFor(() => expect(onConfirm).toHaveBeenCalledTimes(1))
  })
})
```

- [ ] Step 2: 实现

API（最小集）：
```ts
export type ConfirmDialogProps = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  onConfirm: () => void | Promise<void>
  onCancel?: () => void
  confirmText?: string
  cancelText?: string
  danger?: boolean
  disabled?: boolean
  children: React.ReactNode
}
```

组合式导出：`ConfirmDialog`（Root）、`ConfirmTrigger`、`ConfirmContent`（内部使用现有 `Dialog*`）。

实现要点：
- `onConfirm` 支持 async；运行中禁用按钮并显示 loading（可复用 Button disabled + Spinner/aria-busy）
- a11y：DialogContent 内必须提供 Title/Description（复用 DialogTitle/DialogDescription）

- [ ] Step 3: stories（Default / Danger / Async）
- [ ] Step 4: 跑 `npm run test:run -- src/components/ui/confirm-dialog.test.tsx`

---

## Task 4: FormLayout（适配 RHF Form）

**Files:**
- Create: `src/components/ui/form-layout.tsx`
- Test: `src/components/ui/form-layout.test.tsx`
- Story: `src/components/ui/form-layout.stories.tsx`

- [ ] Step 1: 单测（class/布局切换）
```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormRow, FormSection } from './form-layout'

describe('FormLayout', () => {
  it('renders FormRow', () => {
    render(
      <FormSection title="S">
        <FormRow label="Name">
          <input aria-label="name" />
        </FormRow>
      </FormSection>
    )
    expect(screen.getByText('S')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'name' })).toBeInTheDocument()
  })
})
```

- [ ] Step 2: 实现

建议 API：
```ts
export type FormLayoutMode = 'horizontal' | 'vertical' | 'inline'

export function FormSection(props: { title?: React.ReactNode; description?: React.ReactNode; children: React.ReactNode; className?: string }): JSX.Element
export function FormRow(props: { label?: React.ReactNode; hint?: React.ReactNode; required?: boolean; mode?: FormLayoutMode; labelWidth?: number; children: React.ReactNode; className?: string }): JSX.Element
export function FormCol(props: { span?: 1|2|3|4|5|6|7|8|9|10|11|12; children: React.ReactNode; className?: string }): JSX.Element
```

实现要点：
- `horizontal`：label 左侧固定宽（`labelWidth`），右侧内容自适应
- `inline`：适合筛选区（label 可选），内容紧凑排列
- 与现有 `FormField/FormItem` 兼容：允许 `children` 里直接放 `FormItem`

- [ ] Step 3: stories（Horizontal / Inline Filters / Vertical）

---

## Task 5: Export Surface（不导出 demo pages）

**Files:**
- Modify: `src/components/ui/index.ts`
- Modify: `src/library.ts`

- [ ] Step 1: 在 `src/components/ui/index.ts` 增加导出：
```ts
export * from './empty'
export * from './result'
export * from './skeleton'
export * from './confirm-dialog'
export * from './form-layout'
```

- [ ] Step 2: 在 `src/library.ts` 增加导出（仅组件库 surface）：
```ts
export * from './components/ui/empty'
export * from './components/ui/result'
export * from './components/ui/skeleton'
export * from './components/ui/confirm-dialog'
export * from './components/ui/form-layout'
```

---

## Task 6: Verification + Commit + Push + Deploy

- [ ] Step 1: 全量验证

Run:
```bash
npm run test:run
npm run lint
npm run build-storybook
npm run build:lib
npm run size
npm pack --dry-run
```

- [ ] Step 2: Commit
```bash
git add .
git commit -m "feat: add empty/skeleton/confirm-dialog/form-layout"
```

- [ ] Step 3: Push + Deploy（需要 GitHub PAT）
```bash
git push origin main
npm run deploy-storybook
```

