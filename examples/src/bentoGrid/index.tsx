import { NestedGrid } from '@nested-grid/react'
import { type FeatureData, nodes } from './data'

export function BentoGrid() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Bento Grid</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Apple-style bento layout using <code>renderNode</code> with gradient backgrounds and emoji
        icons. Click any card to see the <code>onNodeClick</code> callback.
      </p>
      <NestedGrid
        nodes={nodes}
        gap="12px"
        onNodeClick={(node) => {
          const data = node.data as FeatureData
          if (data) alert(`${data.icon} ${data.title}\n\n${data.description}`)
        }}
        renderNode={({ node, children }) => {
          const data = node.data as FeatureData
          return (
            <div
              style={{
                background: data.gradient,
                borderRadius: 16,
                padding: 24,
                color: '#ffffff',
                height: '100%',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 150ms ease, box-shadow 150ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: 32 }}>{data.icon}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px' }}>{data.title}</h3>
                <p style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.5, margin: 0 }}>
                  {data.description}
                </p>
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}
