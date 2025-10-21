<template>
  <div class="container flex justify-center justify-self-center items-center">
    <img
      :src="bgImage"
      alt="Background Home"
      class="background-home aspect-3/2"
    />
    <div
      class="absolute flex flex-col items-center justify-center"
      style="justify-self: anchor-center"
    >
      <p class="text-brown text-xl font-lora tracking-[4px]">!NOS CASAMOS!</p>
      <img :src="namesImage" class="h-44" alt="Nombre novios" />
      <p
        class="text-brown text-sm md:text-xl font-lora italic w-[230px] md:w-[350px] text-center"
      >
        Y nos encantaría que formasen parte del amor que nos une.
      </p>
    </div>
  </div>
</template>
<script setup>
import { useBreakpoints } from "@/composables/useBreakpoints";
import bgHome from "images/background-home.webp";
import bgHomeMobile from "images/background-home-cel.webp";
import names from "images/names.png";
import namesCel from "images/names-cel.png";
import { useIntersectionObserver } from "@vueuse/core";

const target = ref(null);
const isVisible = ref(false);
const { isLg } = useBreakpoints();

const bgImage = computed(() => (isLg.value ? bgHome : bgHomeMobile));
const namesImage = computed(() => (isLg.value ? names : namesCel));
</script>

<style scoped>
.background-home {
  @apply bg-cover object-contain  bg-center w-full h-[calc(100vh-7<0px)] relative;
}
</style>
