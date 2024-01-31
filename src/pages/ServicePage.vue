<template>
  <div class="row justify-center q-ma-md">
    <p class="text-subtitle1">
      At Island Coyote Tech Inc., we excel in delivering <b>affordable</b>,
      <b>swift</b>, and <b>flexible</b> IT solutions tailored to your unique
      needs.
    </p>
  </div>
  <div class="row q-gutter-lg justify-center">
    <div v-for="s in services" :key="s.title">
      <q-card style="width: 250px; height: 290px">
        <q-card-section align="center">
          <q-avatar :icon="s.icon" class="text-primary" />
        </q-card-section>
        <q-card-section align="center" class="q-pt-none">
          <q-item-label class="text-weight-bold text-primary">{{
            s.title
          }}</q-item-label>
        </q-card-section>
        <q-card-section align="center" class="q-pt-none">
          <q-item-label class="text-caption text-primary">{{
            s.subTitle
          }}</q-item-label>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p>{{ s.text }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
const services = [
  {
    title: "Data Analysis",
    subTitle: "Every Number Matters",
    icon: "bi-graph-up-arrow",
    text: "Uncover actionable insights from your data. Our expert analysts transform raw data into strategic intelligence, empowering you to make informed decisions.",
  },
  {
    title: "Website Building",
    subTitle: "Every Pixel Matters",
    icon: "bi-file-earmark",
    text: "Craft a digital presence that captivates. We specialize in creating responsive, user-friendly websites tailored to your brand, ensuring a seamless online experience for your audience.",
  },
  {
    title: "Technical Consulting",
    subTitle: "Every Insight Matters",
    icon: "bi-compass",
    text: "Strategic guidance for lasting success. Our seasoned consultants work closely with you to understand your business goals, offering tailored solutions that drive sustainable growth.",
  },
  {
    title: "Outsource Services",
    subTitle: "Every Task Matters",
    icon: "bi-card-checklist",
    text: "Focus on what you do best, and leave the rest to us. Our outsourcing services are designed to streamline operations, reduce costs, and enhance overall efficiency.",
  },
];

const strengths = [
  {
    title: "Competitive Pricing",
    icon: "bi-currency-dollar",
    text: "We believe in providing exceptional value without breaking the bank. Our commitment to affordability ensures that you get top-notch services without compromising your budget.",
  },
  {
    title: "Speed and Efficiency",
    icon: "bi-clock-history",
    text: "Time is of the essence, and we understand the importance of prompt solutions. Our team is dedicated to delivering fast and efficient services, ensuring that your projects are completed on schedule.",
  },
  {
    title: "Flexibility",
    icon: "bi-people",
    text: "We recognize that every client is unique, and so are their needs. Our services are designed with flexibility in mind, allowing us to adapt to your specific requirements and provide tailored solutions that align with your goals.",
  },
];
</script>
<style lang="sass" scoped>
.service-card
  width: 240px
  height: 250px
</style>
