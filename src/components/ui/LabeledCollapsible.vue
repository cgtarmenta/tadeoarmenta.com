<template>
  <section :class="['flex flex-col w-full p-2.5 rounded-md', border ? borderClass : '']">
    <slot name="header" :show="show" :toggle="toggle" :title-class="titleSize" :always-on="alwaysOn">
      <a class="flex flex-row flex-grow w-full justify-start items-center space-x-4 cursor-pointer" @click.prevent="alwaysOn ? null : toggle()">
        <span v-if="show"> <SolidArrowDownIcon class="h-2 w-2 " transform="rotate(180 0,0)" /></span>
        <span v-else> <SolidArrowDownIcon class="h-2 w-2 " /></span>
        <slot name="title">
          <span :class="[titleSize]">
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

<script lang="ts" setup>
import {computed, ref} from "vue";
import SolidArrowDownIcon from "@/components/icons/SolidArrowDownIcon.vue";
const props = withDefaults(defineProps<{
  alwaysOn?: boolean
  title?: string
  size?: string
  border?: boolean
  borderClass?: string
}>(), {
  alwaysOn: false,
  size: 'base',
  title: '',
  border: true,
  borderClass: ' border border-divider'
})

const show = ref(props.alwaysOn)
const titleSize = computed(() => {
  const configSizes = {
    'base': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };
  return configSizes[props.size as string];
})
const toggle = () => {
  show.value = !show.value
}
</script>

<script lang="ts">export default {name: 'LabeledCollapsible'}</script>
