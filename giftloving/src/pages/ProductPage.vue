<template>
  <div class="row justify-center">
    <TagSelect :tags="tags" :filterTags="filterTags" />
  </div>
  <div class="row justify-start">
    <ProductItem v-for="p in filterProducts" :key="p.id" :product="p" @zoom="zoom" :slide="mobile" />
  </div>
  <ProductZoom :product="zoomedProduct" :show="zoomed" v-if="!mobile" />
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import ProductItem from "src/components/ProductItem.vue";
import TagSelect from "src/components/TagSelect.vue";
import productData from "src/data";
import ProductZoom from "src/components/ProductZoom.vue";
import { isSmallScreen } from "src/g";

const router = useRouter();
//console.log(router.currentRoute.value);
const queryTags = router.currentRoute.value.params.tags;
const filterTags = queryTags || [];

const mobile = isSmallScreen();
const products = productData.products;
const tags = productData.tags();
const filterProducts = queryTags ? productData.filterProducts(queryTags) : products;

// if the device is mobile, no popup zoom window, as the image cannot be zoomed because of the small screen
const zoomed = ref(0);
const zoomedProduct = ref(null);
function zoom(product) {
  zoomedProduct.value = product;
  zoomed.value = new Date().getTime();
}
</script>
