<template>
  <div class="column items-center q-mb-sm">
    <q-card class="about-card">
      <q-card-section :horizontal="!$mb" class="q-pb-none">
        <q-img src="/img/about.avif" :class="{ 'q-ml-xl': !$mb }" style="max-width: 400px; max-height: 500px" />
        <q-card-section>
          <div class="column text-uppercase text-h2 slogan" :class="$mb ? [] : ['q-ml-xl', 'q-mt-xl']">
            <div>Gear Up</div>
            <div>for</div>
            <div>Every</div>
            <div>Adventure</div>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section class="q-pt-md">
        <p>
          At <b>Sport Elements
          </b> , we are passionate about empowering athletes and fitness enthusiasts to reach their
          full
          potential. Founded on the belief that sportswear should combine performance, comfort, and style, our mission
          is to provide high-quality activewear that supports your every move, on and off the field.
        </p>
        <p>
          Whether you’re training for a marathon, hitting the gym, or enjoying outdoor adventures, our apparel is
          designed
          to keep up with your active lifestyle. We use premium fabrics and innovative designs to ensure durability,
          breathability, and flexibility—all while making you look and feel great.
        </p>
        <p>
          We’re not just about clothes; we’re about building a community that inspires movement, celebrates
          achievements,
          and encourages everyone to embrace a healthier, more active life.</p>
        <p>
          Join us on this journey and let’s make every moment count—together.</p>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.about-card {
  width: 100%;
  max-width: 960px
}

.slogan {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 600;
  line-height: 1.5em;
  letter-spacing: 3px;
  color: $grey-6;

  @media screen and (max-width: 768px) {
    line-height: 1.1em;
  }
}
</style>
