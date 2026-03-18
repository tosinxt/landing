import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const events = [
  {
    id: 1,
    slug: 'crack-the-code-global-remote-tech-job',
    title: 'Crack the Code to Global Remote Tech Job',
    type: 'Live Webinar',
    organizer: 'NADIRON',
    speaker: 'TosinXt (CEO Nadiron / Software Developer)',
    date: '2026-03-28',
    displayDate: 'Saturday, March 28th',
    time: '6:00 PM WAT',
    timezone: 'WAT',
    location: 'Online (Google Meet)',
    description:
      'Learn the step-by-step strategy to get noticed, get interviewed, and get hired by global tech companies.',
    bullets: [
      'Optimize for Visibility: Make your LinkedIn and GitHub attract recruiters.',
      'Find Hidden Remote Jobs: Discover where global companies are hiring.',
      'Smart Outreach Strategy: How to message recruiters and hiring managers directly.',
      'Ace the Interview: The soft skills remote companies expect.'
    ],
    price: 0, // mock price (adjust later)
    currency: 'NGN',
    registrationType: 'on_site'
  }
];

const registrations = [];
const eventProposals = [];

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/events', (_req, res) => {
  res.json(events);
});

app.get('/events/:id', (req, res) => {
  const id = Number(req.params.id);
  const event = events.find((e) => e.id === id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(event);
});

app.post('/events/:id/register', (req, res) => {
  const id = Number(req.params.id);
  const event = events.find((e) => e.id === id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Mock "payment" – in real life, you would integrate a payment gateway here.
  const registration = {
    id: registrations.length + 1,
    eventId: event.id,
    name,
    email,
    status: 'paid',
    createdAt: new Date().toISOString()
  };
  registrations.push(registration);

  res.json({
    message: 'Registration successful (mock payment)',
    registration
  });
});

app.post('/event-proposals', (req, res) => {
  const { name, email, company, idea } = req.body || {};

  if (!name || !email || !idea) {
    return res.status(400).json({ error: 'Name, email and event idea are required' });
  }

  const proposal = {
    id: eventProposals.length + 1,
    name,
    email,
    company: company || '',
    idea,
    createdAt: new Date().toISOString()
  };

  eventProposals.push(proposal);

  res.json({
    message: 'Event proposal received (mock)',
    proposal
  });
});

app.listen(PORT, () => {
  console.log(`Events API listening on http://localhost:${PORT}`);
});

