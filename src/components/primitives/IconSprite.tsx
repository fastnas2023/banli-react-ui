import * as React from 'react'

/**
 * IconSprite
 * - 将常用图标以 `<symbol>` 形式注入到页面中，供 `<Icon name="..."/>` 通过 `#id` 引用
 * - 作为组件库发布时，避免依赖宿主应用的 `/public/icons.svg`
 *
 * 约定：
 * - symbol id 直接使用短名（例如 `check` / `close`）
 * - stroke 使用 `currentColor`，由 `<Icon />` 或外层样式控制颜色
 */
export function IconSprite() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
    >
      <symbol id="check" viewBox="0 0 24 24">
        <path
          d="M20 6 9 17l-5-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="close" viewBox="0 0 24 24">
        <path
          d="M18 6 6 18M6 6l12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="chevron-down" viewBox="0 0 24 24">
        <path
          d="m6 9 6 6 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="chevron-right" viewBox="0 0 24 24">
        <path
          d="m9 6 6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="search" viewBox="0 0 24 24">
        <path
          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="loader" viewBox="0 0 24 24">
        <path
          d="M21 12a9 9 0 1 1-6.22-8.55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  )
}

