<template>
  <q-card class="q-ma-md p-card">
    <q-card-section class="q-pa-none">
      <q-img :src="product.imgUrl" :ratio="1" loading="lazy" spinner-color="primary" @click="zoom(product)"
        class="rounded-borders" :class="{ zoomable: props.zoomable }" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["product", "zoomable"]);
const emit = defineEmits(["zoom"]);

function zoom(product) {
  if (props.zoomable) {
    emit("zoom", product);
  }
}

</script>
<style lang="sass" scoped>
.p-card
  width: 360px
  height: 360px

.zoomable
  cursor: zoom-in
</style>
