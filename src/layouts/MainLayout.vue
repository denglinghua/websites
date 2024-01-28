<template>
  <q-layout view="hHh lpR fFf" container class="layout-container">
    <q-header class="bg-white text-primary" height-hint="80">
      <q-toolbar>
        <q-toolbar-title class="text-H6 items-center">
          <q-avatar icon="bi-c-circle-fill" font-size="28px"> </q-avatar>
          Island Coyote Tech Inc.
        </q-toolbar-title>
        <q-tabs align="right" inline-label v-if="largeScreen">
          <q-route-tab
            v-for="m in menus"
            :to="m.route"
            :label="m.name"
            :icon="m.icon"
            :key="m.name"
          />
        </q-tabs>
        <q-btn flat color="primary" icon="bi-list" v-else>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item
                clickable
                v-close-popup
                exact
                v-for="m in menus"
                :to="m.route"
                :key="m.name"
              >
                <q-item-section avatar>
                  <q-icon color="primary" :name="m.icon" />
                </q-item-section>
                <q-item-section>{{ m.name }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!--q-chip color="primary" text-color="white" icon="event">
        Add to calendar
      </q-chip-->
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
    <q-footer class="bg-white text-primary q-mb-md">
      <q-toolbar>
        <q-toolbar-title class="text-caption">
          Copyright © 2024 Island Coyote Tech Inc.
        </q-toolbar-title>
        <q-space />
        <q-btn flat color="primary" icon="bi-facebook" />
        <q-btn flat color="primary" icon="bi-twitter-x" />
        <q-btn flat color="primary" icon="bi-linkedin" />
        <q-btn
          flat
          color="primary"
          icon="bi-heart-fill"
          @click="showThanks = true"
        />
      </q-toolbar>
    </q-footer>
    <q-resize-observer @resize="onResize" />
    <q-dialog v-model="showThanks">
      <open-source />
    </q-dialog>
  </q-layout>
</template>
<script setup>
import { QDialog } from "quasar";
import { ref } from "vue";
import OpenSource from "../components/OpenSource.vue";
const largeScreen = ref(false);
const menus = [
  {
    name: "Home",
    icon: "bi-house-door-fill",
    route: "/",
  },
  {
    name: "About",
    icon: "bi-file-code-fill",
    route: "/about",
  },
  {
    name: "Services",
    icon: "bi-box-fill",
    route: "/services",
  },
  {
    name: "Contact",
    icon: "bi-person-lines-fill",
    route: "/contact",
  },
];

function onResize(size) {
  largeScreen.value = size.width > 1000;
}

const showThanks = ref(false);
</script>
<style scoped>
.layout-container {
  height: 100vh;
  max-width: 1200px;
  margin: auto;
  background-color: grey-4;
  box-shadow: 10px 0 15px -10px rgba(0, 0, 0, 0.1),
    -10px 0 15px -10px rgba(0, 0, 0, 0.1);
}
</style>
