<template>
  <div class="row justify-center">
    <TagSelect :tags="tags" :filterTags="filterTags" />
  </div>
  <div class="row justify-center">
    <ProductItem v-for="p in filterProducts" :key="p.id" :product="p" @zoom="zoom" @reserve="reserve" :slide="mobile" />
  </div>
  <ProductZoom :product="zoomedProduct" :show="zoomed" v-if="!mobile" />
  <q-dialog v-model="reserved">
    <ReserveProduct :product="reserveProduct" />
  </q-dialog>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import ProductItem from "src/components/ProductItem.vue";
import TagSelect from "src/components/TagSelect.vue";
import productData from "src/data";
import ProductZoom from "src/components/ProductZoom.vue";
import ReserveProduct from "src/components/ReserveProduct.vue";
import { isSmallScreen } from "src/g";

const router = useRouter();
//console.log(router.currentRoute.value);
const queryTags = router.currentRoute.value.params.tags;
const filterTags = queryTags || ['bedding'];

const mobile = isSmallScreen();
const tags = productData.tags();
const filterProducts = productData.filterProducts(filterTags);

// if the device is mobile, no popup zoom window, as the image cannot be zoomed because of the small screen
const zoomed = ref(0);
const zoomedProduct = ref(null);
function zoom(product) {
  zoomedProduct.value = product;
  zoomed.value = new Date().getTime();
}

const reserved = ref(false);
const reserveProduct = ref(null);
function reserve(product) {
  reserveProduct.value = product;
  reserved.value = true;
}
</script>
<style lang="scss">
.q-dialog__backdrop {
  background: rgba(0, 0, 0, 0.8);
}
</style>
