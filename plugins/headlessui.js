import { Dialog, DialogPanel } from "@headlessui/vue";

//https://headlessui.com/vue/dialog
//https://vuejs.org/guide/components/registration.html#global-registration
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp
    .component("Dialog", Dialog)
    .component("DialogPanel", DialogPanel);
});
