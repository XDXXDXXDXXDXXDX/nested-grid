import { NestedGrid } from '@nested-grid/react'
import { DemoTile } from './DemoTile'
import { cardsNodes, type OverviewData, reactNodes } from './data'

function Section({
  title,
  subtitle,
  nodes,
}: {
  title: string
  subtitle: string
  nodes: typeof reactNodes
}) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', margin: 0 }}>{title}</h2>
        <p style={{ fontSize: 13, color: '#6b7280', margin: '4px 0 0' }}>{subtitle}</p>
      </div>
      <NestedGrid
        nodes={nodes}
        gap="12px"
        renderItem={({ node }) => {
          const data = node.data as OverviewData
          return (
            <DemoTile>
              <data.Component />
            </DemoTile>
          )
        }}
      />
    </div>
  )
}

export function Overview() {
  return (
    <div style={{ padding: 24, background: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: '#111827',
            margin: 0,
            letterSpacing: -0.5,
          }}
        >
          nested-grid
        </h1>
        <p style={{ fontSize: 15, color: '#6b7280', margin: '6px 0 0' }}>
          Hierarchical grid layouts from tree data
        </p>
      </div>

      <Section
        title="@nested-grid/react"
        subtitle="Headless — renderItem, renderGroup, renderNode, virtual groups, native CSS Grid gap"
        nodes={reactNodes}
      />

      <Section
        title="@nested-grid/react-cards"
        subtitle="Styled card preset — CardItem, CardGroup, theme, itemOnlyGap, showContent"
        nodes={cardsNodes}
      />
    </div>
  )
}
