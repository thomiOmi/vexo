<script setup lang="ts">
interface PageBlock {
  type: string;
  data: Record<string, unknown>;
}

defineProps<{
  title?: string;
  blocks?: PageBlock[];
}>();
</script>

<template>
  <div class="h-full">
    <main class="container mx-auto px-4 py-12">
      <article class="bg-white p-8 rounded-lg shadow-sm">
        <h1
          v-if="title"
          class="text-4xl font-bold text-gray-900 mb-6 border-b pb-4"
        >
          {{ title }}
        </h1>
        
        <div v-if="blocks && blocks.length">
          <BlockRenderer :blocks="blocks" />
        </div>
        <slot v-else />
      </article>
    </main>
  </div>
</template>
