<template>
  <section id="about" class="relative bg-slate-50 py-20 md:py-28">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Who We Are
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">About Us</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          A trusted technology and engineering company in Rwanda, serving Africa and international markets.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.title"
          v-motion="reveal(i * 100)"
          class="reveal card card-hover p-8"
        >
          <span class="icon-tile h-14 w-14">
            <Icon :name="pillar.icon" class="h-7 w-7" />
          </span>
          <h3 class="mt-5 font-display text-xl font-semibold tracking-tight text-slate-900">{{ pillar.title }}</h3>
          <p class="mt-3 leading-relaxed text-slate-600">{{ pillar.text }}</p>
        </div>
      </div>

      <div class="mt-20">
        <div
          v-motion="reveal(0)"
          class="reveal mx-auto max-w-2xl text-center"
        >
          <span class="eyebrow justify-center">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Our Journey
          </span>
          <h3 class="section-title mt-4 text-2xl sm:text-3xl lg:text-4xl">Growth Roadmap</h3>
        </div>

        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <RoadmapCard
            v-for="(stage, index) in roadmap"
            :key="stage.title"
            :stage="stage"
            :index="index"
            :delay="index * 100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pillars = [
  {
    title: 'Our Mission',
    icon: 'lucide:target',
    text: 'Create practical, reliable and accessible technology solutions that help organizations operate better and solve real problems.'
  },
  {
    title: 'Our Vision',
    icon: 'lucide:eye',
    text: 'Become a trusted technology and engineering company in Rwanda, then serve Africa and international markets.'
  }
]

const roadmap = [
  {
    title: 'Stage 1: Launch',
    description: 'Software development focus. Company registration, website, portfolio, first clients.',
    color: 'blue'
  },
  {
    title: 'Stage 2: Build Products',
    description: 'Turn repeated needs into reusable products or SaaS. Support and maintenance contracts.',
    color: 'green'
  },
  {
    title: 'Stage 3: Expand',
    description: 'Pilot IoT solutions. Partner with qualified network and hardware specialists.',
    color: 'purple'
  },
  {
    title: 'Stage 4: Scale',
    description: 'Systems integration, managed infrastructure, automation, regional delivery.',
    color: 'orange'
  }
]

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
