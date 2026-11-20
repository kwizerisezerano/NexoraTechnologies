<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass border-b border-slate-200/80 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)]' : 'bg-white/60 backdrop-blur-sm border-b border-transparent'"
  >
    <nav class="container-x" aria-label="Primary">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center"
          aria-label="Nexora Technologies — home"
        >
          <img
            src="https://res.cloudinary.com/danzeqybu/image/upload/v1795168241/Nexora_Technologies_Green_Orbit_Logo_zt3sfp.png"
            alt="Nexora Technologies"
            width="2172"
            height="724"
            class="h-9 w-auto sm:h-10"
          >
        </NuxtLink>

        <!-- Desktop nav -->
        <div class="hidden items-center gap-1 md:flex">
          <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
          >
            {{ link.label }}
          </NuxtLink>
          <a
            href="#contact"
            class="btn btn-primary ml-3 !px-5 !py-2.5 text-sm"
          >
            Start a project
            <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <!-- Mobile toggle -->
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-700 transition hover:border-brand-400 hover:text-brand-600 md:hidden"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon v-if="mobileMenuOpen" name="lucide:x" class="h-5 w-5" />
          <Icon v-else name="lucide:menu" class="h-5 w-5" />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="mobileMenuOpen"
          id="mobile-menu"
          class="pb-5 md:hidden"
        >
          <div class="space-y-1 border-t border-slate-200 pt-4">
            <NuxtLink
              v-for="link in links"
              :key="link.href"
              :to="link.href"
              class="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <a
              href="#contact"
              class="btn btn-primary mt-2 w-full"
              @click="mobileMenuOpen = false"
            >
              Start a project
              <Icon name="lucide:arrow-right" class="h-4 w-4" />
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' }
]

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 8)
</script>
