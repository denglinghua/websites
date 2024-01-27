<template>
  <p class="text-h6 q-mt-md">Welcome to Island Coyote Tech Inc.</p>

  <p>
    Established in 2024 on the picturesque Prince Edward Island, Canada, Island
    Coyote Tech Inc. is not just a company; it's a testament to a vision fueled
    by passion and expertise. We take pride in being a small yet formidable team
    of veteran developers dedicated to pushing the boundaries of technology.
  </p>
  <p>
    <b>Why "Island Coyote Tech Inc."? </b>Coyotes have been on the island for
    decades. We hope that our startup company can survive and thrive on the
    island, just like the coyotes. We also aspire for our company to emulate the
    qualities of coyotes – being agile, collaborative, resilient, and fearless.
  </p>
  <p class="text-h6">Our Commitment:</p>
  <p>
    At Island Coyote Tech Inc., we embody a commitment to excellence. Our
    mission is to provide fast, flexible, and diverse IT services tailored for
    small businesses and individuals. Whether you're embarking on a digital
    transformation journey or seeking personalized tech solutions, our team is
    here to turn your ideas into reality.
  </p>
  <p class="text-h6">Why Choose Us?</p>
  <p v-for="s in strengths" :key="s.title">
    <b>{{ s.title }}: </b>{{ s.text }}
  </p>
  <p class="text-h6">Embark on a Journey with Us:</p>
  <p>
    Island Coyote Tech Inc. invites you to embark on a technological journey
    where innovation meets reliability, and where your aspirations are met with
    solutions that exceed expectations. Our promise is to not just meet your
    needs but to anticipate and exceed them, making us your trusted partner in
    the digital realm. Ready to transform your tech experience? Join us at
    Island Coyote Tech Inc., where passion meets proficiency, and technology
    meets imagination.
  </p>
  <q-btn
    color="primary"
    flat
    icon-right="bi-arrow-right-square"
    label="Contact Us"
    to="contact"
  />
</template>
<script setup>
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
