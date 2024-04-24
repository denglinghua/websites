<template>
  <div class="slogan" align="center">
    Bringing Beauty to Your Home, Naturally.
  </div>
  <q-responsive :ratio="ratio" style="max-width: 100%;">
    <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
      transition-next="slide-left" class="rounded-borders">
      <q-carousel-slide v-for="(s, idx) in slides" :name="idx" :key="idx" :img-src="s.img" />
    </q-carousel>
  </q-responsive>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { isSmallScreen } from "src/g";

const slide = ref(1);
const autoplay = ref(true);

const ratio = computed(() => (isSmallScreen() ? 2 / 3 : 3 / 2));

const slides = isSmallScreen() ?
  [
    { name: 1, img: "img/v06.JPG" },
    { name: 2, img: "img/v02.JPG" },
    { name: 3, img: "img/v03.JPG" },
    { name: 4, img: "img/v04.JPG" },
    { name: 5, img: "img/v05.JPG" },
    { name: 6, img: "img/v01.JPG" },
    { name: 7, img: "img/v07.JPG" },
  ]
  :
  [
    { name: 1, img: "img/h01.JPG" },
    { name: 2, img: "img/h02.JPG" },
    { name: 3, img: "img/h03.JPG" },
    { name: 4, img: "img/h04.JPG" },
    { name: 5, img: "img/h05.JPG" },
    { name: 6, img: "img/h06.JPG" },
    { name: 7, img: "img/h07.JPG" },
  ];

onMounted(() => { });

onUnmounted(() => { });
</script>
<style lang="scss" scoped>
.slogan {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $grey-6;
  font-size: 2em;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-top: 0px;
    margin-bottom: 8px;
  }
}
</style>
