<script setup>
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.value-card', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.values-grid',
      start: 'top 80%'
    }
  })
})
</script>

<template>
  <div class="min-h-screen bg-[#f0f0f0] pt-32 pb-20 px-4 md:px-6">
    <div class="max-w-7xl mx-auto">
      
      <!-- Hero -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
        <div>
          <h1 class="text-6xl md:text-9xl font-black uppercase mb-8 leading-[0.8]">
            We Are<br><span class="text-[#FF00FF]">Nadiron</span>
          </h1>
          <p class="text-xl md:text-2xl font-bold mb-8">
            Born in Abuja. Building for the world. We are a collective of cracked engineers, designers, and strategists obsessed with shipping high-quality software.
          </p>
          <div class="bg-black text-white p-6 border-4 border-[#00FFFF] shadow-[8px_8px_0px_0px_#00FFFF] inline-block transform -rotate-2">
            <p class="text-2xl font-black uppercase">"No Fluff. Just Code."</p>
          </div>
        </div>
        <div class="relative">
          <!-- Abstract Team Image / Graphic -->
          <div class="aspect-square bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
             <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFFF00] via-[#FF00FF] to-[#00FFFF] opacity-50"></div>
             <div class="absolute inset-0 flex items-center justify-center">
                <h2 class="text-[12rem] font-black opacity-10 select-none">NDRN</h2>
             </div>
             <!-- Decorative elements -->
             <div class="absolute top-10 left-10 w-20 h-20 bg-black rounded-full mix-blend-multiply animate-bounce"></div>
             <div class="absolute bottom-10 right-10 w-32 h-32 bg-black rounded-full mix-blend-multiply animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- Story Section -->
      <div class="mb-32 max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-black uppercase mb-8 text-center">The Mission</h2>
        <div class="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-lg md:text-xl font-medium space-y-6">
          <p>
            Nadiron started with a simple observation: too much software is bloated, slow, and over-engineered. We wanted to build something different. Something raw, efficient, and powerful.
          </p>
          <p>
            We believe that great engineering is an art form. It requires discipline, creativity, and a relentless pursuit of perfection. We don't outsource. We don't cut corners. We build everything in-house, ensuring that every line of code meets our rigorous standards.
          </p>
          <p class="font-bold">
            Our goal is simple: to be the engineering backbone for the next generation of African unicorns and global enterprises.
          </p>
        </div>
      </div>

      <!-- Values Grid -->
      <div class="mb-32">
        <h2 class="text-4xl md:text-6xl font-black uppercase mb-12 text-center">Core Values</h2>
        <div class="values-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div class="value-card bg-[#00FFFF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <h3 class="text-3xl font-black uppercase mb-4">Speed</h3>
            <p class="font-bold">
              We move fast. Not by rushing, but by removing friction. We ship features in days, not months.
            </p>
          </div>

          <div class="value-card bg-[#FF00FF] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <h3 class="text-3xl font-black uppercase mb-4">Quality</h3>
            <p class="font-bold">
              Good enough isn't good enough. We obsess over details, performance, and user experience.
            </p>
          </div>

          <div class="value-card bg-[#FFFF00] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <h3 class="text-3xl font-black uppercase mb-4">Transparency</h3>
            <p class="font-bold">
              No hidden fees. No jargon. We communicate clearly and honestly at every stage of the project.
            </p>
          </div>

        </div>
      </div>

      <!-- Team Teaser (Optional/Abstract) -->
      <div class="text-center bg-black text-white p-12 border-4 border-black">
        <h2 class="text-4xl md:text-6xl font-black uppercase mb-6">Join the Cult</h2>
        <p class="text-xl font-bold mb-8 max-w-2xl mx-auto">
          We are always looking for cracked engineers to join our ranks. Think you have what it takes?
        </p>
        <a href="mailto:careers@nadiron.com" class="inline-block px-12 py-4 bg-white text-black border-4 border-white font-black text-xl hover:bg-[#FF00FF] hover:text-white hover:border-[#FF00FF] transition-all uppercase">
          Apply Now
        </a>
      </div>

    </div>
  </div>
</template>
