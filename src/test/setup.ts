import '@testing-library/jest-dom/vitest'

// Radix UI (Toast) expects Pointer Events APIs which are missing in jsdom.
// Provide minimal polyfills to avoid unhandled errors during tests.
if (typeof Element !== 'undefined') {
  const proto = Element.prototype as unknown as {
    hasPointerCapture?: (pointerId: number) => boolean
    setPointerCapture?: (pointerId: number) => void
    releasePointerCapture?: (pointerId: number) => void
  }
  proto.hasPointerCapture ??= () => false
  proto.setPointerCapture ??= () => {}
  proto.releasePointerCapture ??= () => {}
}
