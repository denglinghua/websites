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

const ratio = computed(() => (isSmallScreen() ? 1 : 16 / 9));

const slides = [
  { name: 1, img: "ps/p1.png" },
  { name: 2, img: "ps/p2.png" },
  { name: 3, img: "ps/p3.png" },
  { name: 4, img: "ps/p4.png" },
  { name: 5, img: "ps/p5.png" },
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
