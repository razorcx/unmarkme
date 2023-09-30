<template>
  <nav
    class="container flex items-center justify-between p-6 lg:px-8 max-h-[80px] mx-auto"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">unMarkme Logo</span>
        <img
          class="h-8 w-auto"
          src="@/assets/images/unmarkme-logo.png"
          alt=""
        />
      </a>
    </div>

    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        @click="appState.mobileMenuOpen = true"
      >
        <span class="sr-only">Open main menu</span>
        <Icon name="mdi:hamburger" size="2em" />
      </button>
    </div>

    <div class="hidden lg:flex lg:gap-x-12">
      <a
        v-for="item in appState.navigation"
        :key="item.name"
        :href="item.href"
        class="text-sm font-semibold leading-6 text-gray-900"
        >{{ item.name }}</a
      >
    </div>

    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
        <!-- Log in <span aria-hidden="true">&rarr;</span> -->
      </a>
    </div>
  </nav>
</template>

<script setup>
const appState = useAppState();
</script>
