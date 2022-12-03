import { defineConfig } from 'vitest/config'
import { alias } from './alias'

export default defineConfig({
  test: {},
  root: '.',
  esbuild: {
    tsconfigRaw: '{}',
  },
  resolve: {
    alias,
  },
})