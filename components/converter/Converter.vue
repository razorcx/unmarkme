<template>
  <div
    class="grid w-full h-full min-h-screen mx-auto grid-template-rows-[1fr_auto]"
  >
    <div class="relative container mx-auto min-h-[calc(100vh-96px)]">
      <ConverterNav class="z-[999] bg-white" />
      <main class="flex flex-wrap md:flex-nowrap space-y-24 md:space-y-0">
        <ConverterHtml />
        <ConverterMarkdown />>
      </main>
    </div>
    <UnmarkmeFooter class="bg-white" />
  </div>
</template>

<script setup>

</script>
