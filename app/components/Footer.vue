<template>
  <footer class="relative overflow-hidden mesh border-t border-slate-200/70 text-slate-600 dark:border-white/10 dark:text-slate-300">
    <div class="container-x py-16">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="lg:max-w-xs">
          <NuxtLink
            to="/"
            class="inline-flex rounded-xl bg-white px-3 py-2 shadow-sm"
            aria-label="Nexora Technologies — home"
          >
            <img
              src="https://res.cloudinary.com/danzeqybu/image/upload/v1795168241/Nexora_Technologies_Green_Orbit_Logo_zt3sfp.png"
              alt="Nexora Technologies"
              width="2172"
              height="724"
              class="h-8 w-auto"
            >
          </NuxtLink>
          <p class="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {{ $t('footer.tagline') }}
          </p>
          <div class="mt-6 flex flex-wrap items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-brand-400/60 dark:hover:text-white"
              :aria-label="social.label"
            >
              <Icon :name="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <nav :aria-label="$t('footer.servicesTitle')">
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{{ $t('footer.servicesTitle') }}</h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="item in serviceLinks" :key="item">
              <NuxtLink to="/#services" class="text-slate-600 transition hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300">{{ item }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Company -->
        <nav :aria-label="$t('footer.companyTitle')">
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{{ $t('footer.companyTitle') }}</h4>
          <ul class="mt-4 space-y-3 text-sm">
            <li v-for="item in companyLinks" :key="item.label">
              <NuxtLink :to="item.href" class="text-slate-600 transition hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300">{{ item.label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Connect -->
        <div>
          <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">{{ $t('footer.connectTitle') }}</h4>
          <ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <li class="flex items-center gap-2">
              <Icon name="lucide:map-pin" class="h-4 w-4 text-brand-600 dark:text-brand-400" />
              {{ $t('footer.location') }}
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:mail" class="h-4 w-4 text-brand-600 dark:text-brand-400" />
              info@nexoratechnologies.com
            </li>
            <li class="flex items-center gap-2">
              <Icon name="lucide:clock" class="h-4 w-4 text-brand-600 dark:text-brand-400" />
              {{ $t('footer.hours') }}
            </li>
            <li>
              <!-- Highlighted app download CTA (streamed via /api/download) -->
              <a
                href="/api/download"
                class="btn btn-primary mt-2 inline-flex"
              >
                <Icon name="simple-icons:android" class="h-5 w-5" />
                {{ $t('footer.downloadApp') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
        <p>{{ $t('footer.copyright') }}</p>
        <p>{{ $t('footer.builtIn') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { t, tm, rt } = useI18n()

// WhatsApp: opens a chat with a pre-filled default message.
const whatsappNumber = '250787059322'
const whatsappMessage = encodeURIComponent(
  "Hello Nexora Technologies! I'd like to learn more about your software development services."
)

const socials = [
  { label: 'WhatsApp', icon: 'simple-icons:whatsapp', href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}` },
  { label: 'Facebook', icon: 'simple-icons:facebook', href: '#' },
  { label: 'Instagram', icon: 'simple-icons:instagram', href: '#' },
  { label: 'TikTok', icon: 'simple-icons:tiktok', href: '#' },
  { label: 'X', icon: 'simple-icons:x', href: '#' },
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', href: '#' },
  { label: 'GitHub', icon: 'simple-icons:github', href: '#' }
]

const serviceLinks = computed(() => (tm('footer.services') as any[]).map((s) => rt(s)))

const companyLinks = computed(() => [
  { label: t('footer.companyAbout'), href: '/#about' },
  { label: t('footer.companyServices'), href: '/#services' },
  { label: t('footer.companyPortfolio'), href: '/#portfolio' },
  { label: t('footer.companyContact'), href: '/#contact' }
])
</script>
