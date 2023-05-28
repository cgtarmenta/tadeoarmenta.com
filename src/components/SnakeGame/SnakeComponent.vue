<template>
  <div>
    <div
      v-for="(segment, index) in snake"
      :key="segment.id"
      :class="[
        'bg-emerald-500',
        'w-1.5',
        'h-1.5',
        'absolute',
        index === 0 || index === snake.length - 1 ? 'rounded-full' : '',
      ]"
      :style="{
        top: `${segment.y}px`,
        left: `${segment.x}px`,
        opacity: calculateOpacity(index),
      }"
    />
  </div>
</template>

<script setup lang="ts">
import type { SnakeSegment } from "@/components/SnakeGame/snakeGameTypes";

const props = defineProps({
  snake: {
    type: Array as () => SnakeSegment[],
    required: true,
  },
});

const calculateOpacity = (index: number) => {
  const maxOpacity = 1;
  const minOpacity = 0.1;
  const opacityDecreaseFactor = 8;

  if (index === 0) {
    return maxOpacity;
  } else {
    const opacity = maxOpacity - (index / props.snake?.length) * opacityDecreaseFactor;
    return Math.max(minOpacity, opacity);
  }
};
</script>

<script lang="ts">export default {name: 'SnakeComponent'}</script>

<style scoped>
</style>
