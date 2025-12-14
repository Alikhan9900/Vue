export default defineEventHandler((event) => {
  const { slug } = event.context.params as { slug: string };

  const posts = [
    {
      slug: "nuxt-basics",
      title: "Основи Nuxt 4",
      content: "Детальний текст про Nuxt 4...",
    },
    {
      slug: "nuxt-usefetch",
      title: "useFetch у Nuxt",
      content: "Детальний текст про useFetch...",
    },
    {
      slug: "nuxt-seo",
      title: "SEO в Nuxt",
      content: "Детальний текст про SEO в Nuxt...",
    },
  ];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    throw createError({
      statusCode: 404,
      statusMessage: "Post not found",
    });
  }

  return post;
});
