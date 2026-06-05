export default {
  '*.{ts,tsx,js,jsx,json,md,css}': (files) => {
    const filtered = files.filter((f) => !f.startsWith('examples/dist/'))
    if (filtered.length === 0) return []
    return [
      `biome check --write --no-errors-on-unmatched ${filtered.join(' ')}`,
      `biome format --write --no-errors-on-unmatched ${filtered.join(' ')}`,
    ]
  },
}
