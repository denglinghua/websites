<template>
  <div class="q-mt-sm">
    <q-responsive :ratio="ratio" style="max-height: 700px;">
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
      <q-card v-for="(p, idx) in productCategories" :key="idx" class="q-ma-md p-card cursor-pointer"
        @click="navCat(p.cat)">
        <q-card-section class="q-pa-none">
          <q-img :src="p.img" :ratio="1" loading="lazy" spinner-color="primary" class="zoomable rounded-borders">
            <div class="absolute-bottom text-subtitle2 text-center text-capitalize">
              {{ p.cat }}
            </div>
          </q-img>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";
import { isSmallScreen } from "src/g";

const slide = ref(1);
const autoplay = ref(2500);

const ratio = computed(() => (isSmallScreen() ? 2 / 3 : 3 / 2));

const slides = isSmallScreen() ?
  [
    { name: 0, img: "vmain.png" },
    { name: 1, img: "cycling01.avif" },
    { name: 2, img: "skiing01.jpg" },
    { name: 3, img: "soccer01.jpg" },
    { name: 4, img: "swimming.jpg" },
  ]
  :
  [
    { name: 0, img: "main.jpg" },
    { name: 1, img: "cycling01.avif" },
    { name: 2, img: "skiing01.jpg" },
    { name: 3, img: "soccer01.jpg" },
    { name: 4, img: "swimming.jpg" },
  ];

slides.forEach((s) => {
  s.img = `/img/home/${s.img}`;
});

const productCategories = [
  { cat: "cycling", img: "/img/home/cycling01.avif" },
  { cat: "skiing", img: "/img/home/skiing01.jpg" },
  { cat: "soccer", img: "/img/home/soccer01.jpg" },
  { cat: "swimming", img: "/img/home/swimming.jpg" },
];

const router = useRouter();
function navCat(cat) {
  router.push({ name: "product", params: { tags: [cat] } });
}

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
  width: 300px;
  height: 300px;
}
</style>
