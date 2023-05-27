<template>
  <div :class="[`w-${width}`, `h-${height}`, 'relative', 'flex', 'items-center', 'justify-center']">
    <SnakePlaceHolder v-if="!isGameStarted" />
    <button v-if="!isGameStarted" class=" absolute p-2 bg-blue-500 text-white rounded bottom-1/4" @click="startGame">
      Start
    </button>

    <div v-else class="w-full h-full relative">
      <div
        v-for="(segment, index) in snake"
        :key="index"
        :class="['bg-green-500', `w-${width}`, `h-${height}`, 'absolute']"
        :style="{ top: `${segment.y}px`, left: `${segment.x}px`, opacity: (snake.length - index) / snake.length }"
      />

      <div
        v-for="(item, index) in food"
        :key="index"
        :class="['bg-red-500', `w-5`, `h-5`, 'absolute']"
        :style="{ top: `${item.y}px`, left: `${item.x}px` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, watchEffect} from 'vue';
import SnakePlaceHolder from "@/components/images/SnakePlaceHolder.vue";
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

const snake = ref([]);
const food = ref([]);
const isGameStarted = ref(false);
const startGame = () => {
  isGameStarted.value = true;
  // Initialize snake and food
};

watchEffect(() => {
  if (props.food < food.value.length) {
    emit('update:food', props.food);
  }
});

</script>

