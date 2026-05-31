import type { CardGridNode, CardTheme } from '@nested-grid/react-cards'

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

export const nodes: CardGridNode[] = [
  {
    id: 'arch',
    columns: '1fr 150px',
    virtual: true,
    children: [
      {
        id: 'client',
        title: 'Client Tier',
        children: [
          {
            id: 'channels',
            title: 'Delivery Channels',
            columns: 2,
            children: [
              {
                id: 'web',
                title: 'Web Frontend',
                children: [
                  { id: 'portal', title: 'Customer Portal', content: 'Next.js · SSR' },
                  { id: 'admin', title: 'Admin Panel', content: 'React · SPA' },
                  { id: 'lib', title: 'Component Library', content: 'Storybook · Tailwind' },
                ],
              },
              {
                id: 'mobile',
                title: 'Mobile Apps',
                children: [
                  { id: 'ios', title: 'iOS App', content: 'SwiftUI · Core Data' },
                  { id: 'android', title: 'Android App', content: 'Jetpack Compose' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'infra',
        title: 'Data & Infra',
        rowSpan: 2,
        children: [
          { id: 'redis', title: 'Redis' },
          { id: 'mq', title: 'RabbitMQ' },
          { id: 's3', title: 'S3 Storage' },
        ],
      },
      {
        id: 'service',
        title: 'Service Tier',
        children: [
          { id: 'gateway', title: 'API Gateway', content: 'Kong · Rate Limiting · Auth' },
          {
            id: 'business',
            title: 'Business Services',
            columns: 2,
            children: [
              {
                id: 'core',
                title: 'Core',
                columns: 2,
                children: [
                  { id: 'auth', title: 'Auth Service', content: 'JWT · OAuth2 · RBAC' },
                  { id: 'user', title: 'User Service', content: 'Go · gRPC · PostgreSQL' },
                ],
              },
              {
                id: 'commerce',
                title: 'Commerce',
                children: [
                  { id: 'order', title: 'Order Service', content: 'Node.js · MongoDB' },
                  { id: 'payment', title: 'Payment', content: 'Stripe · PayPal' },
                ],
              },
            ],
          },
          {
            id: 'platform',
            title: 'Platform',
            columns: 3,
            children: [
              { id: 'notif', title: 'Notification', content: 'FCM · APNs' },
              { id: 'search', span: 2, title: 'Search', content: 'Elasticsearch' },
              { id: 'analytics', span: 2, title: 'Analytics', content: 'ClickHouse' },
              { id: 'logging', title: 'Logging', content: 'OpenTelemetry' },
            ],
          },
        ],
      },
    ],
  },
]
