<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { useBreakpoints } from "@/composables/useBreakpoints";

const { isLg } = useBreakpoints();
import machupichu from "images/machupichu.jpeg";
import puente from "images/puente.jpeg";
import roma from "images/roma.jpeg";
const images = [
  {
    id: 0,
    url: machupichu,
  },
  {
    id: 1,
    url: puente,
  },
  {
    id: 2,
    url: roma,
  },
  {
    id: 3,
    url: machupichu,
  },
  {
    id: 4,
    url: puente,
  },
  {
    id: 5,
    url: roma,
  },
];

const carouselConfig = computed(() => ({
  itemsToShow: isLg.value ? 3 : 1,
  wrapAround: true,
}));
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="image in images" :key="image.id">
      <img
        :src="image.url"
        class="h-[525px] w-72 md:w-80 object-cover rounded-3xl"
        alt="image"
      />
    </Slide>
    <template #addons>
      <Pagination />
      <Navigation v-if="!isLg" />
    </template>
  </Carousel>
</template>

<style>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(10px) rotateY(-12deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1);
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--next ~ .carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-10px) rotateY(12deg) scale(0.9);
}
.carousel__pagination-button {
  height: 5px;
  width: 5px;
  border-radius: 5px;
  background-color: white;
}

.carousel__pagination-button:hover {
  @apply bg-brown;
}
.carousel__pagination-button--active {
  @apply bg-brown;
}
</style>
