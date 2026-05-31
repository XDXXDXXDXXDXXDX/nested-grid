import { createLayout, type LayoutNode } from '@nested-grid/core'
import { type ReactNode, useMemo } from 'react'
import type { NestedGridProps, RenderGroupProps, RenderItemProps, RenderNodeProps } from './types'

const cx = (...args: (string | false | undefined | null)[]) => args.filter(Boolean).join(' ')

export function NestedGrid<T = unknown, N extends LayoutNode<T> = LayoutNode<T>>({
  nodes,
  defaultColumns,
  gap,
  renderNode,
  renderItem,
  renderGroup,
  onNodeClick,
  className,
  style,
  ...restProps
}: NestedGridProps<T, N>) {
  const layout = useMemo(
    () =>
      createLayout(nodes, {
        defaultColumns,
        defaultGap: gap,
      }),
    [nodes, defaultColumns, gap],
  )

  return (
    <div className={cx('rng-root', className)} style={style} {...restProps}>
      {layout.map((node) => (
        <RenderNode<T, N>
          key={node.id}
          node={node as N}
          renderNode={renderNode}
          renderItem={renderItem}
          renderGroup={renderGroup}
          onNodeClick={onNodeClick}
        />
      ))}
    </div>
  )
}

function RenderNode<T, N extends LayoutNode<T> = LayoutNode<T>>({
  node,
  renderNode,
  renderItem,
  renderGroup,
  onNodeClick,
}: {
  node: N
  renderNode?: (props: RenderNodeProps<T, N>) => ReactNode
  renderItem?: (props: RenderItemProps<T, N>) => ReactNode
  renderGroup?: (props: RenderGroupProps<T, N>) => ReactNode
  onNodeClick?: (node: N) => void
}) {
  const { type, depth, index, id, children, gridItemStyle, gridContainerStyle } = node
  const isGroup = type === 'group'

  // Grid-item wrapper: handles positioning inside the parent grid.
  const gridItemProps = {
    className: cx(
      'rng-node',
      `rng-node-${type}`,
      `rng-depth-${depth}`,
      depth % 2 === 0 ? 'rng-depth-even' : 'rng-depth-odd',
    ),
    style: gridItemStyle,
    'data-id': id,
    onClick: onNodeClick
      ? (e: React.MouseEvent) => {
          e.stopPropagation()
          onNodeClick(node)
        }
      : undefined,
  }

  // Grid-container: handles layout of this node's children.
  const gridContainerProps = {
    className: 'rng-grid',
    style: gridContainerStyle,
  }

  // Build pre-wrapped children (grid container + rendered items)
  const childNodes = isGroup ? (
    <div {...gridContainerProps}>
      {children?.map((child) => (
        <RenderNode<T, N>
          key={child.id}
          node={child as N}
          renderNode={renderNode}
          renderItem={renderItem}
          renderGroup={renderGroup}
          onNodeClick={onNodeClick}
        />
      ))}
    </div>
  ) : null

  // Step 1: build oriNode via renderItem / renderGroup.
  // Virtual group nodes skip renderGroup — they are transparent layout containers.
  let oriNode: ReactNode
  if (isGroup) {
    oriNode = node.virtual
      ? childNodes
      : renderGroup
        ? renderGroup({ node, depth, index, children: childNodes, oriNode: childNodes })
        : childNodes
  } else {
    oriNode = renderItem ? renderItem({ node, depth, index, oriNode: null }) : null
  }

  // Step 2: renderNode wraps the result (skipped for virtual nodes).
  const innerContent = node.virtual
    ? oriNode
    : renderNode
      ? renderNode({ node, depth, index, children: childNodes, oriNode })
      : oriNode

  return <div {...gridItemProps}>{innerContent}</div>
}
