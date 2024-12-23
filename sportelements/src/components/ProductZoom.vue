<template>
  <q-dialog v-model="showDialog" :auto-close="false">
    <q-card :style="{ width: `${winHeight}px`, maxWidth: '100%' }">
      <q-card-section class="q-pa-sm">
        <q-responsive ratio="1" style="max-width: 100%;">
          <q-carousel v-model="slide" ref="carousel" animated arrows transition-prev="slide-right"
            transition-next="slide-left" class="rounded-borders" control-color="orange" control-type="unelevated"
            swipeable>
            <q-carousel-slide v-for="(p, idx) in productList" :name="idx" :key="idx" :img-src="p.imgUrl" class="slide"
              @click="close" />
          </q-carousel>
        </q-responsive>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps(["product", "show", "productList"]);
const showDialog = ref(false);
const slide = ref(0);

watch(() => props.show, () => {
  showDialog.value = true;
  slide.value = getSlideIndex(props.product, props.productList);
});

function getSlideIndex(product, productList) {
  return productList.findIndex((p) => p.id === product.id);
}

// under slide mode, auto-close should be disabled, because the dialog cannot be closed when control button of carousel is clicked
// only if the click area excluded caurosel control, the dialog can be closed
function close() {
  showDialog.value = false;
}

const winHeight = ref(zoomWinHeight());
function updateHeight() {
  winHeight.value = zoomWinHeight();
};

function zoomWinHeight() {
  const x = Math.min(window.innerHeight - 80, 960);
  return x;
}

onMounted(() => {
  window.addEventListener('resize', updateHeight);
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
})
</script>

<style scoped>
/* for some image is not square */
.slide {
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
