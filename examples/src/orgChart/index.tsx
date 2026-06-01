import { CardItem, NestedGridCards } from '@nested-grid/react-cards'
import { type MemberData, nodes } from './data'

export function OrgChart() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Organization Chart</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Hierarchical org chart with four levels of nesting. Uses native CSS Grid <code>gap</code>,
        department-level <code>itemOnlyGap</code>, and <code>renderItem</code> for member cards with
        avatar initials and email.
      </p>
      <NestedGridCards
        nodes={nodes}
        gap="24px"
        itemOnlyGap="4px"
        theme={{
          groupBorder: 'none',
          groupBgEven: '#f8fafc',
          groupBgOdd: '#f1f5f9',
          groupTitleColor: '#1e293b',
          groupTitleFontSize: '15px',
          groupTitleFontWeight: '700',
          groupBorderRadius: '10px',
          groupPadding: '14px 16px',
          itemBorder: '1px solid #e2e8f0',
          itemBorderRadius: '8px',
          itemPadding: '10px 14px',
          itemHoverBg: '#eef2ff',
          itemHoverColor: '#1e1b4b',
          itemTitleFontSize: '13px',
          itemTitleFontWeight: '600',
        }}
        renderItem={({ node }) => {
          const data = node.data as MemberData
          return (
            <CardItem
              node={node}
              titleExtra={() => (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {data.avatar}
                  </span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#334155' }}>
                      {data.role}
                    </div>
                    <div style={{ fontSize: 11, color: '#94a3b8' }}>{data.email}</div>
                  </div>
                </div>
              )}
            />
          )
        }}
      />
    </div>
  )
}
