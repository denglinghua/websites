<template>
  <q-card class="q-ma-md p-card">
    <q-card-section class="q-pa-none">
      <q-carousel v-if="slide" v-model="slideIndex" animated :padding="false" control-color="grey-3"
        :navigation="product.slides.length > 1" transition-prev="slide-right" transition-next="slide-left"
        class="rounded-borders" swipeable height="350px">
        <q-carousel-slide v-for="(s, idx) in product.slides" :name="idx" :key="idx" class="q-pa-none">
          <q-img :src="s" :ratio="1" loading="lazy" spinner-color="primary" class="rounded-borders" />
        </q-carousel-slide>
      </q-carousel>
      <q-img v-else :src="product.imgUrl" :ratio="1" loading="lazy" spinner-color="primary" @click="zoom(product)"
        class="zoomable rounded-borders" />
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-overline">${{ product.price }}</div>
      <div>{{ product.name }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["product", "slide"]);
const emit = defineEmits(["zoom"]);
const slideIndex = ref(0);

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
