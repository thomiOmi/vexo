<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<template>
  <section class="grid md:grid-cols-3 gap-8 mb-16">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="bg-white p-6 rounded-lg shadow-md"
    >
      <div
        class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4"
      >
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ item }}</h3>
      <p class="text-gray-600">
        Feature item rendering dynamically from the block data.
      </p>
    </div>
  </section>
</template>
