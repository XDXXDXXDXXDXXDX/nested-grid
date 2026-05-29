import type { GridNode } from '@nested-grid/core'

export interface IssueData {
  title: string
  number: number
  priority: 'high' | 'medium' | 'low'
  assignee: string
  labels: string[]
}

const priorityColor: Record<string, string> = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#6b7280',
}

const issue = (
  id: string,
  number: number,
  title: string,
  priority: 'high' | 'medium' | 'low',
  assignee: string,
  labels: string[],
): GridNode<IssueData> => ({
  id,
  data: { title, number, priority, assignee, labels },
})

export const nodes: GridNode<IssueData>[] = [
  {
    id: 'sprint-14',
    data: { title: '🚀 Sprint 14', number: 0, priority: 'medium', assignee: '', labels: [] },
    children: [
      {
        id: 'feature',
        data: { title: '✨ New Features', number: 0, priority: 'medium', assignee: '', labels: [] },
        columns: 2,
        children: [
          issue('f-1', 142, 'Add dark mode support across all pages', 'high', 'Alice', [
            'ui',
            'accessibility',
          ]),
          issue('f-2', 143, 'Implement search autocomplete', 'medium', 'Bob', ['search', 'ux']),
          issue('f-3', 144, 'Export reports as CSV and PDF', 'low', 'Charlie', [
            'reports',
            'export',
          ]),
          issue('f-4', 145, 'Two-factor authentication setup flow', 'high', 'Alice', [
            'auth',
            'security',
          ]),
        ],
      },
      {
        id: 'bugs',
        data: { title: '🐛 Bugs', number: 0, priority: 'medium', assignee: '', labels: [] },
        columns: 2,
        children: [
          issue('b-1', 146, 'Date picker renders wrong timezone on Safari', 'high', 'Dave', [
            'bug',
            'browser',
          ]),
          issue('b-2', 147, 'Notification badge count not updating', 'medium', 'Eve', [
            'bug',
            'notifications',
          ]),
          issue('b-3', 148, 'Infinite scroll fires duplicate requests', 'high', 'Dave', [
            'bug',
            'performance',
          ]),
        ],
      },
      {
        id: 'tech-debt',
        data: { title: '🔧 Tech Debt', number: 0, priority: 'medium', assignee: '', labels: [] },
        columns: 2,
        children: [
          issue('t-1', 149, 'Upgrade React to v19', 'medium', 'Frank', ['dependencies']),
          issue('t-2', 150, 'Migrate remaining class components to hooks', 'low', 'Frank', [
            'refactor',
          ]),
          issue('t-3', 151, 'Add unit tests for billing module', 'medium', 'Grace', ['testing']),
          issue('t-4', 152, 'Remove deprecated API v1 endpoints', 'low', 'Grace', [
            'api',
            'cleanup',
          ]),
        ],
      },
    ],
  },
]
