import type { Ref } from "vue";
import type { Direction, Position } from "./snakeGameTypes";
import { handleDirectionChange } from "./snakeGameFunctions";

export const keyController = (direction: Ref<Direction | undefined>) => {
  const directions: { direction: Direction; key: string; move: Position }[] = [
    {
      direction: "left",
      key: "ArrowLeft",
      move: { x: -1, y: 0 },
    },
    {
      direction: "up",
      key: "ArrowUp",
      move: { x: 0, y: -1 },
    },
    {
      direction: "right",
      key: "ArrowRight",
      move: { x: 1, y: 0 },
    },
    {
      direction: "down",
      key: "ArrowDown",
      move: { x: 0, y: 1 },
    },
  ];

  document.addEventListener("keydown", (e) => {
    const newDirection = directions.find((d) => d.key === e.key)?.direction;
    console.log("Attempting to set a direction:", newDirection);
    if (newDirection) {
      handleDirectionChange(direction, newDirection);
    }
  });
};
