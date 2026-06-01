# nested-grid

**用 JSON 描述嵌套栅格布局，原生 CSS Grid 渲染。**  
把布局写成数据，引擎算出 Grid 样式，然后按你的方式渲染——无头或带皮肤，随你选。

```
JSON 树  →  计算 CSS Grid 样式  →  React DOM
```

## 为什么选它

- **JSON 驱动** — 布局就是数据，不是手写的 div 汤。可以编辑、生成，或从接口拉取。
- **原生 CSS Grid** — 每个节点映射为真实的 `display: grid`、`grid-template-columns`、`grid-column: span N`。不用绝对定位 hack。
- **天然层级化** — 树节点自然嵌套为嵌套栅格。列数、样式可按层级组织，gap 保持原生 CSS Grid 语义。
- **虚拟分组** — 透明布局容器，只组织结构，不渲染视觉 chrome。
- **TypeScript 优先** — 从 `GridNode` 定义到渲染 props，全程类型安全。

## 包

| 包 | 说明 |
|---|---|
| [@nested-grid/core](./packages/core) | 无头布局引擎。树数据进，Grid 样式出。零依赖。 |
| [@nested-grid/react](./packages/react) | React 绑定。`renderItem`、`renderGroup`、`renderNode` — 你掌控 UI。 |
| [@nested-grid/react-cards](./packages/react-cards) | 带皮肤的卡片预设。CSS 自定义属性主题系统。引入即用。 |

## 快速预览

```ts
import { createLayout } from '@nested-grid/core'

const layout = createLayout([
  {
    id: 'page',
    columns: 3,              // grid-template-columns: repeat(3, minmax(0, 1fr))
    gap: '12px',
    virtual: true,           // 透明容器 — 无视觉 chrome
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
  gap="12px"
  renderItem={({ node }) => <Card title={node.data?.title} />}
  renderGroup={({ node, children }) => (
    <section><h2>{node.data?.title}</h2>{children}</section>
  )}
/>
```

## License

MIT
