# @nested-grid/react-cards

**Styled card UI for JSON-driven CSS Grid layouts.**

Describe your layout as a tree of plain objects — `columns`, `span`, `gap`. Drop in `<NestedGridCards>` and get styled `<CardGroup>` / `<CardItem>` cards rendered in nested CSS Grid, with titles, hover states, expandable content, and a 30-token theme system you control via CSS custom properties. Zero CSS to write, fully themeable.

Use it for product catalogs, settings panels, org charts, architecture diagrams, color token palettes, timelines — any hierarchical data that belongs in cards.

![demo](./demo.png)

> **Under the hood:** [`@nested-grid/core`](https://www.npmjs.com/package/@nested-grid/core) — zero-dependency layout engine that computes CSS Grid styles from tree data.  
> **Headless alternative:** [`@nested-grid/react`](https://www.npmjs.com/package/@nested-grid/react) — same layout engine, but you bring all the styling via `renderItem` / `renderGroup` / `renderNode`. Use this if you want full control over every pixel.

## Install

```bash
pnpm add @nested-grid/react-cards
```

Import the CSS:

```ts
import "@nested-grid/react-cards/styles.css";
```

## Quick start

```tsx
import { NestedGridCards, type CardGridNode } from "@nested-grid/react-cards";
import "@nested-grid/react-cards/styles.css";

const nodes: CardGridNode[] = [
  {
    id: "fruits",
    title: "Fruits",
    children: [
      { id: "apple", title: "Apple" },
      { id: "banana", title: "Banana" },
    ],
  },
];

function App() {
  return <NestedGridCards nodes={nodes} gap="12px" />;
}
```

## API

### `<NestedGridCards>`

Extends all props from `<NestedGrid>`, including `defaultColumns`, `gap`, `renderItem`, `renderGroup`, `renderNode`, `onNodeClick`, `className`, `style`, and other root `HTMLAttributes<HTMLDivElement>`. Additional props:

| Prop           | Type                 | Description                                                                                                      |
| -------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `theme?`       | `CardTheme`          | Theme overrides for cards                                                                                        |
| `showContent?` | `boolean`            | Whether to expand all item content by default                                                                    |
| `itemOnlyGap?` | `string` | Gap applied to groups whose children are all items. Think: tighter spacing inside leaf groups vs between groups. |

When you provide `renderItem` or `renderGroup`, `NestedGridCards` still builds the default `<CardItem>` / `<CardGroup>` for you and passes it in `oriNode`.

### `<CardItem>`

Styled item card. Accepts all `HTMLAttributes<HTMLDivElement>` props plus:

| Prop           | Type                                          | Description                                            |
| -------------- | --------------------------------------------- | ------------------------------------------------------ |
| `node`         | `CardLayoutNode<T>`                           | The layout node with `title` and `content` at top level |
| `theme?`       | `CardTheme`                                   | Theme overrides converted to CSS variables on this card |
| `styles?`      | `CardStyles`                                  | Style overrides: `header` and `body` CSS properties    |
| `showContent?` | `boolean`                                     | Expand content body                                    |
| `titleExtra?`  | `ReactNode \| ((state: { expanded: boolean }) => ReactNode)` | Extra element in the title row                         |

### `<CardGroup>`

Styled group card. Accepts all `HTMLAttributes<HTMLDivElement>` props except `children`, plus:

| Prop       | Type            | Description           |
| ---------- | --------------- | --------------------- |
| `node`     | `CardLayoutNode<T>` | The layout node with `title` at top level |
| `theme?`   | `CardTheme`     | Theme overrides converted to CSS variables on this card |
| `styles?`  | `CardStyles`    | Style overrides: `header` and `body` CSS properties |
| `children` | `ReactNode \| null` | Pre-rendered children |

### Types

| Export | Description |
| --- | --- |
| `CardData` | Minimal data shape with optional `title` and `content` |
| `CardGridNode<T>` | `GridNode<T>` variant with `title` and `content` at the top level |
| `CardLayoutNode<T>` | `LayoutNode<T>` variant with `title` and `content` at the top level |
| `CardStyles` | Per-section style overrides: `header` and `body` |
| `CardTheme` | Theme token object consumed by `themeToVars` and card components |

### Re-exports

`@nested-grid/react-cards` also re-exports:

- From `@nested-grid/core`: `createLayout`, `toColumns`, `GridNode`, `LayoutNode`, `CreateLayoutOptions`
- From `@nested-grid/react`: `NestedGrid`, `NestedGridProps`, `RenderItemProps`, `RenderGroupProps`, `RenderNodeProps`

### `CardTheme`

| Field                                                      | Default | Description                                    |
| ---------------------------------------------------------- | ------- | ---------------------------------------------- |
| `groupBg` / `groupBgEven` / `groupBgOdd`                   | —       | Group background colors (alternating by depth) |
| `groupBorder`                                              | —       | Group border                                   |
| `groupBorderRadius`                                        | —       | Group border radius                            |
| `groupTitleColor`                                          | —       | Group title text color                         |
| `groupTitleFontSize` / `groupTitleFontWeight`              | —       | Group title typography                         |
| `groupPadding` / `groupHeaderPadding` / `groupBodyPadding` | —       | Group spacing                                  |
| `itemBg`                                                   | —       | Item background                                |
| `itemBorder`                                               | —       | Item border                                    |
| `itemBorderRadius`                                         | —       | Item border radius                             |
| `itemShadow`                                               | —       | Item box shadow                                |
| `itemPadding`                                              | —       | Item padding                                   |
| `itemHoverBg` / `itemHoverColor`                           | —       | Item hover state                               |
| `itemTitleFontSize` / `itemTitleFontWeight`                | —       | Item title typography                          |
| `contentColor` / `contentFontSize` / `contentLineHeight`   | —       | Expandable content body                        |
| `contentPaddingTop`                                        | —       | Content top padding                            |
| `contentAnimDuration`                                      | —       | Expand/collapse animation duration             |

### `themeToVars(theme?)`

Converts a `CardTheme` object to CSS custom property overrides. Used internally by `NestedGridCards`.

```ts
import { themeToVars } from '@nested-grid/react-cards'

<div style={themeToVars({ groupTitleColor: '#4338ca' })}>
  <NestedGridCards nodes={nodes} />
</div>
```

## itemOnlyGap

When a group contains only items (no nested groups), `itemOnlyGap` overrides the default gap. This creates a visual hierarchy where sibling groups are spaced apart but leaf items within a group are closer together.

```tsx
<NestedGridCards
  nodes={nodes}
  gap="16px" // space between groups
  itemOnlyGap="4px" // space between items in leaf groups
/>
```

## More examples

15+ real-world layouts in the [examples directory](https://github.com/XDXXDXXDXXDXXDX/nested-grid/tree/main/examples/src) — pricing table, kanban board, magazine layout, org chart, photo wall, color token palette, and more. Each under 100 lines.

## License

MIT
