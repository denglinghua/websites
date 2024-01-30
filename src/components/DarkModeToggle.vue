<template>
  <q-btn flat color="primary" :icon="icon" @click="toggle" />
</template>
<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";
const $q = useQuasar();
// const icon = ref("bi-moon-stars-fill");//bi-brightness-high-fill
const icon = computed(() =>
  $q.dark.isActive ? "bi-brightness-high-fill" : "bi-moon-stars-fill"
);

function toggle() {
  $q.dark.toggle();
}
</script>
