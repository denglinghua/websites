<template>
  <q-btn>
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
  color: {
    type: String,
    default: 'primary',
  },
})

const hasTooltip = computed(() => props.tooltip !== null && props.tooltip !== '')

</script>
