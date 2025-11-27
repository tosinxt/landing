<script setup>
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Re-initialize Lenis for this view if needed, or rely on App.vue global instance
  // For specific page animations:
  gsap.from('.service-card', {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.services-grid',
      start: 'top 80%'
    }
  })
})
</script>

<template>
  <div class="min-h-screen bg-[#f0f0f0] pt-32 pb-20 px-4 md:px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-20 text-center">
        <h1 class="text-6xl md:text-9xl font-black uppercase mb-6 leading-[0.8]">
          Our<br><span class="text-[#FF00FF]">Expertise</span>
        </h1>
        <p class="text-xl md:text-2xl font-bold max-w-3xl mx-auto border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          We don't just write code. We engineer digital dominance. From the metal to the pixel, we own the entire stack.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        
        <!-- Service 1 -->
        <div class="service-card bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group">
          <div class="w-20 h-20 bg-[#00FFFF] border-4 border-black mb-8 flex items-center justify-center group-hover:rotate-12 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <h3 class="text-4xl font-black uppercase mb-6">Custom Engineering</h3>
          <p class="text-xl font-bold mb-8">
            We build bespoke software solutions tailored to your unique operational requirements. Whether it's a high-frequency trading platform or a complex logistics engine, we solve the problems off-the-shelf software can't touch.
          </p>
          <ul class="space-y-4 font-bold border-t-4 border-black pt-8">
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-black"></span> Full-Stack Development
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-black"></span> API Design & Integration
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-black"></span> Legacy System Modernization
            </li>
          </ul>
        </div>

        <!-- Service 2 -->
        <div class="service-card bg-black text-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_#FF00FF] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_#FF00FF] transition-all duration-300 group">
          <div class="w-20 h-20 bg-[#FF00FF] border-4 border-white mb-8 flex items-center justify-center group-hover:-rotate-12 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
          <h3 class="text-4xl font-black uppercase mb-6">Product Strategy</h3>
          <p class="text-xl font-bold mb-8 text-white">
            We align technology with your business objectives to maximize ROI. We help you define your MVP, map out your roadmap, and identify the technical levers that will drive growth.
          </p>
          <ul class="space-y-4 font-bold border-t-4 border-white pt-8">
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-[#FF00FF]"></span> MVP Development
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-[#FF00FF]"></span> Technical Feasibility Analysis
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-[#FF00FF]"></span> Go-to-Market Strategy
            </li>
          </ul>
        </div>

        <!-- Service 3 -->
        <div class="service-card bg-[#FFFF00] border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group">
          <div class="w-20 h-20 bg-white border-4 border-black mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <h3 class="text-4xl font-black uppercase mb-6">Web & Mobile</h3>
          <p class="text-xl font-bold mb-8">
            We build responsive, high-performance web and mobile applications that feel like magic. Using modern frameworks like Vue, React, and React Native, we deliver native-quality experiences everywhere.
          </p>
          <ul class="space-y-4 font-bold border-t-4 border-black pt-8">
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-black"></span> Progressive Web Apps (PWA)
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-black"></span> Cross-Platform Mobile Apps
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-black"></span> High-Fidelity UI/UX Implementation
            </li>
          </ul>
        </div>

        <!-- Service 4 -->
        <div class="service-card bg-[#FF4500] border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group">
          <div class="w-20 h-20 bg-black text-white border-4 border-black mb-8 flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
          </div>
          <h3 class="text-4xl font-black uppercase mb-6">Cloud Infrastructure</h3>
          <p class="text-xl font-bold mb-8">
            We design and deploy scalable, secure cloud architectures. Whether you're on AWS, Google Cloud, or Azure, we ensure your infrastructure is robust, cost-effective, and ready for scale.
          </p>
          <ul class="space-y-4 font-bold border-t-4 border-black pt-8">
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-white"></span> DevOps & CI/CD Pipelines
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-white"></span> Serverless Architecture
            </li>
            <li class="flex items-center gap-3">
              <span class="w-4 h-4 bg-white"></span> Database Optimization
            </li>
          </ul>
        </div>

      </div>

      <!-- CTA -->
      <div class="bg-[#00FFFF] border-4 border-black p-12 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        <h2 class="text-5xl md:text-7xl font-black uppercase mb-8">Need Something Else?</h2>
        <p class="text-2xl font-bold mb-12 max-w-2xl mx-auto">
          We love complex challenges. If you have a problem that needs a serious engineering solution, let's talk.
        </p>
        <router-link to="/contact" class="inline-block px-12 py-6 bg-black text-white border-4 border-black font-black text-2xl hover:bg-white hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
          Consult with us
        </router-link>
      </div>

    </div>
  </div>
</template>
