import type { GridNode } from '@nested-grid/core'
import type { CardTheme } from '@nested-grid/react-cards'

export interface ArchitectureData {
  title: string
  content?: string
}

export const blue: CardTheme = {
  groupBorder: '1px solid #bfdbfe',
  groupBgEven: '#eff6ff',
  groupBgOdd: '#dbeafe',
  groupTitleColor: '#1e40af',
  itemBorder: '1px solid #bfdbfe',
  itemHoverBg: '#3b82f6',
  itemHoverColor: '#fff',
  itemTitleFontSize: '14px',
}

export const green: CardTheme = {
  groupBorder: '1px solid #bbf7d0',
  groupBgEven: '#f0fdf4',
  groupBgOdd: '#dcfce7',
  groupTitleColor: '#166534',
  itemBorder: '1px solid #bbf7d0',
  itemHoverBg: '#10b981',
  itemHoverColor: '#fff',
  itemTitleFontSize: '14px',
}

export const purple: CardTheme = {
  groupBorder: '1px solid #ddd6fe',
  groupBg: '#f5f3ff',
  groupTitleColor: '#5b21b6',
  itemBorder: 'none',
  itemHoverBg: '#8b5cf6',
  itemHoverColor: '#fff',
  itemTitleFontSize: '14px',
}

export const nodes: GridNode<ArchitectureData>[] = [
  {
    id: 'arch',
    columns: '1fr 150px',
    virtual: true,
    children: [
      {
        id: 'client',
        data: { title: 'Client Tier' },
        children: [
          {
            id: 'channels',
            data: { title: 'Delivery Channels' },
            columns: 2,
            children: [
              {
                id: 'web',
                data: { title: 'Web Frontend' },
                children: [
                  { id: 'portal', data: { title: 'Customer Portal', content: 'Next.js · SSR' } },
                  { id: 'admin', data: { title: 'Admin Panel', content: 'React · SPA' } },
                  {
                    id: 'lib',
                    data: { title: 'Component Library', content: 'Storybook · Tailwind' },
                  },
                ],
              },
              {
                id: 'mobile',
                data: { title: 'Mobile Apps' },
                children: [
                  { id: 'ios', data: { title: 'iOS App', content: 'SwiftUI · Core Data' } },
                  { id: 'android', data: { title: 'Android App', content: 'Jetpack Compose' } },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'infra',
        data: { title: 'Data & Infra' },
        rowSpan: 2,
        children: [
          { id: 'redis', data: { title: 'Redis' } },
          { id: 'mq', data: { title: 'RabbitMQ' } },
          { id: 's3', data: { title: 'S3 Storage' } },
        ],
      },
      {
        id: 'service',
        data: { title: 'Service Tier' },
        children: [
          { id: 'gateway', data: { title: 'API Gateway', content: 'Kong · Rate Limiting · Auth' } },
          {
            id: 'business',
            data: { title: 'Business Services' },
            columns: 2,
            children: [
              {
                id: 'core',
                data: { title: 'Core' },
                columns: 2,
                children: [
                  { id: 'auth', data: { title: 'Auth Service', content: 'JWT · OAuth2 · RBAC' } },
                  {
                    id: 'user',
                    data: { title: 'User Service', content: 'Go · gRPC · PostgreSQL' },
                  },
                ],
              },
              {
                id: 'commerce',
                data: { title: 'Commerce' },
                children: [
                  { id: 'order', data: { title: 'Order Service', content: 'Node.js · MongoDB' } },
                  { id: 'payment', data: { title: 'Payment', content: 'Stripe · PayPal' } },
                ],
              },
            ],
          },
          {
            id: 'platform',
            data: { title: 'Platform' },
            columns: 3,
            children: [
              { id: 'notif', data: { title: 'Notification', content: 'FCM · APNs' } },
              { id: 'search', span: 2, data: { title: 'Search', content: 'Elasticsearch' } },
              { id: 'analytics', span: 2, data: { title: 'Analytics', content: 'ClickHouse' } },
              { id: 'logging', data: { title: 'Logging', content: 'OpenTelemetry' } },
            ],
          },
        ],
      },
    ],
  },
]
