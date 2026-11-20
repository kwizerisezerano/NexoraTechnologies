<template>
  <footer class="relative overflow-hidden mesh-dark text-slate-300">
    <div class="container-x py-16">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:max-w-xs">
          <NuxtLink
            to="/"
            class="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm"
            aria-label="Nexora Technologies — home"
          >
            <img
              src="https://res.cloudinary.com/danzeqybu/image/upload/v1795168241/Nexora_Technologies_Green_Orbit_Logo_zt3sfp.png"
              alt="Nexora Technologies"
              width="2172"
              height="724"
              class="h-8 w-auto"
            >
          </NuxtLink>
          <p class="mt-5 text-sm leading-relaxed text-slate-400">
            Building the future of technology in Rwanda and beyond.
          </p>
          <div class="mt-6 flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              href="#"
              class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-400/60 hover:text-white"
              :aria-label="social.label"
            >
              <Icon :name="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <nav aria-label="Services">
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="item in serviceLinks" :key="item">
              <NuxtLink to="/#services" class="text-slate-400 transition hover:text-brand-300">{{ item }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Company -->
        <nav aria-label="Company">
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="item in companyLinks" :key="item.label">
              <NuxtLink :to="item.href" class="text-slate-400 transition hover:text-brand-300">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Connect -->
        <div>
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-white">Connect</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-400">
            <li class="flex items-center gap-2">
              <Icon name="lucide:map-pin" class="h-4 w-4 text-brand-400" />
              Kigali, Rwanda
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:mail" class="h-4 w-4 text-brand-400" />
              <a href="mailto:kwizeraolivier.el@gmail.com" class="transition hover:text-brand-300">kwizeraolivier.el@gmail.com</a>
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:clock" class="h-4 w-4 text-brand-400" />
              Mon - Fri: 8:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
        <p>&copy; 2026 Nexora Technologies. All rights reserved.</p>
        <p>Built in Kigali, Rwanda.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  { label: 'LinkedIn', icon: 'lucide:linkedin' },
  { label: 'Twitter', icon: 'lucide:twitter' },
  { label: 'GitHub', icon: 'lucide:github' }
]

const serviceLinks = [
  'Web Applications',
  'Mobile Applications',
  'Backend & APIs',
  'Enterprise Systems',
  'SaaS Products',
  'Software Testing'
]

const companyLinks = [
  { label: 'About Us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' }
]
</script>
