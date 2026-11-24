<template>
  <section id="services" class="relative bg-white py-20 md:py-28 dark:bg-slate-950">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {{ $t('services.eyebrow') }}
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">{{ $t('services.title') }}</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <div
        v-motion="reveal(80)"
        class="reveal card mt-14 overflow-hidden"
      >
        <div class="grid lg:grid-cols-[0.85fr_1.15fr]">
          <!-- Featured service -->
          <div class="border-b border-slate-200 bg-gradient-to-br from-brand-50/70 to-white p-8 sm:p-10 lg:border-r lg:border-b-0 dark:border-slate-800 dark:from-brand-500/10 dark:to-transparent">
            <span class="icon-tile h-14 w-14">
              <Icon name="lucide:laptop" class="h-7 w-7" />
            </span>
            <div class="mt-5 flex flex-wrap items-center gap-3">
              <h3 class="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{{ $t('services.name') }}</h3>
              <span class="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/15 dark:text-brand-300">
                <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {{ $t('services.badge') }}
              </span>
            </div>
            <p class="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              {{ $t('services.description') }}
            </p>
            <a href="#contact" class="btn btn-primary mt-7 text-base">
              {{ $t('services.ctaPrimary') }}
              <Icon name="lucide:arrow-up-right" class="h-5 w-5" />
            </a>
          </div>

          <!-- Capabilities -->
          <div class="p-8 sm:p-10">
            <span class="eyebrow">
              <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {{ $t('services.whatWeBuild') }}
            </span>
            <ul class="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              <li
                v-for="capability in capabilities"
                :key="capability"
                class="flex items-start gap-3"
              >
                <span class="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
                  <Icon name="lucide:check" class="h-3.5 w-3.5" />
                </span>
                <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ capability }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

const capabilities = computed(() => (tm('services.capabilities') as any[]).map((c) => rt(c)))

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
