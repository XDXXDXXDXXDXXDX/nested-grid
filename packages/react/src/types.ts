import type { GridNode, LayoutNode } from '@nested-grid/core'
import type { HTMLAttributes, ReactNode } from 'react'

export interface RenderItemProps<T = unknown, N extends LayoutNode<T> = LayoutNode<T>> {
  node: N
  depth: number
  index: number
  oriNode: ReactNode
}

export interface RenderGroupProps<T = unknown, N extends LayoutNode<T> = LayoutNode<T>> {
  node: N
  depth: number
  index: number
  children: ReactNode | null
  oriNode: ReactNode
}

export interface RenderNodeProps<T = unknown, N extends LayoutNode<T> = LayoutNode<T>> {
  node: N
  depth: number
  index: number
  children: ReactNode | null
  oriNode: ReactNode
}

export interface NestedGridProps<T = unknown, N extends LayoutNode<T> = LayoutNode<T>>
  extends HTMLAttributes<HTMLDivElement> {
  nodes: GridNode<T>[]
  defaultColumns?: number | string
  gap?: string | string[]
  /** Called for every node after renderItem/renderGroup. oriNode = result of item/group render. */
  renderNode?: (props: RenderNodeProps<T, N>) => ReactNode
  /** Called for item nodes. oriNode = default item render. */
  renderItem?: (props: RenderItemProps<T, N>) => ReactNode
  /** Called for group nodes. oriNode = default group render. */
  renderGroup?: (props: RenderGroupProps<T, N>) => ReactNode
  onNodeClick?: (node: N) => void
}
