import { ref, onUnmounted, getCurrentInstance } from "vue";
import type { Position, SnakeGameConfig, SnakeSegment } from "./snakeGameTypes";
import { keyController } from "./keyController";
import { play } from "./snakeGameFunctions";

export function useSnakeGame(config: SnakeGameConfig) {
  const length = ref<SnakeSegment[]>([]);
  const food = ref<Position>({ x: 0, y: 0 });
  const score = ref<number>(0);
  const direction = ref<string | undefined>("");
  const configuration = ref<SnakeGameConfig>(config || <SnakeGameConfig>{
    cw: 10,
    size: 5,
    fps: 1000,
    targetScore: 10,
    width: 0,
    height: 0,
  });
  const isGameOver = ref<boolean>(false);

  const hasStarted = ref<boolean>(false);

  const intervalId = ref<number | null>(null);
  const startGame = () => {
    hasStarted.value = true;
    keyController(direction);
    intervalId.value = window.setInterval(() => {
      play(
        length,
        food,
        direction,
        score,
        configuration.value,
        isGameOver,
      );
    }, configuration.value.fps);
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
  };
}
