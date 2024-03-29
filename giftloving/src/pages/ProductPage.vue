<template>
  <div class="row justify-between">
    <ProductItem v-for="(p, idx) in products" :key="idx" :product="p" @zoom="zoom" />
  </div>
  <q-dialog v-model="zoomed" auto-close>
    <q-card style="width: 100%;">
      <q-card-section class="q-pa-sm">
        <q-img :src="`ps/${zoomedProduct.image}`" :ratio="1" spinner-color="primary" fit="cover" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from "vue";
import ProductItem from "src/components/ProductItem.vue";

const products = [
  {
    name: "Dried Floral Arrangement",
    image: "p1.png",
    description: "A beautiful dried floral arrangement that will last for years.",
  },
  {
    name: "Home Decor",
    image: "p2.png",
    description: "A beautiful home decor item that will make your home look great.",
  },
  {
    name: "Candle",
    image: "p3.png",
    description: "A beautiful candle that will make your home smell great.",
  },
  {
    name: "Soap",
    image: "p4.png",
    description: "A beautiful soap that will make your skin feel great.",
  },
  {
    name: "Lotion",
    image: "p5.png",
    description: "A beautiful lotion that will make your skin feel great.",
  },
  {
    name: "Dried Floral Arrangement",
    image: "p1.png",
    description: "A beautiful dried floral arrangement that will last for years.",
  },
  {
    name: "Home Decor",
    image: "p2.png",
    description: "A beautiful home decor item that will make your home look great.",
  },
  {
    name: "Candle",
    image: "p3.png",
    description: "A beautiful candle that will make your home smell great.",
  },
  {
    name: "Soap",
    image: "p4.png",
    description: "A beautiful soap that will make your skin feel great.",
  },
];

const zoomed = ref(false);
const zoomedProduct = ref(null);
function zoom(product) {
  zoomedProduct.value = product;
  zoomed.value = true;
}
</script>
