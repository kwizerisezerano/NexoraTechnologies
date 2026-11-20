<template>
  <section class="relative bg-white py-14 md:py-16 dark:bg-slate-950" aria-label="Company results">
    <div class="container-x">
      <div v-motion="reveal(0)" class="reveal card overflow-hidden p-1.5">
        <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 md:grid-cols-4 dark:bg-slate-800">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white px-6 py-8 text-center dark:bg-slate-900"
          >
            <dt class="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span class="text-gradient">{{ stat.value }}</span>
            </dt>
            <dd class="mt-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <p
        v-motion="reveal(120)"
        class="reveal mt-6 text-center text-sm text-slate-500 dark:text-slate-400"
      >
        {{ $t('stats.note') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t } = useI18n()

const stats = computed(() => [
  { value: '50+', label: t('stats.projects') },
  { value: '30+', label: t('stats.clients') },
  { value: '5+', label: t('stats.years') },
  { value: '24/7', label: t('stats.support') }
])

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
