<template>
  <section class="relative bg-white py-14 md:py-16" aria-label="Company results">
    <div class="container-x">
      <div v-motion="reveal(0)" class="reveal card overflow-hidden p-1.5">
        <dl class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 md:grid-cols-4">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-white px-6 py-8 text-center"
          >
            <dt class="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span class="text-gradient">{{ stat.value }}</span>
            </dt>
            <dd class="mt-1.5 text-sm font-medium text-slate-500">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>

      <p
        v-motion="reveal(120)"
        class="reveal mt-6 text-center text-sm text-slate-500"
      >
        Trusted by schools, clinics, retailers and startups across Rwanda.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '30+', label: 'Happy clients' },
  { value: '5+', label: 'Years of experience' },
  { value: '24/7', label: 'Support available' }
]

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
