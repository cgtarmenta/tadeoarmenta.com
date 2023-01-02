<template>
  <canvas ref="canvas" id="stage" height="400" width="240" class="border border-lines rounded" />
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
const canvas = ref<HTMLCanvasElement | null>(null);
const directions = [
  {
    direction: "left",
    keyCode: 37,
    code: 'ArrowLeft',
    move: {x: -1, y: 0}
  },
  {
    direction: "up",
    keyCode: 38,
    code: 'ArrowUp',
    move: {x: 0, y: -1}
  },
  {
    direction: "right",
    keyCode: 39,
    code: 'ArrowRight',
    move: {x: 1, y: 0}
  },
  {
    direction: "down",
    keyCode: 40,
    code: 'ArrowDown',
    move: {x: 0, y: 1}
  },
];
const pressedKey = ref<number | undefined>(undefined);
const width = ref(0);
const height = ref(0);
const food = ref({x: 0, y: 0});
const length = ref<Record<string, unknown>[]>([]);
const score = ref(0);
const direction = ref<string | undefined>('');
const configuration = ref<Record<string, any>>({
  cw   : 10,
  size : 5,
  fps  : 1000
});
const context = ref<CanvasRenderingContext2D | null |undefined>(null);
const keyController = () => {
  document.addEventListener("keydown", (e) => {
    console.log(e.code);
    direction.value = directions.find((d) => d.keyCode === e.keyCode)?.direction;

  });
};
const spawnFood = () => {
  food.value = {
    x: Math.round(Math.random() * (width.value - configuration.value.cw) / configuration.value.cw),
    y: Math.round(Math.random() * (height.value - configuration.value.cw) / configuration.value.cw),
  };
};
const start = () =>{
  width.value = canvas.value?.width || 0;
  height.value = canvas.value?.height || 0;
  direction.value = "right";
  score.value = 0;
  length.value = [];
  for (let i = configuration.value.size - 1; i >= 0; i--) {
    length.value.push({x: i, y: 0});
  }
  spawnFood();
};
const checkCollision = (x: number, y: number) => {
  return x == -1 || x == (width.value / configuration.value.cw) || y == -1 || y == (height.value / configuration.value.cw);
};
const drawSnakeSegment = (x:number,y:number) =>{
  if (context.value){
    context.value.fillStyle = "#2EC4B6";
    context.value.fillRect(x as number * configuration.value.cw, y as number * configuration.value.cw, configuration.value.cw, configuration.value.cw);
    context.value.strokeStyle = "#011627";
    context.value.strokeRect(x as number * configuration.value.cw, y as number * configuration.value.cw, configuration.value.cw, configuration.value.cw);
  }
};
const drawFood = () => {
  if (context.value){
    context.value.fillStyle = "#E71D36";
    context.value.fillRect(food.value.x * configuration.value.cw, food.value.y * configuration.value.cw, configuration.value.cw, configuration.value.cw);
    context.value.strokeStyle = "#011627";
    context.value.strokeRect(food.value.x * configuration.value.cw, food.value.y * configuration.value.cw, configuration.value.cw, configuration.value.cw);
  }
};
const drawStage = () => {
  if (context.value){
    context.value.fillStyle = "#011627";
    context.value.fillRect(0, 0, width.value, height.value);
  }
  let nx = length.value[0].x as number;
  let ny = length.value[0].y as number;
  switch (direction.value) {
    case "right":
      nx++;
      break;
    case "left":
      nx--;
      break;
    case "up":
      ny--;
      break;
    case "down":
      ny++;
      break;
  }
  if (checkCollision(nx, ny)) {
    start();
    return;
  }
  if (nx === food.value.x && ny === food.value.y) {
    const tail = {x: nx, y: ny};
    length.value.push(tail);
    score.value++;
    spawnFood()
  } else {
    const tail = length.value.pop();
    if (tail) {
      tail.x = nx;
      tail.y = ny;
    }
    length.value.unshift(tail as Record<string, unknown>);
  }
  //   draw snake
  if (context.value){
    for (let i = 0; i < length.value.length; i++) {
      drawSnakeSegment(length.value[i].x as number, length.value[i].y as number);
    }
  }
  drawFood();
  context.value?.fillText('Score: ' + score.value, 5, (height.value - 5));
};
const play = (conf: Record<string, any>) => {
  context.value = canvas.value?.getContext("2d");
  if (typeof conf === 'object') {
    for (const key in conf) {
      if (conf.hasOwnProperty(key)) {
        configuration.value[key] = conf[key];
      }
    }
  }
  keyController();
  start();
  drawStage();
  setInterval(function() {drawStage();}, configuration.value.fps);
}
onMounted(() => {
  play({fps: 100, size: 4});
});

</script>

<script lang="ts">export default {name: "SnakeGame"}</script>

<style scoped>

</style>
