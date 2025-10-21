<template>
  <div>
    <Poster v-if="!hiddeComp" ref="poster" @click="accept" />
    <Transition>
      <Content v-if="hiddeComp" />
    </Transition>
  </div>
</template>
<script setup>
import Poster from "@/components/Poster";
import Content from "@/components/Content";
const hiddeComp = ref(false);
const accept = (value) => (hiddeComp.value = value);
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 2.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
html  {
  scroll-behavior: smooth;
}
</style>
