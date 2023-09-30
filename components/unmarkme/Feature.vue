<template>
  <div class="bg-white pt-12 pb-24 ">
    <div class="mx-auto max-w-5xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">
          Real Time Conversion
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
        Convert HTML to Markdown or Markdown to HTML in Real time!
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
            Elevate your development experience with our cutting-edge application designed to streamline your workflow like never before. Introducing a powerful tool that enables you to effortlessly convert HTML to Markdown or Markdown to HTML in real time.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <!-- <component
                  :is="feature.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                /> -->
                <Icon :name="feature.icon" size="1.4em" class="text-white" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
// import {
//   ArrowPathIcon,
//   CloudArrowUpIcon,
//   FingerPrintIcon,
//   LockClosedIcon,
// } from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Real Time Conversion",
    description:
      "Effortlessly switch between HTML and Markdown or from Markdown to HTML in real-time, eliminating the need for manual conversion.",
    icon: "carbon:time",
  },
  {
    name: "Intuitive Interface",
    description:
      "Enjoy a user-friendly experience, whether you're a seasoned developer or just starting out.",
    icon: "tabler:bulb",
  },
  {
    name: "Precise Efficiency",
    description:
      "Achieve precise results, saving time and ensure code integrity. Streamline your workflow with ease.",
    icon: "icon-park-outline:check-correct",
  },
];
</script>
