<script setup lang="ts">
const route = useRoute();
const { getPage } = useVexo();
const pageData = getPage(route.path);

definePageMeta({
  layout: false,
});

// Dynamic Component Resolution
const TemplateComponent = resolveComponent("Theme" + pageData.template);
</script>

<template>
  <NuxtLayout :name="pageData.layout || 'default'">
    <component :is="TemplateComponent" v-bind="pageData" />
  </NuxtLayout>
</template>
