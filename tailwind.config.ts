import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        aivent: {
          bg: '#050816',
          panel: '#0b1024',
          primary: '#7c3aed',
          secondary: '#22d3ee',
          text: 'rgba(255,255,255,0.86)',
          muted: 'rgba(255,255,255,0.65)',
          border: 'rgba(255,255,255,0.12)',
        },
      },
      maxWidth: { content: '1240px' },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,58,237,0.25), 0 10px 30px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      transitionDuration: {
        fast: 'var(--aivent-motion-duration-fast)',
        base: 'var(--aivent-motion-duration)',
        slow: 'var(--aivent-motion-duration-slow)',
      },
      transitionTimingFunction: {
        'aivent-out': 'var(--aivent-motion-ease-out)',
        'aivent-in': 'var(--aivent-motion-ease-in)',
      },
    },
  },
  plugins: [],
} satisfies Config
