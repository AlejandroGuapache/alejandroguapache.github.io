<template>
  <div
    class="background-section"
    :class="
      isLg
        ? `bg-[url('images/background-2-section.webp')]`
        : `bg-[url('images/background-2-section-cel.webp')]`
    "
  >
    <div
      class="container w-full flex flex-col md:flex-row items-center justify-center gap-12 pb-20"
    >
      <img
        src="~images/alejandro-vero.png"
        class="w-72 md:w-96 object-contain"
        alt="About us"
      />
      <div class="w-80 md:w-[420px]">
        <img
          src="~images/about-us.png"
          class="h-40 md:h-48 mt-2 md:mt-10"
          alt="About us"
        />

        <p
          class="mt-5 font-lora text-brown text-center md:text-left md:text-lg"
        >
          Nos conocimos en el instituto y desde entonces hemos compartido
          innumerables momentos juntos.
        </p>
        <p
          class="mt-5 font-lora text-brown text-center md:text-left md:text-lg"
        >
          A lo largo de nuestra relación, hemos aprendido a apoyarnos
          mutuamente, a respetar nuestras diferencias y a celebrar nuestras
          similitudes. Nos complementamos en muchos aspectos y estamos
          emocionados de comenzar esta nueva etapa como pareja casada.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBreakpoints } from "@/composables/useBreakpoints";

const { isLg } = useBreakpoints();
</script>

<style scoped>
.background-section {
  @apply bg-contain md:bg-cover;
}
</style>
