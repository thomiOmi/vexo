<script setup lang="ts">
// No props needed for 404
</script>

<template>
  <div class="flex flex-col items-center justify-center py-20 text-center">
    <h1 class="text-9xl font-bold text-gray-200 mb-4">404</h1>
    <h2 class="text-3xl font-bold text-gray-900 mb-6">Page Not Found</h2>
    <p class="text-xl text-gray-600 mb-8 max-w-md">
      The page you are looking for might have been removed, had its name changed,
      or is temporarily unavailable.
    </p>
    <NuxtLink
      to="/"
      class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-md"
    >
      Back to Home
    </NuxtLink>
  </div>
</template>
