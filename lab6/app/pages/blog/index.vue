<script setup>
useSeoMeta({
  title: "Blog",
  description: "Список статей Nuxt Course Blog",
});

const { data, pending, error } = useFetch("/api/posts");
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Блог</h2>

    <UAlert v-if="pending" title="Завантаження..." />
    <UAlert v-if="error" color="red" title="Помилка завантаження" />

    <div v-if="data" class="grid gap-4">
      <UCard v-for="post in data" :key="post.slug">
        <h3 class="font-semibold">{{ post.title }}</h3>
        <p class="text-sm text-gray-600 mb-2">
          {{ post.excerpt }}
        </p>
        <UButton :to="`/blog/${post.slug}`" label="Читати" size="sm" />
      </UCard>
    </div>
  </div>
</template>
