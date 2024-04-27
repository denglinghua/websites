<template>
  <q-btn-group outline>
    <q-btn v-for="t in ['all', ...tags]" :key="t" :label="t" flat dense @click="onClick(t)"
      :class="t === selected ? 'selected' : ''" />
  </q-btn-group>
</template>
<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  tags: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: Array,
    default: () => []
  },
})

const emit = defineEmits(['update:model-value'])

const selected = ref('all')

function onClick(val) {
  selected.value = val
  emit('update:model-value', val === 'all' ? [] : [val])
}
</script>

<style lang="scss" scoped>
.selected {
  color: $secondary;
  font-weight: bold;
}
</style>
