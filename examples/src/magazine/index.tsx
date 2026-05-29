import { NestedGrid } from '@nested-grid/react'
import { type ArticleData, nodes } from './data'

export function Magazine() {
  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Magazine Layout</h2>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Editorial-style layout using <code>renderNode</code> with image backgrounds, category
        labels, and varied <code>span</code> / <code>rowSpan</code> for a magazine feel.
      </p>
      <NestedGrid
        nodes={nodes}
        gap="8px"
        renderNode={({ node }) => {
          const data = node.data as ArticleData
          return (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: 12,
                overflow: 'hidden',
                cursor: 'pointer',
                minHeight: 160,
              }}
            >
              <img
                src={data.image}
                alt={data.title}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.75) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    color: '#fbbf24',
                  }}
                >
                  {data.category}
                </span>
                <h3
                  style={{
                    margin: '4px 0 0',
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.3,
                  }}
                >
                  {data.title}
                </h3>
              </div>
            </div>
          )
        }}
      />
    </div>
  )
}
