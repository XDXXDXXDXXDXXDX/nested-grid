import type { GridNode } from '@nested-grid/core'

export interface ProductData {
  title?: string
  content?: string
  tag?: string
  featured?: boolean
}

export const nodes: GridNode<ProductData>[] = [
  {
    id: 'root',
    virtual: true,
    children: [
      {
        id: 'mens',
        data: { title: "Men's Collection" },
        columns: 3,
        children: [
          {
            id: 'tops',
            data: { title: 'Tops' },
            columns: 2,
            span: 2,
            children: [
              {
                id: 'shirts',
                data: { title: 'Shirts' },
                children: [
                  {
                    id: 'oxford',
                    data: {
                      title: 'Oxford Shirt',
                      content: 'Classic-fit, 100% cotton.',
                      tag: 'Best Seller',
                    },
                  },
                  {
                    id: 'linen',
                    data: {
                      title: 'Linen Shirt',
                      content: 'Relaxed-fit, breathable linen.',
                      tag: 'New',
                    },
                  },
                ],
              },
              {
                id: 'outerwear',
                data: { title: 'Outerwear' },
                children: [
                  {
                    id: 'bomber',
                    data: {
                      title: 'Bomber Jacket',
                      content: 'Lightweight nylon, ribbed trim.',
                      featured: true,
                    },
                  },
                  {
                    id: 'trench',
                    data: {
                      title: 'Trench Coat',
                      content: 'Water-resistant cotton gabardine.',
                      tag: 'Sale',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'accessories',
            data: { title: 'Accessories' },
            children: [
              {
                id: 'belt',
                data: { title: 'Leather Belt', content: 'Full-grain Italian leather.', tag: 'New' },
              },
              {
                id: 'watch',
                data: {
                  title: 'Chronograph Watch',
                  content: 'Sapphire crystal, 42mm case.',
                  featured: true,
                },
              },
            ],
          },
        ],
      },
      {
        id: 'womens',
        data: { title: "Women's Collection" },
        columns: 2,
        children: [
          {
            id: 'dresses',
            data: { title: 'Dresses' },
            children: [
              {
                id: 'midi',
                data: {
                  title: 'Midi Dress',
                  content: 'A-line silhouette, floral print.',
                  tag: 'Best Seller',
                },
              },
              {
                id: 'maxi',
                data: { title: 'Maxi Dress', content: 'Flowy rayon, adjustable waist.' },
              },
              {
                id: 'wrap',
                data: {
                  title: 'Wrap Dress',
                  content: 'Stretch jersey, true to size.',
                  tag: 'Sale',
                },
              },
            ],
          },
          {
            id: 'bags',
            data: { title: 'Bags' },
            children: [
              {
                id: 'tote',
                data: {
                  title: 'Canvas Tote',
                  content: 'Reinforced handles, interior pocket.',
                  featured: true,
                },
              },
              {
                id: 'crossbody',
                data: {
                  title: 'Crossbody Bag',
                  content: 'Adjustable strap, pebbled leather.',
                  tag: 'New',
                },
              },
            ],
          },
        ],
      },
      {
        id: 'kids',
        data: { title: "Kids' Collection" },
        columns: 6,
        children: [
          {
            id: 'onesie',
            data: {
              title: 'Cotton Onesie',
              content: 'Soft, breathable fabric.',
              tag: 'Best Seller',
            },
            span: 2,
          },
          {
            id: 'romper',
            data: { title: 'Denim Romper', content: 'Durable denim, adjustable straps.' },
            span: 2,
          },
          {
            id: 'sneakers',
            data: { title: 'Kids Sneakers', content: 'Velcro straps, non-slip sole.' },
            span: 2,
          },
          {
            id: 'backpack',
            data: { title: 'Mini Backpack', content: 'Lightweight, multi compartments.' },
            span: 3,
          },
          {
            id: 'sweater',
            data: { title: 'Knit Sweater', content: 'Cozy acrylic blend, ribbed cuffs.' },
            span: 3,
          },
        ],
      },
    ],
  },
]

export const tagColors: Record<string, { bg: string; text: string }> = {
  'Best Seller': { bg: '#fef3c7', text: '#92400e' },
  New: { bg: '#dbeafe', text: '#1e40af' },
  Sale: { bg: '#fce7f3', text: '#9d174d' },
}
