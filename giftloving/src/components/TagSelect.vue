<template>
  <q-btn-group outline v-model="selected">
    <q-btn v-for="t in ['all', ...tags]" :key="t" :label="t" flat dense :to="toTag(t)"
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
  filterTags: {
    type: Array,
    default: () => []
  }
})

const selected = ref(props.filterTags.length ? props.filterTags[0] : 'all')

function toTag(tag) {
  return {
    name: 'product',
    params: { tags: tag === 'all' ? '' : [tag] }
  }
}
</script>

<style lang="scss" scoped>
.selected {
  color: $secondary;
  font-weight: bold;
}

.content {}
</style>
