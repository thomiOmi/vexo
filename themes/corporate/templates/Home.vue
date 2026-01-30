<script setup lang="ts">
defineProps<{
  title?: string;
  content?: string;
}>();
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <h2 class="text-5xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h2>
      <p class="text-xl text-gray-600 mb-8">
        A professional and modern theme built with Nuxt and Tailwind CSS
      </p>
      <button
        class="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-md"
      >
        Get Started
      </button>
    </section>

    <!-- Features Section -->
    <section class="grid md:grid-cols-3 gap-8 mb-16">
      <div class="bg-white p-6 rounded-lg shadow-md">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Fast Performance</h3>
        <p class="text-gray-600">
          Built with Nuxt for optimal performance and SEO
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
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
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Customizable</h3>
        <p class="text-gray-600">
          Easily customize with Tailwind CSS utilities
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
        <p class="text-gray-600">Enterprise-grade security and reliability</p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary text-white rounded-lg p-12 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p class="text-lg mb-6 text-blue-100">
        Join thousands of companies using our corporate theme
      </p>
      <button
        class="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
      >
        Contact Sales
      </button>
    </section>
  </div>
</template>
