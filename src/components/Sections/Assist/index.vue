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
      <div
        class="w-full md:w-[620px] font-lora text-brown md:text-lg text-center"
      >
        <p class="mt-2">
          Queridos amigos y familia: mientras nosotros cortamos la tarta, ¡os
          animamos a que vosotros también os toméis una noche de diversión!
        </p>
        <p>Por ello, nuestra boda será una celebración SOLO PARA ADULTOS.</p>
        <p class="mt-2 mb-6">
          Por favor confirma tu asistencia máximo 30 días antes de la fecha de
          nuestro matrimonio. En caso de cualquier cambio, por favor comunícalo
          lo antes posible.
        </p>
      </div>
    </div>
    <Form ref="formRef" v-slot="{ handleSubmit }" :validation-schema="schema">
      <form
        @submit="handleSubmit($event, onSubmit)"
        class="w-full md:w-[900px] flex flex-col items-center justify-center self-center justify-self-center px-6"
      >
        <div class="grid grid-cols-12 w-full gap-4">
          <div class="w-full col-span-12 md:col-span-6 h-12">
            <Field
              v-slot="{ field, meta: { valid, validated } }"
              name="name"
              type="text"
            >
              <input
                v-bind="field"
                class="h-full w-full"
                :class="{ 'border border-red': !valid && validated }"
                placeholder="Nombre completo"
              />
            </Field>
          </div>
          <div class="w-full col-span-12 md:col-span-6 h-12">
            <Field
              v-slot="{ field, meta: { valid, validated } }"
              name="email"
              type="email"
              class="w-full h-full"
            >
              <input
                v-bind="field"
                class="h-full w-full"
                :class="{ 'border border-red': !valid && validated }"
                placeholder="Correo electrónico"
              />
            </Field>
          </div>
        </div>
        <div class="w-full grid grid-cols-12 gap-4 my-4">
          <div class="w-full col-span-12 md:col-span-6 h-12">
            <Field
              v-slot="{ field, meta: { valid, validated } }"
              class="w-full h-full"
              name="tel"
              type="tel"
            >
              <input
                v-bind="field"
                class="w-full h-full"
                :class="{ 'border border-red': !valid && validated }"
                placeholder="Teléfono"
              />
            </Field>
          </div>
          <div class="w-full col-span-12 md:col-span-6 h-12">
            <Field
              v-slot="{ field, meta: { valid, validated } }"
              name="confirm"
              class="w-full h-full custom-triangle triangle-large"
              placeholder="Confirmación"
            >
              <select
                v-bind="field"
                class="h-full w-full"
                :class="{ 'border border-red': !valid && validated }"
                placeholder="Confirmación"
              >
                <option value="" disabled selected>
                  Confirma tu asistencia
                </option>
                <option value="Ahí estaré">Si, ahí estaré 🙂</option>
                <option value="No podré ir, lo siento">
                  No podré asistir, lo siento...
                </option>
              </select>
            </Field>
          </div>
        </div>
        <div class="w-full h-36">
          <Field
            v-slot="{ field, meta: { valid, validated } }"
            name="restricciones"
            class="w-full h-full"
          >
            <textarea
              v-bind="field"
              :class="{ 'border border-red': !valid && validated }"
              class="w-full h-full resize-none"
              id="restricciones"
              placeholder='¿Tienes restricciones de alimentos o alergias? Ejemplo: Vegano, vegetariano, celiaco, intolerante a la lactosa, etc. De lo contrario responder "sin restricción alimentaria"'
            ></textarea>
          </Field>
        </div>
        <div class="w-full mt-3">
          <Field v-slot="{ field }" name="mensaje" class="w-full h-full">
            <textarea
              v-bind="field"
              class="w-full h-20 resize-none"
              id="mensaje"
              placeholder="Mensaje para los novios (opcional)"
            ></textarea>
          </Field>
        </div>
        <div class="w-full flex justify-center mt-4 mb-20">
          <button
            type="submit"
            class="bg-green font-lora text-white py-2 px-6 rounded-lg flex items-center"
          >
            Enviar
            <Icon
              v-if="loading"
              name="svg-spinners:6-dots-scale-middle"
              class="ml-2"
            />
          </button>
        </div>
      </form>
    </Form>
    <Dudas />
  </div>
</template>
<script setup>
import Dudas from "@/components/Sections/Dudas";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import { useBreakpoints } from "@/composables/useBreakpoints";
import * as yup from "yup";

const formRef = ref(null);
const loading = ref(false);
const schema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  tel: yup
    .number()
    .transform((val) => Number(val))
    .required()
    .min(9),
  confirm: yup.string().required().notOneOf([""], "Selecciona un país válido"),
  restricciones: yup.string().required(),
  mensaje: yup.string(),
});

const { isLg } = useBreakpoints();
const onSubmit = (values) => {
  loading.value = true;
  const datos = {
    fecha: new Date().toLocaleString(),
    name: values.name,
    email: values.email,
    tel: values.tel,
    confirm: values.confirm,
    restricciones: values.restricciones,
    mensaje: values.mensaje ?? "",
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
    .then(() => {
      formRef.value.resetForm();
      alert("Datos enviados correctamente \n¡Gracias por tomarte el tiempo!");
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      loading.value = false;
    });
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

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
  -webkit-text-fill-color: #f8f1e9 !important;
  transition: background-color 5000s ease-in-out 0s;
}

/* Para modo oscuro */
@media (prefers-color-scheme: dark) {
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px #f8f1e9 inset !important;
    -webkit-text-fill-color: #6d6e3c !important;
  }
}
</style>
