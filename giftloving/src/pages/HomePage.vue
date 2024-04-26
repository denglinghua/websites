<template>
  <div class="slogan" align="center">
    Bringing Beauty to Your Home
  </div>
  <q-responsive :ratio="ratio" style="max-width: 100%;">
    <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
      transition-next="slide-left" class="rounded-borders" swipeable>
      <q-carousel-slide v-for="(s, idx) in slides" :name="idx" :key="idx" :img-src="s.img" />
    </q-carousel>
  </q-responsive>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { isSmallScreen, getImgDomain } from "src/g";

const slide = ref(1);
const autoplay = ref(2500);

const ratio = computed(() => (isSmallScreen() ? 2 / 3 : 3 / 2));
const imgDomain = getImgDomain();

const slides = isSmallScreen() ?
  [
    { name: 1, img: "v06.JPG" },
    { name: 2, img: "v02.JPG" },
    { name: 3, img: "v03.JPG" },
    { name: 4, img: "v07.JPG" },
    { name: 5, img: "v05.JPG" },
    { name: 6, img: "v01.JPG" },
    { name: 7, img: "v04.JPG" },
  ]
  :
  [
    { name: 1, img: "h01.JPG" },
    { name: 2, img: "h02.JPG" },
    { name: 3, img: "h03.JPG" },
    { name: 4, img: "h04.JPG" },
    { name: 5, img: "h05.JPG" },
    { name: 6, img: "h06.JPG" },
    { name: 7, img: "h07.JPG" },
  ];

slides.forEach((s) => {
  s.img = `${imgDomain}img/home/${s.img}`;
});

onMounted(() => { });

onUnmounted(() => { });
</script>
<style lang="scss" scoped>
.slogan {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $grey-6;
  font-size: 2em;
  font-weight: 550;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.1em;
    margin-bottom: 8px;
  }
}
</style>
