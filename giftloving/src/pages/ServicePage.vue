<template>
  <div class="column items-center q-mb-sm">
    <q-card class="service-card">
      <q-card-section :horizontal="!isPhoneScreen()">
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">Customize Your Space</div>
          <div class="text-grey">
            Tailor your home to perfection with our bespoke customization service. From unique furniture pieces to
            personalized decor accents, we'll bring your vision to life, creating a space that's truly yours.
          </div>
        </q-card-section>
        <q-card-section class="col-7 flex flex-center">
          <q-img class="rounded-borders" src="img/service_1.jpg" />
        </q-card-section>
      </q-card-section>
    </q-card>

    <q-separator class="q-mt-md q-mb-md" />

    <q-card class="service-card">
      <q-card-section :horizontal="!isPhoneScreen()">
        <q-card-section class="q-pt-xs">
          <div class="text-h5 q-mt-sm q-mb-xs">Elevate Your Sale</div>
          <div class="text-grey">
            Maximize your property's potential with our professional home staging service. We'll transform your house
            into
            a captivating home that stands out in the market, helping you secure a faster sale at the best price.
          </div>
        </q-card-section>
        <q-card-section class="col-7 flex flex-center">
          <q-img class="rounded-borders" src="img/service_2.jpg" />
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
function isPhoneScreen() {
  return window.innerWidth < window.innerHeight
}
</script>
<style lang="sass" scoped>
.service-card
  width: 100%
  max-width: 800px
</style>
