import type { GridNode } from '@nested-grid/core'

export interface MemberData {
  name: string
  role: string
  email: string
  avatar: string
}

const member = (id: string, name: string, role: string, email: string): GridNode<MemberData> => ({
  id,
  data: {
    name,
    role,
    email,
    avatar: name
      .split(' ')
      .map((s) => s[0])
      .join(''),
  },
})

export const nodes: GridNode<MemberData>[] = [
  {
    id: 'company',
    data: { name: 'Acme Corp', role: '', email: '', avatar: '' },
    children: [
      {
        id: 'exec',
        data: { name: 'Executive', role: '', email: '', avatar: '' },
        columns: 2,
        children: [
          member('ceo', 'Sarah Chen', 'CEO', 'sarah@acme.com'),
          member('cto', 'Marcus Rivera', 'CTO', 'marcus@acme.com'),
        ],
      },
      {
        id: 'engineering',
        data: { name: 'Engineering', role: '', email: '', avatar: '' },
        columns: 2,
        children: [
          {
            id: 'frontend',
            data: { name: 'Frontend', role: '', email: '', avatar: '' },
            children: [
              member('alice', 'Alice Park', 'Senior Engineer', 'alice@acme.com'),
              member('bob', 'Bob Kumar', 'Engineer', 'bob@acme.com'),
              member('eve', 'Eve Johansson', 'Engineer', 'eve@acme.com'),
            ],
          },
          {
            id: 'backend',
            data: { name: 'Backend', role: '', email: '', avatar: '' },
            children: [
              member('dave', 'Dave Liu', 'Staff Engineer', 'dave@acme.com'),
              member('frank', 'Frank Okonkwo', 'Engineer', 'frank@acme.com'),
            ],
          },
          {
            id: 'platform',
            data: { name: 'Platform', role: '', email: '', avatar: '' },
            children: [
              member('grace', 'Grace Miller', 'Engineer', 'grace@acme.com'),
              member('henry', 'Henry Zhao', 'DevOps Lead', 'henry@acme.com'),
            ],
          },
        ],
      },
      {
        id: 'design',
        data: { name: 'Design', role: '', email: '', avatar: '' },
        columns: 2,
        children: [
          member('iris', 'Iris Nakamura', 'Design Director', 'iris@acme.com'),
          member('jack', 'Jack Williams', 'Product Designer', 'jack@acme.com'),
          member('kate', 'Kate Andersson', 'UX Researcher', 'kate@acme.com'),
        ],
      },
      {
        id: 'g-and-a',
        data: { name: 'G&A', role: '', email: '', avatar: '' },
        columns: 2,
        children: [
          member('lisa', 'Lisa Thompson', 'VP Finance', 'lisa@acme.com'),
          member('mike', 'Mike Patel', 'Legal Counsel', 'mike@acme.com'),
          member('nina', 'Nina Okafor', 'HR Lead', 'nina@acme.com'),
        ],
      },
    ],
  },
]
