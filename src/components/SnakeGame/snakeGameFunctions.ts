import type {
  Direction,
  GameEvent,
  Position,
  SnakeGameConfig,
  SnakeSegment
} from "@/components/SnakeGame/snakeGameTypes";
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
  cw: number,
  array: SnakeSegment[]
) => {
  if (
    nx < 0 ||
    ny < 0 ||
    nx >= width / cw ||
    ny >= height / cw ||
    array.slice(0, -1).some(item => item.x === nx && item.y === ny) // Excluye el último segmento de la serpiente
  ) {
    return true;
  }

  return false;
};
export const checkFoodCollision = (
  snakeHead: Position,
  food: Position,
  snakeSize: number,
  foodSize: number
) => {
  // Define el "cuadro de colisión" para la serpiente y la comida
  const snakeBox = {
    x1: snakeHead.x,
    x2: snakeHead.x + snakeSize,
    y1: snakeHead.y,
    y2: snakeHead.y + snakeSize,
  };
  const foodBox = {
    x1: food.x,
    x2: food.x + foodSize,
    y1: food.y,
    y2: food.y + foodSize,
  };

  // Comprueba si los cuadros de colisión de la serpiente y la comida se superponen
  return snakeBox.x1 < foodBox.x2 &&
    snakeBox.x2 > foodBox.x1 &&
    snakeBox.y1 < foodBox.y2 &&
    snakeBox.y2 > foodBox.y1;
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
    x: boundary + Math.floor(Math.random() * Math.floor((width - 2 * boundary) / cw)),
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
  isGameOver: Ref<boolean>,
  emit: (event: GameEvent) => void
): boolean => {
  const { width, height, cw } = config;

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

  if (checkFoodCollision({ x: nx, y: ny }, food.value, cw, 22)) { // suponiendo que 22 es el tamaño de la comida
    const tailSegment = length.value[length.value.length - 1];
    for (let i = 0; i < 5; i++) {
      const tail = {id: length.value.length + i, x: tailSegment.x, y: tailSegment.y} as SnakeSegment;
      length.value.push(tail);
    }
    score.value++;
    spawnFood(food, width, height, cw);
    emit("update:food");
  } else if (checkCollision(nx, ny, width, height, cw, length.value)) {
    isGameOver.value = true;
    return true;
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

const oppositeDirections: { [key in Direction]: Direction } = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

export const handleDirectionChange = (
  direction: Ref<Direction | undefined>,
  newDirection: Direction | undefined
): void => {
  // Si no se ha definido una nueva dirección, no hagas nada
  if (!newDirection) {
    return;
  }

  // Si la dirección actual es la opuesta a la nueva dirección, no cambies de dirección
  if (direction.value && oppositeDirections[direction.value] === newDirection) {
    return;
  }

  // Si hemos pasado todas las comprobaciones, establece la nueva dirección
  direction.value = newDirection;
};
