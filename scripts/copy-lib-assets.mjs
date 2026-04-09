import { mkdir, copyFile } from 'node:fs/promises'
import { join } from 'node:path'

const dist = new URL('../dist/', import.meta.url)
await mkdir(dist, { recursive: true })

await copyFile(new URL('../src/styles/banli.css', import.meta.url), new URL('./styles.css', dist))

console.log('Copied styles.css')

