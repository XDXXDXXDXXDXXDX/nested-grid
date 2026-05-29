import type { LayoutNode } from '@nested-grid/core'
import type { HTMLAttributes, ReactNode } from 'react'
import { useState } from 'react'
import { themeToVars } from './theme'
import type { CardStyles, CardTheme } from './types'

export interface CardItemProps<T = unknown> extends HTMLAttributes<HTMLDivElement> {
  node: LayoutNode<T>
  theme?: CardTheme
  styles?: CardStyles
  showContent?: boolean
  titleExtra?: ReactNode | ((props: { expanded: boolean }) => ReactNode)
}

export function CardItem<T = unknown>({
  node,
  theme,
  styles,
  showContent = false,
  titleExtra,
  className,
  style,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: CardItemProps<T>) {
  const [hover, setHover] = useState(false)
  const data = node.data as Record<string, unknown> | undefined
  const title = data?.title ? String(data.title) : ''
  const content = data?.content ? String(data.content) : ''
  const hasContent = content.length > 0
  const expanded = showContent || (hover && hasContent)

  return (
    <div
      className={['rng-item', hover ? 'rng-item-active' : '', className].filter(Boolean).join(' ')}
      style={{ ...themeToVars(theme), ...style }}
      onMouseEnter={(e) => {
        setHover(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setHover(false)
        onMouseLeave?.(e)
      }}
      {...rest}
    >
      <div className="rng-item-header" style={styles?.header}>
        <div className="rng-item-title">{title}</div>
        {renderTitleExtra(titleExtra, expanded)}
      </div>
      {hasContent && (
        <div className={`rng-item-body${expanded ? ' rng-item-body-expanded' : ''}`}>
          <div className="rng-item-content" style={styles?.body}>
            {content}
          </div>
        </div>
      )}
    </div>
  )
}

function renderTitleExtra(extra: CardItemProps['titleExtra'], expanded: boolean): ReactNode {
  if (!extra) return null
  if (typeof extra === 'function')
    return <div className="rng-item-title-extra">{extra({ expanded })}</div>
  return <div className="rng-item-title-extra">{extra}</div>
}
