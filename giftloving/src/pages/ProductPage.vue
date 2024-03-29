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
import { useRouter } from "vue-router";

import ProductItem from "src/components/ProductItem.vue";
import catProducts from "src/data";

const router = useRouter();
const category = router.currentRoute.value.path.split("/")[1];

// console.log(category, catProducts);

const products = catProducts[category];

const zoomed = ref(false);
const zoomedProduct = ref(null);
function zoom(product) {
  zoomedProduct.value = product;
  zoomed.value = true;
}
</script>
