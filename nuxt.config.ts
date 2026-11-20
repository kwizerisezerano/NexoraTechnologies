import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@vueuse/motion/nuxt', '@nuxt/icon'],

  // Tailwind v4 entry point — REQUIRED, otherwise no utility CSS is generated.
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Nexora Technologies — Building the Future of Technology in Rwanda',
      meta: [
        { name: 'description', content: 'Nexora Technologies is a Rwanda-based software development company building web, mobile, backend, API, and enterprise software solutions for organizations across Rwanda and beyond.' },
        { name: 'keywords', content: 'Nexora, software development, web development, mobile apps, backend, API, SaaS, enterprise systems, Rwanda, technology' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Nexora Technologies' },
        { property: 'og:title', content: 'Nexora Technologies — Building the Future of Technology' },
        { property: 'og:description', content: 'Nexora Technologies is a Rwanda-based technology and engineering company delivering innovative solutions.' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})
