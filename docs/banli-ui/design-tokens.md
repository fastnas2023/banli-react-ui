# 设计 Token / 主题系统

BanLi UI 使用 **CSS Variables + Tailwind 映射** 的方式管理主题：

- Token 定义（CSS variables）：`src/styles/banli.css`（作为 `banli-ui/styles.css` 对外发布）
- Tailwind 映射：`tailwind.config.ts`（将变量映射为 `bg-banli-bg`、`text-banli-text` 等）

> 提示：演示站点（Storybook）里还会额外加载 `src/styles/globals.css`，其中包含字体（Manrope）与 demo 用的全局样式；但组件库发布对外的核心是 `styles.css`（token）。

---

## 1. 使用方式（推荐）

### 1) 引入 token 样式

```ts
import 'banli-ui/styles.css'
```

### 2) 深色模式

该库采用 `darkMode: 'class'`，深色模式通过给 `html`（或任意容器）添加 `dark` class 启用：

```html
<html class="dark"></html>
```

也可以做局部深色：

```tsx
<div className="dark">
  {/* only inside is dark */}
</div>
```

---

## 2. Token 列表

### 颜色（light 默认 / dark 覆盖）

| Token | 说明 | Tailwind 类 |
|---|---|---|
| `--banli-bg` | 页面背景 | `bg-banli-bg` |
| `--banli-panel` | 面板/弹层背景 | `bg-banli-panel` |
| `--banli-primary` | 主色 | `text-banli-primary` / `bg-banli-primary` |
| `--banli-secondary` | 辅色 | `text-banli-secondary` / `bg-banli-secondary` |
| `--banli-text` | 主文本 | `text-banli-text` |
| `--banli-muted` | 次级文本 | `text-banli-muted` |
| `--banli-border` | 边框色 | `border-banli-border` |

> 具体默认值见 `src/styles/banli.css`。

### 动效（Motion）

| Token | 说明 |
|---|---|
| `--banli-motion-duration-fast` | 快速动效时长 |
| `--banli-motion-duration` | 标准动效时长 |
| `--banli-motion-duration-slow` | 慢速动效时长 |
| `--banli-motion-ease-out` | 出场缓动 |
| `--banli-motion-ease-in` | 入场缓动 |

Tailwind 扩展：
- duration：`duration-banli-fast` / `duration-banli-base` / `duration-banli-slow`
- easing：`ease-banli-out` / `ease-banli-in`

---

## 3. 定制主题（覆盖变量）

### 全局覆盖

```css
:root {
  --banli-primary: #5b21b6;
  --banli-secondary: #06b6d4;
}

.dark {
  --banli-bg: #030712;
}
```

### 局部主题（组件级/页面级）

```css
.brand-x {
  --banli-primary: #ef4444;
}
```

```tsx
<section className="brand-x">
  <Button>Brand X</Button>
</section>
```

---

## 4. Icon 体系（与主题关系）

BanLi UI 默认使用 **内联 sprite**：

1) 在应用根部渲染一次：

```tsx
import { IconSprite } from 'banli-ui'
<IconSprite />
```

2) 使用图标：

```tsx
import { Icon } from 'banli-ui'
<Icon name="check" variant="primary" title="check" />
```

如仍需引用外部 sprite（例如 `/icons.svg`），可用：

```tsx
<Icon spriteUrl="/icons.svg" name="check" />
```

