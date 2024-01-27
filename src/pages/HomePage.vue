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

function transform(width, height, x, y, t) {
  const cx = width / 2;
  const cy = height / 2;
  const d = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);

  const angle = d;
  return [x + d * Math.cos(angle) * t, y + d * Math.sin(angle) * t];
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

const { stringSize, createPixelText, createAsciiText } = pixelText();
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
  const pixelSize = (cw * 0.8) / textW; // 80% of width
  const x = cw / 2 - (textW * pixelSize) / 2;
  // two lines
  const y = ch / 2 - textH * pixelSize;

  drawLineText(text, x, y, pixelSize, trans);

  const [textW1, textH1] = stringSize(subText, 1);
  const pixelsSize1 = 0.6 * pixelSize;
  const x1 = cw / 2 - (textW1 * pixelsSize1) / 2;
  const y1 = y + textH * pixelSize + pixelsSize1 + 20;

  drawLineText(subText, x1, y1, pixelsSize1, trans);

  if (time < 0.001) {
    clearInterval(intervalId);
  }
}

function drawLineText(string, x, y, size, transformer) {
  const pixels = createPixelText(string, x, y, size);
  const tr = transformer;
  const time = tr.time();
  pixels.forEach((p) => {
    const [tx, ty] = tr.trans(tr.width, tr.height, p.x, p.y, time);
    //const [tx, ty] = [p.x, p.y];
    ctx.fillStyle = p.color;
    ctx.fillRect(tx, ty, p.size, p.size);
  });
}

function printConsoleText() {
  const lines = createAsciiText(text);
  lines.forEach((line) => {
    console.log(line);
  });
}

let intervalId = null;
function startDraw() {
  //drawText();
  intervalId = setInterval(drawText, 10);
}

let time = 2;
function getTime() {
  time = time - 0.002;
  return time;
}

function onResize(size) {
  // console.log("resize", size);
  canvas.value.width = size.width;
  // padding 16 * 2 = 32px
  canvas.value.height = size.height - 36;
  // drawText();
}

onMounted(() => {
  const cvs = canvas.value;
  ctx = cvs.getContext("2d");

  nextTick(function () {
    startDraw();
  });

  printConsoleText();
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
