# @nested-grid/core

**JSON tree → CSS Grid layout. Zero dependencies, framework-agnostic.**

Describe nested grids as plain objects — `columns`, `span`, `rowSpan`, `gap`. The engine computes every node's `grid-template-columns`, `grid-column`, and `grid-row` styles. Use the output in any framework, or no framework at all.

> **React bindings:** [`@nested-grid/react`](https://www.npmjs.com/package/@nested-grid/react) — renders layout trees as DOM with `renderItem` / `renderGroup` / `renderNode` render props. Headless, no styles imposed.  
> **Styled preset:** [`@nested-grid/react-cards`](https://www.npmjs.com/package/@nested-grid/react-cards) — drop-in `<CardGroup>` / `<CardItem>` with a 30-token CSS custom property theme system.

## Install

```bash
pnpm add @nested-grid/core
```

## Quick Start

```ts
import { createLayout, type GridNode } from '@nested-grid/core'

const nodes: GridNode[] = [
  {
    id: 'root',
    columns: 3,
    children: [
      { id: 'a', span: 2 },
      { id: 'b' },
      { id: 'c', children: [{ id: 'c1' }, { id: 'c2' }] },
    ],
  },
]

const layout = createLayout(nodes, { defaultGap: '12px' })
```

## API

### `createLayout(nodes, options?)`

```ts
function createLayout<T = unknown>(
  nodes: GridNode<T>[],
  options?: CreateLayoutOptions
): LayoutNode<T>[]
```

### `CreateLayoutOptions`

| Option | Type | Description |
|---|---|---|
| `defaultColumns` | `number \| string` | Fallback `grid-template-columns`. Number expands to `repeat(n, minmax(0, 1fr))`. |
| `defaultGap` | `string \| string[]` | Default gap. Array values map to depth (last value repeats). Overrides `defaultGridContainerStyle.gap`. |
| `defaultGridContainerStyle` | `Record<string, string \| undefined>` | Default styles merged into every grid container. Lowest priority. |
| `defaultGridItemStyle` | `Record<string, string \| undefined>` | Default styles merged into every grid item. Lowest priority. |

### `toColumns(value)`

```ts
import { toColumns } from '@nested-grid/core'

toColumns(3)              // "repeat(3, minmax(0, 1fr))"
toColumns('200px 1fr')    // "200px 1fr" (passthrough)
```

## Types

### `GridNode<T>` (Input)

| Field | Type | Description |
|---|---|---|
| `id` | `Key` | Unique identifier |
| `children?` | `GridNode<T>[]` | Child nodes (presence makes this a group) |
| `data?` | `T` | Arbitrary payload |
| `columns?` | `number \| string` | Syntax sugar: `grid-template-columns` for this node's grid container |
| `span?` | `number` | Syntax sugar: `grid-column: span N` on this node as a grid item |
| `rowSpan?` | `number` | Syntax sugar: `grid-row: span N` on this node as a grid item |
| `gap?` | `string` | Syntax sugar: `gap` on this node's grid container |
| `gridContainerStyle?` | `Record<string, string>` | Extra styles for the grid container (wraps children) |
| `gridItemStyle?` | `Record<string, string>` | Extra styles for the grid item (positioned in parent grid) |
| `virtual?` | `boolean` | Transparent group — children laid out directly without visual chrome |

### `LayoutNode<T>` (Output)

| Field | Type | Description |
|---|---|---|
| `id` | `Key` | Same as input |
| `type` | `'group' \| 'item'` | Node type |
| `depth` | `number` | Nesting depth (0 = root) |
| `index` | `number` | Position among siblings |
| `children?` | `LayoutNode<T>[]` | Child nodes |
| `gridContainerStyle` | `Record<string, string \| undefined>` | Computed CSS for the grid container |
| `gridItemStyle` | `Record<string, string \| undefined>` | Computed CSS for the grid item |
| `virtual` | `boolean` | Transparent group |
| `parent?` | `LayoutNode<T>` | Parent node reference |
| `data?` | `T` | Same as input |

### Style merge priority

**gridContainerStyle**: `display:'grid'` → `defaultGridContainerStyle` → `defaultGap[depth]` → syntax sugar (`columns`, `gap`) → `node.gridContainerStyle`

**gridItemStyle**: `defaultGridItemStyle` → syntax sugar (`span`, `rowSpan`) → `node.gridItemStyle`

## More examples

See the [examples directory](https://github.com/XDXXDXXDXXDXXDX/nested-grid/tree/main/examples/src) for 15+ real-world layouts built with `@nested-grid/react` and `@nested-grid/react-cards` — pricing table, org chart, color token palette, magazine layout, and more.

## License

MIT
