<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <section class="text-center mb-16">
    <h2 class="text-5xl font-bold text-gray-900 mb-4">{{ title }}</h2>
    <p v-if="subtitle" class="text-xl text-gray-600 mb-8">{{ subtitle }}</p>
    <button
      class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-md"
    >
      Get Started
    </button>
  </section>
</template>
