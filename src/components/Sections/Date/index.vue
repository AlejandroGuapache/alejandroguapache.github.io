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
        A LAS 18:45
      </p>
      <p
        class="font-lora text-lg text-brown w-[300px] md:w-[480px] text-center italic"
      >
        Tu presencia es muy importante para nosotros en este día tan especial.
        ¡Por favor no faltes!
      </p>
    </div>

    <div class="container flex flex-col pt-14">
      <div class="md:flex justify-evenly">
        <Sitios :data="sites[0]" />
        <img
          src="~images/flor.svg"
          class="hidden md:block w-20 mt-10"
          alt="heart"
        />
        <Sitios id="celebracion" :data="sites[1]" class="pt-6 md:pt-0" />
      </div>
      <div class="w-full flex justify-center">
        <a
          href="https://maps.app.goo.gl/QNo2fnWSdExMrZu46"
          target="_blank"
          class="bg-green px-7 py-2 rounded-3xl flex items-center mt-8 w-fit"
        >
          <Icon name="gis:map-route" size="1rem" class="text-white mr-2" />
          <span class="text-white font-lora text-lg">Abrir en Google Maps</span>
        </a>
      </div>
    </div>

    <Calendar />
  </div>
</template>
<script setup>
import Sitios from "@/components/Sitios";
import Calendar from "@/components/Calendar";
import Celebracion from "images/celebracion.svg";
import Cocktail from "images/cocktail.webp";

import { useBreakpoints } from "@/composables/useBreakpoints";

const { isLg } = useBreakpoints();

const sites = [
  {
    type: "Celebración",
    name: "Finca Guadalajara Green",
    address: "Calle Puente de la Barca, Guadalajara",
    img: Celebracion,
  },
  {
    type: "Cóctel de recepción",
    name: "Tras la ceremonia",
    address: "Os esperamos para un cóctel con bebidas y aperitivos",
    img: Cocktail,
  },
];
</script>

<style scoped>
.background-section {
  @apply bg-contain md:bg-cover;
}
</style>
