import type { GridNode } from '@nested-grid/core'

export interface CardData {
  title: string
  tag: string
  tagColor: string
}

const todo: CardData[] = [
  { title: 'User onboarding flow', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Email notification system', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Dark mode toggle', tag: 'Enhancement', tagColor: '#3b82f6' },
  { title: 'Bulk import from CSV', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Keyboard shortcuts panel', tag: 'Enhancement', tagColor: '#3b82f6' },
  { title: 'Share to Slack integration', tag: 'Integration', tagColor: '#06b6d4' },
  { title: 'Export board as spreadsheet', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Custom status labels', tag: 'Enhancement', tagColor: '#3b82f6' },
]

const inProgress: CardData[] = [
  { title: 'Payment gateway integration', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Image lazy loading', tag: 'Performance', tagColor: '#f59e0b' },
  { title: 'Session timeout handling', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'PDF report generation', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Webhook retry with backoff', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Database query cache layer', tag: 'Performance', tagColor: '#f59e0b' },
  { title: 'Migrate auth to JWT tokens', tag: 'Refactor', tagColor: '#6b7280' },
]

const review: CardData[] = [
  { title: 'Search autocomplete', tag: 'Feature', tagColor: '#8b5cf6' },
  { title: 'Mobile nav refactor', tag: 'Refactor', tagColor: '#6b7280' },
  { title: 'Fix date picker timezone', tag: 'Bug', tagColor: '#ef4444' },
  { title: 'Fix table pagination reset', tag: 'Bug', tagColor: '#ef4444' },
  { title: 'Audit log retention policy', tag: 'Compliance', tagColor: '#f97316' },
  { title: 'Optimize asset bundle size', tag: 'Performance', tagColor: '#f59e0b' },
  { title: 'GDPR cookie consent banner', tag: 'Compliance', tagColor: '#f97316' },
  { title: 'Sanitize user-uploaded SVG', tag: 'Security', tagColor: '#dc2626' },
  { title: 'Refactor error boundary fallback', tag: 'Refactor', tagColor: '#6b7280' },
]

const done: CardData[] = [
  { title: 'API rate limiting', tag: 'Infra', tagColor: '#10b981' },
  { title: 'Update dependencies', tag: 'Chore', tagColor: '#6b7280' },
  { title: 'Response compression middleware', tag: 'Infra', tagColor: '#10b981' },
  { title: 'Upgrade Node.js to v22', tag: 'Chore', tagColor: '#6b7280' },
  { title: 'Remove legacy v1 API shim', tag: 'Chore', tagColor: '#6b7280' },
  { title: 'Add health check endpoint', tag: 'Infra', tagColor: '#10b981' },
]

const column = (id: string, title: string, cards: CardData[]): GridNode<CardData> => ({
  id,
  data: { title, tag: `${cards.length}`, tagColor: '#6b7280' },
  children: cards.map((card, i) => ({
    id: `${id}-${i}`,
    data: card,
  })),
})

export const nodes: GridNode<CardData>[] = [
  {
    id: 'board',
    columns: 4,
    virtual: true,
    children: [
      column('todo', 'To Do', todo),
      column('in-progress', 'In Progress', inProgress),
      column('review', 'Review', review),
      column('done', 'Done', done),
    ],
  },
]
