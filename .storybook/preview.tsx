import type { Preview } from '@storybook/react-vite'
import * as React from 'react'
import '../src/styles/globals.css'
import { AiventMotionProvider } from '../src/motion/provider'

const preview: Preview = {
  decorators: [
    (Story) => (
      <AiventMotionProvider motion="auto">
        <Story />
      </AiventMotionProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview

