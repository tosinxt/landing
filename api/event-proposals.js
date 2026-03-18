import { getStore } from './_store.js'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company, idea } = req.body || {}
  if (!name || !email || !idea) {
    return res.status(400).json({ error: 'Name, email and event idea are required' })
  }

  const store = getStore()
  const proposal = {
    id: store.eventProposals.length + 1,
    name,
    email,
    company: company || '',
    idea,
    createdAt: new Date().toISOString()
  }
  store.eventProposals.push(proposal)

  return res.status(200).json({
    message: 'Event proposal received (mock)',
    proposal
  })
}

