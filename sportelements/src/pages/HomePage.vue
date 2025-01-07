<template>
  <div>
    <q-responsive :ratio="ratio" :style="{ 'max-height': $mb ? '500px' : '700px' }">
      <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
        transition-next="slide-left" class="rounded-borders" swipeable>
        <q-carousel-slide v-for="(s, idx) in slides" :name="idx" :key="idx" :img-src="s.img" />
      </q-carousel>
    </q-responsive>
  </div>
  <div>
    <div class="text-center q-mt-sm">
      <h3>Our products</h3>
    </div>
    <div class="text-center q-my-sm row justify-center">
      <q-btn v-for="(p, idx) in homeCategories" :key="idx" class="q-my-md q-mx-lg q-pa-xs" flat color="primary"
        :to="{ name: 'product', params: { tags: [p.category] } }">
        <q-card class="p-card">
          <q-card-section class="q-pa-none">
            <q-img :src="p.cover" :ratio="1" loading="lazy" spinner-color="primary" class="zoomable rounded-borders">
              <div class="absolute-bottom text-h5 text-center text-capitalize">
                {{ p.category }}
              </div>
            </q-img>
          </q-card-section>
        </q-card>
      </q-btn>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { isSmallScreen } from "src/g";
import productData from "src/data";

const slide = ref(0);
const autoplay = ref(2500);

const ratio = computed(() => (isSmallScreen() ? 2 / 3 : 3 / 2));

const slides = isSmallScreen() ?
  [
    { name: 0, img: "vmain.avif" },
    { name: 1, img: "vcycling.jpg" },
    { name: 2, img: "vskiing.jpg" },
    { name: 3, img: "vhiking.webp" },
  ]
  :
  [
    { name: 0, img: "main.avif" },
    { name: 1, img: "cycling.avif" },
    { name: 2, img: "skiing.jpg" },
    { name: 3, img: "hiking.webp" },
  ];

slides.forEach((s) => {
  s.img = `/img/home/${s.img}`;
});

// show categories with cover images, c.cover is not null
const homeCategories = productData.categories.filter((c) => c.cover);

onMounted(() => { });

onUnmounted(() => { });
</script>
<style lang="scss" scoped>
.slogan {
  letter-spacing: 0.2em;
  color: $grey-6;
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.1em;
    margin-bottom: 8px;
  }
}

.p-card {
  width: 360px;
  height: 360px;
}
</style>
