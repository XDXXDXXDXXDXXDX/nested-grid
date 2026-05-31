import type { CardGridNode } from '@nested-grid/react-cards'

export interface SettingData {
  description?: string
  type?: 'toggle' | 'select' | 'action'
  enabled?: boolean
}

export const nodes: CardGridNode<SettingData>[] = [
  {
    id: 'settings',
    virtual: true,
    children: [
      {
        id: 'account',
        title: 'Account Settings',
        columns: 2,
        children: [
          {
            id: 'two-fa',
            title: 'Two-factor Auth',
            data: {
              description: 'Require a code in addition to password',
              type: 'toggle',
              enabled: true,
            },
          },
          {
            id: 'sso',
            title: 'SSO Login',
            data: {
              description: 'Sign in with your organization account',
              type: 'toggle',
              enabled: false,
            },
          },
          {
            id: 'sessions',
            title: 'Active Sessions',
            data: { description: 'Manage your logged-in devices', type: 'action' },
          },
          {
            id: 'delete',
            title: 'Delete Account',
            data: { description: 'Permanently remove your account and data', type: 'action' },
          },
        ],
      },
      {
        id: 'notifications',
        title: 'Notifications',
        columns: 2,
        children: [
          {
            id: 'email-notif',
            title: 'Email Notifications',
            data: { description: 'Receive updates via email', type: 'toggle', enabled: true },
          },
          {
            id: 'push',
            title: 'Push Notifications',
            data: {
              description: 'Receive push notifications in browser',
              type: 'toggle',
              enabled: true,
            },
          },
          {
            id: 'digest',
            title: 'Weekly Digest',
            data: {
              description: 'Summary of activity every Monday',
              type: 'toggle',
              enabled: false,
            },
          },
          {
            id: 'marketing',
            title: 'Marketing Emails',
            data: { description: 'Tips, offers and product news', type: 'toggle', enabled: false },
          },
        ],
      },
      {
        id: 'appearance',
        title: 'Appearance',
        columns: 2,
        children: [
          {
            id: 'theme',
            title: 'Theme',
            data: { description: 'Light, dark, or system', type: 'select' },
          },
          {
            id: 'density',
            title: 'Density',
            data: { description: 'Compact or comfortable spacing', type: 'select' },
          },
          {
            id: 'font',
            title: 'Font Size',
            data: { description: 'Adjust text size across the app', type: 'select' },
          },
        ],
      },
    ],
  },
]
