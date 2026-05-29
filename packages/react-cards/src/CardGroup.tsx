import type { LayoutNode } from '@nested-grid/core'
import type { HTMLAttributes, ReactNode } from 'react'
import { themeToVars } from './theme'
import type { CardStyles, CardTheme } from './types'

export interface CardGroupProps<T = unknown>
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  node: LayoutNode<T>
  theme?: CardTheme
  styles?: CardStyles
  children: ReactNode | null
}

export function CardGroup<T = unknown>({
  node,
  theme,
  styles,
  children,
  className,
  style,
  ...rest
}: CardGroupProps<T>) {
  const data = node.data as Record<string, unknown> | undefined
  const title = data?.title ? String(data.title) : ''

  return (
    <div
      className={['rng-group', className].filter(Boolean).join(' ')}
      style={{ ...themeToVars(theme), ...style }}
      {...rest}
    >
      <div className="rng-group-header" style={styles?.header}>
        <div className="rng-group-title">{title}</div>
      </div>
      <div className="rng-group-body" style={styles?.body}>
        {children}
      </div>
    </div>
  )
}
