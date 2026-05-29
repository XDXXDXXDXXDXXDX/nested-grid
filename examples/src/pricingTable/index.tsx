import { NestedGrid } from '@nested-grid/react'
import { nodes, type PlanData } from './data'

export function PricingTable() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Pricing Table</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        SaaS pricing page built with <code>renderGroup</code> for plan headers and{' '}
        <code>renderItem</code> for feature rows. Uses <code>virtual</code> root, per-depth{' '}
        <code>gap</code> array, and <code>onNodeClick</code> for CTA actions.
      </p>
      <NestedGrid
        nodes={nodes}
        gap={['24px', '2px']}
        onNodeClick={(node) => {
          const data = node.data as PlanData | undefined
          if (data?.cta && !node.children) alert(`${data.cta} → ${node.parent?.data?.name}`)
        }}
        renderGroup={({ node, children }) => {
          const data = node.data as PlanData
          return (
            <div
              style={{
                borderRadius: 12,
                border: data.highlighted ? '2px solid #6366f1' : '1px solid #e5e7eb',
                background: data.highlighted ? '#eef2ff' : '#ffffff',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '20px 24px 12px',
                  textAlign: 'center',
                  borderBottom: '1px solid #f3f4f6',
                }}
              >
                {data.highlighted && (
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '2px 10px',
                      borderRadius: 999,
                      background: '#6366f1',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 700,
                      marginBottom: 8,
                      textTransform: 'uppercase',
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#111827' }}>
                  {data.name}
                </h3>
                <div style={{ marginTop: 8 }}>
                  <span style={{ fontSize: 32, fontWeight: 800, color: '#111827' }}>
                    {data.price}
                  </span>
                  {data.period && (
                    <span style={{ fontSize: 14, color: '#6b7280' }}>{data.period}</span>
                  )}
                </div>
                <button
                  type="button"
                  style={{
                    marginTop: 12,
                    width: '100%',
                    padding: '10px 0',
                    borderRadius: 8,
                    border: 'none',
                    background: data.highlighted ? '#6366f1' : '#111827',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {data.cta}
                </button>
              </div>
              <div style={{ padding: '12px 24px 20px' }}>{children}</div>
            </div>
          )
        }}
        renderItem={({ node }) => {
          const data = node.data as PlanData
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '6px 0',
                fontSize: 13,
                color: '#4b5563',
              }}
            >
              <span style={{ color: '#10b981', fontWeight: 700, fontSize: 14 }}>✓</span>
              <span>{data.name}</span>
            </div>
          )
        }}
      />
    </div>
  )
}
