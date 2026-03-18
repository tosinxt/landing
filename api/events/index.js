import { getStore } from '../_store.js'

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const store = getStore()
  return res.status(200).json(store.events)
}

