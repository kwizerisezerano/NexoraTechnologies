<template>
  <section id="portfolio" class="relative bg-white py-20 md:py-28">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Our Work
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">Our Portfolio</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Explore some of our recent projects and success stories.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          :project="project"
          :delay="index * 90"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'SME Business Platform',
    description: 'Comprehensive business management platform for small and medium enterprises.',
    category: 'Web Application',
    icon: 'lucide:building',
    color: 'blue'
  },
  {
    title: 'Shop Inventory System',
    description: 'Real-time inventory and sales tracking for retail shops and distributors.',
    category: 'Business System',
    icon: 'lucide:box',
    color: 'green'
  },
  {
    title: 'School Management',
    description: 'Complete school administration system with student and teacher portals.',
    category: 'Education',
    icon: 'lucide:graduation-cap',
    color: 'purple'
  },
  {
    title: 'Clinic Platform',
    description: 'Healthcare management system for clinics and medical facilities.',
    category: 'Healthcare',
    icon: 'lucide:heart-pulse',
    color: 'red'
  },
  {
    title: 'E-commerce Solution',
    description: 'Multi-tenant e-commerce platform with payment integration.',
    category: 'SaaS',
    icon: 'lucide:shopping-cart',
    color: 'orange'
  },
  {
    title: 'API Integration Service',
    description: 'Custom API development and third-party system integrations.',
    category: 'API Development',
    icon: 'lucide:link',
    color: 'cyan'
  }
]

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
