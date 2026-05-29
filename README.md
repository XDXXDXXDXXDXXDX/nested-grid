# nested-grid

**Describe nested grid layouts as JSON trees — render with native CSS Grid.**  
Define your layout in data, let the engine compute grid styles, then render it your way — headless or with a styled preset.

```
JSON tree  →  computed CSS Grid styles  →  React DOM
```

## Why

- **JSON-driven** — layouts are data, not hand-crafted div soup. Edit, generate, or fetch from an API.
- **CSS Grid native** — every node maps to real `display: grid`, `grid-template-columns`, `grid-column: span N`. Noabsolute positioning hacks.
- **Hierarchical by design** — tree nodes nest naturally into nested grids. Depth-aware gap, columns, and styling.
- **Virtual groups** — transparent layout containers that structure children without visual chrome.
- **TypeScript-first** — full type safety from `GridNode` definition to render props.

## Packages

| Package | Description |
|---|---|
| [@nested-grid/core](./packages/core) | Headless layout engine. Tree data → CSS Grid styles. Zero deps. |
| [@nested-grid/react](./packages/react) | React bindings. `renderItem`, `renderGroup`, `renderNode` — you own the UI. |
| [@nested-grid/react-cards](./packages/react-cards) | Styled card preset. Theme system via CSS custom properties. Drop-in ready. |

## Quick look

```ts
import { createLayout } from '@nested-grid/core'

const layout = createLayout([
  {
    id: 'page',
    columns: 3,              // grid-template-columns: repeat(3, 1fr)
    gap: '12px',
    virtual: true,           // transparent — no visual chrome
    children: [
      { id: 'hero', span: 2, rowSpan: 2, data: { title: 'Hero' } },
      { id: 'sidebar', data: { title: 'Sidebar' } },
      { id: 'a', data: { title: 'Card A' } },
      { id: 'b', data: { title: 'Card B' } },
    ],
  },
])
```

```tsx
import { NestedGrid } from '@nested-grid/react'

<NestedGrid
  nodes={nodes}
  gap={['16px', '12px']}    // per-depth: root=16px, children=12px
  renderItem={({ node }) => <Card title={node.data.title} />}
  renderGroup={({ node, children }) => (
    <section><h2>{node.data.title}</h2>{children}</section>
  )}
/>
```

## License

MIT
