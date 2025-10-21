import { ref, onMounted, onUnmounted } from "vue";

export function useAudio(audioSrc) {
  const audio = ref(null);
  const isPlaying = ref(false);
  const isLoaded = ref(false);

  const initAudio = () => {
    if (process.client) {
      audio.value = new Audio(audioSrc);
      audio.value.autoplay = true;
      audio.value.loop = true;
      audio.value.volume = 0.5;

      audio.value.addEventListener("loadeddata", () => {
        isLoaded.value = true;
      });

      audio.value.addEventListener("play", () => {
        isPlaying.value = true;
      });

      audio.value.addEventListener("pause", () => {
        isPlaying.value = false;
      });

      audio.value.addEventListener("ended", () => {
        isPlaying.value = false;
      });
    }
  };

  const play = async () => {
    if (audio.value && isLoaded.value) {
      try {
        await audio.value.play();
      } catch (error) {
        console.log("Error playing audio:", error);
      }
    }
  };

  const pause = () => {
    if (audio.value) {
      audio.value.pause();
    }
  };

  const toggle = () => {
    if (isPlaying.value) {
      pause();
    } else {
      play();
    }
  };

  const autoPlay = async () => {
    // Esperar a que el usuario interactúe con la página antes de reproducir
    const playWithUserInteraction = () => {
      if (isLoaded.value) {
        play();
      }
      document.removeEventListener("click", playWithUserInteraction);
      document.removeEventListener("touchstart", playWithUserInteraction);
      document.removeEventListener("keydown", playWithUserInteraction);
    };

    // Intentar reproducir inmediatamente (funcionará si las políticas del navegador lo permiten)
    try {
      if (isLoaded.value) {
        await play();
      }
    } catch (error) {
      // Si falla, esperar interacción del usuario
      console.log("Autoplay bloqueado, esperando interacción del usuario");
      document.addEventListener("click", playWithUserInteraction);
      document.addEventListener("touchstart", playWithUserInteraction);
      document.addEventListener("keydown", playWithUserInteraction);
    }
  };

  return {
    initAudio,
    audio,
    autoPlay,
    isPlaying,
    isLoaded,
    play,
    pause,
    toggle,
  };
}
