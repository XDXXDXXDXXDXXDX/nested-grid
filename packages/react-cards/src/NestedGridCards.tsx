import type { NestedGridProps } from '@nested-grid/react'
import { NestedGrid } from '@nested-grid/react'
import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { CardGroup } from './CardGroup'
import { CardItem } from './CardItem'
import { themeToVars } from './theme'
import type {
  CardGridNode,
  CardLayoutNode,
  CardRenderGroupProps,
  CardRenderItemProps,
  CardTheme,
} from './types'

export interface NestedGridCardsProps<T = unknown>
  extends Omit<NestedGridProps<T>, 'nodes' | 'renderItem' | 'renderGroup' | 'onNodeClick'> {
  nodes: CardGridNode<T>[]
  theme?: CardTheme
  showContent?: boolean
  itemOnlyGap?: string | string[]
  renderItem?: (props: CardRenderItemProps<T>) => ReactNode
  renderGroup?: (props: CardRenderGroupProps<T>) => ReactNode
  onNodeClick?: (node: CardLayoutNode<T>) => void
}

export function NestedGridCards<T = unknown>({
  theme,
  showContent,
  itemOnlyGap,
  nodes,
  renderItem,
  renderGroup,
  onNodeClick,
  style,
  ...rest
}: NestedGridCardsProps<T>) {
  const resolvedNodes = useMemo(() => {
    if (!itemOnlyGap) return nodes
    const resolveGap = (depth: number) =>
      Array.isArray(itemOnlyGap)
        ? itemOnlyGap[Math.min(depth, itemOnlyGap.length - 1)]
        : itemOnlyGap

    const walk = (list: CardGridNode<T>[], depth: number): CardGridNode<T>[] =>
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
        const cardNode = props.node as CardLayoutNode<T>
        const oriNode = <CardItem node={cardNode} showContent={showContent} />
        return renderItem ? renderItem({ ...props, node: cardNode, oriNode }) : oriNode
      }}
      renderGroup={(props) => {
        const cardNode = props.node as CardLayoutNode<T>
        const oriNode = <CardGroup node={cardNode}>{props.children}</CardGroup>
        return renderGroup ? renderGroup({ ...props, node: cardNode, oriNode }) : oriNode
      }}
      onNodeClick={onNodeClick && ((node) => onNodeClick(node as CardLayoutNode<T>))}
      {...rest}
    />
  )
}
