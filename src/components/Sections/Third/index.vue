<template>
  <div>
    <img
      src="~images/corte-fondo-top.webp"
      class="w-full"
      alt="Top background"
    />
    <div
      class="background-section"
      :class="
        isLg
          ? `bg-[url('images/fondo-third-complete.webp')]`
          : `bg-[url('images/fondo-cel.webp')]`
      "
    >
      <div class="flex flex-col items-center justify-center">
        <img
          src="~images/horarios-text.svg"
          class="h-28 md:h-36 object-contain mt-24"
          alt="Programación boda"
        />
        <p
          class="my-9 w-[322px] md:w-[550px] font-lora text-green text-general text-center"
        >
          Recuerda organizarte con tiempo para que no te pierdas ningún momento
          de esta ceremonia tan especial para nosotros.
        </p>
        <img
          :src="programacionImg"
          class="h-[800px] md:h-80 object-contain mt-14 md:mt-0"
          alt="Programación boda"
        />
        <div
          class="flex flex-col md:flex-row gap-12 mt-20 md:mt-44"
          id="dress-code"
        >
          <Sections
            v-for="(section, index) in sectionData"
            :key="index"
            :data="section"
          />
        </div>

        <div id="album" class="mt-24 flex flex-col md:flex-row gap-7 md:gap-32">
          <div class="flex flex-col items-center justify-center">
            <DotLottieVue
              autoplay
              loop
              class="w-[160px] h-[160px] mb-4"
              src="https://lottie.host/a6be3a6b-006f-4ad4-aef3-3c21dc64409a/0TvFADzdGd.lottie"
            />
            <img
              src="~images/compartetusfotos-text.svg"
              class="h-24 md:h-20 object-contain"
              alt="Programación boda"
            />

            <p class="font-lora text-green text-general text-center w-80 my-8">
              Sube y comparte con nosotros tus registros de fotos y videos en
              nuestro álbum de bodas colaborativo
            </p>
            <a
              href="https://photos.app.goo.gl/AnHxQaB16Xps9PNb9"
              target="_blank"
              class="bg-brown px-7 py-2 rounded-3xl flex items-center mt-5 mb-4"
            >
              <span class="text-white font-lora text-lg">
                Sube tus fotografías
              </span>
              <Icon
                name="entypo:folder-images"
                size="1.3rem"
                class="text-white ml-2"
              />
            </a>
          </div>
          <img
            src="~images/albumPhotos.png"
            class="h-[400px] md:h-[562px] object-contain"
            alt="Programación boda"
          />
        </div>
      </div>
    </div>
    <img
      src="~images/corte-fondo-bottom.webp"
      class="w-full"
      alt="Top background"
    />
  </div>
</template>
<script setup>
import Sections from "./Sections";
import programacion from "images/programacion.webp";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import programacionMobile from "images/programacion-cel.webp";
import { useBreakpoints } from "@/composables/useBreakpoints";

const { isLg } = useBreakpoints();

const programacionImg = computed(() =>
  isLg.value ? programacion : programacionMobile,
);

const sectionData = [
  {
    text: "<p>Ellos traje formal deberán usar,</p> <p>ellas de vestido largo estarán... </p> Y juntos puntualmente llegarán. <p>Solo el blanco deberán evitar,</p> <p>para la novia reservar.</p>",
    button: {
      text: "Ver inspiraciones",
      icon: "streamline-pixel:beauty-beard-style", //entypo-social:pinterest-with-circle
    },
    image: "dresscode",
    imageText: "dresscodeText",
  },
  {
    text: "Tu presencia es nuestro mejor regalo, pero si quieres contribuir a nuestro viaje de ensueño, aquí tienes:",
    button: {
      text: "Ver opciones",
      icon: "system-uicons:eye",
      iconField: "system-uicons:eye-closed",
    },
    image: "regalos",
    imageText: "regalosText",
  },
];
</script>
<style scoped>
.background-section {
  @apply bg-contain;
}
</style>
