<script setup>
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Simple entrance animation
  gsap.from('.contact-form', {
    x: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
  })
  gsap.from('.contact-info', {
    x: -50,
    opacity: 0,
    duration: 0.8
  })
})
</script>

<template>
  <div class="min-h-screen bg-[#FFFF00] pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
    <!-- Decorative background pattern -->
    <div class="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:20px_20px] [background-position:0_0,10px_10px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <h1 class="text-6xl md:text-9xl font-black uppercase mb-12 text-center leading-[0.8]">
        Start The<br><span class="text-white text-stroke-black">Re<span class="text-[#00FFFF] text-stroke-black inline-block transform font-['Rubik_Glitch']">a</span>ctor</span>
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <!-- Contact Info -->
        <div class="contact-info bg-black text-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
          <h2 class="text-4xl font-black uppercase mb-8 text-[#00FFFF]">Coordinates</h2>
          
          <div class="space-y-8 text-xl font-bold">
            <div>
              <p class="text-gray-400 uppercase text-sm mb-2">HQ Location</p>
              <p>Abuja, Nigeria 🇳🇬</p>
              <p>The Future of Tech</p>
            </div>
            
            <div>
              <p class="text-gray-400 uppercase text-sm mb-2">Digital Channels</p>
              <p><a href="mailto:hello@nadiron.com" class="hover:text-[#00FFFF] transition-colors">hello@nadiron.com</a></p>
              <p><a href="tel:+234800NADIRON" class="hover:text-[#00FFFF] transition-colors">+234 800 NADIRON</a></p>
            </div>

            <div>
              <p class="text-gray-400 uppercase text-sm mb-2">Social Uplink</p>
              <div class="flex gap-4">
                <a href="#" class="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-[#00FFFF] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="#" class="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-[#00FFFF] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" class="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-[#00FFFF] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form bg-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 class="text-4xl font-black uppercase mb-8">Initialize Protocol</h2>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block font-black uppercase mb-2">Identity</label>
                <input type="text" class="w-full p-4 border-4 border-black bg-[#f0f0f0] font-bold focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="YOUR NAME">
              </div>
              <div>
                <label class="block font-black uppercase mb-2">Comms</label>
                <input type="email" class="w-full p-4 border-4 border-black bg-[#f0f0f0] font-bold focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="YOUR EMAIL">
              </div>
            </div>
            
            <div>
              <label class="block font-black uppercase mb-2">Subject</label>
              <select class="w-full p-4 border-4 border-black bg-[#f0f0f0] font-bold focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all appearance-none">
                <option>New Project Inquiry</option>
                <option>Technical Consultation</option>
                <option>Partnership Proposal</option>
                <option>Join the Team</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label class="block font-black uppercase mb-2">Transmission</label>
              <textarea rows="5" class="w-full p-4 border-4 border-black bg-[#f0f0f0] font-bold focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="TELL US ABOUT YOUR PROJECT"></textarea>
            </div>

            <button class="w-full py-6 bg-black text-white border-4 border-black font-black text-2xl hover:bg-[#FF00FF] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
              Send Transmission
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.text-stroke-black {
  -webkit-text-stroke: 2px black;
}
</style>
