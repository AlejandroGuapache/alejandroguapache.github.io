<template>
  <div v-if="!loading">
    <Header id="inicio" />

    <Welcome />
    <Date />
    <AboutUS class="mt-4 md:mt-44" />
    <Third />
    <Fourth />
    <Assist id="confirmacion" />

    <AudioPlayer />
  </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import AboutUS from "@/components/Sections/AboutUs";
import Welcome from "@/components/Sections/Welcome";
import Date from "@/components/Sections/Date";
import Third from "@/components/Sections/Third";
import Fourth from "@/components/Sections/Fourth";
import Assist from "@/components/Sections/Assist";
import AudioPlayer from "@/components/AudioPlayer";
import { onMounted, ref } from "vue";
const loading = ref(true);
onMounted(() => {
  loading.value = false;
});
</script>
