<template>
  <q-btn color="primary">
    <q-tooltip v-if="hasTooltip">
      {{ tooltip }}
    </q-tooltip>
  </q-btn>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps } from 'vue'

const props = defineProps({
  tooltip: {
    type: String,
    default: null,
  },
})

const hasTooltip = computed(() => props.tooltip !== null && props.tooltip !== '')

</script>
