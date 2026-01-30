<script setup lang="ts">
interface NavItem {
  label: string;
  path: string;
}

defineProps<{
  siteName: string;
  menu: NavItem[];
}>();
</script>

<template>
  <header class="bg-primary text-white shadow-lg">
    <div class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <NuxtLink to="/" class="text-2xl font-bold">
            {{ siteName }}
          </NuxtLink>
        </div>
        <nav class="hidden md:flex space-x-6">
          <NuxtLink
            v-for="item in menu"
            :key="item.path"
            :to="item.path"
            class="hover:text-gray-200 transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
        <button class="md:hidden text-white">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
