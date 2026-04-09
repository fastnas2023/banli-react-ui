# 迁移指南（Alpha → 1.0）

本指南用于把 BanLi UI 从早期 alpha 的“可用”推进到 1.0 的“可长期维护”。当前仓库版本：`0.1.0-alpha.1`（持续迭代中）。

---

## 1) Alpha 版本的约束（你需要知道的真相）

### 组件样式依赖 Tailwind

组件使用 Tailwind className 组合样式，因此业务项目必须：

- 启用 Tailwind
- 在 `tailwind.config.ts` 的 `content` 中包含 `banli-ui` 的产物目录（建议扫描 `dist`）

### 主题 token 需要显式引入

```ts
import 'banli-ui/styles.css'
```

### Icon 需要注入 sprite

```tsx
import { IconSprite } from 'banli-ui'
<IconSprite />
```

---

## 2) 已发生的 Breaking Changes（相对更早 alpha）

### A. `react/react-dom` 改为 peerDependencies

**影响：** 使用方需要自己安装 `react` / `react-dom`（>= 18）。

### B. Icon 默认不再依赖宿主 `public/icons.svg`

**做法：**
- 默认使用 `<IconSprite />`（内联 symbols）
- 如仍想使用外部 sprite，可传 `spriteUrl="/icons.svg"`

### C. npm 包入口仅导出组件库 surface

**影响：** demo 用的 pages/sections 不再从 `banli-ui` 入口导出（减包体积 & 避免携带媒体资源）。

---

## 3) 走向 1.0 的路线图（建议）

### 3.1 API 稳定性（目标：1.0）

- 对外 API 统一：`value / defaultValue / onChange`（避免同类组件出现 `onValueChange` 与 `onChange` 混用）
- `disabled/loading/invalid/status` 的语义统一，减少“同名不同义”
- 减少破坏性改动：在 1.0 前完成所有 deprecate → removal

### 3.2 可访问性门禁（目标：1.0）

- 保留并扩展 `jest-axe` smoke（从 top 组件扩到 overlay 与复杂控件）
- 对 Tree/Cascader 等复杂交互持续补足键盘/aria 细节

### 3.3 工程化门禁（目标：1.0）

- CI：test / build / storybook / size-limit 必须全绿
- 体积持续可控（当前已有 size-limit）
- 输出稳定：ESM/CJS/DTS + `styles.css`

---

## 4) 使用方迁移 checklist（建议复制到你的项目里）

1. 安装并锁定版本：
   - `npm i banli-ui`
2. 确保 React 版本满足 peerDependencies
3. `tailwind.config.ts` 增加 content 扫描 `banli-ui/dist`
4. 入口引入：
   - `import 'banli-ui/styles.css'`
   - `<IconSprite />`
5. 若使用深色模式：
   - `<html class="dark">`

