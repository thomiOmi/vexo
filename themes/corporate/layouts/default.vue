<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header :site-name="siteConfig.name" :menu="siteConfig.mainMenu" />
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-900 text-white py-8 mt-auto">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-400">
          &copy; {{ currentYear }} {{ siteConfig.name }}. Built with Nuxt &
          Tailwind CSS.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { getSiteConfig } = useVexo();
const siteConfig = getSiteConfig();
const currentYear = new Date().getFullYear();
</script>
