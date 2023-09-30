<template>
  <div class="grid h-full min-h-screen grid-template-rows-[1fr_auto]">
    <div class="relative container min-h-[calc(100vh-96px)] mx-auto">
      <ConverterNav class="z-[999] hidden md:block" />
      <Converter />
    </div>

    <UnmarkmeFooter class="bg-slate-100" />
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
