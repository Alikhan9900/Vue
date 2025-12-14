export default defineEventHandler(() => {
  return [
    {
      slug: "nuxt-basics",
      title: "Основи Nuxt 4",
      excerpt: "Вступ до Nuxt 4, структура та SSR.",
      content: "Це стаття про основи Nuxt 4...",
    },
    {
      slug: "nuxt-usefetch",
      title: "useFetch у Nuxt",
      excerpt: "Як працювати з даними через useFetch.",
      content: "useFetch дозволяє отримувати дані з API...",
    },
    {
      slug: "nuxt-seo",
      title: "SEO в Nuxt",
      excerpt: "useSeoMeta, sitemap та robots.",
      content: "Nuxt має потужні інструменти SEO...",
    },
  ];
});
