<template>
  <article class="flex flex-row h-full max-w-full max-h-fit overflow-hidden my-2 px-4">
    <section class="flex flex-col border-r border-lines w-16.5 min-w-[68px] h-full">
      <slot name="task" />
    </section>
    <section class="flex flex-col border-r border-lines w-72 min-w-[311px] h-full">
      <slot name="menu" />
    </section>
    <section class="flex flex-col flex-grow h-full">
      <slot name="tabs" />
    </section>
  </article>
</template>
<script setup lang="ts">

</script>

<script lang="ts">export default {name: "PageLayout"}</script>

