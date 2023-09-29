// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-icon"],
  content: {
    documentDriven: true,
    highlight: {
      theme: "material-theme-darker",
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title:
        "unMarkme - Convert your HTML to Markdown or Markdown to HTML in Realtime",
      meta: [
        {
          name: "description",
          content: "Convert your HTML to Markdown or Markdown to HTML in Realtime",
        },
      ],
      //https://daisyui.com/docs/themes/
      //https://nuxt.com/docs/getting-started/seo-meta
      htmlAttrs: {
        ["data-theme"]: "emerald",
        class: "scroll-smooth",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/css/tailwind.css"],
});
