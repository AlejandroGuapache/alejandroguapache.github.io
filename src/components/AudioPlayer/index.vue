<template>
  <div class="fixed bottom-6 right-6 z-50">
    <!-- Botón principal -->
    <button
      ref="audioButton"
      id="audio-button"
      @click="toggle"
      class="bg-green w-16 h-16 flex items-center justify-center text-white p-4 rounded-full shadow-xl hover:bg-green/90 transition-all duration-300 hover:scale-110 relative group"
      :class="{ 'animate-pulse': isPlaying }"
      :title="isPlaying ? 'Pausar música' : 'Reproducir música'"
    >
      <!-- Ondas de sonido animadas cuando está reproduciendo -->
      <div
        v-if="isPlaying"
        class="absolute inset-0 rounded-full border-2 border-green/50 animate-ping"
      ></div>
      <div
        v-if="isPlaying"
        class="absolute inset-0 rounded-full border-2 border-green/30 animate-ping animation-delay-75"
      ></div>

      <!-- Icono principal -->
      <Icon
        :name="
          isPlaying ? 'material-symbols:pause' : 'material-symbols:play-arrow'
        "
        class="text-2xl relative z-10"
      />
    </button>

    <!-- Tooltip -->
    <div
      class="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
    >
      {{ isPlaying ? "Pausar música" : "Reproducir música" }}
    </div>
  </div>
</template>

<style scoped>
.animation-delay-75 {
  animation-delay: 0.75s;
}
</style>

<script setup>
import { useAudio } from "@/composables/useAudio";
import { onMounted, onUnmounted } from "vue";

const audioSrc = "/audio/Ordinary.mp3";
const audioButton = ref(null);
const { isPlaying, autoPlay, toggle, play, audio, initAudio } =
  useAudio(audioSrc);

onMounted(() => {
  setTimeout(() => {
    initAudio();
    autoPlay();
    const clickEvent = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    if (audioButton.value) {
      audioButton.value.dispatchEvent(clickEvent);
      autoPlay();
    }
  }, 1000);
});

onUnmounted(() => {
  if (audio.value) {
    audio.value.pause();
    audio.value = null;
  }
});
</script>
