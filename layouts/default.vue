<template>
  <div
    class="grid h-screen w-full grid-rows-[1fr_auto] mx-auto "
  >
    <div class="relative container grid grid-rows-[1fr_auto] mx-auto">
      <Nav class="z-[999] bg-white" />

      <div
        class="relative grid justify-center md:grid-cols-[minmax(300px,25%)_1fr]"
      >
        <Sidebar class="sticky top-16 min-w-[300px] pl-12" />
        <slot />
      </div>
    </div>
    <Footer class="border-t"/>
  </div>
</template>
