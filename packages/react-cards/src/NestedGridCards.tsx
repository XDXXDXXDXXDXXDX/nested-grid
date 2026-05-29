import type { NestedGridProps } from '@nested-grid/react'
import { NestedGrid } from '@nested-grid/react'
import { useMemo } from 'react'
import { CardGroup } from './CardGroup'
import { CardItem } from './CardItem'
import { themeToVars } from './theme'
import type { CardTheme } from './types'

export interface NestedGridCardsProps<T = unknown> extends NestedGridProps<T> {
  theme?: CardTheme
  showContent?: boolean
  itemOnlyGap?: string | string[]
}

export function NestedGridCards<T = unknown>({
  theme,
  showContent,
  itemOnlyGap,
  nodes,
  renderItem,
  renderGroup,
  style,
  ...rest
}: NestedGridCardsProps<T>) {
  const resolvedNodes = useMemo(() => {
    if (!itemOnlyGap) return nodes
    const resolveGap = (depth: number) =>
      Array.isArray(itemOnlyGap)
        ? itemOnlyGap[Math.min(depth, itemOnlyGap.length - 1)]
        : itemOnlyGap
    const walk = (list: typeof nodes, depth: number): typeof nodes =>
      list.map((node) => {
        if (!node.children) return node
        const childrenAllItems = node.children.every((child) => !child.children)
        return {
          ...node,
          gap: childrenAllItems ? resolveGap(depth) : node.gap,
          children: walk(node.children, depth + 1),
        }
      })
    return walk(nodes, 0)
  }, [nodes, itemOnlyGap])

  return (
    <NestedGrid
      nodes={resolvedNodes}
      style={{ ...themeToVars(theme), ...style }}
      renderItem={(props) => {
        const oriNode = <CardItem node={props.node} showContent={showContent} />
        return renderItem ? renderItem({ ...props, oriNode }) : oriNode
      }}
      renderGroup={(props) => {
        const oriNode = <CardGroup node={props.node}>{props.children}</CardGroup>
        return renderGroup ? renderGroup({ ...props, oriNode }) : oriNode
      }}
      {...rest}
    />
  )
}
