import * as React from 'react'
import { cn } from '../../lib/cn'
import { useInView } from '../../hooks/useInView'
import { useAiventMotion } from '../../motion/provider'

export function Section({
  className,
  reveal = true,
  ...props
}: React.HTMLAttributes<HTMLElement> & { reveal?: boolean }) {
  const motion = useAiventMotion()
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.15 })

  return (
    <section
      ref={ref}
      className={cn(
        'py-16 md:py-24',
        reveal && motion.enabled
          ? cn(
              'transition duration-slow ease-aivent-out will-change-transform will-change-opacity',
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            )
          : '',
        className
      )}
      {...props}
    />
  )
}
