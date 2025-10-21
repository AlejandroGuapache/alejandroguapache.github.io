<template>
  <div class="w-full mb-12 md:mb-24">
    <header
      class="w-full h-[4.375rem] md:h-[90px] bg-white shadow-md fixed top-0 left-0 z-50"
    >
      <nav
        class="bg-white mx-4 md:mx-[90px] h-full flex items-center justify-between"
      >
        <img src="/images/logoBoda.png" alt="Logo" width="60" format="png" />
        <div class="w-full flex justify-end">
          <ul class="hidden md:flex">
            <li
              v-for="(item, index) in navBar"
              :key="index"
              class="font-lora text-brown text-[15px] font-medium border-r border-brown px-6 last:border-r-0"
            >
              <button @click="scrollToSection(item.link)">
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
        <button @click="toggleMenu" class="pr-4">
          <Icon
            name="meteor-icons:bars"
            class="md:hidden text-brown"
            size="1.7rem"
          />
        </button>
      </nav>
      <Transition>
        <div class="block md:hidden" v-if="openNavBar">
          <ul>
            <li
              v-for="(item, index) in navBar"
              :key="index"
              class="w-full py-4 border-b border-brown bg-white text-right"
            >
              <button
                class="pr-5 font-medium text-sm font-lora text-brown"
                @click="[scrollToSection(item.link), toggleMenu()]"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  </div>
</template>
<script setup>
const openNavBar = ref(false);
const navBar = [
  { name: "Inicio", link: "inicio" },
  { name: "Celebración", link: "celebracion" },
  { name: "Dress Code", link: "dress-code" },
  { name: "Album fotos", link: "album" },
  { name: "Confirmación", link: "confirmacion" },
];
import { useBreakpoints } from "@/composables/useBreakpoints";
const { isMd } = useBreakpoints();

const toggleMenu = () => {
  openNavBar.value = !openNavBar.value;
};

const scrollToSection = (id, offset = isMd.value ? 150 : 50) => {
  console.log(" isMd.value", isMd.value);
  const element = document.getElementById(id);
  if (element) {
    const y = element.offsetTop - offset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};
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
