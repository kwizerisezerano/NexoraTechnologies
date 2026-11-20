<template>
  <section id="contact" class="relative bg-white py-20 md:py-28">
    <div class="container-x">
      <div
        v-motion="reveal(0)"
        class="reveal mx-auto max-w-2xl text-center"
      >
        <span class="eyebrow justify-center">
          <span class="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Get In Touch
        </span>
        <h2 class="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">Contact Us</h2>
        <p class="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          Ready to transform your business with technology? Get in touch with us today.
        </p>
      </div>

      <div class="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <!-- Contact info -->
        <div v-motion="reveal(80)" class="reveal">
          <h3 class="font-display text-xl font-semibold tracking-tight text-slate-900">Contact Information</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">
            Reach out through any of the channels below and our team will get back to you shortly.
          </p>

          <dl class="mt-8 space-y-5">
            <div v-for="item in contactInfo" :key="item.label" class="flex items-start gap-4">
              <span class="icon-tile h-11 w-11 shrink-0">
                <Icon :name="item.icon" class="h-5 w-5" />
              </span>
              <div>
                <dt class="font-semibold text-slate-900">{{ item.label }}</dt>
                <dd class="mt-0.5 text-sm text-slate-600">{{ item.value }}</dd>
              </div>
            </div>
          </dl>
        </div>

        <!-- Form -->
        <div v-motion="reveal(160)" class="reveal">
          <form
            class="card p-6 sm:p-8"
            @submit.prevent="handleSubmit"
          >
            <div class="space-y-5">
              <div>
                <label for="contact-name" class="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  placeholder="Your name"
                >
              </div>
              <div>
                <label for="contact-email" class="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  placeholder="your@email.com"
                >
              </div>
              <div>
                <label for="contact-message" class="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="4"
                  required
                  class="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" class="btn btn-primary w-full text-base">
                Send Message
                <Icon name="lucide:send" class="h-5 w-5" />
              </button>

              <p
                v-if="submitted"
                class="flex items-center justify-center gap-2 text-center text-sm font-semibold text-brand-600"
                role="status"
              >
                <Icon name="lucide:check-circle-2" class="h-4 w-4" />
                Your email app is opening — just hit send and we'll be in touch.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const contactInfo = [
  { label: 'Location', value: 'Kigali, Rwanda', icon: 'lucide:map-pin' },
  { label: 'Email', value: 'info@nexoratechnologies.com', icon: 'lucide:mail' },
  { label: 'Phone', value: '+250 787 059 322 / +250 790 989 830', icon: 'lucide:phone' },
  { label: 'Working Hours', value: 'Mon - Fri: 8:00 AM - 6:00 PM', icon: 'lucide:clock' }
]

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  const subject = `New enquiry from ${form.name}`
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    '',
    form.message
  ].join('\n')

  window.location.href = `mailto:info@nexoratechnologies.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.message = ''
  }, 3000)
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  visibleOnce: { opacity: 1, y: 0, transition: { delay, duration: 600, ease: [0.22, 0.61, 0.36, 1] } }
})
</script>
