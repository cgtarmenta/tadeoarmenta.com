<template>
  <PageLayout>
    <template #menu>
      <LabeledCollapsible title="contacts" border border-class="border-b border-lines" class="text-white" @toggle="onOpenTab(1)">
        <div class="flex flex-col space-y-2 text-slate-500">
          <div class="flex flex-row space-x-2 items-center">
            <SolidEnvelopIcon class="h-4 w-4" />
            <span>
              <a :href="`mailto:${developer.email}`">{{ developer.email }}</a>
            </span>
          </div>
          <div class="flex flex-row space-x-2 items-center">
            <SolidPhoneIcon class="h-4 w-4" />
            <span>
              <a :href="`tel:${developer.workPhone}`">{{developer.workPhone}}</a>
            </span>
          </div>
        </div>
      </LabeledCollapsible>
      <LabeledCollapsible title="find-me-also-in" border border-class="border-b border-lines" class="text-white">
        <div class="flex flex-col space-y-2 text-slate-500">
          <div class="flex flex-row space-x-2 items-center">
            <SolidEnvelopIcon class="h-4 w-4" />
            <span>
              <a :href="`mailto:${developer.email}`">{{ developer.email }}</a>
            </span>
          </div>
          <div class="flex flex-row space-x-2 items-center">
            <SolidPhoneIcon class="h-4 w-4" />
            <span>
              <a :href="`tel:${developer.workPhone}`">{{developer.workPhone}}</a>
            </span>
          </div>
        </div>
      </LabeledCollapsible>
    </template>
    <template #tabs>
      <EditorTabContainer :tabs="openTabs" @close-tab="onCloseTab">
        <template #default="{ activeTab }">
          <ContactForm v-if="activeTab?.id === 1"/>
        </template>
      </EditorTabContainer>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "@/layout/PageLayout.vue";
import LabeledCollapsible from "@/components/ui/LabeledCollapsible.vue";
import SolidEnvelopIcon from "@/components/icons/SolidEnvelopIcon.vue";
import SolidPhoneIcon from "@/components/icons/SolidPhoneIcon.vue";
import EditorTabContainer from "@/components/ui/EditorTabContainer.vue";
import {type EditorTab} from "@/utils/types";
import {ref} from "vue";
import {useDataStore} from "@/stores/dataStore";
import ContactForm from "@/components/ui/ContactForm.vue";
const tabs: EditorTab[] = [
  { id: 1, name: "contacts" },
  { id: 2, name: "bio" },
];
const openTabs = ref<EditorTab[]>([]);
const { developer } = useDataStore();
const onOpenTab = (id: number) => {
  const tab = tabs.find((t) => t.id === id);
  if (tab && !openTabs.value.some(t => t.id === id)) {
    openTabs.value.push(tab);
  }
};
const onCloseTab = (id: number) => {
  openTabs.value = openTabs.value.filter((t) => t.id !== id);
};
</script>

<script lang="ts">export default {name: "ContactMeView"}</script>

