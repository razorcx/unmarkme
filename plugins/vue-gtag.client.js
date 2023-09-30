import VueGtag from "vue-gtag-next";
import { trackRouter } from "vue-gtag-next";

//https://www.npmjs.com/package/vue-gtag-next
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-3DLJE1RBXF",
    },
  });

  const router = nuxtApp.vueApp.$nuxt.$router;
  trackRouter(router);
});
