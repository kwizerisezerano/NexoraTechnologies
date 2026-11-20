<template>
  <figure
    v-motion="reveal(delay)"
    class="reveal card card-hover flex h-full flex-col p-6"
  >
    <div class="flex items-center gap-1 text-amber-400" :aria-label="`${testimonial.rating} out of 5 stars`" role="img">
      <Icon
        v-for="i in testimonial.rating"
        :key="i"
        name="lucide:star"
        class="h-4 w-4 fill-amber-400 text-amber-400"
      />
    </div>

    <blockquote class="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      “{{ testimonial.text }}”
    </blockquote>

    <figcaption class="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
      <span class="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 font-display text-base font-bold text-white">
        {{ testimonial.name.charAt(0) }}
      </span>
      <span class="min-w-0">
        <span class="block truncate font-semibold text-slate-900 dark:text-white">{{ testimonial.name }}</span>
        <span class="block truncate text-xs text-slate-500 dark:text-slate-400">{{ testimonial.role }}</span>
      </span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
interface Testimonial {
  name: string
  role: string
  text: string
  rating: number
}

defineProps<{
  testimonial: Testimonial
  delay: number
}>()

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
