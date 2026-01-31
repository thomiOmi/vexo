<script setup lang="ts">
interface PageBlock {
  type: string;
  data: Record<string, unknown>;
}

defineProps<{
  blocks?: PageBlock[];
}>();
</script>

<template>
  <div>
    <BlockRenderer :blocks="blocks" />
  </div>
</template>
