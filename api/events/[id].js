import { getStore } from '../_store.js'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const id = Number(req.query?.id)
  if (!Number.isFinite(id)) return res.status(400).json({ error: 'Invalid event id' })

  const store = getStore()
  const event = store.events.find((e) => e.id === id)
  if (!event) return res.status(404).json({ error: 'Event not found' })

  return res.status(200).json(event)
}

