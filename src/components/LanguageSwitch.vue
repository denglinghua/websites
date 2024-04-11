<template>
  <q-btn-toggle v-model="selectLang" class="my-custom-toggle" no-caps dense unelevated toggle-color="primary"
    color="grey-1" text-color="primary" :options="[
    { label: 'EN', value: 'en-US' },
    { label: 'FR', value: 'fr-CA' }
  ]" />
</template>
<script setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n({})
const currentLang = i18n.locale.value;
const selectLang = ref(currentLang);

watch(selectLang, (newVal) => {
  i18n.locale.value = newVal;
});

</script>
