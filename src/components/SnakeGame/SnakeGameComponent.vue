<template>
  <div :class="[`w-${width}`, `h-${height}`, 'relative', 'flex', 'items-center', 'justify-center']">
    <SnakePlaceHolder v-if="!isGameStarted" />
    <button v-if="!isGameStarted" class="absolute p-2 bg-orange-500 text-stone-500 rounded bottom-8 py-2.5 px-3.5" @click="startGame">
      start-game
    </button>

    <div v-else class="relative">
      <SnakeBackground />
      <div
        v-for="(segment, index) in snake"
        :key="segment.id"
        :class="['bg-emerald-500', `w-1.5`, `h-1.5`, 'absolute']"
        :style="{ top: `${segment.y}px`, left: `${segment.x}px`, opacity: (snake.length - index) / snake.length }"
      />
      <SnakeFood :style="{ top: `${foodItems.y}px`, left: `${foodItems.x}px` }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watchEffect} from 'vue';
import SnakePlaceHolder from "@/components/images/SnakePlaceHolder.vue";
import SnakeBackground from "@/components/images/SnakeBackground.vue";
import {useSnakeGame} from "@/components/SnakeGame/useSnakeGame";
import SnakeFood from "@/components/images/SnakeFood.vue";
interface Properties {
  width: string;
  height: string;
  food: number;
}

const props = withDefaults(defineProps<Properties>(), {
  width: '64',
  height: '64',
  food: 10,
});

const emit = defineEmits(['update:food']);

const config = {
  cw: 1,
  size: 50,
  fps: 10,
  targetScore: 10,
  width: 239,
  height: 405,
};
console.log("Config before starting game: ", config);
const {length: snake, food: foodItems, startGame, hasStarted, resetGame} = useSnakeGame(config, emit);

const isGameStarted = computed(() => hasStarted.value);

watchEffect(() => {
  console.log("Game state: ", isGameStarted.value ? "Game has started" : "Game not started");
});
watchEffect(() => {
  if (props.food === 0) {
    resetGame();
  }
});
</script>
