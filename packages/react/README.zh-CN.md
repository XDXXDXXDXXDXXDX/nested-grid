# @nested-grid/react

**JSON 驱动 CSS Grid 布局的 React 渲染器。无头 — 每个像素由你掌控。**

传入一棵 grid 节点树，得到带计算样式的嵌套 `<div>`：`display: grid`、`grid-template-columns`、`grid-column: span N`。三个渲染 props（`renderItem`、`renderGroup`、`renderNode`）让你注入任意 UI，布局全部由库处理。

![demo](./demo.png)

> **布局引擎：** [`@nested-grid/core`](https://www.npmjs.com/package/@nested-grid/core) — 零依赖、框架无关的引擎，从树数据计算 CSS Grid 样式。  
> **带皮肤预设：** [`@nested-grid/react-cards`](https://www.npmjs.com/package/@nested-grid/react-cards) — 开箱即用的 `<CardGroup>` / `<CardItem>` 组件，配备 30 个 token 的主题系统。不想手写 CSS 就选它。

## 安装

```bash
pnpm add @nested-grid/react
```

需要 `react >= 18.0.0` 和 `@nested-grid/core`。

## 快速开始

```tsx
import { NestedGrid, type GridNode } from "@nested-grid/react";

const nodes: GridNode[] = [
  {
    id: "root",
    columns: 3,
    children: [
      { id: "a", data: { title: "Item A" }, span: 2 },
      { id: "b", data: { title: "Item B" } },
      {
        id: "c",
        data: { title: "Nested" },
        children: [
          { id: "c1", data: { title: "Sub 1" } },
          { id: "c2", data: { title: "Sub 2" } },
        ],
      },
    ],
  },
];

export function App() {
  return (
    <NestedGrid
      nodes={nodes}
      gap="12px"
      renderItem={({ node }) => <article>{node.data.title}</article>}
    />
  );
}
```

## API

### `<NestedGrid>`

| 属性 | 类型 | 说明 |
|---|---|---|
| `nodes` | `GridNode<T>[]` | 树数据 |
| `defaultColumns?` | `number \| string` | 无显式 `columns` 的 group 的默认列数 |
| `gap?` | `string \| string[]` | grid 容器间距。数组值按深度映射（末尾值重复） |
| `renderItem?` | `(props: RenderItemProps<T>) => ReactNode` | 渲染 item 节点 |
| `renderGroup?` | `(props: RenderGroupProps<T>) => ReactNode` | 渲染 group 节点（接收预渲染的 `children`） |
| `renderNode?` | `(props: RenderNodeProps<T>) => ReactNode` | 包裹每个节点。`oriNode` 是类型对应渲染器的结果 |
| `onNodeClick?` | `(node: LayoutNode<T>) => void` | 节点点击回调 |

所有 `HTMLAttributes<HTMLDivElement>` 属性均接受并透传到根元素。

### 渲染回调

所有回调接收 `node`（解析后的 `LayoutNode`）、`depth`、`index` 和 `oriNode`（默认渲染输出）。`renderGroup` 和 `renderNode` 还接收预渲染的 `children`。

```tsx
// 只渲染 items
<NestedGrid nodes={nodes} renderItem={({ node }) => <Card data={node.data} />} />

// 带自定义 chrome 的 group
<NestedGrid
  nodes={nodes}
  renderGroup={({ node, children }) => (
    <section>
      <h2>{node.data.title}</h2>
      {children}
    </section>
  )}
/>

// 包裹每个节点
<NestedGrid
  nodes={nodes}
  renderNode={({ node, children, oriNode }) => (
    <div onClick={() => track(node.id)}>{oriNode}</div>
  )}
/>
```

### 按深度设置间距

```tsx
<NestedGrid
  nodes={nodes}
  gap={["16px", "12px", "8px"]}
  // depth 0 → 16px, depth 1 → 12px, depth 2+ → 8px
/>
```

## HTML 输出

每个节点渲染一个带计算 grid 样式和 data 属性的 `<div>`：

```html
<div class="rng-root">
  <div
    class="rng-node rng-node-group rng-depth-0 rng-depth-even"
    data-id="root"
    style="display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:12px;"
  >
    <div
      class="rng-node rng-node-item rng-depth-1 rng-depth-odd"
      data-id="a"
      style="grid-column:span 2;"
    ></div>
    …
  </div>
</div>
```

Group 节点的 `gridContainerStyle` 带有 `display: grid`。用纯 CSS、Tailwind、CSS Modules 或任何设计系统来写样式。

## 更多示例

[examples 目录](https://github.com/XDXXDXXDXXDXXDX/nested-grid/tree/main/examples/src) 中有 15+ 真实布局示例 —— 仪表盘、看板、便当盒布局、杂志布局、照片墙、问题追踪器等。每个不超过 100 行。

## License

MIT
