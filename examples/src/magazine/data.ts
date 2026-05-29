import type { GridNode } from '@nested-grid/core'

export interface ArticleData {
  title: string
  category: string
  image: string
}

const images = {
  hero: 'https://picsum.photos/seed/mag1/800/600',
  a: 'https://picsum.photos/seed/mag2/400/300',
  b: 'https://picsum.photos/seed/mag3/400/600',
  c: 'https://picsum.photos/seed/mag4/400/300',
  d: 'https://picsum.photos/seed/mag5/800/400',
  e: 'https://picsum.photos/seed/mag6/400/300',
}

export const nodes: GridNode<ArticleData>[] = [
  {
    id: 'magazine',
    columns: 4,
    virtual: true,
    children: [
      {
        id: 'hero',
        data: { title: 'The Future of Web Layout', category: 'Design', image: images.hero },
        span: 2,
        rowSpan: 2,
      },
      {
        id: 'css-grid',
        data: { title: 'CSS Grid: Beyond the Basics', category: 'Frontend', image: images.a },
        span: 1,
      },
      {
        id: 'a11y',
        data: { title: 'Accessibility-First Design', category: 'UX', image: images.b },
        span: 1,
        rowSpan: 2,
      },
      {
        id: 'perf',
        data: { title: 'Web Performance in 2026', category: 'Performance', image: images.c },
        span: 1,
      },
      {
        id: 'tokens',
        data: { title: 'Design Tokens at Scale', category: 'Design', image: images.d },
        span: 2,
      },
      {
        id: 'typescript',
        data: {
          title: 'TypeScript Patterns for Large Apps',
          category: 'Engineering',
          image: images.e,
        },
        span: 1,
      },
    ],
  },
]
