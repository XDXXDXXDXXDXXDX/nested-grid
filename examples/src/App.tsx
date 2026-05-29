import { useState } from 'react'
import { Architecture } from './architecture'
import { BentoGrid } from './bentoGrid'
import { ColorTokens } from './colorTokens'
import { Dashboard } from './dashboard'
import { IssueTracker } from './issueTracker'
import { Kanban } from './kanban'
import { Magazine } from './magazine'
import { NestedBlocks } from './nestedBlocks'
import { OrgChart } from './orgChart'
import { Overview } from './overview'
import { PhotoWall } from './photoWall'
import { PricingTable } from './pricingTable'
import { ProductCatalog } from './productCatalog'

import { SettingsPanel } from './settingsPanel'
import { Timeline } from './timeline'

const examples = [
  { key: 'overview', label: '🌟 Overview', Component: Overview, library: 'overview' },
  { key: 'pricing', label: '💳 Pricing Table', Component: PricingTable, library: 'react' },
  { key: 'dashboard', label: '📊 Dashboard', Component: Dashboard, library: 'react' },
  { key: 'magazine', label: '📰 Magazine', Component: Magazine, library: 'react' },
  { key: 'kanban', label: '📋 Kanban', Component: Kanban, library: 'react' },
  { key: 'issues', label: '🐛 Issue Tracker', Component: IssueTracker, library: 'react' },
  { key: 'bento', label: '🍱 Bento Grid', Component: BentoGrid, library: 'react' },
  { key: 'photo', label: '🖼️ Photo Wall', Component: PhotoWall, library: 'react' },
  { key: 'nestedBlocks', label: '🟦 Nested Blocks', Component: NestedBlocks, library: 'react' },
  { key: 'catalog', label: '🛍️ Product Catalog', Component: ProductCatalog, library: 'react-cards' },
  { key: 'arch', label: '🏗️ Architecture', Component: Architecture, library: 'react-cards' },
  { key: 'org', label: '👥 Org Chart', Component: OrgChart, library: 'react-cards' },
  { key: 'settings', label: '⚙️ Settings Panel', Component: SettingsPanel, library: 'react-cards' },
  { key: 'tokens', label: '🎨 Color Tokens', Component: ColorTokens, library: 'react-cards' },

  { key: 'timeline', label: '📅 Timeline', Component: Timeline, library: 'react-cards' },
]

export function App() {
  const [active, setActive] = useState('overview')
  const Example = examples.find((example) => example.key === active)?.Component

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside
        style={{
          width: 230,
          background: '#1e1e2e',
          color: '#cdd6f4',
          padding: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flexShrink: 0,
          overflow: 'auto',
        }}
      >
        <h1
          style={{
            fontSize: 16,
            fontWeight: 700,
            marginBottom: 16,
            color: '#f5c2e7',
          }}
        >
          nested-grid
        </h1>
        {examples
          .filter((example) => example.library === 'overview')
          .map(({ key, label }) => (
            <button
              type="button"
              key={key}
              onClick={() => setActive(key)}
              style={{
                textAlign: 'left',
                background: key === active ? '#45475a' : 'transparent',
                color: key === active ? '#f5e0dc' : '#f5c2e7',
                border: 'none',
                padding: '7px 12px',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              {label}
            </button>
          ))}
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: '#6c7086',
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 4,
            marginTop: 8,
          }}
        >
          @nested-grid/react
        </div>
        {examples
          .filter((example) => example.library === 'react')
          .map(({ key, label }) => (
            <button
              type="button"
              key={key}
              onClick={() => setActive(key)}
              style={{
                textAlign: 'left',
                background: key === active ? '#45475a' : 'transparent',
                color: key === active ? '#f5e0dc' : '#a6adc8',
                border: 'none',
                padding: '7px 12px',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: 13,
              }}
            >
              {label}
            </button>
          ))}
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: '#6c7086',
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 4,
            marginTop: 16,
          }}
        >
          @nested-grid/react-cards
        </div>
        {examples
          .filter((example) => example.library === 'react-cards')
          .map(({ key, label }) => (
            <button
              type="button"
              key={key}
              onClick={() => setActive(key)}
              style={{
                textAlign: 'left',
                background: key === active ? '#45475a' : 'transparent',
                color: key === active ? '#f5e0dc' : '#a6adc8',
                border: 'none',
                padding: '7px 12px',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: 13,
              }}
            >
              {label}
            </button>
          ))}
      </aside>
      <main style={{ flex: 1, overflow: 'auto', padding: 24, background: '#f9fafb' }}>
        {Example ? <Example /> : null}
      </main>
    </div>
  )
}
