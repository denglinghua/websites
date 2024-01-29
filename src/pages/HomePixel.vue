<template>
  <canvas ref="canvas" style="height: 100%; width: 100%" />
  <q-resize-observer v-if="domReady" @resize="onResize" />
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { colors } from "quasar";
import usePixelText from "../scripts/pixelText.js";

const domReady = ref(false);
const canvas = ref(null); // Reference to canvas DOM element
let cw = 0;
let ch = 0;
let ctx = null; // Context of canvas element

function clearCanvas() {
  ctx.clearRect(0, 0, cw, ch);
}

const { getPaletteColor } = colors;
// const letterColors = ["red", "orange", "green", "blue", "purple"];
const letterColors = ["primary"].map((c) => getPaletteColor(c));
const { measureText, createTextPixels, createTextAscii } =
  usePixelText(letterColors);
const text = "Island Coyote Tech Inc.";
const subText = "Innovation at every step";

let pixels = [];

function preparePixels() {
  pixels = [];

  const [textW, textH] = measureText(text, 1); // 1 is one pixel
  const textScreenWith = cw > 600 ? cw * 0.8 : cw - 16; // 80% of width or 16 px padding
  const pixelSize = textScreenWith / textW;
  const x = cw / 2 - (textW * pixelSize) / 2;
  // two lines : text + subText
  const y = ch / 2 - textH * pixelSize;

  pixels.push(...createTextPixels(text, x, y, pixelSize));

  const [textW1, textH1] = measureText(subText, 1);
  const pixelsSize1 = 0.6 * pixelSize;
  const x1 = cw / 2 - (textW1 * pixelsSize1) / 2;
  const y1 = y + textH * pixelSize + pixelsSize1 + 20;

  pixels.push(...createTextPixels(subText, x1, y1, pixelsSize1));

  pixels.push(...createLinePoints(y, textH, pixelSize));
}

let linePoints = [];
function createLinePoints(y, textH, size) {
  const py = y - textH * size * 2; //above text
  const points = ". . . . . . ";
  const [pw, ph] = measureText(points, 1);
  const px = cw / 2 - (pw * size) / 2;
  linePoints = createTextPixels(
    points,
    px,
    py,
    size,
    getPaletteColor("grey-4")
  );
  return linePoints;
}

let lightCount = 0;
function lightLinePoints() {
  if (lightCount >= linePoints.length) {
    lightCount = 0;
  }
  linePoints.forEach((p, idx) => {
    ctx.fillStyle = idx === lightCount ? getPaletteColor("primary") : p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });
  lightCount++;
}

function startLightPoints() {
  lightCount = 0;
  setInterval(lightLinePoints, 500);
}

function drawText() {
  const time = getTime();
  if (time < 0.001) {
    clearInterval(intervalId);
    startLightPoints();
    return;
  }

  clearCanvas();

  const tr = transform;

  pixels.forEach((p) => {
    const [tx, ty] = tr(cw, ch, p.x, p.y, time);
    //const [tx, ty] = [p.x, p.y];
    ctx.fillStyle = p.color;
    ctx.fillRect(tx, ty, p.size, p.size);
  });
}

function printConsoleText() {
  const lines = createTextAscii("HELLO");
  lines.forEach((line) => {
    console.log(line);
  });
}

let intervalId = null;
function startDraw() {
  preparePixels();
  resetTime();
  //drawText();
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(drawText, 5);
}

let time = 0;
function resetTime() {
  time = 2;
}

function getTime() {
  time = time - 0.002;
  return time;
}

function onResize(size) {
  //console.log("resize", size, ctx != null);
  canvas.value.width = size.width;
  // padding 16 * 2 = 32px
  canvas.value.height = size.height - 36;
  cw = canvas.value.width;
  ch = canvas.value.height;
  if (ctx) {
    nextTick(function () {
      startDraw();
    });
  }
}

onMounted(() => {
  const cvs = canvas.value;
  ctx = cvs.getContext("2d");
  domReady.value = true;

  printConsoleText();
});

onUnmounted(() => {
  clearInterval(intervalId);
});

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
</script>
