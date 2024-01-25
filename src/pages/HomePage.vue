<template>
  <canvas ref="canvas" style="width: 100%; height: 100%" />
  <q-resize-observer @resize="onResize" />
</template>
<script setup>
import { onUnmounted } from "vue";
import { ref, onMounted, reactive, nextTick } from "vue";
const canvas = ref(null); // Reference to canvas element
let ctx = null; // Context of canvas element
let time = 1;

// Function to clear canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
}

function draw() {
  const ct = getTime();
  const cw = canvas.value.width;
  const ch = canvas.value.height;
  clearCanvas();
  for (let x = 0; x < cw; x += 10) {
    for (let y = 0; y < ch; y += 10) {
      ctx.fillStyle = `hsl(${(x / cw) * 360}, 50%, 50%)`;
      const [tx, ty] = transform(cw, ch, x, y, ct);
      ctx.fillRect(tx, ty, 5, 5);
    }
  }
}

function transform1(width, height, x, y, t) {
  const cx = width / 2;
  const cy = height / 2;
  const dx = x - cx;
  const dy = y - cy;

  const dist = Math.sqrt(dx ** 2 + dy ** 2);

  const currAngle = Math.atan2(dy, dx);
  const newAngle = currAngle - Math.pow(dist, 0.5) * t;

  return [cx + Math.cos(newAngle) * dist, cy + Math.sin(newAngle) * dist];
}

function transform(width, height, x, y, t) {
  const cx = width / 2;
  const cy = height / 2;
  const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

  const angle = d;
  return [x + d * Math.cos(angle) * t, y + d * Math.sin(angle) * t];
}

let intervalId = null;
function startDraw() {
  intervalId = setInterval(draw, 50);
}

function getTime() {
  time = time + 0.001;
  /*
  time = time + 1;
  if (time > 100) {
    time = 0;
  }
  return time / 100;
  */
  return time;
}

function onResize({ width, height }) {
  console.log("resize", width, height);
  //cw = width;
  //ch = height;
  canvas.value.width = width;
  canvas.value.height = height;
}

onMounted(() => {
  const cvs = canvas.value;
  //cvs.style.width = "100%";
  //cvs.style.height = "100%";
  // Set the dimensions to match the parent
  //dimensions.width = cvs.offsetWidth;
  //dimensions.height = cvs.offsetHeight === 0 ? 800 : cvs.offsetHeight;

  //console.log(dimensions);

  // Get canvas and context
  ctx = cvs.getContext("2d");

  nextTick(function () {
    startDraw();
  });
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
