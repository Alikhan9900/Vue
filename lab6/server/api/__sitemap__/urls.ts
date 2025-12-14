export default defineEventHandler(async () => {
  const posts = await $fetch<any[]>("/api/posts");

  return [
    { loc: "/", changefreq: "weekly", priority: 1 },
    { loc: "/blog", changefreq: "weekly", priority: 0.8 },
    { loc: "/about", changefreq: "monthly", priority: 0.5 },
    ...posts.map((post) => ({
      loc: `/blog/${post.slug}`,
      changefreq: "monthly",
      priority: 0.6,
    })),
  ];
});
