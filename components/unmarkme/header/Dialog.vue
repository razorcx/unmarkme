<template>
  <ClientOnly>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="appState.mobileMenuOpen = false"
      :open="appState.mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />

      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">unMarkme Logo</span>
            <img
              class="h-8 w-auto"
              src="@/assets/images/unmarkme-logo.png"
              alt="unMarkme Logo"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="appState.mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <Icon name="mdi:hamburger-off" size="2em" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in appState.navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6 hidden">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </ClientOnly>
</template>

<script setup>
const appState = useAppState();
</script>
