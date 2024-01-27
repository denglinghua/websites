<template>
  <canvas ref="canvas" style="height: 100%; width: 100%" />
  <q-resize-observer @resize="onResize" />
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import pixelText from "../scripts/pixelText.js";

const canvas = ref(null); // Reference to canvas DOM element
let ctx = null; // Context of canvas element

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
}

function testTransform() {
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

const { drawPixelText, stringSize } = pixelText();
const text = "Island Coyote Tech Inc.";
const subText = "Innovation at every step";
function drawText() {
  const cw = canvas.value.width;
  const ch = canvas.value.height;

  clearCanvas();

  const trans = {
    trans: transform,
    width: cw,
    height: ch,
    time: getTime,
  };

  const [textW, textH] = stringSize(text, 1); // 1 is one pixel
  const pixels = (cw * 0.8) / textW;
  const x = cw / 2 - (textW * pixels) / 2;
  // two lines
  const y = ch / 2 - textH * pixels;

  drawPixelText(text, canvas.value, x, y, pixels, trans);

  const [textW1, textH1] = stringSize(subText, 1);
  const pixels1 = 0.6 * pixels;
  const x1 = cw / 2 - (textW1 * pixels1) / 2;
  const y1 = y + textH * pixels + pixels1 + 20;

  drawPixelText(subText, canvas.value, x1, y1, pixels1, trans);

  if (time < 0.001) {
    clearInterval(intervalId);
  }
}

let intervalId = null;
function startDraw() {
  //drawText();
  intervalId = setInterval(drawText, 15);
}

let time = 2;
function getTime() {
  time = time - 0.002;
  return time;
}

function onResize(size) {
  console.log("resize", size);
  canvas.value.width = size.width;
  // padding 16 * 2 = 32px
  canvas.value.height = size.height - 36;
  //drawText();
}

onMounted(() => {
  const cvs = canvas.value;
  ctx = cvs.getContext("2d");

  nextTick(function () {
    startDraw();
  });
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
