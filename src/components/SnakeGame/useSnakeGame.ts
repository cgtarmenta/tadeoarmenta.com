import { ref, onUnmounted } from "vue";
import type {Direction, GameEvent, Position, SnakeGameConfig, SnakeSegment} from "./snakeGameTypes";
import { keyController } from "./keyController";
import { play, start, spawnFood } from "./snakeGameFunctions";

export function useSnakeGame(config: SnakeGameConfig, emit: (event: GameEvent) => void) {
  const length = ref<SnakeSegment[]>([]);
  const food = ref<Position>({ x: 0, y: 0 });
  const score = ref<number>(0);
  const direction = ref<Direction | undefined>('right');
  const configuration = ref<SnakeGameConfig>(config);
  const isGameOver = ref<boolean>(false);

  const hasStarted = ref<boolean>(false);

  const intervalId = ref<number | null>(null);
  const resetGame = () => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
    }

    length.value = [];
    food.value = { x: 0, y: 0 };
    score.value = 0;
    direction.value = undefined;
    isGameOver.value = false;
    hasStarted.value = false;
  };
  const startGame = () => {
    hasStarted.value = true;
    keyController(direction);
    start(length, direction, score, config.size, config.width, config.height);
    spawnFood(food, config.width, config.height, config.cw);  // Pasa 'cw' aquí
    intervalId.value = window.setInterval(() => {
      const gameOver = play(
        length,
        food,
        direction,
        score,
        config,
        isGameOver,
        emit
      );

      if (gameOver) {
        emit("gameOver");
        resetGame();
      }
    }, config.fps);
  };

  onUnmounted(() => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
    }
  });

  return {
    length,
    food,
    configuration,
    isGameOver,
    hasStarted,
    score,
    startGame,
    resetGame,
  };
}
