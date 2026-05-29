import { NestedGrid } from '@nested-grid/react'
import { nodes } from './data'

export function NestedBlocks() {
  return (
    <div>
      <h2 style={{ marginBottom: 8 }}>🟦 Nested Color Blocks</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Every block — including the outermost — is a grid of smaller colored blocks. No virtual
        containers, just pure nesting.
      </p>
      <NestedGrid
        nodes={nodes}
        gap="16px"
        renderNode={({ node, children }) => {
          const data = node.data

          return (
            <div
              style={{
                background: data?.color,
                borderRadius: 8,
                height: '100%',
                padding: 16,
                transition: 'filter 120ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)'
              }}
            >
              {children}
            </div>
          )
        }}
      />
    </div>
  )
}
