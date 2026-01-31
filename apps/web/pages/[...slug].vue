<script setup lang="ts">
const route = useRoute();
const { getPage } = useVexo();
const pageData = getPage(route.path);

definePageMeta({
  layout: false,
});

// Dynamic Component Resolution
const TemplateComponent = pageData
  ? resolveComponent("Theme" + pageData.template)
  : resolveComponent("ThemeNotFound");

useSeoMeta({
  title: () => (pageData?.title ? pageData.title : "Page Not Found"),
  titleTemplate: (title) => (title ? `${title} | Vexo Engine` : "Vexo Engine"),
  description: () => pageData?.meta?.description,
});
</script>

<template>
  <NuxtLayout :name="pageData?.layout || 'default'">
    <component :is="TemplateComponent" v-bind="pageData" />
  </NuxtLayout>
</template>
