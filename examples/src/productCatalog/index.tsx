import { CardItem, NestedGridCards } from '@nested-grid/react-cards'
import { nodes, type ProductData, tagColors } from './data'

export function ProductCatalog() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Product Catalog</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Virtual root grid, nested categories, expandable items with tag badges. Hover over items to
        reveal content. The Highlights sidebar uses vertical text via <code>styles</code>.
      </p>
      <NestedGridCards
        nodes={nodes}
        gap="16px"
        itemOnlyGap="8px"
        theme={{
          groupBorder: 'none',
          groupBgEven: '#eef2ff',
          groupBgOdd: '#e0e7ff',
          groupTitleColor: '#4338ca',
          itemBorder: 'none',
          itemShadow: '0 1px 3px rgb(0 0 0 / 8%)',
          itemHoverBg: '#4338ca',
          itemHoverColor: '#ffffff',
        }}
        renderItem={({ node, oriNode }) => {
          const data = node.data as ProductData | undefined
          const isHighlight = node.parent?.id === 'highlights'
          const tag = data?.tag ? tagColors[data.tag] : null
          const featured = data?.featured

          if (!isHighlight && !tag && !featured) return oriNode

          return (
            <CardItem
              node={node}
              showContent={featured}
              styles={
                isHighlight
                  ? {
                      header: {
                        writingMode: 'vertical-rl' as const,
                        transform: 'rotate(180deg)',
                        justifyContent: 'center' as const,
                      },
                    }
                  : undefined
              }
              titleExtra={
                tag
                  ? () => (
                      <span
                        style={{
                          padding: '1px 8px',
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 600,
                          background: tag.bg,
                          color: tag.text,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {data?.tag}
                      </span>
                    )
                  : undefined
              }
            />
          )
        }}
      />
    </div>
  )
}
