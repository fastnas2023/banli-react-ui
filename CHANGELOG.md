# Changelog

## 0.1.0-alpha.1

- 组件补齐：IconSprite/Icon、Typography(Text/Title)、Space、Divider、Input、Textarea、Checkbox、RadioGroup、Switch、Select、Tabs、Form、Table、DatePicker、Upload、Tree（搜索+异步加载）、Cascader（搜索+异步加载）
- 主题：新增 `banli` token 与 `dark` class 模式
- 可访问性：键盘操作、focus-visible、aria 基线；弹层类基于 Radix
- 工程：新增 `build:lib`（tsup）与 `styles.css` 产物

### Breaking changes（相对早期 alpha）
- `react` / `react-dom` 改为 **peerDependencies**（使用方需要自行安装）
- Icon 默认使用内联 `<IconSprite />` 提供的 symbols；如仍想引用外部 sprite，可用 `spriteUrl="/icons.svg"`
- npm 包入口仅导出组件库 surface（不再导出演示 pages/sections）
