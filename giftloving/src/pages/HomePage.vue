<template>
  <div class="q-my-xl text-h5 text-grey-6" align="center">
    Bringing Beauty to Your Home, Naturally.
  </div>
  <q-responsive :ratio="ratio" style="max-width: 100%;">
    <q-carousel animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right"
      transition-next="slide-left">
      <q-carousel-slide :name="1" img-src="ps/p1.png" />
      <q-carousel-slide :name="2" img-src="ps/p2.png" />
      <q-carousel-slide :name="3" img-src="ps/p3.png" />
      <q-carousel-slide :name="4" img-src="ps/p4.png" />
      <q-carousel-slide :name="5" img-src="ps/p5.png" />
    </q-carousel>
  </q-responsive>
</template>
<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const slide = ref(1);
const autoplay = ref(true);

function isPhoneScreen() {
  return window.innerWidth < window.innerHeight
}

const ratio = computed(() => (isPhoneScreen() ? 1 : 16 / 9));

onMounted(() => { });

onUnmounted(() => { });
</script>
