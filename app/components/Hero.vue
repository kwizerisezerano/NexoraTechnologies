<template>
  <section class="relative isolate overflow-hidden mesh pt-28 pb-20 md:pt-36 md:pb-28">
    <!-- Decorative layers -->
    <div class="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-70" aria-hidden="true" />
    <div class="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" aria-hidden="true" />
    <div class="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-teal-300/20 blur-3xl" aria-hidden="true" />

    <div class="container-x relative">
      <div class="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <!-- Copy -->
        <div class="max-w-2xl">
          <span
            v-motion="reveal(0)"
            class="reveal inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 shadow-soft backdrop-blur dark:border-brand-500/30 dark:bg-slate-900/70 dark:text-brand-300"
          >
            <span class="relative flex h-2 w-2">
              <span class="absolute inline-flex h-full w-full rounded-full bg-brand-500 animate-pulse-ring" aria-hidden="true" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            {{ $t('hero.badge') }}
          </span>

          <h1
            v-motion="reveal(80)"
            class="reveal mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white"
          >
            {{ $t('hero.titleStart') }}
            <span class="text-gradient"> {{ $t('hero.titleAccent') }}</span>
          </h1>

          <p
            v-motion="reveal(160)"
            class="reveal mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {{ $t('hero.subtitle') }}
          </p>

          <div
            v-motion="reveal(240)"
            class="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a href="#contact" class="btn btn-primary text-base">
              {{ $t('hero.ctaPrimary') }}
              <Icon name="lucide:arrow-up-right" class="h-5 w-5" />
            </a>
            <a href="#services" class="btn btn-ghost text-base">
              {{ $t('hero.ctaSecondary') }}
              <Icon name="lucide:compass" class="h-5 w-5 text-brand-600" />
            </a>
            <a
              :href="runtimeConfig.public.androidApkUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-ghost text-base"
            >
              {{ $t('hero.downloadAndroid') }}
              <Icon name="simple-icons:android" class="h-5 w-5 text-brand-600" />
            </a>
          </div>

          <div
            v-motion="reveal(320)"
            class="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400"
          >
            <span class="inline-flex items-center gap-2">
              <Icon name="lucide:shield-check" class="h-4 w-4 text-brand-600" />
              {{ $t('hero.trust1') }}
            </span>
            <span class="inline-flex items-center gap-2">
              <Icon name="lucide:map-pin" class="h-4 w-4 text-brand-600" />
              {{ $t('hero.trust2') }}
            </span>
            <span class="inline-flex items-center gap-2">
              <Icon name="lucide:headset" class="h-4 w-4 text-brand-600" />
              {{ $t('hero.trust3') }}
            </span>
          </div>
        </div>

        <!-- Dashboard visual -->
        <div
          v-motion="reveal(280)"
          class="reveal relative mx-auto w-full max-w-lg lg:mx-0"
        >
          <div class="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-500/15 via-transparent to-teal-300/20 blur-2xl" aria-hidden="true" />

          <div class="card overflow-hidden p-5 shadow-lift">
            <!-- window chrome -->
            <div class="flex items-center gap-2 pb-4">
              <span class="h-3 w-3 rounded-full bg-rose-300" />
              <span class="h-3 w-3 rounded-full bg-amber-300" />
              <span class="h-3 w-3 rounded-full bg-brand-400" />
              <span class="ml-3 text-xs font-medium text-slate-400">operations.nexora</span>
            </div>

            <div class="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-800/50">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{{ $t('hero.panel.liveOverview') }}</p>
                  <p class="mt-1 font-display text-2xl font-bold text-slate-900 dark:text-white">{{ $t('hero.panel.systemHealth') }}</p>
                </div>
                <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                  <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {{ $t('hero.panel.online') }}
                </span>
              </div>

              <!-- mini stats -->
              <div class="mt-5 grid grid-cols-3 gap-3">
                <div v-for="stat in mockStats" :key="stat.label" class="rounded-xl border border-slate-100 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
                  <div class="font-display text-lg font-bold text-slate-900 dark:text-white">{{ stat.value }}</div>
                  <div class="text-[0.68rem] text-slate-500 dark:text-slate-400">{{ stat.label }}</div>
                </div>
              </div>

              <!-- chart -->
              <div class="mt-5 flex h-28 items-end gap-2">
                <div
                  v-for="(bar, i) in chart"
                  :key="i"
                  class="flex-1 rounded-t-md bg-gradient-to-t from-brand-500/70 to-brand-400"
                  :style="{ height: `${bar}%` }"
                />
              </div>
              <div class="mt-2 flex justify-between text-[0.65rem] text-slate-400">
                <span v-for="d in days" :key="d">{{ d }}</span>
              </div>
            </div>
          </div>

          <!-- floating chip -->
          <div class="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 p-3 pr-5 shadow-lift backdrop-blur animate-float dark:border-slate-800 dark:bg-slate-900/95">
            <span class="icon-tile h-10 w-10">
              <Icon name="lucide:trending-up" class="h-5 w-5" />
            </span>
            <div>
              <div class="font-display text-base font-bold text-slate-900 dark:text-white">+128%</div>
              <div class="text-[0.68rem] text-slate-500 dark:text-slate-400">{{ $t('hero.panel.velocity') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm } = useI18n()
const runtimeConfig = useRuntimeConfig()

const days = computed(() => tm('hero.days') as unknown as string[])
const chart = [42, 58, 36, 74, 62, 88, 70]
const mockStats = computed(() => [
  { value: '12', label: t('hero.panel.deployments') },
  { value: '99.9%', label: t('hero.panel.uptime') },
  { value: '48', label: t('hero.panel.tasksDone') }
])

// Scroll-reveal variants (respects prefers-reduced-motion via the .reveal CSS override)
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 650, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
