<template>
  <q-card class="q-ma-md p-card">
    <q-card-section class="q-pa-none">
      <q-img :src="product.imgUrl" :ratio="1" loading="lazy" spinner-color="primary" @click="zoom(product)"
        class="zoomable rounded-borders" />
    </q-card-section>
    <q-card-section class="q-pa-md" align="center">
      {{ product.name }}
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["product", "slide"]);
const emit = defineEmits(["zoom"]);

function zoom(product) {
  if (props.slide) {
    return;
  }
  emit("zoom", product);
}

</script>
<style lang="sass" scoped>
.p-card
  width: 350px
  height: 400px

.zoomable
  cursor: zoom-in
</style>
