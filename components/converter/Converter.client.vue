<template>
  <div class="grid h-full min-h-screen grid-template-rows-[1fr_auto]">
    <div class="relative container min-h-[calc(100vh-96px)] mx-auto">
      <ConverterNav class="z-[999] bg-slate-100" />

      <main class="flex flex-wrap justify-center md:space-x-10">
        <ConverterHtml class="max-w-2xl" />
        <ConverterMarkdown class="max-w-2xl" />
      </main>
    </div>

    <UnmarkmeFooter class="bg-slate-100" />
  </div>
</template>

<script setup></script>
