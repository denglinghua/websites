<template>
  <p class="text-h6 q-mt-md text-primary">{{ $t('about.title_welcome') }}</p>

  <p>
    {{ $t('about.body_welcome_1') }}
  </p>
  <p>
    <b>{{ $t('about.body_welcome_2_1') }}</b>{{ $t('about.body_welcome_2_2') }}
  </p>
  <p class="text-h6 text-primary">{{ $t('about.title_commitment') }}</p>
  <p>
    {{ $t('about.body_commitment') }}
  </p>
  <p class="text-h6 text-primary">{{ $t('about.title_why') }}</p>
  <p v-for="s in strengths" :key="s.title">
    <b>{{ s.title }}: </b>{{ s.text }}
  </p>
  <q-btn color="primary" flat icon-right="bi-arrow-right-square" :label="$t('about.contact')" dense to="contact" />
</template>
<script setup>
import useGlobal from 'src/global';
import { computed } from 'vue';
const $t = useGlobal().$t;
const strengths = computed(() => [1, 2, 3].map((s) => ({
  title: $t(`about.sub_why_${s}`),
  text: $t(`about.body_why_${s}`),
})))
</script>
