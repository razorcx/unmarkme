<template>
  <ConverterCardBase
    title="HTML to Markdown Converter"
    titleBg="bg-[#db2777]/20"
  >
    <section>
      <h3>
        <span class="step">1</span>
        HTML Markup
      </h3>
      <div class="flex justify-between items-center space-x-3">
        <p>Type or Copy/Clip your HTML here 👇</p>
        <button class="btn" @click="html = ''">Clear</button>
        <NuxtLink
          to="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          class="hover:text-slate-600"
          >HTML Guide</NuxtLink
        >
      </div>
      <textarea
        v-model="html"
        placeholder="Type HTML here"
        class="w-full h-64 p-6 border overflow-auto shadow-md bg-[#db2777]/5"
      >
      </textarea>
    </section>

    <section>
      <h3>
        <span class="step">2</span>
        Converted to Markdown
      </h3>
      <pre class="prose p-6 shadow-md overflow-auto">{{
        markdownComputed
      }}</pre>
    </section>

    <section>
      <h3>
        <span class="step">3</span>
        Rendered Output
      </h3>
      <div
        v-html="renderedHtml"
        class="border px-6 py-4 shadow-md overflow-auto bg-white"
      ></div>
    </section>
  </ConverterCardBase>
</template>

<script setup>
const sampleHtml = `<p>Sample ✏️ HTML</p>
  <h1>This is H1 Header</h1>
  <h2>This is H2 Header</h2>
  <h3>This is H3 Header</h3>
  <p>Hello World!</p>
  `;

const turndownService = useTurndownService();

const html = ref(sampleHtml);

const markdownComputed = computed(() => turndownService.turndown(html.value));
const renderedHtml = computed(() => useMarkedService(markdownComputed.value));
</script>

<style scoped>
.step {
  @apply inline-flex justify-center items-center rounded-full bg-[#db2777]/20 px-3 border-slate-400 border mr-1;
}
</style>
