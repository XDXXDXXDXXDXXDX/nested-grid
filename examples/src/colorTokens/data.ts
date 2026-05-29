import type { GridNode } from '@nested-grid/core'

export interface ColorData {
  name: string
  hex: string
  textColor: string
}

const swatch = (name: string, hex: string): GridNode<ColorData> => ({
  id: name.toLowerCase().replace(/\s+/g, '-'),
  data: { name, hex, textColor: isLight(hex) ? '#1a1a2e' : '#ffffff' },
})

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 160
}

export const nodes: GridNode<ColorData>[] = [
  {
    id: 'palette',
    columns: 3,
    virtual: true,
    children: [
      {
        id: 'primary',
        data: { name: 'Primary', hex: '#6366f1', textColor: '#ffffff' },
        columns: 3,
        children: [
          swatch('Primary 50', '#eef2ff'),
          swatch('Primary 100', '#e0e7ff'),
          swatch('Primary 200', '#c7d2fe'),
          swatch('Primary 300', '#a5b4fc'),
          swatch('Primary 400', '#818cf8'),
          swatch('Primary 500', '#6366f1'),
          swatch('Primary 600', '#4f46e5'),
          swatch('Primary 700', '#4338ca'),
          swatch('Primary 800', '#3730a3'),
          swatch('Primary 900', '#312e81'),
        ],
      },
      {
        id: 'neutral',
        data: { name: 'Neutral', hex: '#6b7280', textColor: '#ffffff' },
        columns: 3,
        children: [
          swatch('Neutral 50', '#f9fafb'),
          swatch('Neutral 100', '#f3f4f6'),
          swatch('Neutral 200', '#e5e7eb'),
          swatch('Neutral 300', '#d1d5db'),
          swatch('Neutral 400', '#9ca3af'),
          swatch('Neutral 500', '#6b7280'),
          swatch('Neutral 600', '#4b5563'),
          swatch('Neutral 700', '#374151'),
          swatch('Neutral 800', '#1f2937'),
          swatch('Neutral 900', '#111827'),
        ],
      },
      {
        id: 'accent',
        data: { name: 'Accent', hex: '#ec4899', textColor: '#ffffff' },
        columns: 3,
        children: [
          swatch('Rose', '#f43f5e'),
          swatch('Pink', '#ec4899'),
          swatch('Fuchsia', '#d946ef'),
          swatch('Violet', '#8b5cf6'),
          swatch('Amber', '#f59e0b'),
          swatch('Orange', '#f97316'),
          swatch('Teal', '#14b8a6'),
          swatch('Cyan', '#06b6d4'),
          swatch('Lime', '#84cc16'),
          swatch('Emerald', '#10b981'),
        ],
      },
      {
        id: 'semantic',
        data: { name: 'Semantic', hex: '#ef4444', textColor: '#ffffff' },
        columns: 3,
        children: [
          swatch('Success', '#10b981'),
          swatch('Warning', '#f59e0b'),
          swatch('Error', '#ef4444'),
          swatch('Info', '#3b82f6'),
          swatch('Help', '#8b5cf6'),
        ],
      },
    ],
  },
]
