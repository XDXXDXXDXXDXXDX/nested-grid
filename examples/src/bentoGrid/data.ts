import type { GridNode } from '@nested-grid/core'

export interface FeatureData {
  icon: string
  title: string
  description: string
  gradient: string
}

export const nodes: GridNode<FeatureData>[] = [
  {
    id: 'bento',
    columns: 4,
    virtual: true,
    children: [
      {
        id: 'collab',
        data: {
          icon: '👥',
          title: 'Real-time Collaboration',
          description:
            'Edit documents together with your team in real time. See cursors, comments, and changes as they happen.',
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
        span: 2,
        rowSpan: 2,
      },
      {
        id: 'analytics',
        data: {
          icon: '📊',
          title: 'Advanced Analytics',
          description: 'Deep insights with custom dashboards and AI-powered recommendations.',
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        },
        span: 1,
      },
      {
        id: 'security',
        data: {
          icon: '🔐',
          title: 'Enterprise Security',
          description: 'SOC 2 Type II compliant with end-to-end encryption at rest and in transit.',
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        },
        span: 1,
      },
      {
        id: 'api',
        data: {
          icon: '⚡',
          title: 'API First',
          description: 'REST and GraphQL APIs with 99.99% uptime SLA guaranteed.',
          gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        },
        span: 1,
      },
      {
        id: 'integrations',
        data: {
          icon: '🔌',
          title: '200+ Integrations',
          description: 'Connect with your favorite tools — Slack, Jira, GitHub, and more.',
          gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        },
        span: 2,
      },
      {
        id: 'mobile',
        data: {
          icon: '📱',
          title: 'Mobile First',
          description: 'Native iOS and Android apps with offline support.',
          gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        },
        span: 1,
      },
    ],
  },
]
