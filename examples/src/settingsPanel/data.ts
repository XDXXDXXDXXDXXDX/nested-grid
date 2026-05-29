import type { GridNode } from '@nested-grid/core'

export interface SettingData {
  title: string
  description?: string
  type?: 'toggle' | 'select' | 'action'
  enabled?: boolean
}

export const nodes: GridNode<SettingData>[] = [
  {
    id: 'settings',
    virtual: true,
    children: [
      {
        id: 'account',
        data: { title: 'Account Settings' },
        columns: 2,
        children: [
          {
            id: 'two-fa',
            data: {
              title: 'Two-factor Auth',
              description: 'Require a code in addition to password',
              type: 'toggle',
              enabled: true,
            },
          },
          {
            id: 'sso',
            data: {
              title: 'SSO Login',
              description: 'Sign in with your organization account',
              type: 'toggle',
              enabled: false,
            },
          },
          {
            id: 'sessions',
            data: {
              title: 'Active Sessions',
              description: 'Manage your logged-in devices',
              type: 'action',
            },
          },
          {
            id: 'delete',
            data: {
              title: 'Delete Account',
              description: 'Permanently remove your account and data',
              type: 'action',
            },
          },
        ],
      },
      {
        id: 'notifications',
        data: { title: 'Notifications' },
        columns: 2,
        children: [
          {
            id: 'email-notif',
            data: {
              title: 'Email Notifications',
              description: 'Receive updates via email',
              type: 'toggle',
              enabled: true,
            },
          },
          {
            id: 'push',
            data: {
              title: 'Push Notifications',
              description: 'Receive push notifications in browser',
              type: 'toggle',
              enabled: true,
            },
          },
          {
            id: 'digest',
            data: {
              title: 'Weekly Digest',
              description: 'Summary of activity every Monday',
              type: 'toggle',
              enabled: false,
            },
          },
          {
            id: 'marketing',
            data: {
              title: 'Marketing Emails',
              description: 'Tips, offers and product news',
              type: 'toggle',
              enabled: false,
            },
          },
        ],
      },
      {
        id: 'appearance',
        data: { title: 'Appearance' },
        columns: 2,
        children: [
          {
            id: 'theme',
            data: { title: 'Theme', description: 'Light, dark, or system', type: 'select' },
          },
          {
            id: 'density',
            data: {
              title: 'Density',
              description: 'Compact or comfortable spacing',
              type: 'select',
            },
          },
          {
            id: 'font',
            data: {
              title: 'Font Size',
              description: 'Adjust text size across the app',
              type: 'select',
            },
          },
        ],
      },
    ],
  },
]
