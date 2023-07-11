<template>
  <article class="flex flex-row h-full max-w-full max-h-fit overflow-hidden">
    <section class="grid grid-cols-1 md:grid-cols-2 w-full">
      <section class="my-auto w-full text-white items-end px-6 md:px-8 lg:px-72 space-y-3.5">
        <span>Hi all. I am</span>
        <h1 class="text-7xl">
          {{ developer.name }}
        </h1>
        <h2 class="text-3xl text-[#4D5BCE]">
          > {{ developer.title }}
        </h2>
        <span class="flex flex-wrap md:block justify-start items-center space-x-3 text-gray-400">
          <span>// complete the game to continue</span>
        </span>
        <span class="flex flex-wrap md:block justify-start items-center space-x-3 text-gray-400">
          <span>// you can also see it on my Github page</span>
        </span>
        <span class="flex flex-wrap md:block justify-start items-center space-x-3">
          <span class="text-[#4D5BCE]">const</span>
          <span class="text-[#43D9AD]">githubLink</span>
          <span class="text-white">=</span>
          <span class="text-[#E99287] cursor-pointer" @click="openInNewTab('https://github.com/cgtarmenta')">"https://github.com/cgtarmenta"</span>
        </span>
      </section>
      <section class="relative hidden md:flex flex-row h-full max-h-full w-full max-w-full p-8 items-center">
        <BackgroundSnakeSection class="absolute right-0 left-0 top-0 bottom-0 z-0" />
        <div class="relative flex flex-row justify-between p-8 space-x-8">
          <SnakeBoard class="absolute top-0 right-8 bottom-0 left-8" />
          <SnakeGameComponent
            :width="width"
            :height="height"
            :food="food"
            @update:food="onFoodEaten"
            @game-over="food = 12"
          />
          <div class="flex flex-col justify-start gap-y-8">
            <div class="bg-stone-500 bg-opacity-20 p-3.5 rounded-md z-10">
              <span class="text-white flex flex-col mb-3.5">
                <span>// use keyboard</span>
                <span>// arrows to play</span>
              </span>
              <SnakeControlsImage />
            </div>
            <div class="grid col-auto gap-y-1">
              <span class="text-white">
                <span>// food left</span>
              </span>
              <div class="grid grid-cols-6 grid-rows-2 items-center justify-center">
                <component
                  :is="SnakeFoodMarker"
                  v-for="i in 12"
                  :key="i"
                  class="col-span-1"
                  :class="i > food ? 'opacity-20' : ''"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </article>
</template>

<script setup lang="ts">
import {useDataStore} from "@/stores/dataStore";
import SnakeGameComponent from "@/components/SnakeGame/SnakeGameComponent.vue";
import {ref} from "vue";
import BackgroundSnakeSection from "@/components/images/BackgoundSnakeSection.vue";
import SnakeBoard from "@/components/images/SnakeBoard.vue";
import logger from "@/utils/logger";
import SnakeControlsImage from "@/components/images/SnakeControlsImage.vue";
import SnakeFoodMarker from "@/components/images/SnakeFoodMarker.vue";
const {developer} = useDataStore();

const width = '60';
const height = '96';
const food = ref(12);

const onFoodEaten = () => {
  logger.info("Food eaten");
  food.value--;
};
const openInNewTab = (url:string) => window.open(url, '_blank').focus();

</script>

<script lang="ts">export default {name: "HomeView"}</script>

<style scoped lang="css">

</style>
