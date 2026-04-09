# BanLi UI Full Kit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 补齐 BanLi UI 全家桶组件（含 Tree/Cascader 搜索+异步加载），统一 API（AntD 常用 props + 组合式 asChild），完善 a11y、dark mode、文档与单测，并发布 `banli-ui` alpha。

**Architecture:** 以 `primitives`（基础）→ `ui`（交互复杂）→ `form`/`data`（表单与数据展示）的分层实现；交互组件优先复用 Radix，Table/Form/DatePicker/Upload 使用轻量专业库并做 BanLi 外观封装；主题 token 从 `aivent` 迁移为 `banli`，dark mode 使用 `class="dark"`。

**Tech Stack:** React 19 + TypeScript + Tailwind + Storybook + Vitest/RTL + Radix UI + react-hook-form + @tanstack/react-table + react-day-picker + react-dropzone。

---

## 0) Files to Touch / Create（结构锁定）

**Modify**
- `tailwind.config.ts`：新增 `colors.banli.*` 并保留兼容层（迁移期）
- `src/styles/globals.css`：增加 `--banli-*` token（light/dark），逐步弃用 `--aivent-*`
- `src/components/layout/*`：替换 class token 引用（`aivent-*` → `banli-*`）并保持视觉一致
- `src/components/ui/index.ts`：补齐导出
- `src/components/index.ts`：对外导出补齐
- `README.md`：补“banli-ui”安装/用法/主题/可访问性说明

**Create（建议目录）**
- `src/lib/variants.ts`：统一 `variant/size` 的 class 组合（推荐用 `class-variance-authority` 或自写轻量）
- `src/components/primitives/Icon.tsx`：SVG sprite Icon
- `src/components/primitives/Typography.tsx`：Text/Title/Link/Code/Muted
- `src/components/primitives/Space.tsx`：Space 组件
- `src/components/primitives/Divider.tsx`：Divider（Radix Separator）
- `src/components/primitives/Avatar.tsx`：Avatar（Radix Avatar）
- `src/components/primitives/Spinner.tsx`：Spinner
- `src/components/primitives/Input.tsx`：Input
- `src/components/primitives/Textarea.tsx`：Textarea
- `src/components/ui/checkbox.tsx`：Checkbox（Radix）
- `src/components/ui/radio-group.tsx`：Radio（Radix）
- `src/components/ui/switch.tsx`：Switch（Radix）
- `src/components/ui/select.tsx`：Select（Radix，提供快捷版 + 组合式）
- `src/components/ui/tabs.tsx`：Tabs（Radix）
- `src/components/form/Form.tsx`：react-hook-form 封装（FormProvider + Field 组件族）
- `src/components/data/Table.tsx`：TanStack Table 封装
- `src/components/ui/date-picker.tsx`：react-day-picker + Popover
- `src/components/ui/upload.tsx`：react-dropzone 封装
- `src/components/data/Tree.tsx`：Tree（必须：搜索 + 异步加载 + a11y）
- `src/components/data/Cascader.tsx`：Cascader（必须：搜索 + 异步加载 + a11y）

**Stories**
- `src/stories/*` 或就近 `*.stories.tsx`：每组件 Basic/Variants/States/Controlled

**Tests**
- `src/components/**/**.test.tsx`：每组件至少 1 条关键交互测试

---

## 1) Task: 基础依赖与工程准备

**Files**
- Modify: `package.json`

- [ ] Step 1: 安装依赖（一次性）

Run:
```bash
npm install @radix-ui/react-checkbox @radix-ui/react-radio-group @radix-ui/react-switch @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-avatar @radix-ui/react-separator @radix-ui/react-label @radix-ui/react-slot\nnpm install react-hook-form @tanstack/react-table react-day-picker react-dropzone\n```

Expected: 安装成功，无冲突。

- [ ] Step 2: smoke test

Run:
```bash
npm run test:run\nnpm run build-storybook\n```

Expected: PASS。

- [ ] Step 3: Commit

```bash
git add package.json package-lock.json\ngit commit -m \"chore: add dependencies for full kit\"\n```

---

## 2) Task: Token 迁移（aivent → banli）+ dark mode（class）

**Files**
- Modify: `tailwind.config.ts`
- Modify: `src/styles/globals.css`
- Modify: `src/components/**`（分批替换）
- Add: `src/stories/Theme.stories.tsx`（若需增强切换说明）

- [ ] Step 1: 在 `globals.css` 增加 `--banli-*`（light/dark）

在 `src/styles/globals.css` 里：
- 保留现有 `--aivent-*`（迁移期不破坏）
- 新增同值映射到 `--banli-*`
- `.dark { --banli-*: ... }`

- [ ] Step 2: `tailwind.config.ts` 新增 `colors.banli.*`

示例（保留 aivent，新增 banli）：
```ts
colors: {
  banli: {
    bg: 'var(--banli-bg)',
    panel: 'var(--banli-panel)',
    primary: 'var(--banli-primary)',
    secondary: 'var(--banli-secondary)',
    text: 'var(--banli-text)',
    muted: 'var(--banli-muted)',
    border: 'var(--banli-border)',
  },
  // aivent: ...（可暂留）
}
```

- [ ] Step 3: 分批替换组件 class（aivent-* → banli-*）

优先替换入口布局与 ui 组件：
- `src/components/layout/*`
- `src/components/ui/*`
- `src/components/primitives/*`

规则：
- 不改变视觉，只替换 token 名
- 每批改动后跑 tests/build-storybook

- [ ] Step 4: Commit

```bash
git add tailwind.config.ts src/styles/globals.css src/components\ngit commit -m \"chore: add banli tokens and start migration\"\n```

---

## 3) Task: Icon（自建 SVG sprite）+ Icon 组件

**Files**
- Modify: `public/icons.svg`（新增/整理 symbols）
- Create: `src/components/primitives/Icon.tsx`
- Create: `src/components/primitives/Icon.stories.tsx`
- Create: `src/components/primitives/Icon.test.tsx`
- Modify: `src/components/index.ts`

- [ ] Step 1: 规范 icons.svg

要求：
- `<symbol id="banli-icon-xxx" viewBox="0 0 24 24">...`
- 至少包含：`close`, `chevron-down`, `chevron-right`, `check`, `loader`, `search`, `x`

- [ ] Step 2: Icon 组件 API

```tsx
export type IconName = 'close' | 'chevron-down' | 'chevron-right' | 'check' | 'loader' | 'search' | 'x'

export type IconProps = {
  name: IconName
  size?: number | 'sm' | 'md' | 'lg'
  className?: string
  title?: string
}
```

渲染规则：
- 默认 `aria-hidden="true"`
- 有 `title` 则 `role="img"` + `aria-label` + `<title>`

- [ ] Step 3: Test（a11y）

测试点：
- 默认 icon 有 `aria-hidden`
- 传 title 时有 `role="img"` 和 `aria-label`

- [ ] Step 4: Commit

```bash
git add public/icons.svg src/components/primitives/Icon.tsx src/components/primitives/Icon.stories.tsx src/components/primitives/Icon.test.tsx src/components/index.ts\ngit commit -m \"feat: add Icon with svg sprite\"\n```

---

## 4) Task: Typography / Space / Divider / Spinner / Avatar（primitives）

**Files**
- Create: `src/components/primitives/Typography.tsx` + stories + tests
- Create: `src/components/primitives/Space.tsx` + stories + tests
- Create: `src/components/primitives/Divider.tsx` + stories + tests
- Create: `src/components/primitives/Spinner.tsx` + stories + tests
- Create: `src/components/primitives/Avatar.tsx` + stories + tests
- Modify: `src/components/index.ts`

- [ ] Step 1: Typography 组件族

最小集合：
- `Text`（默认）
- `Title`（level 1-6）
- `Link`
- `Code`
- `Muted`

props（通用）：
- `asChild?: boolean`
- `size?: 'sm'|'md'|'lg'`
- `weight?: 'regular'|'medium'|'bold'`
- `tone?: 'default'|'muted'|'danger'|'success'|'warning'`
- `className?`

- [ ] Step 2: Space（AntD 风格）

props：
- `direction?: 'horizontal'|'vertical'`
- `size?: 'sm'|'md'|'lg'|number`
- `align?: 'start'|'center'|'end'|'baseline'`
- `wrap?: boolean`
- children 间插入 gap 或 margin

- [ ] Step 3: Divider（Radix Separator）

props：
- `orientation?: 'horizontal'|'vertical'`
- `variant?: 'default'|'muted'`
- `label?: ReactNode`（可选）

- [ ] Step 4: Spinner

props：
- `size?: 'sm'|'md'|'lg'`
- `className?`
- `aria-label`（默认 “Loading”）

- [ ] Step 5: Avatar（Radix Avatar）

props：
- `src`, `alt`, `fallback`, `size`, `shape`, `className`

- [ ] Step 6: Tests + Stories + Commit

Run:
```bash
npm run test:run\nnpm run build-storybook\n```

Commit:
```bash
git add src/components/primitives src/components/index.ts\ngit commit -m \"feat: add primitives typography space divider avatar spinner\"\n```

---

## 5) Task: Input / Textarea（primitives）

**Files**
- Create: `src/components/primitives/Input.tsx` + stories + tests
- Create: `src/components/primitives/Textarea.tsx` + stories + tests
- Modify: `src/components/index.ts`

- [ ] Step 1: Input API

props：
- `value/defaultValue/onChange`
- `disabled/invalid`
- `size`
- `prefix/suffix`（可选，若做则必须 a11y 不破坏）

测试点：
- disabled 时不可输入
- invalid 时有 `aria-invalid="true"`

- [ ] Step 2: Textarea 同 Input

- [ ] Step 3: Commit

```bash
git add src/components/primitives/Input.tsx src/components/primitives/Textarea.tsx src/components/index.ts\ngit commit -m \"feat: add Input and Textarea\"\n```

---

## 6) Task: Checkbox / Radio / Switch（ui，Radix）

**Files**
- Create: `src/components/ui/checkbox.tsx` + stories + tests
- Create: `src/components/ui/radio-group.tsx` + stories + tests
- Create: `src/components/ui/switch.tsx` + stories + tests
- Modify: `src/components/ui/index.ts`
- Modify: `src/components/index.ts`

- [ ] Step 1: Checkbox（支持 AntD props 口味）

props：
- `checked/defaultChecked/onCheckedChange`
- 同时支持别名：`value/onChange`（把 boolean 映射到 checked）
- `disabled/invalid/size`
- `asChild`（可选，若 CheckboxRoot 允许）

a11y：role/aria-checked 由 Radix。

- [ ] Step 2: RadioGroup

props：
- `value/defaultValue/onValueChange` + `onChange` 别名
- `disabled/invalid/size`

- [ ] Step 3: Switch

props：
- `checked/defaultChecked/onCheckedChange` + `onChange` 别名
- `disabled/size`

- [ ] Step 4: Commit

```bash
git add src/components/ui/checkbox.tsx src/components/ui/radio-group.tsx src/components/ui/switch.tsx src/components/ui/index.ts src/components/index.ts\ngit commit -m \"feat: add Checkbox Radio Switch\"\n```

---

## 7) Task: Select / Tabs（ui，Radix + 快捷版 + 组合式）

**Files**
- Create: `src/components/ui/select.tsx` + stories + tests
- Create: `src/components/ui/tabs.tsx` + stories + tests
- Modify: `src/components/ui/index.ts`
- Modify: `src/components/index.ts`

- [ ] Step 1: Select 快捷版 props（AntD 风格）

```ts
type Option = { label: React.ReactNode; value: string; disabled?: boolean }
type SelectProps = {
  options?: Option[]
  value?: string
  defaultValue?: string
  onChange?: (v: string) => void
  onValueChange?: (v: string) => void
  disabled?: boolean
  size?: 'sm'|'md'|'lg'
  status?: 'default'|'error'
  invalid?: boolean
  placeholder?: string
}
```

行为：
- `onChange` 与 `onValueChange` 同时触发（若都提供）
- invalid -> `aria-invalid`

- [ ] Step 2: 导出组合式子组件

`Select.Root/Trigger/Content/Item/Group/Label/Separator` 直接 re-export 并加 BanLi class 封装。

- [ ] Step 3: Tabs 同理（快捷版 + Tabs.Root/List/Trigger/Content）

- [ ] Step 4: Tests（键盘选择、onChange）

- [ ] Step 5: Commit

```bash
git add src/components/ui/select.tsx src/components/ui/tabs.tsx src/components/ui/index.ts src/components/index.ts\ngit commit -m \"feat: add Select and Tabs\"\n```

---

## 8) Task: Form（react-hook-form 封装）

**Files**
- Create: `src/components/form/Form.tsx` + stories + tests
- Modify: `src/components/index.ts`

- [ ] Step 1: Form 组件族最小集合

必须包含：
- `Form`（Provider）
- `FormField`（绑定 name + control）
- `FormItem`（布局容器）
- `FormLabel`（基于 Radix Label，确保 htmlFor/id）
- `FormControl`（注入 id/aria-describedby）
- `FormMessage`（错误提示）

测试点：
- invalid 时 `aria-describedby` 指向错误消息
- Label 点击能聚焦到 input（通过 id/htmlFor）

- [ ] Step 2: Commit

```bash
git add src/components/form/Form.tsx src/components/index.ts\ngit commit -m \"feat: add Form components based on react-hook-form\"\n```

---

## 9) Task: Table（@tanstack/react-table）

**Files**
- Create: `src/components/data/Table.tsx` + stories + tests
- Modify: `src/components/index.ts`

- [ ] Step 1: Table API（最小可用）

props：
- `columns`（TanStack ColumnDef）
- `data`
- `loading?`
- `emptyText?`
- `rowSelection?`（可选）

测试点：
- 渲染表头与行
- empty 状态显示

- [ ] Step 2: Commit

```bash
git add src/components/data/Table.tsx src/components/index.ts\ngit commit -m \"feat: add Table based on tanstack\"\n```

---

## 10) Task: DatePicker（react-day-picker + Popover）

**Files**
- Create: `src/components/ui/date-picker.tsx` + stories + tests
- Modify: `src/components/ui/index.ts`
- Modify: `src/components/index.ts`

- [ ] Step 1: 单选 + 范围（Alpha 最小）

props：
- `mode?: 'single'|'range'`
- `value/defaultValue/onChange`
- `disabled`（日期规则或 boolean）
- `size/status/invalid`

测试点：
- 打开/关闭
- 选择日期触发 onChange

- [ ] Step 2: Commit

```bash
git add src/components/ui/date-picker.tsx src/components/ui/index.ts src/components/index.ts\ngit commit -m \"feat: add DatePicker\"\n```

---

## 11) Task: Upload（react-dropzone）

**Files**
- Create: `src/components/ui/upload.tsx` + stories + tests
- Modify: `src/components/ui/index.ts`
- Modify: `src/components/index.ts`

- [ ] Step 1: Upload API（最小）

props：
- `value?: File[]`
- `defaultValue?: File[]`
- `onChange?: (files: File[]) => void`
- `accept? multiple? maxSize? disabled? loading?`

测试点：
- disabled 时不可触发
- 触发 onChange（可以模拟 drop 事件）

- [ ] Step 2: Commit

```bash
git add src/components/ui/upload.tsx src/components/ui/index.ts src/components/index.ts\ngit commit -m \"feat: add Upload\"\n```

---

## 12) Task: Tree（必须：搜索 + 异步加载 + a11y）

**Files**
- Create: `src/components/data/Tree.tsx` + stories + tests
- Modify: `src/components/index.ts`

- [ ] Step 1: 类型与 props（按 spec）

实现要点（必须）：
- `searchValue/defaultSearchValue/onSearchValueChange/filterOption`
- `loadData(node)` 异步加载 children
- `loadingKeys` 受控/非控
- roving tabindex + aria tree
- 键盘：↑↓←→ Enter/Space Esc（Esc 可选）

- [ ] Step 2: 写 2 个关键测试（先写失败再实现）

Test A（键盘导航）：
- 渲染 3 层树
- `focus` 第一个节点
- 按 `ArrowDown` 焦点移动到下一个

Test B（异步加载）：
- 节点无 children 且非 isLeaf
- `loadData` mock 返回 children
- 展开后应渲染新 children，且 loading 状态正确

- [ ] Step 3: Storybook
- Basic
- Search
- Async Load

- [ ] Step 4: Commit

```bash
git add src/components/data/Tree.tsx src/components/data/Tree.test.tsx src/components/data/Tree.stories.tsx src/components/index.ts\ngit commit -m \"feat: add Tree with search and async load\"\n```

---

## 13) Task: Cascader（必须：搜索 + 异步加载 + a11y）

**Files**
- Create: `src/components/data/Cascader.tsx` + stories + tests
- Modify: `src/components/index.ts`

- [ ] Step 1: props（按 spec）

必须：
- `showSearch` + `searchValue/defaultSearchValue/onSearchValueChange/filterOption`
- `loadData(selectedOptions)` 异步加载下一层
- 键盘：↑↓←→ Enter Esc
- aria：trigger + listbox/option

- [ ] Step 2: Tests

Test A：打开后键盘上下选择并 onChange
Test B：异步加载下一层后出现第二列

- [ ] Step 3: Storybook
- Basic
- Search
- Async Load

- [ ] Step 4: Commit

```bash
git add src/components/data/Cascader.tsx src/components/data/Cascader.test.tsx src/components/data/Cascader.stories.tsx src/components/index.ts\ngit commit -m \"feat: add Cascader with search and async load\"\n```

---

## 14) Task: 文档补齐 + 可访问性检查 + 体积检查 + alpha 发布

**Files**
- Modify: `README.md`
- Add: `CHANGELOG.md`（或 release notes）
- Modify: `package.json`（name/version/exports）

- [ ] Step 1: README 增加
- 安装：`npm i banli-ui`
- Theme：Token + dark class
- a11y：键盘与 focus 规则
- Icon sprite 用法（public/icons.svg）

- [ ] Step 2: Storybook Docs 汇总页
- 组件清单
- 主题切换
- 可访问性说明

- [ ] Step 3: 体积检查（简易）
Run:
```bash
npm run build\n```
检查产物大小；必要时调整导出与依赖引用。

- [ ] Step 4: alpha 版本发布（先只打 tag）
```bash
npm version prerelease --preid alpha\n# 或手动改 version 到 0.1.0-alpha.1\n```

- [ ] Step 5: Commit
```bash
git add README.md package.json CHANGELOG.md\ngit commit -m \"chore: prepare alpha release\"\n```

---

## Plan Self‑Review（执行前自检）
- [ ] 覆盖 spec 的全部组件清单（含 Tree/Cascader 搜索+异步）
- [ ] 每个组件都有：stories + 至少 1 测试 + a11y 基线
- [ ] Token 前缀 banli + dark class 生效且不破坏现有页面

