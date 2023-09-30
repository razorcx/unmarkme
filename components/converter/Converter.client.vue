<template>
  <div
    class="grid h-full min-h-screen grid-template-rows-[1fr_auto]"
  >
    <div class="relative container min-h-[calc(100vh-96px)] mx-auto">

      <ConverterNav class="z-[999] bg-slate-100" />

      <main class="flex flex-wrap bg-slate-200 py-4 pb-12 justify-center md:spaxe-x-3 lg:space-x-16 space-y-12 md:space-y-0">
        <ConverterHtml class="w-full px-3 md:px-0"/>
        <ConverterMarkdown class="w-full px-3 md:px-0"/>
      </main>

    </div>

    <UnmarkmeFooter class="bg-slate-100" />

  </div>
</template>

<script setup>

</script>
