<template>
  <section :class="['flex flex-col w-full p-2.5 rounded-md', border ? borderClass : '']">
    <slot name="header" :show="show" :toggle="toggle" :title-class="size" :always-on="alwaysOn">
      <a class="flex flex-row flex-grow w-full justify-start items-center space-x-4 cursor-pointer" @click.prevent="alwaysOn ? null : toggle()">
        <span v-if="show"> <SolidChevronDownIcon class="h-2 w-2 text-lynch"  /></span>
        <span v-else> <SolidChevronDownIcon class="h-2 w-2 text-lynch" transform="rotate(-90 0,0)" /></span>
        <slot name="icon" />
        <slot name="title">
          <span :class="[size, isSelected ? 'text-white' : 'text-lynch']">
            {{ title }}
          </span>
        </slot>
      </a>
    </slot>
    <div
        :class="[
        'rounded border-none w-full my-2 transition-all duration-300 ease-in-out overflow-hidden',
        show ? 'block' : 'hidden',
      ]"
    >
      <slot name="default" class="py-5" />
    </div>
  </section>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
import SolidChevronDownIcon from "@/components/icons/SolidChevronDownIcon.vue";
const props = withDefaults(defineProps<{
  alwaysOn?: boolean
  alwaysOff?: boolean
  selected?: boolean
  title?: string
  size?: string
  border?: boolean
  borderClass?: string
}>(), {
  alwaysOn: false,
  alwaysOff: false,
  selected: false,
  size: 'base',
  title: '',
  border: true,
  borderClass: ' border border-divider'
})

const show = ref(props.alwaysOn)
const toggle = () => show.value = !show.value
const isSelected =  computed(() => props.selected || show.value)
</script>
<script lang="ts">export default {name: 'IconCollapsible'}</script>
