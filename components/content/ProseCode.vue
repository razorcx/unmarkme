<!-- https://github.com/nuxt/content/blob/main/src/runtime/components/Prose/ProseCode.vue -->
<template>
  <div class="relative bg-[#212121] pt-[0.1em] my-4">
    <div class="!pl-3 text-sm overflow-auto ">
      <span
        v-if="languageText"
        :style="{ background: languageBackground, color: languageColor }"
        class="language-text absolute top-0 right-0 uppercase text-sm"
      >
        {{ languageText }}
      </span>
      <slot class="overflow-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
});

const languageMap: Record<
  string,
  { text: string; color: string; background: string }
> = {
  vue: {
    text: "vue",
    background: "#42b883",
    color: "white",
  },
  js: {
    text: "js",
    background: "#f7df1e",
    color: "black",
  },
  javascript: {
    text: "js",
    background: "#f7df1e",
    color: "black",
  },
  html: {
    text: "html",
    background: "#287ee9",
    color: "black",
  },
  bash: {
    text: "bash",
    background: "#c5c5c5",
    color: "black",
  },
  json: {
    text: "json",
    background: "#48f71e",
    color: "black",
  },
  css: {
    text: "css",
    background: "#f78e1e",
    color: "black",
  },
};

const languageText = computed(() =>
  props.language ? languageMap[props.language]?.text : null
);
const languageBackground = computed(() =>
  props.language ? languageMap[props.language]?.background : null
);
const languageColor = computed(() =>
  props.language ? languageMap[props.language]?.color : null
);
</script>

<style scoped>
.language-text {
  padding: 0.25em 0.5em;
  border-bottom-right-radius: 0.25em;
  border-bottom-left-radius: 0.25em;
}
</style>
