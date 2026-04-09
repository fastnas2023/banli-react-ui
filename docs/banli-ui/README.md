# BanLi UI 文档

本目录用于沉淀 BanLi UI 的“可交付文档”，面向 **组件库使用者** 与 **维护者/贡献者**。

## 文档列表

1. [设计 Token / 主题系统](./design-tokens.md)
2. [组件 API 规范表（摘要）](./component-api.md)
3. [迁移指南（Alpha → 1.0）](./migration-to-1.0.md)

## 快速使用（给使用者）

> 注意：本库组件样式主要由 **Tailwind class** 组成，因此在业务项目中使用需要启用 Tailwind 并把本包加入 `content` 扫描范围（见 API 文档的“集成要求”章节）。

```tsx
import 'banli-ui/styles.css'
import { IconSprite, Button } from 'banli-ui'

export function App() {
  return (
    <>
      <IconSprite />
      <Button>BanLi</Button>
    </>
  )
}
```

## 维护者快速入口

- CI：`.github/workflows/ci.yml`（test / build:lib / size / build-storybook）
- 构建：`npm run build:lib`
- 体积门禁：`npm run size`
- a11y smoke：`src/test/a11y.top.test.tsx`

