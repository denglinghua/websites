<template>
  <icon-button flat color="primary" :icon="icon" @click="toggle" :tooltip="tooltip" />
</template>
<script setup>
import { useQuasar } from "quasar";
import { computed } from "vue";
import IconButton from "src/components/IconButton.vue";
import useGlobal from "src/global";

const $q = useQuasar();
const $t = useGlobal().$t

// random  dark mode
$q.dark.set(Math.random() > 0.5);

const icon = computed(() =>
  $q.dark.isActive ? "bi-brightness-high-fill" : "bi-moon-stars-fill"
);

const tooltip = computed(() =>
  $q.dark.isActive ? $t("layout.lightMode") : $t("layout.darkMode")
);

function toggle() {
  $q.dark.toggle();
}
</script>
