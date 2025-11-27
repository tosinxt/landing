<script setup>
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.work-card', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.work-grid',
      start: 'top 80%'
    }
  })
})
</script>

<template>
  <div class="min-h-screen bg-[#f0f0f0] pt-32 pb-20 px-4 md:px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-20">
        <h1 class="text-6xl md:text-9xl font-black uppercase mb-6 leading-[0.8]">
          Selected<br><span class="text-[#FF00FF]">Works</span>
        </h1>
        <p class="text-xl md:text-2xl font-bold max-w-2xl border-l-4 border-black pl-6">
          We build systems that scale. Here are a few examples of how we've helped ambitious brands dominate their markets.
        </p>
      </div>

      <!-- Work Grid -->
      <div class="work-grid grid grid-cols-1 gap-16 mb-32">
        
        <!-- Project 1: Japa Talent -->
        <div class="work-card bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-4 py-1 bg-black text-white font-bold uppercase text-sm">Platform Development</span>
                  <span class="px-4 py-1 bg-[#00FFFF] border-2 border-black font-bold uppercase text-sm">Vue.js</span>
                  <span class="px-4 py-1 bg-[#00FFFF] border-2 border-black font-bold uppercase text-sm">Laravel</span>
                </div>
                <h2 class="text-5xl md:text-7xl font-black uppercase mb-6">Japa Talent</h2>
                <p class="text-xl font-bold mb-8 opacity-80">
                  A comprehensive job board and talent management platform connecting African tech talent with global opportunities. We built the entire ecosystem from scratch.
                </p>
              </div>
              <div class="flex gap-8 border-t-4 border-black pt-8">
                <div>
                  <div class="text-4xl font-black">50k+</div>
                  <div class="text-sm font-bold uppercase">Users</div>
                </div>
                <div>
                  <div class="text-4xl font-black">99.9%</div>
                  <div class="text-sm font-bold uppercase">Uptime</div>
                </div>
              </div>
            </div>
            <div class="bg-black relative overflow-hidden group-hover:bg-[#FF00FF] transition-colors duration-500 flex items-center justify-center p-12">
              <!-- Abstract Representation of UI -->
              <div class="w-full max-w-sm bg-white border-4 border-black shadow-[8px_8px_0px_0px_#00FFFF] p-4 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div class="h-4 w-1/3 bg-black mb-4"></div>
                <div class="h-32 bg-[#f0f0f0] mb-4 border-2 border-black"></div>
                <div class="space-y-2">
                  <div class="h-3 w-full bg-gray-300"></div>
                  <div class="h-3 w-5/6 bg-gray-300"></div>
                  <div class="h-3 w-4/6 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2: Lemina -->
        <div class="work-card bg-black text-white border-4 border-black shadow-[16px_16px_0px_0px_#FFFF00] hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_#FFFF00] transition-all duration-300 group overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="order-2 md:order-1 bg-[#FFFF00] relative overflow-hidden flex items-center justify-center p-12">
              <!-- Abstract Representation of UI -->
              <div class="w-full max-w-sm bg-white border-4 border-black shadow-[8px_8px_0px_0px_#FF00FF] p-4 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div class="flex justify-between mb-4">
                  <div class="h-8 w-8 rounded-full bg-black"></div>
                  <div class="h-8 w-24 bg-black"></div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="h-24 bg-[#00FFFF] border-2 border-black"></div>
                  <div class="h-24 bg-[#FF00FF] border-2 border-black"></div>
                  <div class="h-24 bg-[#FF4500] border-2 border-black"></div>
                  <div class="h-24 bg-[#000000] border-2 border-black"></div>
                </div>
              </div>
            </div>
            <div class="order-1 md:order-2 p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-4 py-1 bg-white text-black font-bold uppercase text-sm">E-Commerce</span>
                  <span class="px-4 py-1 bg-[#FF00FF] text-white border-2 border-white font-bold uppercase text-sm">Shopify</span>
                  <span class="px-4 py-1 bg-[#FF00FF] text-white border-2 border-white font-bold uppercase text-sm">React</span>
                </div>
                <h2 class="text-5xl md:text-7xl font-black uppercase mb-6">Lemina</h2>
                <p class="text-xl font-bold mb-8 text-gray-300">
                  A high-conversion e-commerce experience for a luxury fashion brand. We optimized the user journey to increase conversion rates by 200%.
                </p>
              </div>
              <div class="flex gap-8 border-t-4 border-white pt-8">
                <div>
                  <div class="text-4xl font-black text-[#FFFF00]">200%</div>
                  <div class="text-sm font-bold uppercase">Conversion</div>
                </div>
                <div>
                  <div class="text-4xl font-black text-[#FFFF00]">0.5s</div>
                  <div class="text-sm font-bold uppercase">Load Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3: Fintech Dashboard (Hypothetical) -->
        <div class="work-card bg-[#FF4500] border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12 flex flex-col justify-between h-full min-h-[400px]">
              <div>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="px-4 py-1 bg-black text-white font-bold uppercase text-sm">Fintech</span>
                  <span class="px-4 py-1 bg-white border-2 border-black font-bold uppercase text-sm">React</span>
                  <span class="px-4 py-1 bg-white border-2 border-black font-bold uppercase text-sm">Node.js</span>
                </div>
                <h2 class="text-5xl md:text-7xl font-black uppercase mb-6">PayFlow</h2>
                <p class="text-xl font-bold mb-8 text-black">
                  A real-time financial analytics dashboard for enterprise clients. Processing millions of transactions with sub-second latency.
                </p>
              </div>
              <div class="flex gap-8 border-t-4 border-black pt-8">
                <div>
                  <div class="text-4xl font-black text-white">$500M+</div>
                  <div class="text-sm font-bold uppercase">Processed</div>
                </div>
                <div>
                  <div class="text-4xl font-black text-white">Real-Time</div>
                  <div class="text-sm font-bold uppercase">Analytics</div>
                </div>
              </div>
            </div>
            <div class="bg-white relative overflow-hidden group-hover:bg-black transition-colors duration-500 flex items-center justify-center p-12">
               <!-- Abstract Representation of UI -->
               <div class="w-full max-w-sm bg-[#f0f0f0] border-4 border-black shadow-[8px_8px_0px_0px_#FF4500] p-4 transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                <div class="flex gap-4 mb-4">
                  <div class="h-20 w-1/2 bg-white border-2 border-black"></div>
                  <div class="h-20 w-1/2 bg-white border-2 border-black"></div>
                </div>
                <div class="h-32 bg-white border-2 border-black relative">
                  <div class="absolute bottom-0 left-0 w-full h-1/2 bg-[#FF4500] opacity-20"></div>
                  <svg class="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                    <polyline points="0,50 20,40 40,45 60,20 80,30 100,10" fill="none" stroke="black" stroke-width="2"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- CTA -->
      <div class="text-center">
        <h2 class="text-4xl font-black uppercase mb-8">Ready to be our next success story?</h2>
        <router-link to="/contact" class="inline-block px-12 py-6 bg-[#FF00FF] border-4 border-black font-black text-2xl hover:bg-black hover:text-[#FF00FF] hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
          Start Project
        </router-link>
      </div>

    </div>
  </div>
</template>
