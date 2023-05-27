import type { Ref } from "vue";
import type { Position } from "./snakeGameTypes";

export const keyController = (direction: Ref<string | undefined>) => {
  const directions: { direction: string; keyCode: number; move: Position }[] = [
    {
      direction: "left",
      keyCode: 37,
      move: { x: -1, y: 0 },
    },
    {
      direction: "up",
      keyCode: 38,
      move: { x: 0, y: -1 },
    },
    {
      direction: "right",
      keyCode: 39,
      move: { x: 1, y: 0 },
    },
    {
      direction: "down",
      keyCode: 40,
      move: { x: 0, y: 1 },
    },
  ];

  document.addEventListener("keydown", (e) => {
    const newDirection = directions.find((d) => d.keyCode === e.keyCode)?.direction;
    console.log("Setting direction:", newDirection);
    direction.value = newDirection;
  });
};
