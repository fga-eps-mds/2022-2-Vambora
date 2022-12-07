import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@modules': r('./src/modules'),
  '@shared': r('./src/shared'),
  '@errors': r('./src/errors'),
}