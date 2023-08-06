<template>
  <PageLayout>
    <template #menu>
      <LabeledCollapsible title="personal-info" border border-class="border-b border-lines" class="text-white">
        <IconCollapsible title="bio" icon="user" :border="false" >
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
              <a href="mailto:contact@tadeoarmenta.com">
                contact@tadeoarmenta.com
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
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from "@/layout/PageLayout.vue";
import LabeledCollapsible from "@/components/ui/LabeledCollapsible.vue";
import SolidPhoneIcon from "@/components/icons/SolidPhoneIcon.vue";
import SolidEnvelopIcon from "@/components/icons/SolidEnvelopIcon.vue";
import IconCollapsible from "@/components/ui/IconCollapsible.vue";
import SolidFolderIcon from "@/components/icons/SolidFolderIcon.vue";
</script>

<script lang="ts">export default {name: "AboutMeView"}</script>

<style scoped></style>
