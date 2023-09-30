<template>
  <div class="bg-white">
    <UnmarkmeHeader />

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <UnmarkmeInsetTop />
      <UnmarkmeHero />
      <UnmarkmeInsetBottom />
    </div>

    <UnmarkmeFeature />

    <UnmarkmeFooter class="mt-6 bg-white" />
  </div>
</template>

<script setup>
useHead({
  title: `unMarkme - Convert your HTML to Markdown or Markdown to HTML in Realtime`,
  meta: [
    {
      name: "description",
      content: "Convert your HTML to Markdown or Markdown to HTML in Realtime",
    },
  ],
});
</script>
