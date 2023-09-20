<template>
  <PageLayout>
    <template #task>
      <div class="flex flex-col space-y-8 p-5">
        <SolidConsoleIcon class="h-5 w-5 text-lynch hover:text-lynch-200" />
        <SolidPersonIcon class="h-5 w-5 text-lynch hover:text-lynch-200" />
        <SolidGamepadIcon class="h-5 w-5 text-lynch hover:text-lynch-200" />
      </div>
    </template>
    <template #menu>
      <LabeledCollapsible title="personal-info" border border-class="border-b border-lines" class="text-white">
        <IconCollapsible title="bio" icon="user" :border="false">
          <template #icon>
            <SolidFolderIcon class="h-4 w-4 text-tonys-pink" />
          </template>
        </IconCollapsible>
      </LabeledCollapsible>
      <LabeledCollapsible title="contacts" border border-class="border-b border-lines" class="text-white">
        <div class="flex flex-col space-y-2 text-slate-500">
          <div class="flex flex-row space-x-2 items-center">
            <SolidEnvelopIcon class="h-4 w-4" />
            <span>
              <a :href="`mailto:${developer.email}`">
                {{ developer.email }}
              </a>
            </span>
          </div>
          <div class="flex flex-row space-x-2 items-center">
            <SolidPhoneIcon class="h-4 w-4" />
            <span>
              <a href="tel:+34-619-719-0373">+1 (619) 719-0373</a>
            </span>
          </div>
        </div>
      </LabeledCollapsible>
    </template>
    <template #tabs>
      <LineCounterWrapper>
        <CommentedTextBlock :text="developer.about" size="md" />
      </LineCounterWrapper>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "@/layout/PageLayout.vue";
import LabeledCollapsible from "@/components/ui/LabeledCollapsible.vue";
import SolidPhoneIcon from "@/components/icons/SolidPhoneIcon.vue";
import SolidEnvelopIcon from "@/components/icons/SolidEnvelopIcon.vue";
import IconCollapsible from "@/components/ui/IconCollapsible.vue";
import SolidFolderIcon from "@/components/icons/SolidFolderIcon.vue";
import CommentedTextBlock from "@/components/ui/CommentedTextBlock.vue";
import {useDataStore} from "@/stores/dataStore";
import LineCounterWrapper from "@/components/ui/LineCounterWrapper.vue";
import SolidConsoleIcon from "@/components/icons/SolidConosleIcon.vue";
import SolidPersonIcon from "@/components/icons/SolidPersonIcon.vue";
import SolidGamepadIcon from "@/components/icons/SolidGamepadIcon.vue";
const { developer } = useDataStore();
</script>

<script lang="ts">export default {name: "AboutMeView"}</script>

<style scoped></style>
