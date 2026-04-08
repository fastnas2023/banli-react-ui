import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/react-vite",
  async viteFinal(cfg) {
    // GitHub Pages 等子路径部署需要设置 base，否则静态资源路径会 404。
    // 本地 dev 不受影响；构建时可通过环境变量覆盖。
    const base = process.env.STORYBOOK_BASE_PATH ?? '/'
    return { ...cfg, base }
  }
};
export default config;
