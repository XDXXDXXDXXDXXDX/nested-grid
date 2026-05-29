import type { Key } from './utils'

export interface GridNode<T = unknown> {
  id: Key
  children?: GridNode<T>[]
  data?: T
  /** Syntax sugar: shorthand for grid-template-columns on this node's grid container */
  columns?: number | string
  /** Syntax sugar: shorthand for grid-column: span N on this node as a grid item */
  span?: number
  /** Syntax sugar: shorthand for grid-row: span N on this node as a grid item */
  rowSpan?: number
  /** Syntax sugar: shorthand for gap on this node's grid container */
  gap?: string
  /** Extra styles applied to the grid container (the element that wraps children) */
  gridContainerStyle?: Record<string, string>
  /** Extra styles applied to the grid item (the element positioned in the parent grid) */
  gridItemStyle?: Record<string, string>
  /** When true, the group node is transparent — children are laid out directly without visual chrome */
  virtual?: boolean
}

export interface LayoutNode<T = unknown> {
  id: Key
  type: 'group' | 'item'
  depth: number
  index: number
  children?: LayoutNode<T>[]
  /** Computed CSS styles for the grid container (wraps children with display:grid etc.) */
  gridContainerStyle: Record<string, string | undefined>
  /** Computed CSS styles for the grid item (positioned inside the parent grid) */
  gridItemStyle: Record<string, string | undefined>
  /** When true, the group node is a transparent layout container — no visual chrome is rendered. Defaults to false. */
  virtual: boolean
  /** Reference to the parent LayoutNode. undefined for root-level nodes. */
  parent?: LayoutNode<T>
  data?: T
}

export interface CreateLayoutOptions {
  defaultColumns?: number | string
  /** Default gap for grid containers. Array values map to depth (last value repeats). */
  defaultGap?: string | string[]
  /** Default styles for every grid container. Merged at lowest priority. */
  defaultGridContainerStyle?: Record<string, string | undefined>
  /** Default styles for every grid item. Merged at lowest priority. */
  defaultGridItemStyle?: Record<string, string | undefined>
}
