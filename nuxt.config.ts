// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-icon"],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'material-theme-darker' 
    },
  },
  app: {
    head: {
      //https://tailwindcss.com/docs/scroll-behavior
      htmlAttrs: {
        class: "scroll-smooth",
      },
    },
  },
});
