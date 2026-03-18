<script setup>
import { onMounted, ref } from 'vue'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    ScrollTrigger.update(e)
    isScrolled.value = e.scroll > 50
  })

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})
</script>

<template>
  <div class="min-h-screen bg-[#f0f0f0] text-black font-neobrutalist overflow-hidden selection:bg-[#FF00FF] selection:text-white">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:p-6 border-b-4 border-black bg-white transition-all duration-300" :class="{ 'py-2': isScrolled }">
      <div class="text-2xl md:text-4xl font-black tracking-tighter uppercase relative group cursor-pointer">
        <router-link to="/">Nadiron</router-link>
        <span class="absolute -bottom-1 left-0 w-0 h-1 bg-[#FF00FF] transition-all group-hover:w-full"></span>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8 font-bold text-xl uppercase items-center">
        <router-link to="/" class="hover:text-[#FF00FF] hover:-translate-y-1 transition-all relative group" active-class="text-[#FF00FF]">
          Home
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
        </router-link>
        <router-link to="/services" class="hover:text-[#FF00FF] hover:-translate-y-1 transition-all relative group" active-class="text-[#FF00FF]">
          Services
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
        </router-link>
        <router-link to="/work" class="hover:text-[#FF00FF] hover:-translate-y-1 transition-all relative group" active-class="text-[#FF00FF]">
          Work
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
        </router-link>
        <router-link to="/events" class="hover:text-[#FF00FF] hover:-translate-y-1 transition-all relative group" active-class="text-[#FF00FF]">
          Events
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
        </router-link>
        <router-link to="/about" class="hover:text-[#FF00FF] hover:-translate-y-1 transition-all relative group" active-class="text-[#FF00FF]">
          About
          <span class="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full"></span>
        </router-link>
        <router-link to="/contact" class="px-6 py-2 bg-[#FF00FF] border-4 border-black text-white hover:bg-black hover:text-[#FF00FF] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" active-class="bg-black text-[#FF00FF]">
          Let's Talk
        </router-link>
      </div>

      <!-- Mobile Menu Toggle -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center gap-2 group">
        <span class="w-full h-1 bg-black transition-all duration-300" :class="{ 'rotate-45 translate-y-3 bg-white': mobileMenuOpen }"></span>
        <span class="w-full h-1 bg-black transition-all duration-300" :class="{ 'opacity-0': mobileMenuOpen }"></span>
        <span class="w-full h-1 bg-black transition-all duration-300" :class="{ '-rotate-45 -translate-y-3 bg-white': mobileMenuOpen }"></span>
      </button>

      <!-- Mobile Menu Overlay -->
      <div class="fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 text-4xl font-black uppercase transition-transform duration-500" :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'">
        <router-link to="/" @click="mobileMenuOpen = false" class="text-white hover:text-[#00FFFF] hover:scale-110 transition-all">Home</router-link>
        <router-link to="/services" @click="mobileMenuOpen = false" class="text-white hover:text-[#00FFFF] hover:scale-110 transition-all">Services</router-link>
        <router-link to="/work" @click="mobileMenuOpen = false" class="text-white hover:text-[#00FFFF] hover:scale-110 transition-all">Work</router-link>
        <router-link to="/events" @click="mobileMenuOpen = false" class="text-white hover:text-[#00FFFF] hover:scale-110 transition-all">Events</router-link>
        <router-link to="/about" @click="mobileMenuOpen = false" class="text-white hover:text-[#00FFFF] hover:scale-110 transition-all">About</router-link>
        <router-link to="/contact" @click="mobileMenuOpen = false" class="text-white hover:text-[#00FFFF] hover:scale-110 transition-all">Contact</router-link>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
