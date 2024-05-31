<template>
  <q-card class="q-ma-md p-card">
    <q-card-section class="q-pa-none">
      <q-carousel v-if="slide" v-model="slideIndex" animated :padding="false" :navigation="product.slides.length > 1"
        transition-prev="slide-right" transition-next="slide-left" class="rounded-borders" swipeable height="350px">
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="xs" :icon="btnProps.icon" color="secondary" flat round dense @click="onClick" />
          <q-btn v-else size="xs" :icon="btnProps.icon" color="grey-4" flat round dense @click="onClick" />
        </template>
        <q-carousel-slide v-for="(s, idx) in product.slides" :name="idx" :key="idx" class="q-pa-none">
          <q-img :src="s" :ratio="1" loading="lazy" spinner-color="primary" class="rounded-borders" />
        </q-carousel-slide>
      </q-carousel>
      <q-img v-else :src="product.imgUrl" :ratio="1" loading="lazy" spinner-color="primary" @click="zoom(product)"
        class="zoomable rounded-borders" />
    </q-card-section>
    <q-card-section class="q-pa-sm">
      {{ product.name }}
    </q-card-section>
    <q-card-actions class="q-pt-none justify-between">
      <div>${{ product.price }}</div>
      <q-btn color="secondary" label="Reserve" size="sm" @click="reserve(product)" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["product", "slide"]);
const emit = defineEmits(["zoom", "reserve"]);
const slideIndex = ref(0);

function zoom(product) {
  emit("zoom", product);
}

function reserve(product) {
  emit("reserve", product);
}
</script>
<style lang="sass" scoped>
.p-card
  width: 350px
  height: 430px

.zoomable
  cursor: zoom-in
</style>
