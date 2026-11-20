<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Keep <html lang> in sync with the active locale.
// (No addSeoAttributes: with the `no_prefix` strategy every locale shares one URL,
// so per-locale hreflang links would be meaningless — and require a `baseUrl`.)
const head = useLocaleHead()
useHead(() => ({ htmlAttrs: head.value.htmlAttrs }))
</script>
