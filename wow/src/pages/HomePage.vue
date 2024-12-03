<template>
  <div class="slogan" align="center">
    QUANTITY COMFORT STYLE
  </div>
  <q-responsive :ratio="ratio" style="max-height: 75vh;">
    <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
      transition-next="slide-left" class="rounded-borders" swipeable>
      <q-carousel-slide v-for="(s, idx) in slides" :name="idx" :key="idx" :img-src="s.img" />
    </q-carousel>
  </q-responsive>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { isSmallScreen } from "src/g";

const slide = ref(1);
const autoplay = ref(2500);

const ratio = computed(() => (isSmallScreen() ? 2 / 3 : 3 / 2));

const slides = isSmallScreen() ?
  [
    { name: 1, img: "v01.jpg" },
    { name: 2, img: "v02.jpg" },
    { name: 3, img: "v03.jpg" },
    { name: 4, img: "v04.jpg" },
    { name: 5, img: "v05.jpg" },
    { name: 6, img: "v06.jpg" },
    { name: 7, img: "v07.jpg" },
    { name: 8, img: "v08.jpg" },
  ]
  :
  [
    { name: 1, img: "main1.jpg" },
    { name: 2, img: "main2.jpg" },
    { name: 3, img: "main3.jpg" },
    { name: 4, img: "main4.jpg" },
  ];

slides.forEach((s) => {
  s.img = `/img/home/${s.img}`;
});

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
</style>
