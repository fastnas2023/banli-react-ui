# banli-ui（Alpha）

BanLi UI：**React + TypeScript** 组件库示例，使用 **Storybook** 展示，样式基于 **Tailwind**；静态资源（图片/字体）本地化以支持离线运行。

作者：Jason Zhang  
官网：https://www.cn111.net

## 文档

- [BanLi UI 文档入口](./docs/banli-ui/README.md)

## 安装（Alpha）

> 本仓库同时包含 Storybook 演示站点与组件库源码。若你通过 npm 使用：

```bash
npm i banli-ui
```

在应用入口注入一次（推荐放在 App 根部）：

```tsx
import 'banli-ui/styles.css'
import { IconSprite } from 'banli-ui'

export function App() {
  return (
    <>
      <IconSprite />
      {/* your app */}
    </>
  )
}
```

## 运行

安装依赖：
```bash
npm install
```

启动 Storybook：
```bash
npm run storybook
```

运行测试：
```bash
npm run test:run
```

构建静态 Storybook：
```bash
npm run build-storybook
```

## 目录结构（简要）
- `src/components/primitives`：Button、Container、Section、Badge 等
- `src/components/layout`：Header/Nav/Footer
- `src/components/sections`：Hero、WhyAttend、Speakers、Schedule、Tickets、News、Contact
- `src/components/pages`：Home/Tickets/News/NewsSingle/Contact（页面级组合）
- `src/assets`：图片与字体（离线资源）

## 字体策略（本地优先 + Google Fonts 兼容）
默认使用 `src/assets/fonts/Manrope/Manrope-Variable.woff2`（离线可用）。

如果你的宿主项目希望走 Google Fonts（CDN），在宿主 HTML 额外添加：
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
```
