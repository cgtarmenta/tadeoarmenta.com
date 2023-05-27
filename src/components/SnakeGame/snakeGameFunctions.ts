import type {Position, SnakeGameConfig, SnakeSegment} from "@/components/SnakeGame/snakeGameTypes";
import type {Ref} from "vue";

export const start = (
  length: Ref<SnakeSegment[]>,
  direction: Ref<string | undefined>,
  score: Ref<number>,
  size: number,
  width: number,
  height: number
) => {
  direction.value = "right";
  score.value = 0;
  length.value = [];
  const startX = Math.floor(width / 2);
  const startY = Math.floor(height / 2);

  for (let i = 0; i < size; i++) {
    length.value.push({ id: i, x: startX - i, y: startY });
  }
};


export const checkCollision = (
  nx: number,
  ny: number,
  width: number,
  height: number,
  cw: number,  // Añade 'cw' como argumento aquí
  array: SnakeSegment[]
) => {
  if (
    nx < 0 ||
    ny < 0 ||
    nx >= width / cw ||  // Divide width y height por 'cw' aquí
    ny >= height / cw ||
    array.some(item => item.x === nx && item.y === ny)
  ) {
    return true;
  }

  return false;
};


export const spawnFood = (
  food: Ref<Position>,
  width: number,
  height: number,
  cw: number  // Añade 'cw' como argumento aquí
) => {
  console.log('Game area width: ', width);
  console.log('Game area height: ', height);

  const boundary = 25; // The boundary from the edges

  food.value = {
    x: boundary + Math.floor(Math.random() * Math.floor((width - 2 * boundary) / cw)),  // Subtract boundary * 2 from width and height here
    y: boundary + Math.floor(Math.random() * Math.floor((height - 2 * boundary) / cw)),
  };

  console.log('Food position: ', food.value);
};



export const play = (
  length: Ref<SnakeSegment[]>,
  food: Ref<Position>,
  direction: Ref<string | undefined>,
  score: Ref<number>,
  config: SnakeGameConfig,
  isGameOver: Ref<boolean>
): boolean => {
  const { width, height, cw } = config;  // Extrae 'cw' aquí

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

  if (checkCollision(nx, ny, width, height, cw, length.value)) {  // Pasa 'cw' aquí
    isGameOver.value = true;
    return true;
  }

  if (nx === food.value.x && ny === food.value.y) {
    console.log('Food eaten!');
    const tail = { id: length.value.length, x: nx, y: ny };
    length.value.push(tail);
    score.value++;
    spawnFood(food, width, height, cw);  // Pasa 'cw' aquí
  } else {
    const tail = length.value.pop();
    if (tail) {
      tail.x = nx;
      tail.y = ny;
    }
    length.value.unshift(tail as SnakeSegment);
  }

  return false;
};

