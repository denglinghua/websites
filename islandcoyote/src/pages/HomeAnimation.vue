<template>
  <canvas ref="canvas" style="height: 100%; width: 100%" />
  <q-resize-observer v-if="domReady" @resize="onResize" />
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";

const domReady = ref(false);
const canvas = ref(null); // Reference to canvas DOM element
let cw = 0;
let ch = 0;
let ctx = null; // Context of canvas element

function clearCanvas() {
  ctx.clearRect(0, 0, cw, ch);
}

function testTransform() {
  const ct = getTime();
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

const text = "Island Coyote Tech Inc.";
const subText = "Innovation at every step";
let pixels = [];

function preparePixels() {
  ctx.font = "48px Arial";
  ctx.textBaseline = "top"; // It will effect the vertical position of the text
  ctx.fillStyle = "red";

  const textWidth = Math.floor(ctx.measureText(text).width);
  const textHeight = parseInt(ctx.font);

  const x = Math.floor((cw - textWidth) / 2);
  const y = Math.floor(ch / 2) - textHeight; // two lines

  ctx.fillText(text, x, y);

  pixels = getRectPixelFillStyle(x, y, textWidth, textHeight, 20);
}

function drawText() {
  const time = getTime();
  if (time < 0) {
    clearInterval(intervalId);
    return;
  }

  clearCanvas();

  pixels.forEach((p) => {
    const [tx, ty] = transform(cw, ch, p.x, p.y, time);
    //const [tx, ty] = [p.x, p.y];
    ctx.putImageData(p.data, tx, ty);
    //ctx.fillStyle = "blue";
    //ctx.fillRect(tx, ty, p.size, p.size);
  });
}

function getRectPixelFillStyle(x, y, width, height, size) {
  let pixels = [];
  for (let i = x; i < x + width; i += size) {
    for (let j = y; j < y + height; j += size) {
      const imageData = ctx.getImageData(i, j, size, size);

      pixels.push({
        x: i,
        y: j,
        size: size,
        data: imageData,
      });
    }
  }
  return pixels;
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

let intervalId = null;
function startDraw() {
  preparePixels();
  //drawText();
  intervalId = setInterval(drawText, 10);
}

let time = 2;
function getTime() {
  time = time - 0.002;
  return time;
}

function onResize(size) {
  console.log("resize", size, ctx != null);
  canvas.value.width = size.width;
  // padding 16 * 2 = 32px
  canvas.value.height = size.height - 36;
  cw = canvas.value.width;
  ch = canvas.value.height;
  if (ctx) {
    // preparePixels();
    nextTick(function () {
      startDraw();
    });
  }
}

onMounted(() => {
  const cvs = canvas.value;
  ctx = cvs.getContext("2d", { willReadFrequently: true });
  domReady.value = true;
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
