export type Key = string | number

export function toColumns(value: number | string): string {
  return typeof value === 'number' ? `repeat(${value}, minmax(0, 1fr))` : value
}
