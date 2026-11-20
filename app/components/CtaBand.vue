<template>
  <section class="relative isolate overflow-hidden mesh-dark py-20 md:py-24">
    <div class="pointer-events-none absolute inset-0 opacity-[0.16] bg-grid invert" aria-hidden="true" />
    <div class="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />

    <div class="container-x relative text-center">
      <span
        v-motion="reveal(0)"
        class="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300"
      >
        <Icon name="lucide:sparkles" class="h-3.5 w-3.5" />
        Let's work together
      </span>

      <h2
        v-motion="reveal(80)"
        class="reveal section-title mx-auto mt-6 max-w-3xl text-3xl text-white sm:text-4xl lg:text-5xl"
      >
        Ready to build something great?
      </h2>

      <p
        v-motion="reveal(160)"
        class="reveal mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
      >
        Let's turn your idea into a reliable, scalable technology solution. Tell us what you're building.
      </p>

      <div
        v-motion="reveal(240)"
        class="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a href="#contact" class="btn btn-primary text-base">
          Start Your Project
          <Icon name="lucide:arrow-up-right" class="h-5 w-5" />
        </a>
        <a href="#services" class="btn btn-dark-ghost text-base">
          Explore Services
          <Icon name="lucide:compass" class="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
