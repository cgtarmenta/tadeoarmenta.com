<template>
  <MainNav />
  <main class="flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
    <RouterView />
  </main>
  <div></div>
</template>

<script setup lang="ts">
import MainNav from "@/components/MainNav/MainNav.vue";
</script>

<script lang="ts">export default {name: "MainLayout"}</script>
