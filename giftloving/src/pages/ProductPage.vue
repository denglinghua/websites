<template>
  <div class="row">
    <TagSelect :tags="tags" v-model="filterTags" />
  </div>
  <div class="row justify-start">
    <ProductItem v-for="(p, idx) in filterProducts" :key="idx" :product="p" @zoom="zoom" />
  </div>
  <q-dialog v-model="zoomed" auto-close>
    <q-card style="width: 800px; max-width: 100%;">
      <q-card-section class="q-pa-sm">
        <q-img :src="`ps/${zoomedProduct.image}`" :ratio="1" spinner-color="primary" fit="cover" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref } from "vue";

import ProductItem from "src/components/ProductItem.vue";
import TagSelect from "src/components/TagSelect.vue";
import productData from "src/data";
import { computed } from "vue";

const products = productData.products;
const tags = productData.tags();
const filterTags = ref([]);

const filterProducts = computed(() => {
  if (filterTags.value.length === 0) {
    return products;
  }
  return productData.filterProducts(filterTags.value);
});

const zoomed = ref(false);
const zoomedProduct = ref(null);
function zoom(product) {
  zoomedProduct.value = product;
  zoomed.value = true;
}
</script>
