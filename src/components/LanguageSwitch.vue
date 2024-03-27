<template>
  <q-btn flat dense color="primary" icon="bi-translate" :label="$t('layout.language')" :no-caps="true"
    @click="changeLang" />
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const router = useRouter();
const i18n = useI18n({})
function changeLang() {
  const currentLang = i18n.locale.value;
  i18n.locale.value = currentLang === "en-US" ? "fr-CA" : "en-US";
  //router.go(0);
}
</script>
