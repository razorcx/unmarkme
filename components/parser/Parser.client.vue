<template>
  <div class="grid w-full min-h-screen mx-auto">
    <div class="relative h-full container mx-auto">
      <UnmarkmeNav class="z-[999] bg-white" />
      <main class="flex flex-wrap md:flex-nowrap space-y-24 md:space-y-0 mt-10 ">
        <div
          class="flex flex-col space-y-5 w-full items-center mx-auto md:border-r-2 md:pr-6"
        >
          <div class="prose w-full px-4 md:px-6 lg:px-0">
            <h2>HTML to Markdown</h2>
            <h3>HTML</h3>
            <div class="flex justify-between items-center">
              <p>Type or Copy/Clip your HTML here 👇</p>
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
            <h3>Markdown</h3>
            <div>
              <pre class="prose p-6 shadow-md">{{ markdownComputed }}</pre>
            </div>
            <h3>Back to HTML with TailwindCSS Prose</h3>
            <div v-html="backToHtml" class="border px-6 py-4 shadow-md"></div>
          </div>
        </div>
        <div class="flex flex-col space-y-5 w-full items-center mx-auto md:pl-6">
          <div class="prose w-full px-4 md:px-6 lg:px-0">
            <h2>Markdown to HTML</h2>
            <h3>Markdown</h3>
            <div class="flex justify-between items-center">
              <p>Type or Copy/Clip your Markdown here 👇</p>
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
            <h3>HTML</h3>
            <div>
              <pre class="prose p-6 shadow-md">{{ htmlComputed }}</pre>
            </div>
            <h3>Back to Markdown</h3>
            <div>
              <pre
                class="prose border p-6 bg-white text-black rounded-none shadow-md"
                >{{ backToMarkdown }}</pre
              >
            </div>
          </div>
        </div>
      </main>
    </div>
    <UnmarkmeFooter class="mt-6 bg-white" />
  </div>
</template>

<script setup>
const sampleHtml = `***Sample HTML***
<h1>This is H1 Header</h1>
<h2>This is H2 Header</h2>
<h3>This is H3 Header</h3>
<h4>This is H4 Header</h4>
<p>Hello World!</p>
`;

const sampleMarkdown = `***Sample Markdown***
This is unMarkme
=========
unMarkme is awesome`;

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
