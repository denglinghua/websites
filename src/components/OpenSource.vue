<template>
  <q-card>
    <q-card-section class="q-pb-none">
      With deep gratitude to the open-source community, whose invaluable
      contributions empower the construction of this website.
    </q-card-section>
    <q-card-section>
      <q-list :bordered="false">
        <q-item v-for="d in data" :key="d.title">
          <q-item-section avatar>
            <q-icon color="primary" name="bi-file-code" />
          </q-item-section>
          <q-item-section
            ><a :href="d.link" target="blank"> {{ d.title }}</a></q-item-section
          >
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat icon="bi-hand-thumbs-up-fill" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script setup>
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
];
</script>
