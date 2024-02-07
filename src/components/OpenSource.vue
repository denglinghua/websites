<template>
  <q-card>
    <q-card-section>
      With deep appreciation for the open-source community, whose invaluable
      contributions have greatly facilitated the development of this website.
    </q-card-section>
    <q-card-section>
      <q-list :bordered="false">
        <q-item v-for="d in data" :key="d.title">
          <q-item-section avatar>
            <q-icon class="source-link" name="bi-code" />
          </q-item-section>
          <q-item-section><a :href="d.link" target="blank" class="source-link">
              {{ d.title }}</a></q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <icon-button flat icon="bi-hand-thumbs-up-fill" color="primary" tooltip="OK" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script setup>
import IconButton from "src/components/IconButton.vue";

const data = [
  {
    title: "Node.js",
    icon: "bi-nodejs",
    link: "https://nodejs.org/",
  },
  {
    title: "Vue.js",
    icon: "bi-vuejs",
    link: "https://vuejs.org/",
  },
  {
    title: "Quasar",
    icon: "bi-quasar",
    link: "https://quasar.dev/",
  },
  {
    title: "Bootstrap",
    icon: "bi-bootstrap",
    link: "https://getbootstrap.com/",
  },
  {
    title: "Visual Studio Code",
    icon: "bi-code-slash",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Yarn",
    icon: "bi-github",
    link: "https://yarnpkg.com/",
  },
].sort((a, b) => a.title.localeCompare(b.title));
</script>
