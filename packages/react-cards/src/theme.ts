import type { CardTheme } from './types'

const map: Record<string, string> = {
  groupBg: '--rng-group-bg',
  groupBgEven: '--rng-group-bg-even',
  groupBgOdd: '--rng-group-bg-odd',
  groupBorder: '--rng-group-border',
  groupBorderRadius: '--rng-group-border-radius',
  groupTitleColor: '--rng-group-title-color',
  groupTitleFontSize: '--rng-group-title-font-size',
  groupTitleFontWeight: '--rng-group-title-font-weight',
  groupPadding: '--rng-group-padding',
  groupHeaderPadding: '--rng-group-header-padding',
  groupBodyPadding: '--rng-group-body-padding',
  itemBg: '--rng-item-bg',
  itemBorder: '--rng-item-border',
  itemBorderRadius: '--rng-item-border-radius',
  itemShadow: '--rng-item-shadow',
  itemPadding: '--rng-item-padding',
  itemHoverBg: '--rng-item-hover-bg',
  itemHoverColor: '--rng-item-hover-color',
  itemTitleFontSize: '--rng-item-title-font-size',
  itemTitleFontWeight: '--rng-item-title-font-weight',
  contentColor: '--rng-content-color',
  contentFontSize: '--rng-content-font-size',
  contentLineHeight: '--rng-content-line-height',
  contentPaddingTop: '--rng-content-padding-top',
  contentAnimDuration: '--rng-content-anim-duration',
}

export function themeToVars(theme?: CardTheme): Record<string, string> {
  if (!theme) return {}
  const vars: Record<string, string> = {}
  for (const key of Object.keys(map)) {
    const value = theme[key as keyof CardTheme]
    if (value) vars[map[key]] = value
  }
  return vars
}
