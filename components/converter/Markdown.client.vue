<template>
  <div class="shadow-md">
    <h2 class="bg-[#1191d4]/20 py-4 text-center">Markdown to HTML Converter</h2>

    <div class="prose bg-white px-6">
      <section>
        <h3>1. Markdown</h3>
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
        <h3>2. Converted to HTML</h3>
        <div>
          <pre class="prose p-6 shadow-md overflow-auto">{{
            htmlComputed
          }}</pre>
        </div>
      </section>

      <section>
        <h3>3. Rendered Output</h3>
        <div
          v-html="htmlComputed"
          class="border px-6 py-4 shadow-md overflow-auto bg-white"
        ></div>
      </section>
    </div>
  </div>
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
