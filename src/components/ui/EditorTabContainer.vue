<template>
  <div v-if="tabs.length" class="border-r border-lines h-full">
    <!-- Tab Headers -->
    <div class="flex border-b border-lines">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :class="{ 'border-b-2 border-orange-500': activeTab === tab }"
        @click="selectTab(tab)"
      >
        <div class="flex flex-row justify-between items-center cursor-pointer px-4 py-2.5 border-r border-lines">
          <span>
            {{ tab.name }}
          </span>
          <span class="ml-2" @click.stop="emit('closeTab', tab.id)">
            <SolidXIcon class="h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
    <!-- Tab Content -->
    <div>
      <slot :active-tab="activeTab" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, provide, watch} from "vue";
import SolidXIcon from "@/components/icons/SolidXIcon.vue";
import type {EditorTab} from "@/utils/types";
interface Props {
  tabs: EditorTab[];
}
const props = defineProps<Props>();
const emit = defineEmits(["openTab", "closeTab"]);
const activeTab = ref(props.tabs[0]);

const selectTab = (tab: EditorTab) => {
  activeTab.value = tab;
};
watch(() => props.tabs, (newTabs) => {
  if (newTabs.length === 1) {
    activeTab.value = newTabs[0];
  }
}, {deep: true});

// Provide the activeTab ref for child components (if needed)
provide('activeTab', activeTab);
</script>
