export interface SnakeGameConfig {
  cw: number;
  size: number;
  fps: number;
  targetScore: number;
  width: number;
  height: number;
}

export interface SnakeSegment {
  x: number;
  y: number;
  id: number;
}

export interface Position {
  x: number;
  y: number;
}

export type Direction = "up" | "down" | "left" | "right";
