import type { GridNode } from '@nested-grid/core'

export interface PlanData {
  name: string
  price: string
  period: string
  cta: string
  highlighted?: boolean
  features: string[]
}

const plans: PlanData[] = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    cta: 'Start free trial',
    features: [
      'Up to 5 team members',
      '10 GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    cta: 'Start free trial',
    highlighted: true,
    features: [
      'Unlimited team members',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'SSO authentication',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    cta: 'Contact sales',
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Dedicated support',
      'Custom SLA',
      'On-premise deployment',
      'Audit logs',
      'Advanced security',
    ],
  },
]

export const nodes: GridNode<PlanData>[] = [
  {
    id: 'pricing',
    columns: 3,
    virtual: true,
    children: plans.map((plan) => ({
      id: plan.name.toLowerCase(),
      data: plan,
      children: plan.features.map((feature, i) => ({
        id: `${plan.name.toLowerCase()}-f${i}`,
        data: { ...plan, name: feature },
      })),
    })),
  },
]
