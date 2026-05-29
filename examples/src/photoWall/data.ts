import type { GridNode } from '@nested-grid/core'

export interface PhotoData {
  src: string
  alt: string
}

const photos = Array.from({ length: 24 }, (_, i) => ({
  id: `p${i + 1}`,
  src: `https://picsum.photos/seed/${i + 100}/${400 + (i % 3) * 100}/${300 + (i % 4) * 80}`,
  alt: `Photo ${i + 1}`,
}))

const largeSet = new Set([0, 6, 12, 18])
const tallSet = new Set([3, 9, 15, 21])

export const nodes: GridNode<PhotoData>[] = [
  {
    id: 'gallery',
    columns: 6,
    virtual: true,
    children: photos.map((photo, i) => ({
      id: photo.id,
      data: photo,
      span: largeSet.has(i) ? 2 : 1,
      rowSpan: tallSet.has(i) ? 2 : 1,
    })),
  },
]
