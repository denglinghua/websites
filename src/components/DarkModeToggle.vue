<template>
  <icon-button flat color="primary" :icon="icon" @click="toggle" :tooltip="tooltip" />
</template>
<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";
import IconButton from "src/components/IconButton.vue";

const $q = useQuasar();

const icon = computed(() =>
  $q.dark.isActive ? "bi-brightness-high-fill" : "bi-moon-stars-fill"
);

const tooltip = computed(() =>
  $q.dark.isActive ? "Light mode" : "Dark mode"
);

function toggle() {
  $q.dark.toggle();
}
</script>
