import type { GridNode, LayoutNode } from '@nested-grid/core'
import type { RenderGroupProps, RenderItemProps } from '@nested-grid/react'
import type { CSSProperties, ReactNode } from 'react'

/** Data shape expected by CardGroup and CardItem. Extend this for app-specific fields. */
export interface CardData {
  title?: string
  content?: string
}

/**
 * GridNode with `title` and `content` at the top level (sibling to `id`).
 * Pass this to NestedGridCards instead of the base GridNode.
 */
export interface CardGridNode<T = unknown> extends Omit<GridNode<T>, 'children'> {
  title?: string
  content?: string
  children?: CardGridNode<T>[]
}

/**
 * LayoutNode with `title` and `content` at the top level.
 * Passed to CardGroup and CardItem render props.
 */
export interface CardLayoutNode<T = unknown> extends LayoutNode<T> {
  title?: string
  content?: string
}

/** renderItem callback for NestedGridCards — node is a CardLayoutNode with title/content. */
export interface CardRenderItemProps<T = unknown> extends RenderItemProps<T> {
  node: CardLayoutNode<T>
}

/** renderGroup callback for NestedGridCards — node is a CardLayoutNode with title/content. */
export interface CardRenderGroupProps<T = unknown> extends RenderGroupProps<T> {
  node: CardLayoutNode<T>
  children: ReactNode
}

export interface CardTheme {
  // --- group ---
  groupBg?: string
  groupBgEven?: string
  groupBgOdd?: string
  groupBorder?: string
  groupBorderRadius?: string
  groupTitleColor?: string
  groupTitleFontSize?: string
  groupTitleFontWeight?: string
  groupPadding?: string
  groupHeaderPadding?: string
  groupBodyPadding?: string
  // --- item ---
  itemBg?: string
  itemBorder?: string
  itemBorderRadius?: string
  itemShadow?: string
  itemPadding?: string
  itemHoverBg?: string
  itemHoverColor?: string
  itemTitleFontSize?: string
  itemTitleFontWeight?: string
  // --- content (expandable item body) ---
  contentColor?: string
  contentFontSize?: string
  contentLineHeight?: string
  contentPaddingTop?: string
  contentAnimDuration?: string
}

export interface CardStyles {
  header?: CSSProperties
  body?: CSSProperties
}
