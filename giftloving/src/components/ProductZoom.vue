<template>
  <q-dialog v-model="showDialog" :auto-close="!slideMode">
    <q-card :style="{ width: `${winHeight}px`, maxWidth: '100%' }">
      <q-card-section class="q-pa-sm">
        <q-img :src="product.imgUrl" :ratio="1" spinner-color="primary" fit="cover" v-if="!slideMode" />
        <q-responsive ratio="1" style="max-width: 100%;" v-else>
          <q-carousel v-model="slide" animated navigation infinite arrows transition-prev="slide-right"
            transition-next="slide-left" class="rounded-borders" swipeable>
            <template v-slot:navigation-icon="{ active, btnProps, onClick }">
              <q-btn v-if="active" size="xs" :icon="btnProps.icon" color="secondary" flat round dense
                @click="onClick" />
              <q-btn v-else size="xs" :icon="btnProps.icon" color="grey-4" flat round dense @click="onClick" />
            </template>
            <q-carousel-slide v-for="(s, idx) in product.slides" :name="idx" :key="idx" :img-src="s" class="slide"
              @click="close" />
          </q-carousel>
        </q-responsive>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const props = defineProps(["product", "show"]);
const showDialog = ref(false);
const slide = ref(0);
let slideMode = false;

watch(() => props.show, () => {
  showDialog.value = true;
  slide.value = 0;
  // if only one product image, don't show carousel
  slideMode = props.product.slides.length > 1;
});

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
  const x = Math.min(window.innerHeight - 80, 800);
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
