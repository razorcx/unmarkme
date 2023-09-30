<template>
  <div class="grid w-full h-full min-h-screen mx-auto grid-template-rows-[1fr_auto]">
    <div class="relative container mx-auto min-h-[calc(100vh-96px)]">
      <UnmarkmeNav class="z-[999] bg-white" />
      <main class="flex flex-wrap md:flex-nowrap space-y-24 md:space-y-0  ">
        <div
          class="flex flex-col space-y-5 w-full items-center mx-auto md:border-r-2 md:pr-6"
        >
          <div class="prose w-full px-4 md:px-6 lg:px-0">
            <h2 class="bg-[#f16524]/20 py-4 text-center">HTML to Markdown Converter</h2>
            <h3>1. HTML Markup</h3>
            <div class="flex justify-between items-center space-x-3">
              <p>Type or Copy/Clip your HTML here 👇</p>
              <button class="btn" @click="html = ''">Clear</button>
              <NuxtLink
                to="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started" class="hover:text-slate-600"
                >HTML Guide</NuxtLink
              >
            </div>
            <textarea
              v-model="html"
              placeholder="Type HTML here"
              class="w-full h-64 p-6 border overflow-auto shadow-md"
            >
            </textarea>
            <h3 >2. Converted to Markdown</h3>
            <div>
              <pre class="prose p-6 shadow-md overflow-auto">{{ markdownComputed }}</pre>
            </div>
            <h3>3. Displays HTML in the Browser</h3>
            <div v-html="backToHtml" class="border px-6 py-4 shadow-md overflow-auto"></div>
          </div>
        </div>

        <div class="flex flex-col space-y-5 w-full items-center mx-auto md:pl-6">
          <div class="prose w-full px-4 md:px-6 lg:px-0">
            <h2 class="bg-[#1191d4]/20 py-4 text-center">Markdown to HTML Converter</h2>
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
            <h3>2. Converted to HTML</h3>
            <div>
              <pre class="prose p-6 shadow-md overflow-auto">{{ htmlComputed }}</pre>
            </div>
            <h3>3. Displays HTML in the Browser</h3>
            <div v-html="htmlComputed" class="border px-6 py-4 shadow-md overflow-auto"></div>
          </div>
        </div>
      </main>
    </div>
    <UnmarkmeFooter class=" bg-white" />
  </div>
</template>

<script setup>
const sampleHtml = `<p>Sample ✏️ HTML</p>
<h1>This is H1 Header</h1>
<h2>This is H2 Header</h2>
<h3>This is H3 Header</h3>
<p>Hello World!</p>
`;

const sampleMarkdown = `Sample 🖋️ Markdown

This is H1 Header
=================

This is H2 Header
-----------------

### This is H3 Header

Hello World!`;

const html = ref(sampleHtml);
const markdown = ref(sampleMarkdown);

const turndownService = useTurndownService();

const markdownComputed = computed(() => turndownService.turndown(html.value));
const htmlComputed = computed(() => useMarkedService(markdown.value));
const backToHtml = computed(() => useMarkedService(markdownComputed.value));
const backToMarkdown = computed(() =>
  turndownService.turndown(htmlComputed.value)
);
</script>
