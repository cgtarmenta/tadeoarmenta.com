<template>
  <MainNav class="fixed top-0 inset-x-0 " />
  <main class="relative py-12">
    <RouterView />
  </main>
  <FooterMenu class="fixed hidden lg:block bottom-0 inset-x-0 " />
</template>

<script setup lang="ts">
import MainNav from "@/components/MainNav/MainNav.vue";
import FooterMenu from "@/components/FooterMenu/FooterMenu.vue";
</script>

<script lang="ts">export default {name: "MainLayout"}</script>
