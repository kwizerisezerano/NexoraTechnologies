<template>
  <section class="relative bg-slate-50 py-20 md:py-28">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Testimonials
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">What Our Clients Say</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Trusted by businesses across Rwanda for reliable technology solutions.
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
const testimonials = [
  {
    name: 'Jean Mugabo',
    role: 'CEO, TechStart Rwanda',
    text: 'Nexora Technologies delivered an exceptional business platform that transformed our operations. Their team is professional and responsive.',
    rating: 5
  },
  {
    name: 'Marie Uwineza',
    role: 'Director, Kigali International School',
    text: 'The school management system they built has streamlined our administrative processes. Highly recommended for any educational institution.',
    rating: 5
  },
  {
    name: 'Patrick Ndayisaba',
    role: 'Owner, MegaMart',
    text: 'Their inventory and sales system helped us track our business in real-time. Great support and timely delivery.',
    rating: 5
  }
]

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
