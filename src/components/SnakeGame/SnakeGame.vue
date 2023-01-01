<template>
  <canvas ref="canvas" id="stage" height="400" width="240" />
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
const canvas = ref<HTMLCanvasElement | null>(null);
const directions = [
  {
    direction: "left",
    keyCode: 37,
    move: {x: -1, y: 0}
  },
  {
    direction: "top",
    keyCode: 38,
    move: {x: 0, y: -1}
  },
  {
    direction: "right",
    keyCode: 39,
    move: {x: 1, y: 0}
  },
  {
    direction: "bottom",
    keyCode: 40,
    move: {x: 0, y: 1}
  },
];
const pressedKey = ref<number | undefined>(undefined);
const context = ref<CanvasRenderingContext2D | null |undefined>(null);
const keyController = () => {
  document.addEventListener("keydown", (e) => {
    pressedKey.value = directions.find((d) => d.keyCode === e.keyCode)?.keyCode;
  });
};
const play = (conf: Record<string, any>) => {
  context.value = canvas.value?.getContext("2d");
}
onMounted(() => {
  play({fps: 100, size: 4});
});

</script>

<script lang="ts">export default {name: "SnakeGame"}</script>

<style scoped>

</style>
