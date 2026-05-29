import { NestedGrid } from '@nested-grid/react'
import { nodes } from './data'

export function PhotoWall() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Photo Wall</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Custom rendering with images. Uses <code>renderNode</code> to replace default card UI
        entirely. NestedGrid handles all grid layout — renderNode only provides content.
      </p>
      <NestedGrid
        nodes={nodes}
        gap="4px"
        renderNode={({ node }) => {
          const photo = node.data
          return (
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <img
                src={photo?.src}
                alt={photo?.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              />
            </div>
          )
        }}
      />
    </div>
  )
}
