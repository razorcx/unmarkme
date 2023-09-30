<template>
  <div class="shadow-md pb-12">
    <h2 class="bg-[#1191d4]/20 py-8 text-center font-bold text-2xl" :class="titleBg">
      {{ title }}
    </h2>

    <div class="prose mx-auto px-4 md:px-4 prose:w-full">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  titleBg: String
});
</script>
