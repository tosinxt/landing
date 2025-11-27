<script setup>
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // ... (existing code)
})
</script>

<template>
  <div class="min-h-screen bg-[#f0f0f0] text-black font-neobrutalist overflow-hidden selection:bg-[#FF00FF] selection:text-white">
    
    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center items-center relative px-4 md:px-6 overflow-hidden pt-24 md:pt-20">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] md:[background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div class="absolute top-20 right-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#FFFF00] rounded-full blur-[80px] md:blur-[100px] opacity-20 pointer-events-none mix-blend-multiply animate-pulse"></div>
      <div class="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-[#FF00FF] rounded-full blur-[80px] md:blur-[100px] opacity-20 pointer-events-none mix-blend-multiply animate-pulse" style="animation-delay: 1s;"></div>

      <!-- Decorative Lines -->
      <div class="absolute top-1/4 left-0 w-full h-1 bg-black transform -rotate-3 opacity-10 pointer-events-none"></div>
      <div class="absolute bottom-1/4 left-0 w-full h-1 bg-black transform rotate-2 opacity-10 pointer-events-none"></div>

      <!-- Main Title -->
      <div class="relative z-10 text-center w-full">
        <h1 class="text-[18vw] md:text-[18vw] leading-[0.8] font-black uppercase tracking-tighter text-black mix-blend-hard-light select-none drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] md:drop-shadow-none">
          NADIRON
        </h1>
        <div class="mt-8 md:mt-12 flex flex-col items-center gap-4 md:gap-6 px-2">
          <p class="text-lg md:text-4xl font-black uppercase bg-black text-white px-4 py-2 md:px-6 md:py-3 -rotate-1 shadow-[4px_4px_0px_0px_#FF00FF] md:shadow-[8px_8px_0px_0px_#FF00FF]">
            Elite Software Engineering
          </p>
          <p class="text-base md:text-2xl font-bold max-w-2xl mx-auto leading-relaxed bg-white/50 md:bg-transparent p-2 md:p-0 backdrop-blur-sm md:backdrop-blur-none border-2 md:border-none border-black md:border-transparent">
            We build mission-critical systems for ambitious brands. <br class="hidden md:block">
            <span class="bg-[#00FFFF] px-2 text-black box-decoration-clone">No fluff. No outsourcing. Just raw engineering power.</span>
          </p>
        </div>
      </div>

      <!-- CTA Buttons -->
      <div class="mt-12 md:mt-16 flex flex-col md:flex-row justify-center gap-4 md:gap-6 relative z-10 w-full md:w-auto px-4 md:px-0">
        <router-link to="/contact" class="group relative w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-[#FF4500] border-4 border-black font-black text-lg md:text-2xl uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center">
          <span class="relative z-10">Initiate Project</span>
          <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        </router-link>
        <router-link to="/work" class="w-full md:w-auto px-8 py-4 md:px-10 md:py-5 bg-white border-4 border-black font-black text-lg md:text-2xl uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center">
          Explore Capabilities
        </router-link>
      </div>
    </section>

    <!-- Marquee Section -->
    <section class="py-12 md:py-16 bg-black text-white border-y-4 md:border-y-8 border-black overflow-hidden whitespace-nowrap rotate-1 scale-105 z-20 relative">
      <div class="animate-marquee inline-block">
        <span class="text-4xl md:text-7xl font-black mx-6 md:mx-12">SYSTEMS ARCHITECTURE • SCALABILITY • SECURITY • PERFORMANCE •</span>
        <span class="text-4xl md:text-7xl font-black mx-6 md:mx-12">SYSTEMS ARCHITECTURE • SCALABILITY • SECURITY • PERFORMANCE •</span>
      </div>
    </section>

    <!-- Toolkit / Capabilities Section (Bento Grid) -->
    <section class="py-20 md:py-32 px-4 md:px-6 bg-[#f0f0f0]">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <h2 class="text-5xl md:text-8xl font-black uppercase leading-[0.9]">
            Our<br><span class="text-[#FF00FF] relative inline-block">
              Arsenal
              <svg class="absolute -bottom-2 left-0 w-full h-3 md:h-6 text-black" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="3" fill="none" />
              </svg>
            </span>
          </h2>
          <p class="text-lg md:text-xl font-bold max-w-md text-left border-l-4 border-black pl-6 bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            We leverage cutting-edge methodologies and proprietary frameworks to deliver software that dominates the market.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          <!-- Box 1: Scale (Large) -->
          <div class="md:col-span-2 md:row-span-2 bg-white p-6 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between group hover:bg-[#00FFFF] transition-colors duration-300 min-h-[300px] relative overflow-hidden">
            <!-- African Pattern: Mud Cloth / Network -->
            <div class="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                 <defs>
                   <pattern id="network-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                     <circle cx="10" cy="10" r="3" fill="currentColor"/>
                     <circle cx="40" cy="40" r="3" fill="currentColor"/>
                     <line x1="10" y1="10" x2="40" y2="40" stroke="currentColor" stroke-width="2"/>
                     <line x1="40" y1="40" x2="70" y2="10" stroke="currentColor" stroke-width="2"/>
                   </pattern>
                 </defs>
                 <rect width="100%" height="100%" fill="url(#network-pattern)" />
               </svg>
            </div>
            <div class="w-16 h-16 md:w-24 md:h-24 bg-black text-white flex items-center justify-center rounded-full mb-6 md:mb-0 group-hover:rotate-12 transition-transform relative z-10">
              <!-- Icon: Globe/Network -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 md:w-12 md:h-12"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div class="relative z-10">
              <h3 class="text-3xl md:text-5xl font-black uppercase mb-4 leading-none">Hyper-Scale Infrastructure</h3>
              <p class="text-lg md:text-2xl font-bold opacity-80 leading-snug">
                Engineered to handle millions of concurrent requests with zero downtime. We build systems that grow as fast as you do.
              </p>
            </div>
          </div>

          <!-- Box 2: Security (Medium) -->
          <div class="bg-black text-white p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center gap-4 group hover:translate-x-1 md:hover:translate-x-2 transition-transform min-h-[250px] relative overflow-hidden">
            <!-- African Pattern: Shield / Geometric -->
            <div class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                 <defs>
                   <pattern id="shield-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" stroke-width="2"/>
                     <circle cx="20" cy="20" r="4" fill="currentColor"/>
                   </pattern>
                 </defs>
                 <rect width="100%" height="100%" fill="url(#shield-pattern)" />
               </svg>
            </div>
            <div class="text-[#FFFF00] group-hover:scale-110 transition-transform origin-left relative z-10">
              <!-- Icon: Shield -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 md:w-12 md:h-12"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-black uppercase relative z-10">Fortress Security</h3>
            <p class="font-medium text-gray-300 text-sm md:text-base relative z-10">
              Enterprise-grade encryption, automated threat detection, and compliance standards baked into every line of code.
            </p>
          </div>

          <!-- Box 3: Performance (Medium) -->
          <div class="bg-[#FF00FF] p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-center gap-4 group hover:translate-x-1 md:hover:translate-x-2 transition-transform min-h-[250px]">
            <div class="text-black group-hover:scale-110 transition-transform origin-left">
              <!-- Icon: Zap -->
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 md:w-12 md:h-12"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-black uppercase">Instant Latency</h3>
            <p class="font-bold text-sm md:text-base">
              Optimized for speed. We shave off milliseconds where others don't even look. From edge caching to database tuning, speed is a feature.
            </p>
          </div>



        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 md:py-32 px-4 md:px-6 bg-white border-t-4 border-black relative overflow-hidden">
      <!-- African Pattern Background -->
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L10 10 L20 20 L30 10 L40 20" stroke="black" stroke-width="2" fill="none"/>
              <path d="M0 40 L10 30 L20 40 L30 30 L40 40" stroke="black" stroke-width="2" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-pattern)" />
        </svg>
      </div>
      <div class="max-w-7xl mx-auto relative z-10">
        <h2 class="text-4xl md:text-8xl font-black uppercase mb-12 md:mb-20 text-center">Core Operations</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-[#f0f0f0] p-8 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-[#00FFFF] border-4 border-black mb-6 md:mb-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 md:w-8 md:h-8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-black mb-4 uppercase">Custom Engineering</h3>
            <p class="font-bold text-base md:text-lg">
              Bespoke software solutions tailored to your unique operational requirements. We solve the problems off-the-shelf software can't touch.
            </p>
          </div>
          
          <!-- Service 2 -->
          <div class="bg-[#f0f0f0] p-8 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-[#FFFF00] border-4 border-black mb-6 md:mb-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 md:w-8 md:h-8"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-black mb-4 uppercase">Product Strategy</h3>
            <p class="font-bold text-base md:text-lg">
              We don't just build; we strategize. We align technology with your business objectives to maximize ROI and market impact.
            </p>
          </div>

          <!-- Service 3 -->
          <div class="bg-[#f0f0f0] p-8 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
            <div class="w-12 h-12 md:w-16 md:h-16 bg-[#FF4500] border-4 border-black mb-6 md:mb-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 md:w-8 md:h-8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h3 class="text-2xl md:text-3xl font-black mb-4 uppercase">Technical Consultancy</h3>
            <p class="font-bold text-base md:text-lg">
              Expert guidance on architecture, infrastructure, and digital transformation. We help you navigate complex technical landscapes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 md:py-32 px-4 md:px-6 bg-black text-white border-y-4 border-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-5xl md:text-8xl font-black uppercase mb-12 md:mb-20 text-center text-[#00FFFF]">Impact</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div class="bg-[#1a1a1a] p-6 md:p-10 border-4 border-white shadow-[8px_8px_0px_0px_#FF00FF] md:shadow-[12px_12px_0px_0px_#FF00FF] relative hover:scale-[1.02] transition-transform">
            <div class="text-4xl md:text-6xl absolute -top-6 -left-2 md:-top-8 md:-left-4">❝</div>
            <p class="text-lg md:text-2xl font-bold mb-6 md:mb-8 italic relative z-10">"Nadiron transformed our business. Their engineers are truly world-class. They delivered our platform ahead of schedule and it works flawlessly."</p>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-[#FF00FF] rounded-full border-2 border-white"></div>
              <div>
                <div class="font-black uppercase text-lg md:text-xl">Mr Owen</div>
                <div class="text-[#00FFFF] font-bold text-sm md:text-base">CEO, Japa Talent</div>
              </div>
            </div>
          </div>
          <div class="bg-[#1a1a1a] p-6 md:p-10 border-4 border-white shadow-[8px_8px_0px_0px_#FFFF00] md:shadow-[12px_12px_0px_0px_#FFFF00] relative hover:scale-[1.02] transition-transform">
            <div class="text-4xl md:text-6xl absolute -top-6 -left-2 md:-top-8 md:-left-4">❝</div>
            <p class="text-lg md:text-2xl font-bold mb-6 md:mb-8 italic relative z-10">"The design and user experience they created for us is unmatched. Our user engagement has doubled since we launched the new app."</p>
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-[#FFFF00] rounded-full border-2 border-white"></div>
              <div>
                <div class="font-black uppercase text-lg md:text-xl">Odinaka Agbayi</div>
                <div class="text-[#00FFFF] font-bold text-sm md:text-base">CEO, Lemina</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 md:py-32 px-4 md:px-6 bg-[#FFFF00] relative overflow-hidden">
      <!-- Decorative background pattern -->
      <div class="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
      
      <div class="max-w-5xl mx-auto text-center relative z-10">
        <h2 class="text-5xl md:text-9xl font-black uppercase mb-6 md:mb-8 leading-none">Let's Build<br>The Future</h2>
        <p class="text-xl md:text-3xl font-bold mb-12 md:mb-16 max-w-3xl mx-auto">
          Ready to deploy? Reach out to our engineering team.
        </p>
        <form class="text-left space-y-6 md:space-y-8 max-w-3xl mx-auto bg-white p-6 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <label class="block font-black uppercase mb-2 text-lg md:text-xl">Name</label>
              <input type="text" class="w-full p-4 md:p-6 border-4 border-black bg-[#f0f0f0] font-bold text-base md:text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="ENTER NAME">
            </div>
            <div>
              <label class="block font-black uppercase mb-2 text-lg md:text-xl">Email</label>
              <input type="email" class="w-full p-4 md:p-6 border-4 border-black bg-[#f0f0f0] font-bold text-base md:text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="ENTER EMAIL">
            </div>
          </div>
          <div>
            <label class="block font-black uppercase mb-2 text-lg md:text-xl">Project Brief</label>
            <textarea rows="4" class="w-full p-4 md:p-6 border-4 border-black bg-[#f0f0f0] font-bold text-base md:text-lg focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="DESCRIBE YOUR VISION"></textarea>
          </div>
          <button class="w-full py-4 md:py-6 bg-black text-white border-4 border-black font-black text-xl md:text-2xl hover:bg-[#FF00FF] hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all uppercase">
            Initialize Contact
          </button>
        </form>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-black text-white border-t-4 border-black py-12 md:py-20 px-4 md:px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <div class="col-span-1 md:col-span-2">
          <h2 class="text-4xl md:text-6xl font-black uppercase leading-none mb-4 md:mb-6 text-[#00FFFF]">Nadiron</h2>
          <p class="text-lg md:text-xl font-medium max-w-md text-gray-300">
            Building the future of software from the heart of Nigeria. We are the cracked engineers you've been looking for.
          </p>
        </div>
        
        <div>
          <h3 class="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 text-[#FF00FF]">Quick Links</h3>
          <ul class="space-y-2 md:space-y-4 font-bold text-base md:text-lg">
            <li><router-link to="/" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">Home</router-link></li>
            <li><router-link to="/services" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">Services</router-link></li>
            <li><router-link to="/work" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">Work</router-link></li>
            <li><router-link to="/about" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">About</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">Contact</router-link></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl md:text-2xl font-black uppercase mb-4 md:mb-6 text-[#FFFF00]">Connect</h3>
          <ul class="space-y-2 md:space-y-4 font-bold text-base md:text-lg">
            <li><a href="#" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">Twitter / X</a></li>
            <li><a href="#" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">LinkedIn</a></li>
            <li><a href="#" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">GitHub</a></li>
            <li><a href="#" class="hover:text-[#00FFFF] transition-colors inline-block hover:translate-x-2 transition-transform">Instagram</a></li>
            <li class="mt-4 md:mt-6 text-gray-400">hello@nadiron.com</li>
          </ul>
        </div>
      </div>
      
      <div class="max-w-7xl mx-auto mt-12 md:mt-20 pt-8 border-t-2 border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p class="font-bold text-sm md:text-base">© 2025 NADIRON TECHNOLOGIES. ALL RIGHTS RESERVED.</p>
        <p class="font-bold text-sm md:text-base">ABUJA, NIGERIA 🇳🇬</p>
      </div>
    </footer>
  </div>
</template>
