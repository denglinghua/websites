<template>
  <div class="grid-container">
    <div class="item1">
      <img src="https://via.placeholder.com/300x600" width="100%" alt="Product Image" />
    </div>
    <div class="item2">
      <img src="https://via.placeholder.com/300x300" width="100%" alt="Product Image" />
    </div>
    <div class="item3">
      <img src="https://via.placeholder.com/300x300" width="100%" alt="Product Image" />
    </div>
    <div class="item4 catetory">
      HELLO
    </div>
    <div class="item5">
      <img src="https://via.placeholder.com/300x360" width="100%" alt="Product Image" />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.grid-container {
  width: 900px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
}

.item1 {
  grid-row: 1/-1;
}

.item2 {
  grid-row: 1/4;
}

.item3 {
  grid-row: 4/-1;
}

.item4 {
  grid-row: 1/3;
}

.item5 {
  grid-row: 4/-1;
}

.catetory {
  font-size: 48px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0be9a;
  font-weight: 600;
  color: #fff;
}
</style>
