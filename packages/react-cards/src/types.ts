import type { CSSProperties } from 'react'

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
