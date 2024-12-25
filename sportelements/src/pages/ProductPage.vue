<template>
  <div class="row justify-center">
    <TagSelect :tags="tags" :filterTag="filterTag" />
  </div>
  <div class="row justify-center">
    <ProductItem v-for="p in filterProducts" :key="p.id" :product="p" @zoom="zoom" :zoomable="!$mb" />
  </div>
  <ProductZoom :product="zoomedProduct" :productList="filterProducts" :show="zoomed" v-if="!$mb" />
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import ProductItem from "src/components/ProductItem.vue";
import TagSelect from "src/components/TagSelect.vue";
import productData from "src/data";
import ProductZoom from "src/components/ProductZoom.vue";

const router = useRouter();
//console.log(router.currentRoute.value);
const queryTags = router.currentRoute.value.params.tags;
let filterTag = 'all';
if (queryTags) {
  filterTag = queryTags[0];
}

const tags = productData.tags();
const filterProducts = productData.filterProducts(filterTag);

// if the device is mobile, no popup zoom window, as the image cannot be zoomed because of the small screen
const zoomed = ref(0);
const zoomedProduct = ref(null);
function zoom(product) {
  zoomedProduct.value = product;
  zoomed.value = new Date().getTime();
}
</script>
<style lang="scss">
.q-dialog__backdrop {
  background: rgba(0, 0, 0, 0.8);
}
</style>
