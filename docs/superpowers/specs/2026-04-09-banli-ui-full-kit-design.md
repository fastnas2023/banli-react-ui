# BanLi UI 全家桶组件库设计文档（Alpha）

日期：2026-04-09  
作者：Jason Zhang（https://www.cn111.net）  
仓库：`fastnas2023/banli-react-ui`  

## 0. 目标与非目标

### 目标
1. **补齐全家桶**（按清单）：  
   Button、Icon、Typography、Space、Divider、Input、Textarea、Checkbox、Radio、Switch、Select、Tabs、Modal、Drawer、Tooltip、Dropdown、Toast、Badge、Avatar、Spinner、Form、Table、DatePicker、Upload、Tree、Cascader
2. **统一 API 约定**：常用组件提供 AntD 风格 props，同时保留 Radix/shadcn 的组合式能力（slot / asChild）。
3. **可访问性保证**：键盘可操作、Focus 可见、aria 正确、弹层焦点陷阱、表单 label 关联。
4. **补文档与示例**：Storybook 文档齐全，包含用法、变体、受控/非受控、a11y 注意事项。
5. **单元测试起步**：关键交互组件有基础测试覆盖；新增组件新增测试。
6. **Dark mode**：支持 `class="dark"` 切换，并有 Token 完整覆盖。
7. **优化打包体积**：按需导入、可 tree-shaking、减少全量副作用。
8. **发布 Alpha**：语义化版本 + 变更记录 + GitHub Pages Storybook 可持续发布。

### 非目标（Alpha 阶段不强行追求）
- 不追求完全对标 Ant Design 的所有高级能力（例如 Table 虚拟滚动、复杂拖拽排序、全量国际化方案等），但需预留扩展点。
- 不承诺所有组件 100% 覆盖移动端手势交互（如复杂 Tree 拖拽），以桌面端键盘/鼠标交互为优先。

---

## 1. 设计原则

1. **一致性优先**：命名、props、Token、样式组织方式可预测。
2. **默认可用、可深度定制**：默认样式直接可用；同时允许 `className`/slot 覆盖。
3. **无障碍是“默认功能”**：不是额外加分项；所有交互组件必须提供可访问性基线。
4. **树摇友好**：模块边界清晰、无全局副作用导出；按需导入只带走用到的代码。
5. **渐进交付**：Alpha 先“齐全 + 可用 + a11y 基线 + 文档/测试起步”，后续再扩展高级能力。

---

## 2. 统一 API 规范（强约束）

### 2.1 命名与常见 props
- 变体：`variant?: string`
- 尺寸：`size?: 'sm' | 'md' | 'lg'`（可按组件扩展）
- 状态：
  - `disabled?: boolean`
  - `loading?: boolean`（仅对可触发动作的组件，如 Button、Upload 等）
  - `invalid?: boolean`（表单类输入组件、Select 等）
- 样式扩展：
  - `className?: string`（所有组件）
  - `style?: React.CSSProperties`（如有需要，可统一开放）
- ref 透传：全部 `forwardRef`，指向可交互根节点（button/input/trigger 等）。
- 组合能力：
  - **优先**支持 `asChild?: boolean`（使用 `@radix-ui/react-slot` 的 `<Slot />`）
  - 非 Radix 组件如需多态，提供 `as?: React.ElementType`（仅在必要场景使用，避免滥用）

### 2.2 受控 / 非受控（统一规则）
- 输入类：
  - 受控：`value` + `onChange`
  - 非受控：`defaultValue`
- 弹层类（Dialog/Drawer/Popover/Dropdown/Tooltip）：
  - 受控：`open` + `onOpenChange`
  - 非受控：`defaultOpen`
- Select / Tabs：
  - 受控：`value` + `onValueChange`（对齐 Radix 生态）
  - 同时对外提供 AntD 口味别名：`onChange`（内部转发到 `onValueChange`，文档明确优先 `onValueChange`）

### 2.3 “AntD props + 组合式”落地策略
以 `Select` 为例：
- 快速用法（AntD 风格）：`options`, `value`, `onChange`, `disabled`, `size`, `status`
- 组合式用法（Radix 风格）：`<Select.Root> <Select.Trigger/> <Select.Content> <Select.Item/> ...`
- 约定：**同一组件同时提供两套入口**：
  - `Select`（封装后的“快捷版”）
  - `Select.Root/Trigger/Content/Item...`（导出组合式子组件）

---

## 3. 主题 Token 与 Dark Mode

### 3.1 Token 命名
统一使用 `banli` 前缀（替换当前 `aivent` 前缀，避免模板痕迹，减少侵权风险）。

建议 Token（CSS Variables）：
- 颜色：
  - `--banli-bg`, `--banli-panel`, `--banli-text`, `--banli-muted`, `--banli-border`
  - `--banli-primary`, `--banli-secondary`, `--banli-danger`, `--banli-success`, `--banli-warning`
- 字体：
  - `--banli-font-sans`
  - `--banli-font-size-*`, `--banli-line-height-*`
- 间距：`--banli-space-*`
- 圆角：`--banli-radius-*`
- 阴影：`--banli-shadow-*`
- z-index：`--banli-z-dropdown`, `--banli-z-modal`, `--banli-z-toast` …
- 动画：`--banli-motion-duration-fast/base/slow`，`--banli-motion-ease-out/in`

### 3.2 Tailwind 侧映射
- `tailwind.config.ts` 中扩展 `colors.banli.*`
- `globals.css` 里定义 `:root` 与 `.dark` 两套变量：
  - `:root { --banli-bg: ... }`
  - `.dark { --banli-bg: ... }`

### 3.3 Dark mode 机制
- 使用 Tailwind 的 `dark` class：`<html class="dark">`
- Storybook 提供切换示例（Theme story + docs）

---

## 4. 组件分层与目录结构

### 4.1 目录建议
- `src/components/primitives/`：最底层基础（Button、Typography、Space、Divider、Icon、Spinner、Avatar…）
- `src/components/ui/`：交互复杂且复用的 UI（Dialog、Drawer、Select、Tabs、Tooltip、Dropdown、Toast、DatePicker、Upload…）
- `src/components/form/`：表单能力（FormField、FormItem、FormMessage、Label、HelpText…）
- `src/components/data/`：数据展示（Table、Tree、Cascader…）
- `src/lib/`：工具（cn、variants、a11y helpers、focus utils、polymorphic helpers）

> 注：最终结构需兼容现有项目，改动遵循“可逐步迁移”原则。

### 4.2 导出策略
- `src/components/index.ts`：按目录导出（推荐具名导出）
- `src/components/ui/index.ts`：聚合导出 UI 组件
- 避免默认导出（利于 tree-shaking 与重构）
- **组件样式尽量不引入全局 CSS**，优先 Tailwind + Token（减少副作用）

---

## 5. 依赖策略（允许新增依赖）

Alpha 阶段建议引入：
- Table：`@tanstack/react-table`
- Form：`react-hook-form`（可选：`zod` + `@hookform/resolvers`）
- DatePicker：`react-day-picker`
- Upload：`react-dropzone`
- Icon：建议使用 `lucide-react`（或自建 SVG Sprite，但要考虑 DX 与体积）

Radix 生态（已存在或将补齐）：
- `@radix-ui/react-checkbox`
- `@radix-ui/react-radio-group`
- `@radix-ui/react-switch`
- `@radix-ui/react-select`
- `@radix-ui/react-tabs`
- `@radix-ui/react-avatar`
- `@radix-ui/react-separator`
- `@radix-ui/react-label`
- 已有的 dialog/drawer/popover/tooltip/dropdown-menu/toast 等继续复用

---

## 6. 组件清单：验收标准（每个组件必须满足）

通用验收：
1. props：`variant/size/disabled/loading/invalid/className/ref/asChild`（按组件适用）
2. 受控/非受控：按规范实现并在文档中说明
3. 键盘操作：Tab 导航、Enter/Space 激活、Esc 关闭、方向键选择（如适用）
4. Focus 可见：`:focus-visible` ring，暗色/亮色都清晰
5. aria 正确：role/aria-* 与 label 关联（如适用）
6. Storybook：最少 3 个故事（默认/变体/状态），并有 Docs
7. 单测：至少 1 个关键交互测试（或 a11y 断言）

---

## 7. 重点组件设计要点（摘要）

### 7.1 Typography
- 提供：`Title/H1~H6`, `Text`, `Link`, `Code`, `Muted`
- props：`size`, `weight`, `tone`（tone 走 Token：default/muted/danger/success…）
- 支持 `asChild` 以便包装 Link 等

### 7.2 Space / Divider
- `Space`：水平/垂直间距布局（类似 AntD Space），支持 `size`, `direction`, `wrap`, `align`
- `Divider`：基于 Radix Separator，支持 `orientation`, `variant`, `label?`

### 7.3 Form（Label 关联）
基于 `react-hook-form`：
- `Form`（Provider）
- `FormField`（绑定 name + control）
- `FormItem`（布局）
- `FormLabel`（强制 id/htmlFor 或 aria-labelledby）
- `FormControl`（将 id 注入到 Input/Select）
- `FormMessage`（错误信息）

### 7.4 Table
基于 `@tanstack/react-table`：
- `Table` 负责样式与布局
- `useTable`/`createColumns` 等辅助（可选）
- Alpha：排序、空状态、loading、row selection（可选）

### 7.5 DatePicker
基于 `react-day-picker`：
- `DatePicker`（单选/范围）
- `value/onChange` + `defaultValue`
- `disabled` 日期规则
- 弹层用 Popover，键盘与 aria 由库负责 + 我们补齐样式

### 7.6 Upload
基于 `react-dropzone`：
- `Upload`（点击/拖拽）
- props：`accept`, `multiple`, `maxSize`, `onChange(files)`, `disabled`, `loading`
- 预览：图片缩略图（可选）

### 7.7 Tree / Cascader
Alpha 设计：
- Tree：基础展开/折叠、单选/多选、键盘上下/左右导航、可搜索（可选）
- Cascader：Popper 里多列选择，支持 `options`, `value/onChange`, `disabled`, `size`, `status`
- 实现建议：先做 headless 状态机 + 可组合渲染；后续再扩展虚拟滚动/异步加载

---

## 8. 文档与示例（Storybook）

### 8.1 Story 组织
- `Primitives/*`
- `Inputs/*`
- `Overlays/*`
- `Data Display/*`
- `Form/*`

每个组件至少：
- `Basic`
- `Variants`
- `States`（disabled/loading/invalid）
- `Controlled vs Uncontrolled`（如适用）

### 8.2 文档必须包含
- 什么时候用它 / 不适用场景
- API 表格（props）
- a11y 注意点
- 与 Token/Theme 的关系（dark mode 说明）

---

## 9. 测试策略

### 9.1 单元测试（Vitest + Testing Library）
优先覆盖：
- 输入类：受控/非受控、disabled、invalid
- 弹层类：open/close、Esc、回焦（Radix 已做，但我们要保证集成正确）
- Dropdown/Select：键盘选择与 onChange
- Toast：触发显示、关闭

### 9.2 可访问性测试
- 在关键组件测试中加入基本 aria 断言（role/label）
- 后续可引入 `axe-core` 做自动化扫描（Alpha 可选）

---

## 10. 打包体积优化策略
- 避免“一次性导入所有组件”的入口副作用
- 每个组件文件保持边界清晰，使用具名导出
- 依赖按需引入（例如 icon 库按需导入）
- Storybook 资源与生产包区分（docs 与 assets 清晰标注）

---

## 11. 发布 Alpha 计划

建议版本节奏：
- `0.1.0-alpha.1`：补齐基础 primitives + inputs + overlays（不含 Tree/Cascader 或仅最小实现）
- `0.1.0-alpha.2`：补齐 Table/DatePicker/Upload
- `0.1.0-alpha.3`：补齐 Tree/Cascader 最小可用
- `0.1.0`：收敛 API、补齐 a11y/测试、文档完善

发布物：
- npm 包（如要发布到 npm，需确认包名与 scope）
- GitHub Pages Storybook（已在用）
- CHANGELOG（按 conventional commits 生成或手写）

---

## 12. 迁移与去模板/去侵权
1. Token 前缀从 `aivent` 全量迁移到 `banli`（并清理文案/示例）
2. Demo 素材若来源不明确，统一标注“演示资源”，生产使用需替换为自有素材
3. README/Story 文案避免出现任何模板品牌或误导性描述

---

## 13. 未决问题（需要你确认）
1. npm 包名：`banli-ui` 还是 `@cn111/banli-ui`（建议带 scope）
2. Icon 方案：`lucide-react` 还是自建 SVG sprite
3. Tree/Cascader 的 Alpha 最小能力边界（是否必须支持搜索/异步加载）

