<template>
  <div class="row q-gutter-lg justify-center">
    <div v-for="s in services" :key="s.title">
      <q-card style="width: 240px; height: 250px">
        <q-card-section align="center">
          <q-avatar :icon="s.icon"> </q-avatar>
        </q-card-section>
        <q-card-section align="center">
          <q-item-label>{{ s.title }}</q-item-label>
        </q-card-section>
        <q-card-section>
          <q-item-label caption>{{ s.text }}</q-item-label>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
const services = [
  {
    title: "Data Analysis",
    icon: "bi-graph-up-arrow",
    text: "Uncover actionable insights from your data. Our expert analysts transform raw data into strategic intelligence, empowering you to make informed decisions.",
  },
  {
    title: "Website Building",
    icon: "bi-file-earmark",
    text: "Craft a digital presence that captivates. We specialize in creating responsive, user-friendly websites tailored to your brand, ensuring a seamless online experience for your audience.",
  },
  {
    title: "Tech Consultancy",
    icon: "bi-compass",
    text: "Strategic guidance for lasting success. Our seasoned consultants work closely with you to understand your business goals, offering tailored solutions that drive sustainable growth.",
  },
  {
    title: "Outsource Services",
    icon: "bi-card-checklist",
    text: "Focus on what you do best, and leave the rest to us. Our outsourcing services are designed to streamline operations, reduce costs, and enhance overall efficiency.",
  },
];
</script>
<style lang="sass" scoped>
.service-card
  width: 240px
  height: 250px
</style>
