# 组件 API 规范表（摘要）

本文件是“读者友好”的 **API 摘要与一致性规范**，不替代 TypeScript 类型定义。最终权威以导出的类型/props 为准。

> 入口：`banli-ui`  
> 样式 token：`banli-ui/styles.css`

---

## 1. 集成要求（使用者必读）

### 1) React 版本

- `react` / `react-dom` 为 **peerDependencies**：使用方需自行安装（>= 18）。

### 2) Tailwind（重要）

当前组件的样式由 **Tailwind className** 构成；组件库不会在 npm 包里打包“完整组件 CSS”（只提供 token 的 `styles.css`）。

因此业务项目需要：

1. 已启用 Tailwind
2. Tailwind `content` 要包含本包（至少一条）：

```ts
// tailwind.config.ts
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/banli-ui/dist/**/*.{js,cjs}', // 推荐
  ],
}
```

### 3) 主题 token

```ts
import 'banli-ui/styles.css'
```

### 4) Icon

```tsx
import { IconSprite } from 'banli-ui'

export function App() {
  return (
    <>
      <IconSprite />
      {/* ... */}
    </>
  )
}
```

---

## 2. 通用一致性规范（维护者/贡献者）

### Props 约定

- `className`：所有组件都应支持（并与内部 class 合并）
- **受控/非受控**：优先 `value / defaultValue / onChange`
- `disabled`：禁用交互；若同时存在 `loading`，一般 `loading` 会隐式禁用
- `invalid`：错误态；应同步设置 `aria-invalid`

### a11y 基线

- 可聚焦组件必须有 `focus-visible` 样式
- 输入类组件：错误信息使用 `aria-describedby` 串联
- 弹层类：Esc 关闭、回焦、aria-label/aria-labelledby/aria-describedby 必须成立

门禁：
- `src/test/a11y.top.test.tsx`（jest-axe + vitest）

---

## 3. 组件清单与关键 Props（摘要）

> 说明：下面只列 “你真正会用到/最容易踩坑” 的 props；其余透传属性见组件源码与 TS 类型。

### Primitives

| 组件 | 关键 props |
|---|---|
| `Button` | `variant: 'primary'｜'secondary'｜'ghost'`，`size: 'sm'｜'md'｜'lg'`，其余为原生 button props |
| `Badge` | 原生 `span` props |
| `Icon` | `name`（symbol id），`spriteUrl?`（外部 sprite），`size?`，`variant?`，`title?`（提供后 role=img） |
| `IconSprite` | 无 props（建议在 App 根部渲染一次） |
| `Typography` | `variant`（h1..h6/body/muted/small/code），`as?`，`size?`；别名：`Text`、`Title(level)` |
| `Space` | `direction`、`size`、`align`、`wrap` |
| `Divider` | `orientation`、`variant`（solid/dashed）、`decorative` |
| `Input` | `size`（sm/md/lg）、`loading?`、`invalid?`，其余为原生 input props（支持受控/非受控） |
| `Textarea` | `size`、`loading?`、`invalid?`（支持受控/非受控） |
| `Avatar` | `src?`、`alt?`、`fallback?`、`size?` |
| `Spinner` | `size?`、`variant?`、`label?`（a11y） |

### Form

| 组件 | 关键 props/说明 |
|---|---|
| `Form` / `FormField` / `FormItem` / `FormLabel` / `FormControl` / `FormMessage` | react-hook-form 封装：Label 会自动关联 Control 的 `id`；错误信息自动拼入 `aria-describedby` |

### Data

| 组件 | 关键 props/说明 |
|---|---|
| `Table` | `columns`（tanstack column defs）、`data`、`loading?`、`emptyText?` |
| `Tree` | `data`，`showSearch?` + `searchValue/defaultSearchValue/onSearchValueChange`，`filterOption?`，`loadData?`（异步加载子节点），键盘与 aria tree |
| `Cascader` | `options`，`value/defaultValue/onChange`，`showSearch?`（含可控搜索），`loadData?`（异步加载下一列），键盘与 aria listbox |

### UI（Radix + 封装）

| 组件 | 关键 props/说明 |
|---|---|
| `Checkbox` | `value/defaultValue/onChange`（boolean），`disabled?`，`status?`，`invalid?` |
| `RadioGroup` | `options`，`value/defaultValue/onChange`（string），`disabled?`，`status?`，`invalid?` |
| `Switch` | `value/defaultValue/onChange`（boolean），`disabled?`，`status?`，`invalid?` |
| `Select` | `options`，`value/defaultValue/onChange`（string），`disabled?`，`status?`，`invalid?`，支持键盘与 listbox 语义 |
| `Tabs` | `options`，`value/defaultValue/onChange`（string） |
| `DatePicker` | `value/defaultValue/onChange`（Date｜undefined），`disabled?`，`placeholder?`，`format?`，`dayPickerProps?` |
| `Upload` | `disabled?`，`multiple?`，`accept?`，`maxSize?`，`onDrop?(files)`（acceptedFiles） |
| `Dialog/Drawer/Popover/DropdownMenu/Tooltip/Toast` | Radix 组合式组件导出（Root/Trigger/Content...）；建议在 DialogContent 内始终提供 `DialogTitle` + `DialogDescription` |

