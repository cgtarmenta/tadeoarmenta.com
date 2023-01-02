<template>
  <nav class="border-b border-lines py-0 z-10">
    <div class="mx-auto px-4 lg:px-6 lg:px-8">
      <div class="flex h-fit items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0 py-4">
            <div class="flex items-center my-auto h-8 w-auto text-slate-500 lowercase">{{ developer.name.replace(' ','-') }}</div>
          </div>
          <div class="hidden lg:ml-6 lg:block font-semibold">
            <template v-for="(page, pageIdx) in pages" :key="pageIdx">
              <RouterLink
                :to="page.path"
                class="px-7 py-4 text-sm font-medium text-slate-500 border-r border-l border-lines hover:text-gray-300"
                :class="{ 'border-b-4 border-b-orange-500 text-white': page.current }"
                >{{ page.name }}</RouterLink
              >
            </template>
          </div>
        </div>
        <div class="hidden lg:ml-6 lg:block">
          <div class="flex items-center">
            <RouterLink
              to="/contact"
              class="px-3 lg:px-6 py-4 text-sm font-medium text-slate-500  border-l border-lines hover:text-gray-300"
              :class="{ 'border-b-4 border-b-orange-500 text-white': '/contact' === $route.path }"
            >_contact-me</RouterLink
            >
          </div>
        </div>
        <div class="-mr-2 flex lg:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white cursor-pointer" aria-controls="mobile-menu" aria-expanded="false" @click="showMenu = !showMenu">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!showMenu"  class="h-4 w-4" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z" fill="#607B96"/>
            </svg>
            <svg v-else class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z" fill="#607B96"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="showMenu" class="relative lg:hidden bg-gray-500 h-screen" id="mobile-menu">
      <div class="grid grid-cols-1 space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <template v-for="(page, pageIdx) in pages" :key="pageIdx">
          <RouterLink
              :to="page.path"
              class="px-3 py-4 text-sm font-medium text-slate-500 border-r border-l border-lines hover:text-gray-300"
              :class="{ 'border-b-4 border-b-orange-500 text-white': page.current }"
          >
            {{ page.name }}
          </RouterLink>
        </template>
        <RouterLink
            to="/contact"
            class="px-3 lg:px-6 py-4 text-sm font-medium text-slate-500  border-l border-lines hover:text-gray-300"
            :class="{ 'border-b-4 border-b-orange-500 text-white': '/contact' === $route.path }"
        >_contact-me</RouterLink>
      </div>
      <FooterMenu class="fixed bottom-0 inset-x-0 "/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {useDataStore} from "@/stores/dataStore";
import {ref} from "vue";
import FooterMenu from "@/components/FooterMenu/FooterMenu.vue";

const {pages, developer} = useDataStore();
const showMenu = ref(false);
</script>

<script lang="ts">export default {name: "MainNav"}</script>
