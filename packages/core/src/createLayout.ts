import type { CreateLayoutOptions, GridNode, LayoutNode } from './types'
import { toColumns } from './utils'

interface ResolvedOptions {
  defaultGridContainerStyle: Record<string, string | undefined>
  defaultGridItemStyle: Record<string, string | undefined>
  defaultGap: string | undefined
}

export function createLayout<T = unknown>(
  nodes: GridNode<T>[],
  options?: CreateLayoutOptions,
): LayoutNode<T>[] {
  const resolved: ResolvedOptions = {
    defaultGridContainerStyle: resolveContainerDefaults(options),
    defaultGridItemStyle: options?.defaultGridItemStyle ?? {},
    defaultGap: options?.defaultGap,
  }
  return nodes.map((node, i) => processNode(node, 0, i, undefined, resolved))
}

function resolveContainerDefaults(
  options?: CreateLayoutOptions,
): Record<string, string | undefined> {
  const style: Record<string, string | undefined> = { ...options?.defaultGridContainerStyle }
  if (options?.defaultColumns !== undefined) {
    style.gridTemplateColumns = toColumns(options.defaultColumns)
  }
  return style
}

function processNode<T>(
  node: GridNode<T>,
  depth: number,
  index: number,
  parent: LayoutNode<T> | undefined,
  options: ResolvedOptions,
): LayoutNode<T> {
  const hasChildren = Array.isArray(node.children)

  // gridItemStyle: how this node is positioned inside its parent grid
  const gridItemStyle: Record<string, string | undefined> = { ...options.defaultGridItemStyle }
  if (node.span !== undefined) gridItemStyle.gridColumn = `span ${node.span}`
  if (node.rowSpan !== undefined) gridItemStyle.gridRow = `span ${node.rowSpan}`
  if (node.gridItemStyle) Object.assign(gridItemStyle, node.gridItemStyle)

  // gridContainerStyle: how this node's children are laid out in a grid
  const gridContainerStyle: Record<string, string | undefined> = {
    display: 'grid',
    ...options.defaultGridContainerStyle,
  }

  if (hasChildren) {
    if (options.defaultGap !== undefined) gridContainerStyle.gap = options.defaultGap
    if (node.columns !== undefined) gridContainerStyle.gridTemplateColumns = toColumns(node.columns)
    if (node.gap !== undefined) gridContainerStyle.gap = node.gap
    if (node.gridContainerStyle) Object.assign(gridContainerStyle, node.gridContainerStyle)
  }

  const {
    children: _rawChildren,
    columns: _columns,
    span: _span,
    rowSpan: _rowSpan,
    gap: _gap,
    gridContainerStyle: _gcs,
    gridItemStyle: _gis,
    virtual: _virtual,
    ...extra
  } = node

  const layoutNode: LayoutNode<T> = {
    ...extra,
    type: hasChildren ? 'group' : 'item',
    depth,
    index,
    gridItemStyle,
    gridContainerStyle,
    virtual: node.virtual ?? false,
    parent,
  }

  if (node.children) {
    layoutNode.children = node.children.map((child, i) =>
      processNode(child, depth + 1, i, layoutNode, options),
    )
  }

  return layoutNode
}
