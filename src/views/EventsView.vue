<script setup>
import { computed, ref } from 'vue'
import webinarImage from '@/assets/WEBINAR.jpg'

const events = ref([
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
    image: 'WEBINAR'
  }
])

const hostName = ref('')
const hostEmail = ref('')
const hostCompany = ref('')
const hostIdea = ref('')
const hostSubmitting = ref(false)
const hostSuccess = ref('')
const hostError = ref('')

const orderedEvents = computed(() => {
  return [...events.value].sort((a, b) => (a.date || '').localeCompare(b.date || ''))
})

const submitHostProposal = async () => {
  hostError.value = ''
  hostSuccess.value = ''

  if (!hostName.value || !hostEmail.value || !hostIdea.value) {
    hostError.value = 'Name, email and event idea are required.'
    return
  }

  hostSubmitting.value = true
  try {
    const subject = encodeURIComponent('Host Nadiron Event')
    const body = encodeURIComponent(
      [
        `Name: ${hostName.value}`,
        `Email: ${hostEmail.value}`,
        hostCompany.value ? `Company/Community: ${hostCompany.value}` : '',
        '',
        'Event Idea:',
        hostIdea.value
      ]
        .filter(Boolean)
        .join('\n')
    )
    window.location.href = `mailto:hello@nadiron.com?subject=${subject}&body=${body}`
    hostSuccess.value = 'Opening your email client…'
    hostName.value = ''
    hostEmail.value = ''
    hostCompany.value = ''
    hostIdea.value = ''
  } catch (e) {
    hostError.value = e instanceof Error ? e.message : 'Failed to submit proposal'
  } finally {
    hostSubmitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#f0f0f0] text-black font-neobrutalist pt-24 md:pt-28 px-4 md:px-6">
    <section class="max-w-6xl mx-auto">
      <header class="mb-10 md:mb-14">
        <p class="text-[10px] md:text-xs font-black uppercase tracking-[0.35em] mb-3 text-gray-500">
          Nadiron / Events
        </p>
        <h1 class="text-4xl md:text-6xl font-black uppercase leading-tight">
          Upcoming <span class="bg-[#FF00FF] px-2 text-white box-decoration-clone">Events</span>
        </h1>
        <p class="mt-4 md:mt-6 text-base md:text-xl font-bold max-w-2xl">
          Where to find the Nadiron engineering team in the wild — conferences, AMAs, workshops, and product launches.
        </p>
      </header>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
        <div class="md:col-span-2 space-y-5">
          <div
            v-if="!orderedEvents.length"
            class="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <h2 class="text-2xl md:text-3xl font-black uppercase mb-2">No events scheduled… yet.</h2>
            <p class="font-bold text-base md:text-lg mb-4">
              We’re curating a line-up of deep technical sessions, live builds, and behind-the-scenes breakdowns.
            </p>
            <p class="font-medium text-sm md:text-base text-gray-700">
              In the meantime, tell us where you’d like to see us next — your city, your conference, or your company offsite.
            </p>
          </div>

          <article
            v-else
            v-for="event in orderedEvents"
            :key="event.id"
            class="bg-white border-4 border-black p-5 md:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            <p class="text-xs font-black uppercase tracking-[0.2em] mb-2 text-gray-500">
              {{ event.type }}
            </p>
            <h2 class="text-2xl md:text-3xl font-black uppercase mb-2">
              {{ event.title }}
            </h2>
            <div class="mb-4 overflow-hidden border-4 border-black bg-[#111]">
              <img
                v-if="event.image === 'WEBINAR'"
                :src="webinarImage"
                alt="Crack the Code to Global Remote Tech Job webinar"
                class="w-full aspect-[16/9] object-cover"
              />
            </div>
            <p class="font-bold text-xs md:text-sm mb-1 text-gray-600 uppercase tracking-[0.2em]">
              {{ event.displayDate || event.date }} • {{ event.time }} ({{ event.timezone }})
            </p>
            <p class="font-bold text-sm md:text-base mb-2">
              {{ event.location }}
            </p>
            <p class="font-medium text-sm md:text-base mb-4">
              {{ event.description }}
            </p>
            <router-link
              :to="`/events/${event.id}`"
              class="inline-flex items-center px-4 py-2 bg-black text-white border-4 border-black font-black uppercase text-xs md:text-sm hover:bg-[#FF00FF] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              View & Register
            </router-link>
          </article>
        </div>

        <aside class="bg-black text-white border-4 border-black p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 class="text-xl md:text-2xl font-black uppercase mb-3 text-[#00FFFF]">Host Nadiron</h3>
            <p class="text-sm md:text-base font-medium mb-4 text-gray-200">
              Want us to run an internal workshop or keynote? Propose a session and we’ll get in touch.
            </p>
          </div>

          <form class="space-y-3 text-xs md:text-sm" @submit.prevent="submitHostProposal">
            <div>
              <label class="block font-black uppercase mb-1">Name</label>
              <input
                v-model="hostName"
                type="text"
                class="w-full px-3 py-2 border-4 border-white bg-[#111] text-white font-bold focus:outline-none focus:bg-black focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
                placeholder="ENTER NAME"
              />
            </div>
            <div>
              <label class="block font-black uppercase mb-1">Email</label>
              <input
                v-model="hostEmail"
                type="email"
                class="w-full px-3 py-2 border-4 border-white bg-[#111] text-white font-bold focus:outline-none focus:bg-black focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
                placeholder="ENTER EMAIL"
              />
            </div>
            <div>
              <label class="block font-black uppercase mb-1">Company / Community (optional)</label>
              <input
                v-model="hostCompany"
                type="text"
                class="w-full px-3 py-2 border-4 border-white bg-[#111] text-white font-bold focus:outline-none focus:bg-black focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
                placeholder="E.g. Dev Community, Startup, University"
              />
            </div>
            <div>
              <label class="block font-black uppercase mb-1">Event Idea</label>
              <textarea
                v-model="hostIdea"
                rows="3"
                class="w-full px-3 py-2 border-4 border-white bg-[#111] text-white font-bold focus:outline-none focus:bg-black focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
                placeholder="Tell us about the event you want us to run."
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="hostSubmitting"
              class="w-full mt-2 inline-flex items-center justify-center px-4 py-3 bg-[#FF00FF] text-black font-black uppercase border-4 border-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ hostSubmitting ? 'Sending…' : 'Propose an event' }}
            </button>
            <p v-if="hostError" class="text-red-400 font-bold mt-1">
              {{ hostError }}
            </p>
            <p v-if="hostSuccess" class="text-[#00FFFF] font-bold mt-1">
              {{ hostSuccess }}
            </p>
          </form>
        </aside>
      </section>

      <section class="border-4 border-black bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 class="text-2xl md:text-3xl font-black uppercase mb-4">Stay in the loop</h2>
        <p class="font-bold text-sm md:text-base mb-4">
          Drop your email and we’ll only ping you for high-signal updates: major launches, live sessions, and serious engineering content.
        </p>
        <form class="flex flex-col md:flex-row gap-4 md:gap-6">
          <input
            type="email"
            required
            placeholder="ENTER EMAIL"
            class="flex-1 px-4 py-3 md:px-6 md:py-4 border-4 border-black bg-[#f0f0f0] font-bold text-sm md:text-base focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          />
          <button
            type="submit"
            class="px-6 py-3 md:px-8 md:py-4 bg-black text-white border-4 border-black font-black uppercase text-sm md:text-base hover:bg-[#FF00FF] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Notify me
          </button>
        </form>
      </section>
    </section>
  </div>
</template>

