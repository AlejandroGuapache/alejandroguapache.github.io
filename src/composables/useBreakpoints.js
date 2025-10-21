import { ref, onMounted, onUnmounted } from "vue";

export function useBreakpoints() {
  const windowWidth = ref(0);

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
  });

  const isMd = computed(() => windowWidth.value >= 768); // md breakpoint
  const isLg = computed(() => windowWidth.value >= 1024); // lg breakpoint
  const isXl = computed(() => windowWidth.value >= 1280); // xl breakpoint

  return {
    windowWidth,
    isMd,
    isLg,
    isXl,
  };
}
