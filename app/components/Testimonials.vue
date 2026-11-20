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
    name: 'TontineHub',
    role: 'Founding Team',
    text: 'Nexora turned our manual savings process into a real-time platform. Every franc is tracked, loans are approved in minutes, and our 10,000+ members finally trust the numbers.',
    rating: 5
  },
  {
    name: 'GECO Rwanda',
    role: 'Epilepsy Care Programme',
    text: 'The platform Nexora built gives our care teams one place to manage cases and share information. It has cut the paperwork behind the compassionate care we deliver.',
    rating: 5
  },
  {
    name: 'Tontine MIS (TMIS)',
    role: 'Management System Client',
    text: 'Nexora built a management information system that brought our operations, member records, and finances into one place — replacing scattered spreadsheets with something our team actually enjoys using.',
    rating: 5
  },
  {
    name: 'Menya-Tech',
    role: 'Learning Platform Team',
    text: 'They delivered a learning platform that supports our whole programme — software development, networking, multimedia, and diploma modules — on schedule and built to grow with us.',
    rating: 5
  },
  {
    name: 'El Verbuena',
    role: 'Graphic & UI Designer',
    text: 'Nexora delivered a portfolio that finally matches the quality of my work — clean, fast, and elegant. It presents my branding and design projects exactly the way I wanted.',
    rating: 5
  }
]

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
