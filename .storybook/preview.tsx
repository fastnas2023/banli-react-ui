import type { Preview } from '@storybook/react-vite'
import * as React from 'react'
import '../src/styles/globals.css'
import { AiventMotionProvider } from '../src/motion/provider'
import { IconSprite } from '../src/components/primitives/IconSprite'

const preview: Preview = {
  decorators: [
    (Story) => {
      React.useEffect(() => {
        // Keep existing visual style as default. Stories can override if needed.
        document.documentElement.classList.add('dark')
      }, [])
      return (
        <AiventMotionProvider motion="auto">
          <IconSprite />
          <Story />
        </AiventMotionProvider>
      )
    },
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
