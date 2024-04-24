<template>
  <div class="column items-center q-mb-sm">
    <template v-for="(s, idx) in services" :key="s.title">
      <q-card class="service-card">
        <q-card-section :horizontal="!isSmallScreen()">
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs">{{ s.title }}</div>
            <div class="text-grey">
              {{ s.description }}
            </div>
          </q-card-section>
          <q-card-section class="col-7 flex flex-center">
            <q-img class="rounded-borders" :src="s.img" />
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-separator class="q-mt-md" v-if="idx != services.length - 1" />
    </template>
  </div>
</template>
<script setup>
import { isSmallScreen } from "src/g";

const services = [
  {
    title: "Customize Your Space",
    description:
      "Tailor your home to perfection with our bespoke customization service. From unique furniture pieces to personalized decor accents, we'll bring your vision to life, creating a space that's truly yours.",
    img: "img/custom.jpg",
  },
  {
    title: "Elevate Your Sale",
    description:
      "Maximize your property's potential with our professional home staging service. We'll transform your house into a captivating home that stands out in the market, helping you secure a faster sale at the best price.",
    img: "img/staging.jpg",
  },
];
</script>
<style lang="sass" scoped>
.service-card
  width: 100%
  max-width: 800px
</style>
