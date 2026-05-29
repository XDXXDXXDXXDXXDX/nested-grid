import { CardItem, NestedGridCards } from '@nested-grid/react-cards'
import { type EventData, nodes } from './data'

export function Timeline() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Timeline</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Chronological event timeline using <code>renderGroup</code> for year headers and{' '}
        <code>renderItem</code> for event cards with icons and dates. Card items reveal event
        descriptions on hover.
      </p>
      <NestedGridCards
        nodes={nodes}
        gap="8px"
        showContent
        theme={{
          groupBorder: 'none',
          groupBgEven: 'transparent',
          groupBgOdd: 'transparent',
          groupTitleColor: '#6366f1',
          groupTitleFontSize: '20px',
          groupTitleFontWeight: '800',
          groupBorderRadius: '12px',
          groupPadding: '12px 0',
          groupHeaderPadding: '0 0 8px 16px',
          itemBorder: '1px solid #e5e7eb',
          itemBorderRadius: '10px',
          itemPadding: '14px 16px',
          itemHoverBg: '#eef2ff',
          itemHoverColor: '#1e1b4b',
          itemTitleFontSize: '14px',
          itemTitleFontWeight: '600',
          contentColor: '#4b5563',
          contentFontSize: '13px',
          contentLineHeight: '1.6',
          contentPaddingTop: '6px',
          contentAnimDuration: '200ms',
        }}
        renderGroup={({ node, children }) => {
          const data = node.data as EventData | undefined
          return (
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '8px 0 8px 8px',
                  marginBottom: 4,
                }}
              >
                <span style={{ fontSize: 22 }}>{data?.icon}</span>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#4f46e5' }}>
                  {data?.title}
                </span>
              </div>
              {children}
            </div>
          )
        }}
        renderItem={({ node }) => {
          const data = node.data as EventData
          return (
            <CardItem
              node={node}
              titleExtra={() => (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 14 }}>{data.icon}</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: '#9ca3af' }}>
                    {data.date}
                  </span>
                </div>
              )}
            />
          )
        }}
      />
    </div>
  )
}
