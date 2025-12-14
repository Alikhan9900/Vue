export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: ["@nuxt/ui", "@nuxtjs/sitemap", "@nuxtjs/robots"],

  site: {
    url: "http://localhost:3000",
    name: "Nuxt Course Blog",
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  robots: {
    robotsTxt: `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin
`,
  },
});
