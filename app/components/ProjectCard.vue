<template>
  <article
    v-motion="reveal(delay)"
    class="reveal card card-hover group relative flex h-full flex-col p-6"
  >
    <span class="icon-tile">
      <Icon :name="project.icon" class="h-6 w-6" />
    </span>

    <h3 class="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-brand-600">
      {{ project.title }}
    </h3>
    <p v-if="project.subtitle" class="mt-1 text-sm font-medium text-brand-600">
      {{ project.subtitle }}
    </p>
    <p class="mt-2 text-sm leading-relaxed text-slate-600">
      {{ project.description }}
    </p>

    <div class="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pt-5">
      <div class="flex flex-wrap items-center gap-2">
        <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-slate-500">
          {{ project.category }}
        </span>
        <span
          v-if="project.url"
          class="inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-wide text-brand-700"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Live
        </span>
      </div>

      <!-- Hosted: whole-card external link -->
      <span v-if="project.url" class="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
        Visit site
        <Icon name="lucide:external-link" class="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </span>

      <!-- Case study: whole-card internal link -->
      <span v-else-if="project.link" class="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
        Case study
        <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>

      <!-- Not deployed publicly: turn it into a lead -->
      <NuxtLink
        v-else
        to="/#contact"
        class="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 transition-colors hover:text-brand-600"
      >
        Request a demo
        <Icon name="lucide:arrow-right" class="h-4 w-4" />
      </NuxtLink>
    </div>

    <a
      v-if="project.url"
      :href="project.url"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`${project.title} — visit the live site`"
      class="absolute inset-0 z-10 rounded-[1.25rem]"
    />
    <NuxtLink
      v-else-if="project.link"
      :to="project.link"
      :aria-label="`${project.title} — read the case study`"
      class="absolute inset-0 z-10 rounded-[1.25rem]"
    />
  </article>
</template>

<script setup lang="ts">
interface Project {
  title: string
  subtitle?: string
  description: string
  category: string
  icon: string
  /** Internal route (e.g. a case-study page) */
  link?: string
  /** External URL of a publicly hosted project */
  url?: string
}

defineProps<{
  project: Project
  delay: number
}>()

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
