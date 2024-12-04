<template>
  <q-layout view="hHh lpR fff" container class="layout-container">
    <q-header class="header-footer text-primary" height-hint="80">
      <q-toolbar class="items-center">
        <q-toolbar-title class="items-center">
          <q-btn flat dense label="WOW Home Textile" class="text-uppercase text-h5 q-ml-none title" to="/" />
        </q-toolbar-title>
        <q-tabs align="right" inline-label v-if="largeScreen" dense no-caps>
          <q-route-tab v-for="m in menus" :to="{ name: m.route }" :key="m.name">
            <span class="text-subtitle1">{{ m.name }}</span>
          </q-route-tab>
        </q-tabs>
        <q-btn flat color="primary" icon="bi-list" v-else>
          <q-menu>
            <q-list style="min-width: 150px">
              <q-item clickable v-close-popup exact v-for="m in menus" :to="{ name: m.route }" :key="m.name">
                <q-item-section>{{ m.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view :key="$route.fullPath" />
      </q-page>
    </q-page-container>
    <q-footer class="header-footer text-primary q-mt-xs">
      <q-toolbar>
        <q-toolbar-title class="text-caption cp"> Copyright © 2022 - {{ year }} WOW Home Textile </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-resize-observer @resize="onResize" />
  </q-layout>
</template>
<script setup>
import { useMeta } from "quasar";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const largeScreen = ref(false);
const menus = computed(() => [
  {
    name: "Home",
    route: "home",
  },
  {
    name: "About",
    route: "about",
  },
  {
    name: "Products",
    route: "product",
  },
  {
    name: "Services",
    route: "service",
  },
  {
    name: "Contact",
    route: "contact",
  },
]);

function getTitle() {
  let title = router.currentRoute.value.name;
  return title === 'home' ? "QUANTITY COMFORT STYLE" : title.toUpperCase();
}

const router = useRouter();
const pageTitle = computed(() => getTitle());
useMeta(() => {
  return {
    title: pageTitle.value,
    titleTemplate: (title) => `${title} | WOW Home Textile`,
  };
});

function onResize(size) {
  largeScreen.value = size.width > 1000;
}

const year = new Date().getFullYear();

function fb() {
  window.open("https://www.facebook.com/wowhometextile", "_blank");
}
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

.title {
  color: #5b4d45;
  font-family: "Monoton", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.cp {
  letter-spacing: 0.2em;
}
</style>
