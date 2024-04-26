<template>
  <div class="row">
    <TagSelect :tags="tags" v-model="filterTags" />
  </div>
  <div class="row justify-start">
    <ProductItem v-for="(p, idx) in filterProducts" :key="idx" :product="p" @zoom="zoom" />
  </div>
  <q-dialog v-model="zoomed" :auto-close="!showSlide">
    <q-card style="width: 800px; max-width: 100%;">
      <q-card-section class="q-pa-sm">
        <q-img :src="zoomedProduct.imgUrl" :ratio="1" spinner-color="primary" fit="cover" v-if="!showSlide" />
        <q-responsive ratio="1" style="max-width: 100%;" v-else>
          <q-carousel v-model="slide" animated navigation infinite arrows transition-prev="slide-right"
            transition-next="slide-left" class="rounded-borders" swipeable>
            <q-carousel-slide v-for="(s, idx) in zoomedProduct.slides" :name="idx" :key="idx" :img-src="s" />
          </q-carousel>
        </q-responsive>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, computed } from "vue";

import ProductItem from "src/components/ProductItem.vue";
import TagSelect from "src/components/TagSelect.vue";
import productData from "src/data";
import { getImgDomain } from "src/g";

const imgDomain = getImgDomain();
const products = productData.products;
products.forEach((p) => {
  p.imgUrl = getImgUrl(p.image);
});
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
const slide = ref(0);
const showSlide = ref(false);
function zoom(product) {
  setSubImgs(product);
  zoomedProduct.value = product;
  slide.value = 0;
  showSlide.value = product.slides.length > 1;
  zoomed.value = true;
}

function setSubImgs(product) {
  if (product.slides) {
    return;
  }

  let subImgs = [product.image];
  if (product.subImages) {
    for (let i = 1; i <= product.subImages; i++) {
      subImgs.push(subImgName(product.image, i));
    }
  }
  product.slides = subImgs.map((img) => getImgUrl(img));
}

function subImgName(originalName, seqNo) {
  const [name, extension] = originalName.split('.');
  return `${name}_${seqNo}.${extension}`;
}

function getImgUrl(img) {
  return `${imgDomain}img/ps/${img}`;
}
</script>
