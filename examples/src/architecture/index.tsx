import { CardGroup, CardItem, NestedGridCards } from '@nested-grid/react-cards'
import { blue, green, nodes, purple } from './data'

export function Architecture() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Architecture Diagram</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        One <code>NestedGridCards</code> — each group uses its own theme. Infra items have vertical
        labels.
      </p>
      <NestedGridCards
        nodes={nodes}
        gap="12px"
        itemOnlyGap="8px"
        renderGroup={({ node, children }) => {
          let theme: typeof blue | undefined
          if (node.id === 'client') {
            theme = blue
          } else if (node.id === 'service') {
            theme = green
          } else if (node.id === 'infra') {
            theme = purple
          }
          return (
            <CardGroup node={node} theme={theme}>
              {children}
            </CardGroup>
          )
        }}
        renderItem={({ node }) => {
          const isInfra = node.parent?.id === 'infra'
          return (
            <CardItem
              node={node}
              styles={
                isInfra
                  ? {
                      header: {
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        justifyContent: 'center',
                      },
                    }
                  : undefined
              }
            />
          )
        }}
      />
    </div>
  )
}
