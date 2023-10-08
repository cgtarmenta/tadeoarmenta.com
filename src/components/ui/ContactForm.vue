<template>
  <section class="grid grid-cols-2 h-full min-h-full">
    <div class="flex flex-col items-center justify-center min-h-full space-y-6 border-r border-lines min-w-[372px]">
      <TAInput
        v-model="newMessage.name"
        label="_name:"
        placeholder="Name"
        class="min-w-[372px]"
      />
      <TAInput
        v-model="newMessage.email"
        label="_email:"
        placeholder="some.name@email-provider.com"
        class="min-w-[372px]"
      />
      <div class="min-w-[372px]">
        <label for="success" class="block mb-2 text-sm font-medium text-slate-500 dark:text-slate-500" v-text="'_message'" />
        <textarea
          v-model="newMessage.message"
          id="message"
          class="bg-inputBg border border-lines text-slate-500 dark:text-slate-500 placeholder-lines dark:placeholder-lines text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-inputBg dark:border-lines"
          placeholder="Message goes here"

        />
      </div>
      <div class="block items-start min-w-[372px]">
        <button class="p-2 bg-buttonBg text-white rounded bottom-8 py-2.5 px-3.5 hover:bg-gray-400 focus:ring-slate-500" @click="null">
          submit-message
        </button>
      </div>
    </div>
    <!-- Preview   -->
    <div class="flex flex-col items-center justify-center min-h-full">
      <LineCounterWrapper>
        <div class="flex flex-col ml-1">
          <div class="row space-x-2">
            <span class="text-violet-500">const</span>
            <span class="text-varColour">button</span>
            <span class="text-violet-500">=</span>
            <span class="text-varColour">document</span>
            <span class="text-slate-500">.</span>
            <span class="text-varColour">querySelector</span>
            <span class="text-slate-500">(</span>
            <span class="text-orange-500">'#sendBtn'</span>
            <span class="text-slate-500">);</span>
          </div>
          <div class="row space-x-2">
            <span>&nbsp</span>
            <span>&nbsp</span>
          </div>
          <div class="row space-x-2">
            <span class="text-violet-500">const</span>
            <span class="text-varColour">message</span>
            <span class="text-violet-500">=</span>
            <span class="text-slate-500">{</span>
          </div>
          <div class="row space-x-2 pl-4">
            <span class="text-varColour">name:</span>
            <span class="text-orange-500">"{{ newMessage.name }}"</span>
            <span class="text-slate-500 ">,</span>
          </div>
          <div class="row space-x-2 pl-4">
            <span class="text-varColour">email:</span>
            <span class="text-orange-500">"{{ newMessage.email }}"</span>
            <span class="text-slate-500 ">,</span>
          </div>
          <div class="row space-x-2 pl-4">
            <span class="text-varColour">message:</span>
            <span class="text-orange-500">"{{ newMessage.message }}"</span>
            <span class="text-slate-500 ">,</span>
          </div>
          <div class="row space-x-2 pl-4">
            <span class="text-slate-500">date:</span>
            <span class="text-orange-500">"{{ format(new Date(), 'eeee MM LLLL') }}"</span>
          </div>
          <div class="row space-x-2">
            <span class="text-slate-500">}</span>
          </div>
          <div class="row space-x-2">
            <span>&nbsp</span>
            <span>&nbsp</span>
          </div>
          <div class="row space-x-2">
            <span class="text-varColour">button</span>
            <span class="text-slate-500">.</span>
            <span class="text-varColour">addEventListener</span>
            <span class="text-slate-500">(</span>
            <span class="text-orange-500">'click',</span>
            <span class="text-slate-500">()</span>
            <span class="text-violet-500">=></span>
            <span class="text-slate-500">{</span>
          </div>
          <div class="row space-x-2 pl-4">
            <span class="text-varColour">form</span>
            <span class="text-slate-500">.</span>
            <span class="text-varColour">send</span>
            <span class="text-slate-500">(</span>
            <span class="text-varColour">message</span>
            <span class="text-slate-500">);</span>

          </div>
          <div class="row space-x-2">
            <span class="text-slate-500">});</span>
          </div>
        </div>
      </LineCounterWrapper>
    </div>
    <!-- /Preview   -->
  </section>
</template>

<script setup lang="ts">
import TAInput from "@/components/ui/TAInput.vue";
import LineCounterWrapper from "@/components/ui/LineCounterWrapper.vue";
import {ref} from "vue";
import {format} from "date-fns";

interface Message {
  name: string;
  email: string;
  message: string;
}
const newMessage = ref<Message>({} as Message);


</script>
