<template>
  <header class="bg-primary text-white shadow-lg">
    <div class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <h1 class="text-2xl font-bold">Corporate Theme</h1>
        </div>
        <nav class="hidden md:flex space-x-6">
          <a href="#" class="hover:text-gray-200 transition-colors">Home</a>
          <a href="#" class="hover:text-gray-200 transition-colors">About</a>
          <a href="#" class="hover:text-gray-200 transition-colors">Services</a>
          <a href="#" class="hover:text-gray-200 transition-colors">Contact</a>
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

<script setup lang="ts">
// Header component for corporate theme
</script>
