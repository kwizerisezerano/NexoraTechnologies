<template>
  <section id="about" class="relative bg-slate-50 py-20 md:py-28 dark:bg-slate-900">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {{ $t('about.eyebrow') }}
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">{{ $t('about.title') }}</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {{ $t('about.subtitle') }}
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          v-motion="reveal(i * 100)"
          class="reveal card card-hover p-8"
        >
          <span class="icon-tile h-14 w-14">
            <Icon :name="pillar.icon" class="h-7 w-7" />
          </span>
          <h3 class="mt-5 font-display text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{{ pillar.title }}</h3>
          <p class="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{{ pillar.text }}</p>
        </div>
      </div>

      <div class="mt-20">
        <div
          v-motion="reveal(0)"
          class="reveal mx-auto max-w-2xl text-center"
        >
          <span class="eyebrow justify-center">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {{ $t('about.journeyEyebrow') }}
          </span>
          <h3 class="section-title mt-4 text-2xl sm:text-3xl lg:text-4xl">{{ $t('about.journeyTitle') }}</h3>
        </div>

        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <RoadmapCard
            v-for="(stage, index) in roadmap"
            :key="stage.title"
            :stage="stage"
            :index="index"
            :delay="index * 100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm, rt } = useI18n()

const pillars = computed(() => [
  { title: t('about.missionTitle'), icon: 'lucide:target', text: t('about.missionText') },
  { title: t('about.visionTitle'), icon: 'lucide:eye', text: t('about.visionText') }
])

const colors = ['blue', 'green', 'purple', 'orange']
const roadmap = computed(() =>
  (tm('about.roadmap') as any[]).map((stage, i) => ({
    title: rt(stage.title),
    description: rt(stage.description),
    color: colors[i] ?? 'green'
  }))
)

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
