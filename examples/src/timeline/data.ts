import type { CardGridNode } from '@nested-grid/react-cards'

export interface EventData {
  date: string
  icon: string
}

export const nodes: CardGridNode<EventData>[] = [
  {
    id: 'timeline',
    columns: 1,
    children: [
      {
        id: '2024',
        title: '2024',
        data: { date: '', icon: '📅' },
        children: [
          {
            id: 'e1',
            title: 'Founded the Company',
            content: 'Secured seed funding and established the founding team of five engineers.',
            data: { date: 'Jan 15', icon: '🚀' },
          },
          {
            id: 'e2',
            title: 'Beta Launch',
            content:
              'Released the first beta to 500 early-access users. Collected invaluable feedback.',
            data: { date: 'Apr 08', icon: '🧪' },
          },
          {
            id: 'e3',
            title: 'Series A',
            content:
              'Raised $12M led by Accel. Team grew to 30 people across engineering and design.',
            data: { date: 'Sep 22', icon: '💰' },
          },
        ],
      },
      {
        id: '2025',
        title: '2025',
        data: { date: '', icon: '📅' },
        children: [
          {
            id: 'e4',
            title: 'Public Launch',
            content:
              'Launched v1.0 on Product Hunt. Reached #1 Product of the Day with 2,400 upvotes.',
            data: { date: 'Feb 03', icon: '🎉' },
          },
          {
            id: 'e5',
            title: '10K Customers',
            content: 'Crossed 10,000 paying customers across 42 countries. NPS score of 72.',
            data: { date: 'Jun 18', icon: '🏆' },
          },
          {
            id: 'e6',
            title: 'Mobile Apps',
            content: 'Shipped native iOS and Android apps built with SwiftUI and Jetpack Compose.',
            data: { date: 'Oct 30', icon: '📱' },
          },
        ],
      },
      {
        id: '2026',
        title: '2026',
        data: { date: '', icon: '📅' },
        children: [
          {
            id: 'e7',
            title: 'Enterprise Plan',
            content:
              'Launched SSO, RBAC, audit logs, and dedicated support for enterprise customers.',
            data: { date: 'Mar 12', icon: '🏢' },
          },
          {
            id: 'e8',
            title: 'AI Copilot',
            content:
              'Introduced AI-powered assistant for automated workflows and smart suggestions.',
            data: { date: 'Jul 01', icon: '🤖' },
          },
        ],
      },
    ],
  },
]
