<template>
  <q-card class="q-ma-md p-card">
    <q-card-section class="q-pa-sm">
      <q-img :src="`ps/${product.image}`" :ratio="1" spinner-color="primary" />
    </q-card-section>
    <q-card-section>
      <div>{{ product.description }}</div>
    </q-card-section>
  </q-card>
</template>
<script setup>
const props = defineProps(["product"]);
</script>
<style lang="sass" scoped>
.p-card
  width: 350px
  height: 420px
</style>
