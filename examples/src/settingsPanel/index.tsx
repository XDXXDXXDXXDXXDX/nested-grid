import { CardItem, NestedGridCards } from '@nested-grid/react-cards'
import { nodes, type SettingData } from './data'

export function SettingsPanel() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Settings Panel</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Compact settings UI built with <code>NestedGridCards</code>. Uses <code>itemOnlyGap</code>{' '}
        for tighter spacing within setting groups. Settings are rendered as custom card items with
        status indicators.
      </p>
      <NestedGridCards
        nodes={nodes}
        gap="16px"
        itemOnlyGap="4px"
        theme={{
          groupBorder: 'none',
          groupBgEven: '#fafafa',
          groupBgOdd: '#f5f5f5',
          groupTitleColor: '#18181b',
          groupTitleFontSize: '15px',
          groupTitleFontWeight: '600',
          groupBorderRadius: '10px',
          groupPadding: '16px',
          itemBorder: 'none',
          itemBorderRadius: '8px',
          itemPadding: '12px 16px',
          itemTitleFontSize: '13px',
          itemHoverBg: '#f4f4f5',
          itemHoverColor: '#18181b',
        }}
        renderItem={({ node }) => {
          const data = node.data as SettingData
          return (
            <CardItem
              node={node}
              titleExtra={() => {
                if (data.type === 'toggle') {
                  return (
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: data.enabled ? '#10b981' : '#d1d5db',
                      }}
                    >
                      {data.enabled ? 'ON' : 'OFF'}
                    </span>
                  )
                }
                if (data.type === 'action') {
                  return (
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#6366f1' }}>
                      Manage →
                    </span>
                  )
                }
                return (
                  <span style={{ fontSize: 12, fontWeight: 600, color: '#6b7280' }}>System →</span>
                )
              }}
            />
          )
        }}
      />
    </div>
  )
}
