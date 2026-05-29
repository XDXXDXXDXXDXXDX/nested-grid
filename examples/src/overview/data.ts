import type { GridNode } from '@nested-grid/core'
import type { ComponentType } from 'react'
import { Architecture } from '../architecture'
import { BentoGrid } from '../bentoGrid'
import { ColorTokens } from '../colorTokens'
import { Dashboard } from '../dashboard'
import { IssueTracker } from '../issueTracker'
import { Kanban } from '../kanban'
import { Magazine } from '../magazine'
import { NestedBlocks } from '../nestedBlocks'
import { OrgChart } from '../orgChart'
import { PhotoWall } from '../photoWall'
import { PricingTable } from '../pricingTable'
import { ProductCatalog } from '../productCatalog'

import { SettingsPanel } from '../settingsPanel'
import { Timeline } from '../timeline'

export interface OverviewData {
  Component: ComponentType
}

export const reactNodes: GridNode<OverviewData>[] = [
  {
    id: 'react',
    columns: 4,
    virtual: true,
    gridContainerStyle: { gridAutoRows: '200px' },
    children: [
      { id: 'pricing', data: { Component: PricingTable }, rowSpan: 2 },
      { id: 'nestedBlocks', span: 2, rowSpan: 3, data: { Component: NestedBlocks } },
      { id: 'dashboard', data: { Component: Dashboard } },
      { id: 'photo', data: { Component: PhotoWall }, rowSpan: 3 },
      { id: 'issues', data: { Component: IssueTracker } },
      { id: 'magazine', span: 2, rowSpan: 2, data: { Component: Magazine } },
      { id: 'kanban', data: { Component: Kanban } },
      { id: 'bento', data: { Component: BentoGrid } },
    ],
  },
]

export const cardsNodes: GridNode<OverviewData>[] = [
  {
    id: 'cards',
    columns: 6,
    virtual: true,
    gridContainerStyle: { gridAutoRows: '200px' },
    children: [
      { id: 'catalog', data: { Component: ProductCatalog }, span: 3, rowSpan: 2 },
      { id: 'org', data: { Component: OrgChart }, span: 2, rowSpan: 2 },
      { id: 'settings', data: { Component: SettingsPanel } },
      { id: 'tokens', data: { Component: ColorTokens } },
      { id: 'arch', data: { Component: Architecture }, span: 3, rowSpan: 2 },
      { id: 'timeline', data: { Component: Timeline }, span: 3, rowSpan: 2 },
    ],
  },
]
