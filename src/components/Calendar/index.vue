<template>
  <div class="flex flex-col items-center justify-center">
    <DotLottieVue
      autoplay
      loop
      class="w-[300px] md:w-[500px] h-[300px] md:h-[500px] md:-mt-10"
      src="https://lottie.host/d1044243-190b-47a3-8513-2364e995da0f/x7u6zdYeMn.lottie"
    />

    <img
      src="~images/lafechaseacerca.svg"
      class="w-[250px] md:w-[450px] -mt-14 md:-mt-28"
      alt="heart"
    />

    <p class="font-lora text-brown w-96 text-lg text-center my-4 md:my-[69px]">
      ¡Cada vez falta menos para celebrar todos juntos este mágico día!
    </p>
    <client-only>
      <Timer />
    </client-only>
  </div>
</template>
<script setup>
import Timer from "./Timer";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
const now = new Date();
const newYear = new Date(now.getFullYear() + 1, 0, 1);
const time = newYear - now;
</script>
