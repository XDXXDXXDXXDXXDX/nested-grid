# @nested-grid/core

**JSON 树 → CSS Grid 布局。零依赖，框架无关。**

用普通对象描述嵌套栅格 — `columns`、`span`、`rowSpan`、`gap`。引擎计算每个节点的 `grid-template-columns`、`grid-column`、`grid-row` 样式。输出可用在任何框架，或者不用框架。

> **React 绑定：** [`@nested-grid/react`](https://www.npmjs.com/package/@nested-grid/react) — 将布局树渲染为 DOM，通过 `renderItem` / `renderGroup` / `renderNode` 渲染 props 控制 UI。无头，不强制任何样式。  
> **带皮肤预设：** [`@nested-grid/react-cards`](https://www.npmjs.com/package/@nested-grid/react-cards) — 开箱即用的 `<CardGroup>` / `<CardItem>`，配备 30 个 CSS 自定义属性主题系统。

## 安装

```bash
pnpm add @nested-grid/core
```

## 快速开始

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

| 选项 | 类型 | 说明 |
|---|---|---|
| `defaultColumns` | `number \| string` | 默认 `grid-template-columns`。数字展开为 `repeat(n, minmax(0, 1fr))` |
| `defaultGap` | `string` | grid 容器默认间距。可被节点级 `gap` 和 `gridContainerStyle.gap` 覆盖 |
| `defaultGridContainerStyle` | `Record<string, string \| undefined>` | 合并到每个 grid 容器的默认样式。优先级最低 |
| `defaultGridItemStyle` | `Record<string, string \| undefined>` | 合并到每个 grid 项的默认样式。优先级最低 |

### `toColumns(value)`

```ts
import { toColumns } from '@nested-grid/core'

toColumns(3)              // "repeat(3, minmax(0, 1fr))"
toColumns('200px 1fr')    // "200px 1fr"（原样透传）
```

## 类型

### `GridNode<T>`（输入）

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | `Key` | 唯一标识 |
| `children?` | `GridNode<T>[]` | 子节点（有 children 即为 group） |
| `data?` | `T` | 任意数据载荷 |
| `columns?` | `number \| string` | 语法糖：此节点 grid 容器的 `grid-template-columns` |
| `span?` | `number` | 语法糖：此节点作为 grid 项的 `grid-column: span N` |
| `rowSpan?` | `number` | 语法糖：此节点作为 grid 项的 `grid-row: span N` |
| `gap?` | `string` | 语法糖：此节点 grid 容器的 `gap` |
| `gridContainerStyle?` | `Record<string, string>` | grid 容器额外样式 |
| `gridItemStyle?` | `Record<string, string>` | grid 项额外样式 |
| `virtual?` | `boolean` | 透明分组 — 子节点直接布局，无视觉 chrome |

### `LayoutNode<T>`（输出）

| 字段 | 类型 | 说明 |
|---|---|---|
| `id` | `Key` | 同输入 |
| `type` | `'group' \| 'item'` | 节点类型 |
| `depth` | `number` | 嵌套深度（0 = 根） |
| `index` | `number` | 在同级中的位置 |
| `children?` | `LayoutNode<T>[]` | 子节点 |
| `gridContainerStyle` | `Record<string, string \| undefined>` | 计算后的 grid 容器 CSS |
| `gridItemStyle` | `Record<string, string \| undefined>` | 计算后的 grid 项 CSS |
| `virtual` | `boolean` | 透明分组 |
| `parent?` | `LayoutNode<T>` | 父节点引用 |
| `data?` | `T` | 同输入 |

### 样式合并优先级

**gridContainerStyle**: `display:'grid'` → `defaultGridContainerStyle` → `defaultGap` → 语法糖（`columns`、`gap`）→ `node.gridContainerStyle`

**gridItemStyle**: `defaultGridItemStyle` → 语法糖（`span`、`rowSpan`）→ `node.gridItemStyle`

## 更多示例

查看 [examples 目录](https://github.com/XDXXDXXDXXDXXDX/nested-grid/tree/main/examples/src) 中的 15+ 真实布局示例，均基于 `@nested-grid/react` 和 `@nested-grid/react-cards` 构建 —— 定价表、组织架构图、色彩面板、杂志布局等。

## License

MIT
