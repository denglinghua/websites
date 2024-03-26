<template>
  <q-layout view="hHh lpR fFf" container class="layout-container">
    <q-header class="header-footer text-primary" height-hint="80">
      <q-toolbar>
        <q-toolbar-title class="items-center">
          <q-icon name="img:icons/favicon-32x32.png" />
          <span class="text-uppercase text-subtitle1 q-ml-sm">Island Coyote Tech Inc.</span>
        </q-toolbar-title>
        <q-tabs align="right" inline-label v-if="largeScreen">
          <q-route-tab v-for="m in menus" :to="m.route" :label="m.name" :icon="m.icon" :key="m.name" :no-caps="true" />
        </q-tabs>
        <q-btn flat color="primary" icon="bi-list" v-else>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup exact v-for="m in menus" :to="m.route" :key="m.name">
                <q-item-section avatar>
                  <q-icon color="primary" :name="m.icon" :no-caps="true" />
                </q-item-section>
                <q-item-section>{{ m.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <LanguageSwitch class="q-ml-md" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
    <q-footer class="header-footer text-primary q-mb-md">
      <q-toolbar>
        <q-toolbar-title class="text-caption">
          {{ $t("layout.copyright", { year: year }) }}
        </q-toolbar-title>
        <q-space />
        <IconButton flat color="primary" icon="bi-facebook" :tooltip="$t('layout.facebook')" />
        <IconButton flat color="primary" icon="bi-linkedin" :tooltip="$t('layout.linkedin')" />
        <icon-button flat color="primary" icon="bi-heart-fill" @click="showThanks = true"
          :tooltip="$t('layout.openSource')" />
        <DarkModeToggle />
      </q-toolbar>
    </q-footer>
    <q-resize-observer @resize="onResize" />
    <q-dialog v-model="showThanks">
      <open-source />
    </q-dialog>
  </q-layout>
</template>
<script setup>
import { QDialog, useMeta } from "quasar";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import OpenSource from "../components/OpenSource.vue";
import DarkModeToggle from "src/components/DarkModeToggle.vue";
import IconButton from "src/components/IconButton.vue";
import LanguageSwitch from "src/components/LanguageSwitch.vue";
import useGlobal from "src/global";

const $t = useGlobal().$t

const largeScreen = ref(false);
const menus = computed(() => [
  {
    name: $t("menu.home"),
    icon: "bi-house-door-fill",
    route: "/",
  },
  {
    name: $t("menu.about"),
    icon: "bi-file-code-fill",
    route: "/about",
  },
  {
    name: $t("menu.services"),
    icon: "bi-box-fill",
    route: "/services",
  },
  {
    name: $t("menu.contact"),
    icon: "bi-person-lines-fill",
    route: "/contact",
  },
]);

function getMenuName(to) {
  return menus.value.find((m) => m.route === to)?.name;
}

const router = useRouter();
const pageTitle = computed(() => getMenuName(router.currentRoute.value.path));
useMeta(() => {
  return {
    title: pageTitle.value,
    titleTemplate: (title) => `${title} | Island Coyote Tech Inc.`,
  };
});

function onResize(size) {
  largeScreen.value = size.width > 1000;
}

const year = new Date().getFullYear();
const showThanks = ref(false);
</script>
<style lang="scss" scoped>
.layout-container {
  height: 100vh;
  max-width: 1200px;
  margin: auto;
  background-color: grey-4;
  box-shadow: 10px 0 15px -10px rgba(0, 0, 0, 0.1),
    -10px 0 15px -10px rgba(0, 0, 0, 0.1);
}
</style>
