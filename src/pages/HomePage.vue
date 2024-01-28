<template>
  <div ref="canvas" class="column full-fit items-center">
    <div class="col"></div>
    <div class="col text-primary text-center">
      <p class="text-h2 text-capitalize text-bold">{{ text }}</p>
      <p class="text-h4">{{ subText }}</p>
    </div>
    <div class="col"></div>
  </div>
  <q-resize-observer @resize="onResize" />
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const canvas = ref(null); // Reference to canvas DOM element

const text = "Island Coyote Tech Inc.";
const subText = "Innovation at every step";

function onResize(size) {}

onMounted(() => {});

onUnmounted(() => {});
</script>
<style scoped>
.full-fit {
  position: absolute; /* Absolute positioning */
  background: white;
  width: calc(100% - 32px); /* Full width */
  height: calc(100% - 32px); /* Full height */
}
</style>
