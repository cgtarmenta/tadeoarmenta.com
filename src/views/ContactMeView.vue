<template>
  <PageLayout>
    <template #menu>
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
      <LabeledCollapsible title="find-me-also-in" border border-class="border-b border-lines" class="text-white">
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
import SolidEnvelopIcon from "@/components/icons/SolidEnvelopIcon.vue";
import SolidPhoneIcon from "@/components/icons/SolidPhoneIcon.vue";
</script>

<script lang="ts">export default {name: "ContactMeView"}</script>

