<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header">
      <q-bar dense class="bar justify-center">
        Gear Up for Every Adventure
      </q-bar>
      <q-toolbar class="items-center header center">
        <q-toolbar-title class="items-center">
          <q-btn to="/" flat dense>
            <img src="/sport_elements.png" class="logo" />
          </q-btn>
        </q-toolbar-title>
        <q-tabs align="right" inline-label v-if="largeScreen" no-caps>
          <q-route-tab v-for="m in menus" :to="{ name: m.route }" :key="m.name">
            <span class="text-h6">{{ m.name }}</span>
          </q-route-tab>
        </q-tabs>
        <q-btn flat size="lg" class="primary" icon="bi-list" v-else>
          <q-menu>
            <q-list style="min-width: 150px;">
              <q-item clickable v-close-popup exact v-for="m in menus" :to="{ name: m.route }" :key="m.name">
                <q-item-section>{{ m.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md" :class="{ 'center': !fullscreen }">
        <router-view :key="$route.fullPath" />
      </q-page>
    </q-page-container>
    <q-footer class="bar q-mt-xs">
      <q-toolbar class="center">
        <q-toolbar-title class="text-caption cp"> Copyright © {{ year }} Sport Elements Inc.
        </q-toolbar-title>
        <IconButton flat color="primary" icon="bi-facebook" @click="fb" tooltip="Facebook" />
        <icon-button flat color="primary" icon="bi-chat-square-dots-fill" @click="showContact = true"
          tooltip="Send us a message" />
      </q-toolbar>
    </q-footer>
    <q-resize-observer @resize="onResize" />
    <q-dialog v-model="showContact" :backdrop-filter="backdropFilter">
      <contact-form v-model="showContact" />
    </q-dialog>
  </q-layout>
</template>
<script setup>
import { useMeta } from "quasar";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import IconButton from "src/components/IconButton.vue";
import ContactForm from "src/components/ContactForm.vue";

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
    name: "Contact",
    route: "contact",
  },
]);

function getTitle() {
  let title = router.currentRoute.value.name;
  return title === 'home' ? "Outdoor Apparel Accessories" : title.toUpperCase();
}

const router = useRouter();
const pageTitle = computed(() => getTitle());
useMeta(() => {
  return {
    title: pageTitle.value,
    titleTemplate: (title) => `${title} | Sport Elements`,
  };
});

const fullPages = ["home", "product"];
const fullscreen = ref(true);
watch(router.currentRoute, (current) => {
  fullscreen.value = fullPages.includes(current.name);
}, { immediate: true });

function onResize(size) {
  largeScreen.value = size.width > 1000;
}

const year = new Date().getFullYear();

function fb() {
  window.open("https://www.facebook.com/profile.php?id=61569271494662", "_blank");
}

const showContact = ref(false);
const backdropFilter = "blur(4px) saturate(150%)"

</script>
<style lang="scss" scoped>
.center {
  max-width: 1200px;
  margin: auto;
}

.header {
  background-color: $grey-1;
  color: $primary;
}

.logo {
  height: 75px;
  padding-top: 10px;
  padding-bottom: 5px;

  @media screen and (max-width: 768px) {
    padding-top: 5px;
    height: 60px;
  }
}

.bar {
  background-color: $blue-4;
  color: white;
}

.title {
  color: #5b4d45;
  font-family: "Monoton", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.cp {
  letter-spacing: 0.2em;

  @media screen and (max-width: 768px) {
    letter-spacing: 0.1em;
  }
}
</style>
