import { NestedGrid } from '@nested-grid/react'
import { type CardData, nodes } from './data'

export function Kanban() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Kanban Board</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        A kanban board using a <code>virtual</code> root grid with 4 equal columns. Column headers
        are rendered as groups via <code>renderGroup</code>. Cards use <code>renderItem</code>.
      </p>
      <NestedGrid
        nodes={nodes}
        gap="16px"
        renderGroup={({ node, children }) => {
          const data = node.data as CardData | undefined
          return (
            <div
              style={{
                background: '#f3f4f6',
                borderRadius: 12,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '12px 16px',
                  fontWeight: 700,
                  fontSize: 14,
                  color: '#374151',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{data?.title}</span>
                <span
                  style={{
                    background: '#d1d5db',
                    color: '#6b7280',
                    borderRadius: 999,
                    padding: '2px 8px',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {data?.tag}
                </span>
              </div>
              <div style={{ padding: '0 8px 8px' }}>{children}</div>
            </div>
          )
        }}
        renderItem={({ node }) => {
          const data = node.data as CardData
          return (
            <div
              style={{
                background: '#ffffff',
                borderRadius: 8,
                padding: '10px 12px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 500, color: '#111827' }}>{data.title}</div>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: 6,
                  padding: '1px 6px',
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 600,
                  background: data.tagColor + '18',
                  color: data.tagColor,
                }}
              >
                {data.tag}
              </span>
            </div>
          )
        }}
      />
    </div>
  )
}
