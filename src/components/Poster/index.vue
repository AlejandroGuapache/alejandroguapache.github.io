<template>
  <div
    ref="container"
    class="background-section h-dvh overflow-hidden"
    :class="
      isLg
        ? `bg-[url('images/background-2-section.webp')]`
        : `bg-[url('images/background-2-section-cel.webp')]`
    "
  >
    <div class="flex flex-col items-center justify-center h-full">
      <Transition>
        <img
          v-if="appearImgs"
          src="~images/card.webp"
          alt="Poster"
          class="h-[280px] md:h-[500px] justify-self-center relative top-[155px]"
        />
      </Transition>
      <Transition>
        <img
          v-if="appearImgs"
          src="~images/sello.webp"
          alt="Poster"
          class="z-40 h-[80px] md:h-[110px] fixed"
        />
      </Transition>
      <div class="z-20 mt-[120px] md:mt-[60px] md:ml-[400px]">
        <Transition>
          <div v-if="appearImgs" class="h-[300px] md:h-[400px]">
            <div class="flex justify-center items-center">
              <img
                src="~images/papel.webp"
                alt="Poster"
                class="h-[300px] md:h-[400px] absolute"
              />
              <div
                class="z-10 w-1/2 md:w-3/4 flex flex-col justify-center items-center"
              >
                <p
                  class="text-center font-lora text-brown md:text-lg font-medium mb-9"
                >
                  Estás invitado/a a la boda de Alejandro y Verónica
                </p>

                <button
                  @click="emit('click', true)"
                  class="px-6 py-3 text-sm md:text-base bg-green rounded-3xl font-lora text-white w-fit hover:bg-brown hover:px-7 hover:py-3.5 transition-all duration-300"
                >
                  Abrir invitación
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useBreakpoints } from "@/composables/useBreakpoints";
import { onMounted, ref } from "vue";

const { isLg } = useBreakpoints();
const appearImgs = ref(false);

onMounted(() => {
  setTimeout(() => {
    appearImgs.value = true;
  }, 500);
});

const emit = defineEmits(["click"]);
</script>

<style scoped>
.background-section {
  @apply h-dvh w-full bg-cover;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
