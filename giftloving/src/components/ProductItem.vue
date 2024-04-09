<template>
  <q-card class="q-ma-md p-card">
    <q-card-section class="q-pa-none">
      <q-img :src="`ps/${product.image}`" :ratio="1" loading="lazy" spinner-color="primary" @click="zoom(product)"
        class="zoomable" />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-overline">$99.99</div>
      <div>{{ product.description }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps(["product"]);
const emit = defineEmits(["zoom"]);

function zoom(product) {
  emit("zoom", product);
}
</script>
<style lang="sass" scoped>
.p-card
  width: 350px
  height: 430px

.zoomable
  cursor: zoom-in
</style>
