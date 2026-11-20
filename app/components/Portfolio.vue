<template>
  <section id="portfolio" class="relative bg-white py-20 md:py-28 dark:bg-slate-950">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {{ $t('portfolio.eyebrow') }}
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">{{ $t('portfolio.title') }}</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {{ $t('portfolio.subtitle') }}
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :project="project"
          :delay="index * 90"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

// Non-translatable fields (icons + links) keyed by project order.
const projectMeta = [
  { icon: 'lucide:piggy-bank' },
  { icon: 'lucide:heart-handshake', url: 'https://www.gecorwanda.com/' },
  { icon: 'lucide:layout-dashboard' },
  { icon: 'lucide:graduation-cap' },
  { icon: 'lucide:palette', url: 'https://el-verbuena-portifolio-git-main-robertmugabos-projects.vercel.app/en' },
  { icon: 'lucide:activity', link: '/projects/ehr-analytics' }
]

const projects = computed(() =>
  (tm('portfolio.projects') as any[]).map((p, i) => ({
    title: rt(p.title),
    subtitle: rt(p.subtitle),
    description: rt(p.description),
    category: rt(p.category),
    ...projectMeta[i]
  }))
)

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
