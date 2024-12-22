<template>
  <q-btn-group outline v-model="selected">
    <q-btn v-for="t in tags" :key="t" flat :dense="isSmallScreen()" :to="toTag(t)" :size="size"
      :class="t === selected ? 'selected' : 'regular'" no-caps>
      {{ toPascalCase(t) }}
    </q-btn>
  </q-btn-group>
</template>
<script setup>
import { defineProps, ref } from 'vue'
import { isSmallScreen } from 'src/g';

const props = defineProps({
  tags: {
    type: Array,
    default: () => []
  },
  filterTag: {
    type: String,
    default: () => 'all'
  }
})

const selected = ref(props.filterTag)
const size = isSmallScreen() ? 'sm' : 'lg'

function toTag(tag) {
  return {
    name: 'product',
    params: { tags: tag === 'all' ? '' : [tag] }
  }
}

function toPascalCase(str) {
  return str.replace(/\w+/g, function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
}
</script>

<style lang="scss" scoped>
.selected {
  color: $primary;
  text-decoration: underline;
  font-weight: bold;
}

.regular {
  color: rgb(33, 31, 31);
}
</style>
