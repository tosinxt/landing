const globalForEvents = globalThis

function createStore() {
  return {
    events: [
      {
        id: 1,
        slug: 'crack-the-code-global-remote-tech-job',
        title: 'Crack the Code to Global Remote Tech Job',
        type: 'Live Webinar',
        organizer: 'NADIRON',
        speaker: 'TosinXt (Remote Tech Career Coach / Software Developer)',
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
        price: 0,
        currency: 'NGN',
        registrationType: 'on_site'
      }
    ],
    registrations: [],
    eventProposals: []
  }
}

export function getStore() {
  if (!globalForEvents.__NADIRON_EVENTS_STORE__) {
    globalForEvents.__NADIRON_EVENTS_STORE__ = createStore()
  }
  return globalForEvents.__NADIRON_EVENTS_STORE__
}

