<template>
  <div
    class="background-section pt-20 md:pt-36"
    :class="
      isLg
        ? `bg-[url('images/background-2-section.webp')]`
        : `bg-[url('images/background-2-section-cel.webp')]`
    "
  >
    <div class="container flex flex-col items-center justify-center">
      <p
        class="font-lora italic text-xl text-center text-brown w-[300px] md:w-[450px]"
      >
        "Amar no es mirarse el uno al otro; es mirar juntos en la misma
        dirección"
      </p>

      <Slider class="mt-20 w-11/12 md:w-full" />
      <Music />
    </div>
  </div>
</template>
<script setup>
import Slider from "@/components/Slider";
import Music from "@/components/Sections/Music";
import { useBreakpoints } from "@/composables/useBreakpoints";

const { isLg } = useBreakpoints();
</script>
<style scoped>
.background-section {
  @apply bg-cover;
}
</style>
