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
      renderItem={({ node }) => <article>{node.data?.title}</article>}
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
| `gap?` | `string` | group 节点内部 grid 容器（`.rng-grid`）的默认 CSS `gap` |
| `renderItem?` | `(props: RenderItemProps<T>) => ReactNode` | 渲染 item 节点 |
| `renderGroup?` | `(props: RenderGroupProps<T>) => ReactNode` | 渲染 group 节点（接收预渲染的 `children`） |
| `renderNode?` | `(props: RenderNodeProps<T>) => ReactNode` | 包裹每个节点。`oriNode` 是类型对应渲染器的结果 |
| `onNodeClick?` | `(node: LayoutNode<T>) => void` | 节点点击回调 |

所有 `HTMLAttributes<HTMLDivElement>` 属性均接受并透传到根元素。

### 渲染回调

所有回调接收 `node`（解析后的 `LayoutNode`）、`depth`、`index` 和 `oriNode`。`renderGroup` 和 `renderNode` 还接收预渲染的 `children`。

- `renderItem`：`oriNode` 为 `null`
- `renderGroup`：`oriNode` 为默认 group 渲染结果，也就是内部的子 grid 包裹层
- `renderNode`：在 `renderItem` / `renderGroup` 之后执行，拿到它们的结果作为 `oriNode`
- 虚拟 group 节点会跳过 `renderGroup` 和 `renderNode`，仅渲染其子 grid

```tsx
// 只渲染 items
<NestedGrid nodes={nodes} renderItem={({ node }) => <Card data={node.data} />} />

// 带自定义 chrome 的 group
<NestedGrid
  nodes={nodes}
  renderGroup={({ node, children }) => (
    <section>
      <h2>{node.data?.title}</h2>
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

### Gap

```tsx
<NestedGrid
  nodes={nodes}
  gap="12px"
/>
```

### 从 `@nested-grid/core` 重导出

`@nested-grid/react` 同时重导出 `@nested-grid/core` 的 `createLayout`、`toColumns`、`GridNode`、`LayoutNode` 和 `CreateLayoutOptions`，这样可以只从一个包里导入渲染器和布局类型。

## HTML 输出

每个节点都会渲染一个外层 grid item 包裹节点；group 节点还会额外渲染一个内部 grid 容器来承载子节点：

```html
<div class="rng-root">
  <div
    class="rng-node rng-node-group rng-depth-0 rng-depth-even"
    data-id="root"
  >
    <div
      class="rng-grid"
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
</div>
```

外层 `.rng-node` 使用 `gridItemStyle`，内层 `.rng-grid` 使用 `gridContainerStyle`。可用纯 CSS、Tailwind、CSS Modules 或任何设计系统来写样式。

## 更多示例

[examples 目录](https://github.com/XDXXDXXDXXDXXDX/nested-grid/tree/main/examples/src) 中有 15+ 真实布局示例 —— 仪表盘、看板、便当盒布局、杂志布局、照片墙、问题追踪器等。每个不超过 100 行。

## License

MIT
