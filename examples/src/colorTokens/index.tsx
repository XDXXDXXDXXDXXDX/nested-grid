import { CardItem, NestedGridCards } from '@nested-grid/react-cards'
import { type ColorData, nodes } from './data'

export function ColorTokens() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Color Tokens</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Design token palette built with <code>NestedGridCards</code>. Each color category is a group
        with its own header color. Click any swatch to copy the hex value to clipboard.
      </p>
      <NestedGridCards
        nodes={nodes}
        gap="12px"
        itemOnlyGap="4px"
        onNodeClick={(node) => {
          const data = node.data as ColorData | undefined
          if (data?.hex) {
            navigator.clipboard.writeText(data.hex).then(() => {
              alert(`Copied ${data.name}: ${data.hex}`)
            })
          }
        }}
        theme={{
          groupBorder: 'none',
          groupBgEven: '#ffffff',
          groupBgOdd: '#fafafa',
          groupTitleFontSize: '14px',
          groupTitleFontWeight: '700',
          itemBorder: 'none',
          itemBorderRadius: '8px',
          itemPadding: '0',
          itemHoverBg: 'transparent',
        }}
        renderItem={({ node }) => {
          const data = node.data as ColorData
          return (
            <CardItem
              node={node}
              styles={{
                header: {
                  height: 48,
                  borderRadius: 6,
                  background: data.hex,
                  color: data.textColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: 0,
                },
                body: { padding: '4px 6px 6px' },
              }}
              titleExtra={() => (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: '#9ca3af',
                    fontFamily: 'monospace',
                  }}
                >
                  {data.hex}
                </span>
              )}
            />
          )
        }}
      />
    </div>
  )
}
