<template>
  <section class="relative bg-slate-50 py-20 md:py-28 dark:bg-slate-900">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {{ $t('testimonials.eyebrow') }}
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">{{ $t('testimonials.title') }}</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {{ $t('testimonials.subtitle') }}
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          :testimonial="testimonial"
          :delay="index * 100"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { tm, rt } = useI18n()

// Client names are brand/proper nouns — kept out of translations.
const names = ['TontineHub', 'GECO Rwanda', 'Tontine MIS (TMIS)', 'Menya-Tech', 'El Verbuena']

const testimonials = computed(() =>
  (tm('testimonials.items') as any[]).map((item, i) => ({
    name: names[i] ?? '',
    role: rt(item.role),
    text: rt(item.text),
    rating: 5
  }))
)

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
