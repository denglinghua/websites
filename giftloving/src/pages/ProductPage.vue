<template>
  <div class="row justify-between" v-for="(row, idx) in productRows" :key="idx">
    <ProductItem v-for="p in row" :product="p" :key="p.name" />
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
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

const nullProduct = {
  id: 0,
  name: "",
  price: 0,
  image: "",
  description: "",
};

const productsOneRow = 3;
const productRows = computed(() => {
  const rows = [];
  for (let i = 0; i < products.length; i += productsOneRow) {
    let cols = [];
    for (let j = 0; j < productsOneRow; j++) {
      let p = products[i + j];
      cols.push(p ? p : nullProduct);
    }
    rows.push(cols);
  }
  return rows;
});
</script>
