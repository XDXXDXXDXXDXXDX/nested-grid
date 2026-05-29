import type { GridNode } from '@nested-grid/core'

export interface EventData {
  title: string
  description: string
  date: string
  icon: string
}

export const nodes: GridNode<EventData>[] = [
  {
    id: 'timeline',
    columns: 1,
    children: [
      {
        id: '2024',
        data: { title: '2024', description: '', date: '', icon: '📅' },
        children: [
          {
            id: 'e1',
            data: {
              title: 'Founded the Company',
              description:
                'Secured seed funding and established the founding team of five engineers.',
              date: 'Jan 15',
              icon: '🚀',
            },
          },
          {
            id: 'e2',
            data: {
              title: 'Beta Launch',
              description:
                'Released the first beta to 500 early-access users. Collected invaluable feedback.',
              date: 'Apr 08',
              icon: '🧪',
            },
          },
          {
            id: 'e3',
            data: {
              title: 'Series A',
              description:
                'Raised $12M led by Accel. Team grew to 30 people across engineering and design.',
              date: 'Sep 22',
              icon: '💰',
            },
          },
        ],
      },
      {
        id: '2025',
        data: { title: '2025', description: '', date: '', icon: '📅' },
        children: [
          {
            id: 'e4',
            data: {
              title: 'Public Launch',
              description:
                'Launched v1.0 on Product Hunt. Reached #1 Product of the Day with 2,400 upvotes.',
              date: 'Feb 03',
              icon: '🎉',
            },
          },
          {
            id: 'e5',
            data: {
              title: '10K Customers',
              description: 'Crossed 10,000 paying customers across 42 countries. NPS score of 72.',
              date: 'Jun 18',
              icon: '🏆',
            },
          },
          {
            id: 'e6',
            data: {
              title: 'Mobile Apps',
              description:
                'Shipped native iOS and Android apps built with SwiftUI and Jetpack Compose.',
              date: 'Oct 30',
              icon: '📱',
            },
          },
        ],
      },
      {
        id: '2026',
        data: { title: '2026', description: '', date: '', icon: '📅' },
        children: [
          {
            id: 'e7',
            data: {
              title: 'Enterprise Plan',
              description:
                'Launched SSO, RBAC, audit logs, and dedicated support for enterprise customers.',
              date: 'Mar 12',
              icon: '🏢',
            },
          },
          {
            id: 'e8',
            data: {
              title: 'AI Copilot',
              description:
                'Introduced AI-powered assistant for automated workflows and smart suggestions.',
              date: 'Jul 01',
              icon: '🤖',
            },
          },
        ],
      },
    ],
  },
]
