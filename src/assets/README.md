# 资源说明（assets）

本目录存放 Storybook 演示与组件默认展示所需的静态资源：

- `images/`：组件库演示用的图片素材（logo、背景、news 等）
- `fonts/Manrope/`：本地 Manrope 字体文件（离线可用）

说明：
- 本目录资源仅用于组件库演示与 UI 预览。
- 若用于生产项目，请替换为你拥有版权/授权的素材，以避免侵权风险。

字体策略：
- 组件库默认使用本地字体（离线优先）。
- 如宿主项目希望使用 Google Fonts（CDN），可在宿主页面额外添加：
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
  ```
