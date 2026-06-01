import type { NestedGridProps } from '@nested-grid/react'
import { NestedGrid } from '@nested-grid/react'
import { useMemo } from 'react'
import { CardGroup } from './CardGroup'
import { CardItem } from './CardItem'
import { themeToVars } from './theme'
import type { CardGridNode, CardLayoutNode, CardTheme } from './types'

export interface NestedGridCardsProps<T = unknown>
  extends Omit<NestedGridProps<T, CardLayoutNode<T>>, 'nodes'> {
  nodes: CardGridNode<T>[]
  theme?: CardTheme
  showContent?: boolean
  itemOnlyGap?: string
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
    const walk = (list: CardGridNode<T>[]): CardGridNode<T>[] =>
      list.map((node) => {
        if (!node.children) return node
        const childrenAllItems = node.children.every((child) => !child.children)
        return {
          ...node,
          gap: childrenAllItems ? itemOnlyGap : node.gap,
          children: walk(node.children),
        }
      })

    return walk(nodes)
  }, [nodes, itemOnlyGap])

  return (
    <NestedGrid<T, CardLayoutNode<T>>
      nodes={resolvedNodes}
      style={{ ...themeToVars(theme), ...style }}
      renderItem={
        renderItem
          ? (props) => {
              const oriNode = <CardItem node={props.node} showContent={showContent} />
              return renderItem({ ...props, oriNode })
            }
          : (props) => <CardItem node={props.node} showContent={showContent} />
      }
      renderGroup={
        renderGroup
          ? (props) => {
              const oriNode = <CardGroup node={props.node}>{props.children}</CardGroup>
              return renderGroup({ ...props, oriNode })
            }
          : (props) => <CardGroup node={props.node}>{props.children}</CardGroup>
      }
      {...rest}
    />
  )
}
