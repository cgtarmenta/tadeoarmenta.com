<template>
  <nav class="border-t border-lines  py-0 my-0">
    <div class="mx-auto my-0 px-4 sm:pl-6 sm:pr-0">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <div class="flex items-center my-auto h-8 w-auto text-slate-500 lowercase">
              find me in:
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:flex-row font-semibold">
            <template v-for="(social) in developer.social" :key="social">
              <a
                :href="social.url"
                class="px-4 py-4 h-full text-sm font-medium text-slate-500 border-r border-l border-lines hover:text-gray-300"
              >
                <component :is="icons[social.icon]" class="h-6 w-6" />
              </a>
            </template>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex items-center">
            <RouterLink
              to="/contact"
              class="px-7 py-4 text-sm font-medium text-slate-500  border-l border-lines hover:text-gray-300"
              :class="{ 'border-t-2 border-t-orange-500 text-white': '/contact' === $route.path }"
            >
              _contact-me
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {useDataStore} from "@/stores/dataStore";
import SolidTwitterIcon from "@/components/icons/SolidTwitterIcon.vue";
import SolidGithubIcon from "@/components/icons/SolidGithubIcon.vue";
import SolidLinkedinIcon from "@/components/icons/SolidLinkedinIcon.vue";
import SolidUpworkIcon from "@/components/icons/SolidUpworkIcon.vue";
const icons = {
  twitter: SolidTwitterIcon,
  github: SolidGithubIcon,
  linkedin: SolidLinkedinIcon,
  upwork: SolidUpworkIcon,
} as {[x:string]: any};
const {developer} = useDataStore();
</script>

<script lang="ts">export default {name: "FooterMenu"}</script>
