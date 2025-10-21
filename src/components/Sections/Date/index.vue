<template>
  <div
    class="background-section min-h-dvh"
    :class="
      isLg
        ? `bg-[url('images/background-2-section.webp')]`
        : `bg-[url('images/background-2-section-cel.webp')]`
    "
  >
    <div class="container w-full flex flex-col items-center">
      <img src="~images/fecha.png" class="w-96" alt="Date weeding" />

      <p class="my-5 font-lora text-brown tracking-[5px] font-medium leading-7">
        A LAS 16:30
      </p>
      <p
        class="font-lora text-lg text-brown w-[300px] md:w-[480px] text-center italic"
      >
        Tu presencia es muy importante para nosotros en este día tan especial.
        ¡Por favor no faltes!
      </p>
    </div>

    <div class="container md:flex justify-evenly pt-14">
      <Sitios :data="sites[0]" />
      <img
        src="~images/flor.svg"
        class="hidden md:block w-20 mt-10"
        alt="heart"
      />
      <Sitios id="celebracion" :data="sites[1]" class="pt-6 md:pt-0" />
    </div>

    <Calendar />
  </div>
</template>
<script setup>
import Sitios from "@/components/Sitios";
import Calendar from "@/components/Calendar";
import Celebracion from "images/celebracion.svg";

import { useBreakpoints } from "@/composables/useBreakpoints";

const { isLg } = useBreakpoints();

const sites = [
  {
    type: "Ceremonia",
    name: "Iglesia San Francisco de Asís",
    address: "Av. San Francisco 1234, San Bernardo.",
    img: Celebracion,
    mapLink:
      "https://www.google.com/maps/place/Iglesia+San+Francisco+de+As%C3%ADs/@-33.6037617,-70.6995693,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c58e4f6f6f6f:0xabcdef1234567890!8m2!3d-33.6037617!4d-70.6973806!16s%2Fg%2F11c52y5y5y",
  },
  {
    type: "Celebración",
    name: "Hacienda Los Naranjos",
    address: "Camino los Naranjos, Parcela 2E, San Bernardo.",
    img: Celebracion,
    mapLink:
      "https://www.google.com/maps/place/Hacienda+Los+Naranjos/@-33.6123456,-70.6891234,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c58e4f6f6f6f:0x1234567890abcdef!8m2!3d-33.6123456!4d-70.6869347!16s%2Fg%2F11c52y5y5y",
  },
];
</script>

<style scoped>
.background-section {
  @apply bg-contain md:bg-cover;
}
</style>
