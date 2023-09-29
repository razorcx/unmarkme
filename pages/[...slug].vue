<template>
  <NuxtLayout>
    <Article class="mt-24 md:pl-9 px-3" />
  </NuxtLayout>
</template>

<script setup>
console.log("root slug", useRoute().fullPath);
</script>
