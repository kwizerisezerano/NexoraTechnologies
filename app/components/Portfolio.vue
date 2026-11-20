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
          Selected work across fintech, healthcare, education, and analytics — built for organizations in Rwanda and beyond.
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
    title: 'TontineHub',
    subtitle: 'Save Together. Grow Together. Win Together.',
    description: 'Replaces messy group chats and paper records with one powerful platform. No spreadsheets. No confusion. Every franc tracked in real time, loans approved in minutes — 10,000+ members can save.',
    category: 'Fintech Platform',
    icon: 'lucide:piggy-bank'
  },
  {
    title: 'GECO Rwanda',
    subtitle: 'Leading Epilepsy Care Since 2010',
    description: 'A digital platform supporting comprehensive epilepsy care, fighting stigma, and building inclusive communities across Rwanda — transforming lives through compassionate care since 2010.',
    category: 'Healthcare · NGO',
    icon: 'lucide:heart-handshake',
    url: 'https://www.gecorwanda.com/'
  },
  {
    title: 'Tontine MIS (TMIS)',
    subtitle: 'Tontine Management Information System',
    description: 'A comprehensive tontine management information system built with Nuxt.js, streamlining operations, member management, and financial tracking for community savings groups.',
    category: 'Management System',
    icon: 'lucide:layout-dashboard'
  },
  {
    title: 'Menya-Tech',
    subtitle: 'Technology & Innovation Education Platform',
    description: 'A comprehensive learning platform for technology and innovation education, covering Software Development (SOD), Networking, Multimedia, university modules, and technical diploma programmes.',
    category: 'EdTech Platform',
    icon: 'lucide:graduation-cap'
  },
  {
    title: 'El Verbuena',
    subtitle: 'Graphic & UI Designer Portfolio',
    description: 'A modern, elegant portfolio site for a graphic and UI designer, showcasing creative works, branding projects, and visual design expertise with a clean aesthetic that reflects the designer\'s identity.',
    category: 'Website · Portfolio',
    icon: 'lucide:palette',
    url: 'https://el-verbuena-portifolio-git-main-robertmugabos-projects.vercel.app/en'
  },
  {
    title: 'EHR Analytics Dashboard',
    subtitle: 'Predictive Patient Risk Monitoring',
    description: 'A clinical decision-support platform that turns raw Electronic Health Record data into action — cumulative antibiograms, WHO ATC/DDD consumption tracking, XGBoost risk scores, and real-time superbug alerts.',
    category: 'Final Year Project',
    icon: 'lucide:activity',
    link: '/projects/ehr-analytics'
  }
]

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
