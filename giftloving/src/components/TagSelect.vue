<template>
  <q-checkbox v-for="t in tags" v-model="selectTags" :val="t" :label="t" :key="t" />
</template>
<script setup>
import { defineProps, ref, watch } from 'vue'

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

const selectTags = ref([]) // checkbox v-model

watch(selectTags, (newVal) => {
  emit('update:model-value', newVal)
})
</script>
