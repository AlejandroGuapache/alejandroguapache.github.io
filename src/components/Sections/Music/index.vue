<template>
  <div
    class="bg-green w-full md:w-[850px] h-full rounded-t-[200px] md:rounded-t-[80%] flex flex-col items-center justify-center pb-12 md:pb-20 mt-32 mx-4"
  >
    <DotLottieVue
      autoplay
      loop
      :layout="{
        fit: 'fit-width',
      }"
      class="h-auto mt-8 md:mt-16"
      src="https://lottie.host/48ed0d5a-1e05-4682-8dde-ade0dcb3e946/g9hBEhXEkL.lottie"
    />
    <img
      src="~images/ayudanosconlamusica.svg"
      class="h-10 md:h-24 object-contain"
      alt="Ayudanos con la música"
    />
    <p
      class="font-lora text-white text-general text-center w-[300px] md:w-[500px] my-8"
    >
      ¡Motívate y añade esas canciones imprescindibles a nuestra playlist!<br />
      ¡Es hora de bailar!
    </p>

    <a
      class="bg-brown px-7 py-2 rounded-3xl flex items-center mt-5 mb-4"
      href="https://open.spotify.com/playlist/50PTAWep6JlFFaZgZC3T8k?si=-ya2GsIhSEyVt-_s_V2xZg&pi=5jzzhqlcQW-S8"
      target="_blank"
    >
      <span class="text-white font-lora text-lg"> Agregar canciones </span>
      <Icon
        name="entypo-social:youtube"
        size="1.3rem"
        class="text-white ml-2"
      />
    </a>
  </div>
</template>
<script setup>
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
</script>
