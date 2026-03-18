import { getStore } from '../../_store.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const id = Number(req.query?.id)
  if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid event id' })

  const store = getStore()
  const event = store.events.find((e) => e.id === id)
  if (!event) return res.status(404).json({ error: 'Event not found' })

  const { name, email } = req.body || {}
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' })

  const registration = {
    id: store.registrations.length + 1,
    eventId: event.id,
    name,
    email,
    status: 'paid',
    createdAt: new Date().toISOString()
  }
  store.registrations.push(registration)

  return res.status(200).json({
    message: 'Registration successful (mock payment)',
    registration
  })
}

