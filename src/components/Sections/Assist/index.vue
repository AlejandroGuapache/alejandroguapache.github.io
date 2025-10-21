<template>
  <div
    class="md:bg-repeat-round px-4 md:px-0"
    :class="
      isLg
        ? `bg-[url('images/background-2-section.webp')]`
        : `bg-[url('images/background-2-section-cel.webp')]`
    "
  >
    <div class="flex flex-col items-center justify-center gap-4 mt-28">
      <DotLottieVue
        autoplay
        loop
        class="w-[160px] h-[160px] mb-4"
        src="https://lottie.host/14604afe-e35e-40fa-a197-976cf3b22546/LjUWI06gUX.lottie"
      />
      <img
        src="~images/confirmatuasistencia.svg"
        class="h-16 md:h-20 object-contain"
        alt="Confirmación boda"
      />
      <p
        class="font-lora text-brown w-full md:w-[490px] text-lg text-center my-4 md:my-6"
      >
        Por favor confirma tu asistencia máximo 30 días antes de la fecha de
        nuestro matrimonio.
      </p>
    </div>

    <form
      @submit.prevent="enviarDatos()"
      class="w-full md:w-[900px] flex flex-col items-center justify-center self-center justify-self-center px-6"
    >
      <div class="grid grid-cols-12 w-full gap-4">
        <input
          class="w-full col-span-12 md:col-span-6 h-12"
          id="name"
          type="text"
          placeholder="Nombre completo"
        />
        <input
          class="w-full col-span-12 md:col-span-6 h-12"
          id="email"
          type="email"
          placeholder="Correo electrónico"
        />
      </div>
      <div class="w-full grid grid-cols-12 gap-4 my-4">
        <input
          class="w-full col-span-12 md:col-span-6 h-12"
          id="tel"
          type="tel"
          placeholder="Teléfono"
        />
        <select
          name="confirm"
          class="w-full col-span-12 md:col-span-6 h-12 custom-triangle triangle-large"
          placeholder="Confirmación"
        >
          <option value="" disabled selected>Confirma tu asistencia</option>
          <option value="Sí voy">Si, ahí estaré 🙂</option>
          <option value="No voy">No podré asistir, lo siento...</option>
        </select>
      </div>
      <div class="w-full">
        <textarea
          class="w-full h-20 resize-none"
          id="restricciones"
          placeholder='¿Tienes restricciones de alimentos o alergias? Ejemplo: Vegano, vegetariano, celiaco, intolerante a la lactosa, etc. De lo contrario responder "sin restricción alimentaria"'
        ></textarea>
      </div>
      <div class="w-full mt-3">
        <textarea
          class="w-full h-20 resize-none"
          id="mensaje"
          placeholder="Mensaje para los novios (opcional)"
        ></textarea>
      </div>
      <div class="w-full flex justify-center mt-4 mb-20">
        <button
          type="submit"
          class="bg-green font-lora text-white py-2 px-6 rounded-lg"
        >
          Enviar
        </button>
      </div>
    </form>

    <Dudas />
  </div>
</template>
<script setup>
import Dudas from "@/components/Sections/Dudas";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { useBreakpoints } from "@/composables/useBreakpoints";

const { isLg } = useBreakpoints();

const enviarDatos = () => {
  console.log("entra");
  const datos = {
    fecha: new Date().toLocaleDateString(),
    nombre: "test",
    email: "test",
    mensaje: "test",
  };

  const url =
    "https://script.google.com/macros/s/AKfycbzHAvmJdnAFQzM6cfzs65QG1eySMrdELfGmvevFayafvOLzZjgJh2IyPgf4u_J82HYQ7g/exec";
  fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then(() => alert("Datos enviados correctamente"))
    .catch((error) => console.error("Error:", error));
};
</script>

<style scoped>
select {
  @apply pl-4;
}

textarea {
  @apply pt-2;
}
textarea,
input,
select {
  @apply bg-orange rounded-xl text-green focus:outline-none px-4;
}
textarea::placeholder,
input::placeholder,
option::placeholder {
  @apply text-green font-lora opacity-50;
}
.background-section {
  @apply bg-contain md:bg-cover;
}

.custom-triangle {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 14px;
  transition: all 0.3s ease;
}

select:valid {
  @apply text-green;
}

.triangle-large {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%236d6e3c' d='M10 14L4 8h12l-6 6z'/%3E%3C/svg%3E");
  background-size: 18px;
  background-repeat: no-repeat;
}
</style>
