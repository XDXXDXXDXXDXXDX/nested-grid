import type { CardGridNode } from '@nested-grid/react-cards'

export interface MemberData {
  role: string
  email: string
  avatar: string
}

const member = (
  id: string,
  name: string,
  role: string,
  email: string,
): CardGridNode<MemberData> => ({
  id,
  title: name,
  data: {
    role,
    email,
    avatar: name
      .split(' ')
      .map((s) => s[0])
      .join(''),
  },
})

export const nodes: CardGridNode<MemberData>[] = [
  {
    id: 'company',
    title: 'Acme Corp',
    data: { role: '', email: '', avatar: '' },
    children: [
      {
        id: 'exec',
        title: 'Executive',
        data: { role: '', email: '', avatar: '' },
        columns: 2,
        children: [
          member('ceo', 'Sarah Chen', 'CEO', 'sarah@acme.com'),
          member('cto', 'Marcus Rivera', 'CTO', 'marcus@acme.com'),
        ],
      },
      {
        id: 'engineering',
        title: 'Engineering',
        data: { role: '', email: '', avatar: '' },
        columns: 2,
        children: [
          {
            id: 'frontend',
            title: 'Frontend',
            data: { role: '', email: '', avatar: '' },
            children: [
              member('alice', 'Alice Park', 'Senior Engineer', 'alice@acme.com'),
              member('bob', 'Bob Kumar', 'Engineer', 'bob@acme.com'),
              member('eve', 'Eve Johansson', 'Engineer', 'eve@acme.com'),
            ],
          },
          {
            id: 'backend',
            title: 'Backend',
            data: { role: '', email: '', avatar: '' },
            children: [
              member('dave', 'Dave Liu', 'Staff Engineer', 'dave@acme.com'),
              member('frank', 'Frank Okonkwo', 'Engineer', 'frank@acme.com'),
            ],
          },
          {
            id: 'platform',
            title: 'Platform',
            data: { role: '', email: '', avatar: '' },
            children: [
              member('grace', 'Grace Miller', 'Engineer', 'grace@acme.com'),
              member('henry', 'Henry Zhao', 'DevOps Lead', 'henry@acme.com'),
            ],
          },
        ],
      },
      {
        id: 'design',
        title: 'Design',
        data: { role: '', email: '', avatar: '' },
        columns: 2,
        children: [
          member('iris', 'Iris Nakamura', 'Design Director', 'iris@acme.com'),
          member('jack', 'Jack Williams', 'Product Designer', 'jack@acme.com'),
          member('kate', 'Kate Andersson', 'UX Researcher', 'kate@acme.com'),
        ],
      },
      {
        id: 'g-and-a',
        title: 'G&A',
        data: { role: '', email: '', avatar: '' },
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
