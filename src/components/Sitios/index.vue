<template>
  <div class="flex flex-col items-center">
    <img :src="data.img" class="w-40 mx-auto mt-10" alt="weeding sites" />
    <p class="font-lora text-2xl text-brown tracking-[4px] my-5">
      {{ data.type }}
    </p>
    <p class="font-lora text-brown text-lg font-bold">{{ data.name }}</p>
    <p class="font-lora text-brown text-lg w-72 text-center">
      {{ data.address }}
    </p>

    <button class="bg-green px-7 py-2 rounded-3xl flex items-center mt-8">
      <Icon name="gis:map-route" size="1rem" class="text-white mr-2" />
      <span class="text-white font-lora text-lg">Abrir en Google Maps</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
