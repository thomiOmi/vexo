<script setup lang="ts">
defineProps<{
  html: string;
}>();
</script>

<template>
  <div class="prose prose-lg max-w-none text-gray-700">
    <!-- eslint-disable vue/no-v-html -->
    <div v-html="html" />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>
