<template>
  <div class="column items-center q-mb-sm">
    <q-card class="about-card" flat>
      <q-card-section :horizontal="!$mb" class="q-pb-none">
        <q-img src="/img/about.avif" :class="{ 'q-ml-lg': !$mb }" style="max-width: 320px; max-height: 400px" />
        <q-card-section>
          <div class="column text-uppercase text-h2 slogan" :class="$mb ? [] : ['q-ml-xl', 'q-mt-sm']">
            <div>Gear Up</div>
            <div>for</div>
            <div>Every</div>
            <div>Adventure</div>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section class="q-pt-md">
        <p>
          Welcome to <b>Sport Elements
          </b> , your go-to destination for premium sports gear and outdoor apparel.
        </p>
        <p>
          We specialize in cycling, hiking, skiing, and outdoor casual clothing, offering high-quality products that
          combine functionality and style. Our carefully curated selection brings something unique to the local market,
          catering to those who value comfort, durability, and individuality in their outdoor adventures.
        </p>
        <p>
          At Sport Elements, we are passionate about helping you gear up for your next journey. Whether you're
          conquering trails, hitting the slopes, or enjoying a casual day outdoors, we have the perfect apparel to match
          your lifestyle.</p>
        <p>
          <a href="/products">Explore our collection</a> and experience the difference in quality and design!
        </p>
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
