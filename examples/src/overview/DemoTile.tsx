import { type ReactNode, useEffect, useRef, useState } from 'react'

const DESIGN_W = 900

export function DemoTile({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / DESIGN_W)
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 10,
        border: '1px solid #e5e7eb',
        background: '#ffffff',
        padding: '0px 16px',
      }}
    >
      <div
        style={{
          width: DESIGN_W,
          boxSizing: 'border-box',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}
