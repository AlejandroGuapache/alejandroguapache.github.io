<template>
  <div
    class="w-[168px] h-[188px] border border-brown rounded-t-[200px] flex items-center justify-center"
  >
    <div class="flex flex-col items-center font-abhaya text-brown">
      <span class="text-[80px]">{{ value }}</span>
      <span class="text-2xl">{{ label }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});
</script>
