<template>
  <div
    v-motion="reveal(delay)"
    class="reveal card card-hover relative flex h-full flex-col p-6"
  >
    <span class="font-display text-3xl font-extrabold tracking-tight text-brand-500/30">
      {{ step }}
    </span>
    <h4 class="mt-2 font-display text-base font-semibold tracking-tight text-slate-900 dark:text-white">
      {{ stage.title }}
    </h4>
    <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ stage.description }}</p>
  </div>
</template>

<script setup lang="ts">
interface Stage {
  title: string
  description: string
  color: string
}

const props = defineProps<{
  stage: Stage
  index: number
  delay: number
}>()

const step = computed(() => String(props.index + 1).padStart(2, '0'))

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
