<template>
  <article class="flex flex-row h-full">
   <div class="grid grid-cols-1 md: grid-cols-2 w-full">
     <div class="my-auto w-full text-white items-end px-6 md:px-8">
       <span>Hi all. I am</span>
       <h1 class="text-5xl">{{ developer.name }}</h1>
     </div>
     <div class="hidden md:flex flex-row h-full max-h-full w-full max-w-full">

     </div>
   </div>
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
