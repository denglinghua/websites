<template>
  <div class="row justify-center q-ma-md">
    <p class="text-subtitle1" v-html="$t('service.title')">
    </p>
  </div>
  <div class="row q-gutter-lg justify-center">
    <div v-for="s in services" :key="s.title">
      <q-card class="service-card">
        <q-card-section align="center">
          <q-avatar :icon="s.icon" class="text-primary" />
        </q-card-section>
        <q-card-section align="center" class="q-pt-none">
          <q-item-label class="text-weight-bold text-primary">{{
      s.title
    }}</q-item-label>
        </q-card-section>
        <q-card-section align="center" class="q-pt-none">
          <q-item-label class="text-caption text-primary">{{
        s.subTitle
      }}</q-item-label>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>{{ s.text }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
import useGlobal from 'src/global';
const $t = useGlobal().$t;
const services = ['data', 'web', 'consulting', 'outsource'].map((s) => ({
  title: $t(`service.${s}.title`),
  subTitle: $t(`service.${s}.subTitle`),
  text: $t(`service.${s}.text`),
  icon: $t(`service.${s}.icon`),
}));

</script>
<style lang="sass" scoped>
.service-card
  width: 250px
  height: 290px
</style>
