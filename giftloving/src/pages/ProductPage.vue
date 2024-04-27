<template>
  <div class="row justify-center">
    <TagSelect :tags="tags" v-model="filterTags" />
  </div>
  <div class="row justify-start">
    <ProductItem v-for="p in filterProducts" :key="p.id" :product="p" @zoom="zoom" :slide="mobile" />
  </div>
  <ProductZoom :product="zoomedProduct" :show="zoomed" v-if="!mobile" />
</template>
<script setup>
import { ref, computed } from "vue";

import ProductItem from "src/components/ProductItem.vue";
import TagSelect from "src/components/TagSelect.vue";
import productData from "src/data";
import ProductZoom from "src/components/ProductZoom.vue";
import { isSmallScreen } from "src/g";

const mobile = isSmallScreen();
const products = productData.products;
const tags = productData.tags();
const filterTags = ref([]);

const filterProducts = computed(() => {
  if (filterTags.value.length === 0) {
    return products;
  }
  return productData.filterProducts(filterTags.value);
});

// if the device is mobile, no popup zoom window, as the image cannot be zoomed because of the small screen
const zoomed = ref(0);
const zoomedProduct = ref(null);
function zoom(product) {
  zoomedProduct.value = product;
  zoomed.value = new Date().getTime();
}
</script>
