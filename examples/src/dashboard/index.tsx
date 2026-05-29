import { NestedGrid } from '@nested-grid/react'
import { nodes, type WidgetData } from './data'

export function Dashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Dashboard</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        KPI widgets with <code>renderItem</code> and mixed <code>span</code> / <code>rowSpan</code>{' '}
        to create a weighted dashboard layout. Virtual root grid is invisible.
      </p>
      <NestedGrid
        nodes={nodes}
        gap="12px"
        renderItem={({ node }) => {
          const data = node.data as WidgetData
          return (
            <div
              style={{
                height: '100%',
                padding: 20,
                borderRadius: 12,
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>{data.title}</div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#111827' }}>{data.value}</div>
                <div style={{ fontSize: 13, color: data.color, fontWeight: 600, marginTop: 2 }}>
                  {data.trend} vs last month
                </div>
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}
