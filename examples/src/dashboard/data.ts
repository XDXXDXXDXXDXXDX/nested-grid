import type { GridNode } from '@nested-grid/core'

export interface WidgetData {
  title: string
  value: string
  trend: string
  color: string
}

export const nodes: GridNode<WidgetData>[] = [
  {
    id: 'dashboard',
    columns: 4,
    virtual: true,
    children: [
      {
        id: 'revenue',
        data: { title: 'Revenue', value: '$45.2K', trend: '+12.5%', color: '#10b981' },
        span: 2,
        rowSpan: 2,
      },
      {
        id: 'users',
        data: { title: 'Active Users', value: '2,847', trend: '+8.3%', color: '#3b82f6' },
        span: 2,
      },
      {
        id: 'conversion',
        data: { title: 'Conversion', value: '3.24%', trend: '+2.1%', color: '#8b5cf6' },
        span: 1,
      },
      {
        id: 'churn',
        data: { title: 'Churn Rate', value: '1.8%', trend: '-0.3%', color: '#f59e0b' },
        span: 1,
      },
      {
        id: 'sessions',
        data: { title: 'Sessions', value: '12.4K', trend: '+18.7%', color: '#06b6d4' },
        span: 2,
      },
      {
        id: 'bounce',
        data: { title: 'Bounce Rate', value: '42.1%', trend: '-5.2%', color: '#ef4444' },
        span: 1,
      },
      {
        id: 'duration',
        data: { title: 'Avg Duration', value: '4m 32s', trend: '+1.8%', color: '#f97316' },
        span: 1,
      },
    ],
  },
]
