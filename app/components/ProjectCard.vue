<template>
  <article
    v-motion="reveal(delay)"
    class="reveal card card-hover flex h-full flex-col p-6"
  >
    <div class="flex items-start justify-between gap-3">
      <span class="icon-tile">
        <Icon :name="project.icon" class="h-6 w-6" />
      </span>
      <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-slate-500">
        {{ project.category }}
      </span>
    </div>

    <h3 class="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900">
      {{ project.title }}
    </h3>
    <p class="mt-2 text-sm leading-relaxed text-slate-600">
      {{ project.description }}
    </p>
  </article>
</template>

<script setup lang="ts">
interface Project {
  title: string
  description: string
  category: string
  icon: string
  color: string
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
