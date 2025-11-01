<template>
  <section>
    <div
      class="w-[326px] md:w-[426px] h-[490px] md:h-[528px] bg-green rounded-t-[200px] flex flex-col items-center justify-center"
    >
      <img :src="image" class="h-28 md:h-40 object-contain" />
      <img :src="imageText" class="h-4 md:h-6 object-contain mt-9" />
      <p
        class="font-lora text-white text-center w-[300px] md:w-[366px] my-5 px-4 text-general"
        v-html="data.text"
      />

      <button
        v-if="data.button?.text"
        @click="showCuenta"
        class="bg-brown px-7 py-2 rounded-3xl flex items-center mt-5 mb-4"
      >
        <span class="text-white font-lora text-lg">
          {{ data.button.text }}
        </span>
        <Icon
          :name="showTextAccount ? data.button.iconField : data.button.icon"
          size="1.3rem"
          class="text-white ml-2"
        />
      </button>

      <Transition>
        <div
          v-if="showTextAccount"
          class="flex flex-col text-center text-white"
        >
          <span>ES26 0073 0100 5601 9960 7754 </span>
          <span>o</span>
          <span>Bizum al 692885365</span>
        </div>
      </Transition>
    </div>
  </section>
</template>
<script setup>
import DressCode from "images/dresscode.webp";
import Regalos from "images/regalos.webp";
import DressCodeText from "images/dresscodeText.svg";
import RegalosText from "images/regalosText.svg";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const showTextAccount = ref(false);
const showCuenta = () => (showTextAccount.value = !showTextAccount.value);
const image = props.data.image === "dresscode" ? DressCode : Regalos;
const imageText =
  props.data.imageText === "dresscodeText" ? DressCodeText : RegalosText;
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
