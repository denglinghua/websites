<template>
  <div class="q-mt-md q-mb-xl text-h5 slogan" align="center">
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
    { name: 1, img: "img/v01.jpeg" },
    { name: 2, img: "img/v02.jpeg" },
    { name: 3, img: "img/v03.jpeg" },
    { name: 4, img: "img/v04.jpeg" },
    { name: 5, img: "img/v05.jpeg" },
    { name: 6, img: "img/v06.jpeg" },
    { name: 7, img: "img/v07.jpeg" },
    { name: 8, img: "img/v08.jpeg" },
    { name: 9, img: "img/v09.jpeg" },
    { name: 10, img: "img/v10.jpeg" },
    { name: 11, img: "img/v11.jpeg" },
    { name: 12, img: "img/v12.jpeg" },
    { name: 13, img: "img/v13.jpeg" }
  ]
  :
  [
    { name: 1, img: "img/h1.jpeg" },
    { name: 2, img: "img/h2.jpeg" },
    { name: 3, img: "img/h3.jpeg" },
    { name: 4, img: "img/h4.jpeg" },
    { name: 5, img: "img/h5.jpeg" },
    { name: 6, img: "img/h6.jpeg" },
    { name: 7, img: "img/h7.jpeg" },
    { name: 8, img: "img/h8.jpeg" },
    { name: 9, img: "img/h9.jpeg" },
  ];

onMounted(() => { });

onUnmounted(() => { });
</script>
<style lang="scss" scoped>
.slogan {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $grey-6;
}
</style>
