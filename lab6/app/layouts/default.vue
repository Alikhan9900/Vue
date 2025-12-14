<script setup>
const links = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
];
</script>

<template>
  <div>
    <header class="border-b">
      <UContainer class="flex justify-between items-center py-4">
        <h1 class="font-bold text-lg">Nuxt Course Blog</h1>
        <nav class="flex gap-4">
          <NuxtLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            class="text-sm hover:underline"
          >
            {{ l.label }}
          </NuxtLink>
        </nav>
      </UContainer>
    </header>

    <main>
      <UContainer class="py-6">
        <slot />
      </UContainer>
    </main>

    <footer class="border-t mt-10">
      <UContainer class="py-4 text-sm text-gray-500">
        © 2025 Nuxt Course Blog
      </UContainer>
    </footer>
  </div>
</template>
