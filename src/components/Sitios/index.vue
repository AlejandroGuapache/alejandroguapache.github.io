<template>
  <div class="flex flex-col items-center">
    <img
      :src="data.img"
      class="mx-auto mt-10"
      alt="weeding sites"
      :class="data.name === 'Celebración' ? 'w-40' : 'w-48'"
    />
    <p class="font-lora text-2xl text-brown tracking-[4px] my-5">
      {{ data.type }}
    </p>
    <p class="font-lora text-brown text-lg font-bold">{{ data.name }}</p>
    <p class="font-lora text-brown text-lg w-72 text-center">
      {{ data.address }}
    </p>
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
