<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import webinarImage from '@/assets/WEBINAR.jpg'

const route = useRoute()
const router = useRouter()

const event = ref(null)
const error = ref('')

const name = ref('')
const email = ref('')
const submitting = ref(false)
const successMessage = ref('')
const formError = ref('')

const events = [
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
]

const resolvedEvent = computed(() => {
  const id = Number(route.params.id)
  if (!Number.isFinite(id)) return null
  return events.find((e) => e.id === id) || null
})

event.value = resolvedEvent.value
if (!event.value) error.value = 'Event not found'

const handleSubmit = async () => {
  formError.value = ''
  successMessage.value = ''

  if (!name.value || !email.value) {
    formError.value = 'Name and email are required.'
    return
  }

  submitting.value = true
  try {
    await new Promise((r) => setTimeout(r, 600))
    successMessage.value = 'Registration complete (mock). We will email you the details.'
    name.value = ''
    email.value = ''
  } catch (e) {
    formError.value = e instanceof Error ? e.message : 'Registration failed'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#f0f0f0] text-black font-neobrutalist pt-24 md:pt-28 px-4 md:px-6">
    <section class="max-w-5xl mx-auto">
      <button
        class="mb-4 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] flex items-center gap-2 hover:translate-x-1 transition-transform"
        @click="router.back()"
      >
        ← Back
      </button>

      <div
        v-if="error || !event"
        class="bg-white border-4 border-red-600 p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(220,38,38,1)]"
      >
        <h1 class="text-2xl md:text-3xl font-black uppercase mb-2 text-red-600">Event not available</h1>
        <p class="font-bold text-sm md:text-base">
          {{ error || 'This event could not be found.' }}
        </p>
      </div>

      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
      >
        <article class="md:col-span-2 bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div v-if="event.image === 'WEBINAR'" class="mb-5 overflow-hidden border-4 border-black bg-[#111]">
            <img
              :src="webinarImage"
              alt="Crack the Code to Global Remote Tech Job webinar"
              class="w-full aspect-[16/9] object-cover"
            />
          </div>
          <p class="text-xs md:text-sm font-black uppercase tracking-[0.3em] mb-3 text-gray-500">
            {{ event.type }} • {{ event.organizer }}
          </p>
          <h1 class="text-3xl md:text-5xl font-black uppercase leading-tight mb-4">
            {{ event.title }}
          </h1>
          <p class="font-bold text-sm md:text-base mb-4 text-gray-800">
            With {{ event.speaker }}
          </p>

          <div class="border-y-2 border-black py-4 mb-4 text-sm md:text-base font-bold">
            <p>{{ event.displayDate || event.date }} • {{ event.time }} ({{ event.timezone }})</p>
            <p>{{ event.location }}</p>
          </div>

          <p class="font-bold text-sm md:text-base mb-4">
            {{ event.description }}
          </p>

          <ul class="list-disc list-inside space-y-2 text-sm md:text-base font-medium">
            <li v-for="(item, idx) in event.bullets || []" :key="idx">
              {{ item }}
            </li>
          </ul>
        </article>

        <aside class="bg-black text-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h2 class="text-xl md:text-2xl font-black uppercase mb-4 text-[#00FFFF]">
            Register &amp; Pay (Mock)
          </h2>

          <p class="font-bold text-sm md:text-base mb-4">
            This is a mocked payment flow for development. No real charges are made.
          </p>

          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label class="block font-black uppercase mb-2 text-xs md:text-sm">Name</label>
              <input
                v-model="name"
                type="text"
                class="w-full px-3 py-2 md:px-4 md:py-3 border-4 border-white bg-[#111] text-white font-bold text-xs md:text-sm focus:outline-none focus:bg-black focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
                placeholder="ENTER NAME"
              />
            </div>
            <div>
              <label class="block font-black uppercase mb-2 text-xs md:text-sm">Email</label>
              <input
                v-model="email"
                type="email"
                class="w-full px-3 py-2 md:px-4 md:py-3 border-4 border-white bg-[#111] text-white font-bold text-xs md:text-sm focus:outline-none focus:bg-black focus:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all"
                placeholder="ENTER EMAIL"
              />
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="w-full py-3 md:py-4 bg-[#FF00FF] text-black border-4 border-white font-black uppercase text-sm md:text-base hover:bg-white hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ submitting ? 'Processing…' : 'Complete Registration (Mock)' }}
            </button>

            <p v-if="formError" class="text-xs md:text-sm font-bold text-red-400">
              {{ formError }}
            </p>
            <p v-if="successMessage" class="text-xs md:text-sm font-bold text-[#00FFFF]">
              {{ successMessage }}
            </p>
          </form>
        </aside>
      </div>
    </section>
  </div>
</template>

