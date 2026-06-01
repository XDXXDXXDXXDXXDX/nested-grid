import { NestedGrid } from '@nested-grid/react'
import { type IssueData, nodes } from './data'

const priorityColor: Record<string, string> = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#6b7280',
}

export function IssueTracker() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Issue Tracker</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        GitHub-style issue board with three-level nesting: milestone → labels → issues. Uses{' '}
        <code>renderGroup</code> for milestone and label headers, <code>renderItem</code> for
        individual issues with priority badges and labels.
      </p>
      <NestedGrid
        nodes={nodes}
        gap="20px"
        renderGroup={({ node, children, depth }) => {
          const data = node.data as IssueData | undefined
          if (!data) return <>{children}</>
          const isMilestone = depth === 0
          if (isMilestone) {
            return (
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: 12,
                  border: '1px solid #e5e7eb',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '14px 20px',
                    background: '#f9fafb',
                    borderBottom: '1px solid #e5e7eb',
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#111827',
                  }}
                >
                  {data.title}
                </div>
                <div style={{ padding: 16 }}>{children}</div>
              </div>
            )
          }
          return (
            <div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#6b7280',
                  marginBottom: 8,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                {data.title}
              </div>
              {children}
            </div>
          )
        }}
        renderItem={({ node }) => {
          const data = node.data as IssueData
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                padding: '10px 14px',
                background: '#ffffff',
                borderRadius: 8,
                border: '1px solid #f3f4f6',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: priorityColor[data.priority],
                  flexShrink: 0,
                  marginTop: 4,
                }}
                title={data.priority}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{data.title}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 11, color: '#9ca3af' }}>#{data.number}</span>
                  {data.labels.map((label) => (
                    <span
                      key={label}
                      style={{
                        padding: '1px 6px',
                        borderRadius: 999,
                        fontSize: 10,
                        fontWeight: 600,
                        background: '#f3f4f6',
                        color: '#6b7280',
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: '50%',
                  background: '#6366f1',
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {data.assignee[0]}
              </span>
            </div>
          )
        }}
      />
    </div>
  )
}
