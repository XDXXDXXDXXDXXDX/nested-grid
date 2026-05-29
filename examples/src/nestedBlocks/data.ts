import type { GridNode } from '@nested-grid/core'

export interface BlockData {
  color: string
}

/*
 * Top level:  red, blue, green, purple   (4 blocks, 6-col grid)
 * Below that: coral, teal, gold, lavender (exactly 4 colors)
 * Leaves fade to paler shades.
 */
export const nodes: GridNode<BlockData>[] = [
  {
    id: 'root',
    columns: 6,
    data: { color: '#1a1c2e' },
    gridContainerStyle: { gridAutoRows: '150px' },
    children: [
      /* ---- red ---- */
      {
        id: 'red',
        span: 3,
        rowSpan: 2,
        columns: 3,
        data: { color: '#e85d75' },
        children: [
          {
            id: 'r-coral',
            span: 2,
            columns: 2,
            data: { color: '#f08080' },
            children: [
              { id: 'r-c1', span: 2, data: { color: '#f5b5b5' } },
              { id: 'r-c2', data: { color: '#f5b5b5' } },
            ],
          },
          {
            id: 'r-teal',
            columns: 2,
            data: { color: '#64d0c3' },
            children: [
              { id: 'r-t1', data: { color: '#a0e4dc' } },
              { id: 'r-t2', data: { color: '#a0e4dc' } },
            ],
          },
          {
            id: 'r-gold',
            span: 3,
            data: { color: '#f9c26e' },
          },
        ],
      },

      /* ---- blue ---- */
      {
        id: 'blue',
        span: 3,
        rowSpan: 2,
        columns: 2,
        data: { color: '#4a90d9' },
        children: [
          {
            id: 'b-lavender',
            rowSpan: 2,
            columns: 2,
            data: { color: '#b8b8f0' },
            children: [
              { id: 'b-l1', data: { color: '#d4d4f6' } },
              { id: 'b-l2', data: { color: '#d4d4f6' } },
            ],
          },
          {
            id: 'b-coral',
            columns: 2,
            data: { color: '#f08080' },
            children: [
              { id: 'b-c1', data: { color: '#f5b5b5' } },
              {
                id: 'b-c2',
                data: { color: '#f08080' },
                children: [
                  { id: 'b-c2a', data: { color: '#fad4d4' } },
                  { id: 'b-c2b', data: { color: '#fad4d4' } },
                ],
              },
            ],
          },
          {
            id: 'b-gold',
            data: { color: '#f9c26e' },
          },
        ],
      },

      /* ---- green ---- */
      {
        id: 'green',
        span: 3,
        columns: 3,
        data: { color: '#4caf7d' },
        children: [
          {
            id: 'g-teal',
            span: 2,
            columns: 2,
            data: { color: '#64d0c3' },
            children: [
              { id: 'g-t1', data: { color: '#a0e4dc' } },
              { id: 'g-t2', data: { color: '#a0e4dc' } },
            ],
          },
          {
            id: 'g-gold',
            columns: 2,
            data: { color: '#f9c26e' },
            children: [
              { id: 'g-g1', data: { color: '#fbd49f' } },
              { id: 'g-g2', data: { color: '#fbd49f' } },
            ],
          },
          {
            id: 'g-lavender',
            span: 2,
            data: { color: '#b8b8f0' },
          },
        ],
      },

      /* ---- purple ---- */
      {
        id: 'purple',
        span: 3,
        columns: 4,
        data: { color: '#8b5cf6' },
        children: [
          {
            id: 'p-lavender',
            columns: 2,
            span: 3,
            data: { color: '#b8b8f0' },
            children: [
              { id: 'p-l1', data: { color: '#d4d4f6' } },
              {
                id: 'p-l2',
                data: { color: '#b8b8f0' },
                children: [{ id: 'p-l2a', data: { color: '#e8e8fa' } }],
              },
            ],
          },
          {
            id: 'p-coral',
            data: { color: '#f08080' },
            children: [
              { id: 'p-c1', data: { color: '#f5b5b5' } },
              { id: 'p-c2', data: { color: '#f5b5b5' } },
            ],
          },
        ],
      },
    ],
  },
]
