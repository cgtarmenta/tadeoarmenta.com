import type { Ref } from "vue";
import type { SnakeSegment, Position, SnakeGameConfig } from "./snakeGameTypes";

export const checkCollision = (
  nx: number,
  ny: number,
  width: number,
  height: number,
  cw: number
) => {
  return (
    nx < 0 ||
    nx >= (width / cw) ||
    ny < 0 ||
    ny >= (height / cw)
  );
};

export const spawnFood = (
  food: Ref<Position>,
  width: number,
  height: number,
  cw: number
) => {
  food.value = {
    x: Math.round(Math.random() * (width - cw) / cw),
    y: Math.round(Math.random() * (height - cw) / cw),
  };
  console.log("Spawned food at:", food.value);
};

export const start = (
  length: Ref<SnakeSegment[]>,
  direction: Ref<string | undefined>,
  score: Ref<number>,
  size: number
) => {
  direction.value = "right";
  score.value = 0;
  length.value = [];
  for (let i = size - 1; i >= 0; i--) {
    length.value.push({ id: i, x: i, y: 0 });
  }
  console.log("Game started with initial snake:", length.value);
};

export const play = (
  length: Ref<SnakeSegment[]>,
  food: Ref<Position>,
  direction: Ref<string | undefined>,
  score: Ref<number>,
  configuration: Ref<SnakeGameConfig>,
  isGameOver: Ref<boolean>
) => {
  const { width, height, cw } = configuration.value;

  start(length, direction, score, configuration.value.size);
  spawnFood(food, width, height, cw);

  const interval = setInterval(() => {
    if (isGameOver.value) {
      console.log("Game over");
      clearInterval(interval);
      return;
    }

    let nx = length.value[0].x;
    let ny = length.value[0].y;

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

    console.log("Current direction:", direction.value);

    if (checkCollision(nx, ny, width, height, cw)) {
      console.log("Collision detected");
      isGameOver.value = true;
      clearInterval(interval);
      return;
    }

    if (nx === food.value.x && ny === food.value.y) {
      console.log("Food eaten");
      const tail = { id: length.value.length, x: nx, y: ny };
      length.value.push(tail);
      score.value++;
      spawnFood(food, width, height, cw);
    } else {
      const tail = length.value.pop();
      if (tail) {
        tail.x = nx;
        tail.y = ny;
      }
      length.value.unshift(tail as SnakeSegment);
    }

    console.log("Current snake:", length.value);
    console.log("Current score:", score.value);
  }, 1000 / 15);
};
