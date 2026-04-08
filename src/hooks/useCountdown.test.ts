import { describe, expect, it } from 'vitest'
import { getTimeParts } from './useCountdown'

describe('getTimeParts', () => {
  it('splits ms into d/h/m/s', () => {
    const parts = getTimeParts(1000 * (1 + 60 + 3600 + 86400)) // 1d 1h 1m 1s
    expect(parts).toEqual({ days: 1, hours: 1, minutes: 1, seconds: 1 })
  })
})

