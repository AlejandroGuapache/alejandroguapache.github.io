<template>
  <Countdown
    :date="new Date('Sept 05, 2026 18:00:00')"
    v-slot="{ days, hours, minutes, seconds }"
  >
    <div class="flex flex-wrap md:flex-nowrap justify-center gap-4">
      <Field label="Días" :value="days" />
      <Field label="Horas" :value="hours" />
      <Field label="Minutos" :value="minutes" />
      <Field label="Segundos" :value="seconds" />
    </div>
  </Countdown>
</template>
<script setup>
import Field from "./Field";
</script>
