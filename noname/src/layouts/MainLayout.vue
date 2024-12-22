<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="header" height-hint="80">
      <q-toolbar class="items-center header center">
        <q-toolbar-title class="items-center">
          <q-btn flat dense label="ABC" class="text-uppercase text-h5 q-ml-none title" to="/" />
        </q-toolbar-title>
        <q-tabs align="right" inline-label v-if="largeScreen" no-caps>
          <q-route-tab v-for="m in menus" :to="{ name: m.route }" :key="m.name">
            <span class="text-h6">{{ m.name }}</span>
          </q-route-tab>
        </q-tabs>
        <q-btn flat style="color:var(--header-footer-color)" icon="bi-list" v-else>
          <q-menu>
            <q-list style="min-width: 150px;background-color:var(--header-footer-bg);color:var(--header-footer-color);">
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
    <q-footer class="footer q-mt-xs">
      <q-toolbar class="center">
        <q-toolbar-title class="text-caption cp"> Copyright © {{ year }} ABC Company </q-toolbar-title>
        <q-space />
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
  return title === 'home' ? "QUANTITY COMFORT STYLE" : title.toUpperCase();
}

const router = useRouter();
const pageTitle = computed(() => getTitle());
useMeta(() => {
  return {
    title: pageTitle.value,
    titleTemplate: (title) => `${title} | ABC Company`,
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
  window.open("https://www.facebook.com/abc", "_blank");
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
  background-color: var(--header-footer-bg);
  color: var(--header-footer-color);
  height: 80px;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
}

.footer {
  background-color: var(--header-footer-bg);
  color: var(--header-footer-color);
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
