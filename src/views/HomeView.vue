<template>
  <article class="flex flex-row h-full">
    <section class="grid grid-cols-1 md: grid-cols-2 w-full">
      <section class="my-auto w-full text-white items-end px-6 md:px-8 lg:px-72 space-y-3.5">
        <span>Hi all. I am</span>
        <h1 class="text-7xl">
          {{ developer.name }}
        </h1>
        <h2 class="text-3xl text-[#4D5BCE]">
          > {{ developer.title }}
        </h2>
        <span class="text-xl text-gray-400 pt-6">
          <p>// complete the game to continue</p>
          <p>// you can also see it on my Github page</p>
        </span>
        <span class="inline-flex justify-start items-center space-x-3">
          <p class="text-[#4D5BCE]">const</p>
          <p class="text-[#43D9AD]">githubLink</p>
          <p class="text-white">=</p>
          <p class="text-[#E99287]">https://github.com/cgtarmenta</p>
        </span>
      </section>
      <section class="hidden md:flex flex-row h-full max-h-full w-full max-w-full" />
    </section>
  </article>
</template>

<script setup lang="ts">
import SnakeGame from "@/components/SnakeGame/SnakeGame.vue";
import {useDataStore} from "@/stores/dataStore";
const {developer} = useDataStore();
</script>

<script lang="ts">export default {name: "HomeView"}</script>

<style scoped lang="css">

</style>
