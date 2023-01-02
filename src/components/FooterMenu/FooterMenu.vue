<template>
  <nav class="border-t border-lines py-0">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-fit items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0 py-4">
            <div class="flex items-center my-auto h-8 w-auto text-slate-500 lowercase">find me in:</div>
          </div>
          <div class="hidden sm:ml-6 sm:block font-semibold">
            <template v-for="(social, socialIdx) in developer.social" :key="socialIdx">
              <div class="px-7 py-4 text-sm font-medium text-slate-500 border-r border-l border-lines hover:text-gray-300"></div>
            </template>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex items-center">
            <RouterLink
                to="/contact"
                class="px-7 py-4 text-sm font-medium text-slate-500  border-l border-lines hover:text-gray-300"
                :class="{ 'border-b-4 border-b-orange-500 text-white': '/contact' === $route.path }"
            >_contact-me</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {useDataStore} from "@/stores/dataStore";

const {developer} = useDataStore();
</script>

<script lang="ts">export default {name: "FooterMenu"}</script>
