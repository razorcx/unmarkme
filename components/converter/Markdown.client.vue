<template>
  <ConverterCardBase
    title="Markdown to HTML Converter"
    titleBg="bg-[#1191d4]/20"
  >
    <section>
      <h3><span
          class="inline-flex justify-center items-center rounded-full bg-[#1191d4]/20 px-3"
          >1</span
        > Markdown</h3>
      <div class="flex justify-between items-center space-x-3">
        <p>Type or Copy/Clip your Markdown here 👇</p>
        <button class="btn" @click="markdown = ''">Clear</button>
        <NuxtLink
          to="https://www.markdownguide.org/basic-syntax"
          class="hover:text-slate-600"
          >Markdown Guide</NuxtLink
        >
      </div>

      <textarea
        v-model="markdown"
        placeholder="Type Markdown here"
        class="w-full h-64 p-6 border overflow-auto shadow-md"
      >
      </textarea>
    </section>

    <section>
      <h3><span
          class="inline-flex justify-center items-center rounded-full bg-[#1191d4]/20 px-3"
          >2</span
        > Converted to HTML</h3>
      <div>
        <pre class="prose p-6 shadow-md overflow-auto">{{ htmlComputed }}</pre>
      </div>
    </section>

    <section>
      <h3><span
          class="inline-flex justify-center items-center rounded-full bg-[#1191d4]/20 px-3"
          >3</span
        > Rendered Output</h3>
      <div
        v-html="htmlComputed"
        class="border px-6 py-4 shadow-md overflow-auto bg-white"
      ></div>
    </section>
  </ConverterCardBase>
</template>

<script setup>
const sampleMarkdown = `Sample 🖋️ Markdown
  
  This is H1 Header
  =================
  
  This is H2 Header
  -----------------
  
  ### This is H3 Header
  
  Hello World!`;

const turndownService = useTurndownService();

const markdown = ref(sampleMarkdown);
const htmlComputed = computed(() => useMarkedService(markdown.value));
</script>
