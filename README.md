# AIvent React 组件库（Storybook + Tailwind）

把 AIvent HTML 模板重构为 **React + TypeScript 组件库**，并使用 **Storybook** 展示；样式使用 **Tailwind** 重写；静态资源（图片/字体）本地化以支持离线运行。

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
