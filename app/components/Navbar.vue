<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass border-b border-slate-200/80 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)] dark:border-slate-800/80' : 'bg-white/60 backdrop-blur-sm border-b border-transparent dark:bg-slate-950/60'"
  >
    <nav class="container-x" aria-label="Primary">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center rounded-xl transition dark:-mx-2.5 dark:-my-1.5 dark:bg-white dark:px-2.5 dark:py-1.5 dark:shadow-sm"
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
            class="relative rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
          >
            {{ link.label }}
          </NuxtLink>

          <!-- Language switcher -->
          <div ref="langRef" class="relative ml-1">
            <button
              type="button"
              class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-brand-400"
              :aria-label="$t('nav.languageLabel')"
              :aria-expanded="langOpen"
              @click="langOpen = !langOpen"
            >
              <img
                :src="flagUrl(locale)"
                alt=""
                class="h-3.5 w-5 rounded-sm object-cover shadow-sm"
              >
              <span>{{ currentLocaleName }}</span>
              <Icon name="lucide:chevron-down" class="h-3.5 w-3.5 transition-transform" :class="langOpen ? 'rotate-180' : ''" />
            </button>
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <div
                v-if="langOpen"
                class="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-lift dark:border-slate-800 dark:bg-slate-900"
                role="menu"
              >
                <button
                  v-for="l in locales"
                  :key="l.code"
                  type="button"
                  class="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-brand-400"
                  role="menuitem"
                  @click="chooseLocale(l.code)"
                >
                  <span class="inline-flex items-center gap-2">
                    <img
                      :src="flagUrl(l.code)"
                      alt=""
                      class="h-3.5 w-5 rounded-sm object-cover shadow-sm"
                    >
                    {{ l.name }}
                  </span>
                  <Icon v-if="l.code === locale" name="lucide:check" class="h-4 w-4 text-brand-600" />
                </button>
              </div>
            </Transition>
          </div>

          <!-- Theme toggle -->
          <button
            type="button"
            class="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-brand-400"
            :aria-label="$t('nav.themeLabel')"
            @click="toggleTheme"
          >
            <span class="dark:hidden"><Icon name="lucide:moon" class="h-5 w-5" /></span>
            <span class="hidden dark:block"><Icon name="lucide:sun" class="h-5 w-5" /></span>
          </button>

          <!-- Download app (streamed via /api/download so the site is not left) -->
          <a
            href="/api/download"
            download="nexora-technologies.apk"
            class="ml-1 inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-brand-200 bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-400 hover:text-brand-800 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300 dark:hover:text-brand-200"
            :aria-label="$t('nav.downloadApp')"
            :title="$t('nav.downloadApp')"
          >
            <Icon name="simple-icons:android" class="h-4 w-4" />
            <span class="hidden lg:inline">{{ $t('nav.downloadApp') }}</span>
          </a>

          <a
            href="#contact"
            class="btn btn-primary ml-2 !px-5 !py-2.5 text-sm"
          >
            {{ $t('nav.startProject') }}
            <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <!-- Mobile toggle -->
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 md:hidden"
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
          <div class="space-y-1 border-t border-slate-200 pt-4 dark:border-slate-800">
            <NuxtLink
              v-for="link in links"
              :key="link.href"
              :to="link.href"
              class="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-brand-400"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>

            <!-- Language + theme (mobile) -->
            <div class="flex flex-wrap items-center gap-2 px-1 pt-3">
              <div class="inline-flex overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                <button
                  v-for="l in locales"
                  :key="l.code"
                  type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition"
                  :class="l.code === locale ? 'bg-brand-500 text-white' : 'bg-white/70 text-slate-600 hover:text-brand-600 dark:bg-slate-900/60 dark:text-slate-300'"
                  @click="chooseLocale(l.code)"
                >
                  <img
                    :src="flagUrl(l.code)"
                    alt=""
                    class="h-3.5 w-5 rounded-sm object-cover shadow-sm"
                  >
                  {{ l.name }}
                </button>
              </div>
              <button
                type="button"
                class="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white/70 text-slate-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300"
                :aria-label="$t('nav.themeLabel')"
                @click="toggleTheme"
              >
                <span class="dark:hidden"><Icon name="lucide:moon" class="h-5 w-5" /></span>
                <span class="hidden dark:block"><Icon name="lucide:sun" class="h-5 w-5" /></span>
              </button>
              <a
                href="/api/download"
                download="nexora-technologies.apk"
                class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-brand-400"
              >
                <Icon name="simple-icons:android" class="h-4 w-4" />
                {{ $t('nav.downloadApp') }}
              </a>
            </div>

            <a
              href="#contact"
              class="btn btn-primary mt-2 w-full"
              @click="mobileMenuOpen = false"
            >
              {{ $t('nav.startProject') }}
              <Icon name="lucide:arrow-right" class="h-4 w-4" />
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const { locale, locales, setLocale, t } = useI18n()
const colorMode = useColorMode()

const mobileMenuOpen = ref(false)
const langOpen = ref(false)
const langRef = ref<HTMLElement | null>(null)

onClickOutside(langRef, () => { langOpen.value = false })

const links = computed(() => [
  { label: t('nav.services'), href: '/#services' },
  { label: t('nav.about'), href: '/#about' },
  { label: t('nav.portfolio'), href: '/#portfolio' },
  { label: t('nav.contact'), href: '/#contact' }
])

// Country flags (same source as the portfolio profile site).
const localeFlags: Record<string, string> = { en: 'us', fr: 'fr', sw: 'tz' }
const flagUrl = (code: string) => `https://flagcdn.com/w40/${localeFlags[code] ?? 'un'}.png`
const currentLocaleName = computed(
  () => locales.value.find((l) => l.code === locale.value)?.name ?? locale.value
)

const chooseLocale = (code: string) => {
  setLocale(code)
  langOpen.value = false
}

// Single light/dark toggle. The icon is driven purely by CSS via the `.dark`
// class (set before paint by @nuxtjs/color-mode), so there's no hydration flash.
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 8)
</script>
