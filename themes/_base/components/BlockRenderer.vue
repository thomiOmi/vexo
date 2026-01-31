<script setup lang="ts">
import type { PageBlock } from "../composables/useVexo";

defineProps<{
  blocks?: PageBlock[];
}>();
</script>

<template>
  <div v-if="blocks && blocks.length">
    <template v-for="(block, index) in blocks" :key="index">
      <component
        :is="'Block' + block.type"
        v-if="block.type"
        v-bind="block.data"
      />
      <div v-else class="p-4 bg-red-100 text-red-500 rounded-md my-4">
        Error: Block type missing at index {{ index }}
      </div>
    </template>
  </div>
  <div v-else class="text-center py-20 text-gray-500">
    <p>No blocks configured for this page.</p>
  </div>
</template>
