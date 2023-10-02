<template>
  <section class="grid grid-cols-2 h-full min-h-full">
    <div class="flex flex-col items-center justify-center min-h-full space-y-6 border-r border-lines min-w-[372px]">
      <TAInput
        label="_name:"
        placeholder="Name"
        class="min-w-[372px]"
      />
      <TAInput
        label="_email:"
        placeholder="some.name@email-provider.com"
        class="min-w-[372px]"
      />
      <div class="min-w-[372px]">
        <label for="success" class="block mb-2 text-sm font-medium text-slate-500 dark:text-slate-500" v-text="'_message'" />
        <textarea
          id="message"
          class="bg-inputBg border border-lines text-slate-500 dark:text-slate-500 placeholder-lines dark:placeholder-lines text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-inputBg dark:border-lines"
          placeholder="Message goes here"

        />
      </div>
    </div>
    <div class="flex flex-col items-center justify-center min-h-full">
      <LineCounterWrapper>
        <div class="flex flex-col ml-1">
          <div class="row space-x-1">
            <span class="text-violet-500">const</span>
            <span class="text-varColour">button</span>
            <span class="text-violet-500">=</span>
            <span class="text-varColour">document.querySelector(<span class="text-orange-500">'#sendBtn'</span>)<span class="text-slate-500">;</span></span>
          </div>
        </div>
      </LineCounterWrapper>
    </div>
  </section>
</template>

<script setup lang="ts">
import TAInput from "@/components/ui/TAInput.vue";
import LineCounterWrapper from "@/components/ui/LineCounterWrapper.vue";
</script>



<style scoped>

</style>
