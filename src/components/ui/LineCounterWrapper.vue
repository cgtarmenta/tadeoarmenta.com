<template>
  <div class="flex pt-4 pl-4 pr-0 justify-end">
    <!-- Line Numbers Column -->
    <div class="text-lynch text-right">
      <div v-for="n in lineNumbers" :key="n" class="">
        {{ n }}
      </div>
    </div>
    <!-- Content Column -->
    <div class="flex-grow line-counter-slot-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, watchEffect, nextTick} from "vue";

const lineNumbers = ref<number[]>([]);
let resizeObserver: ResizeObserver;

const countRows = (element: Element): number => {
  let rowCount = 0;
  element.querySelectorAll('.row').forEach(row => {
    rowCount++;
  });
  return rowCount;
};

const updateLineNumbers = () => {
  const slotContent = document.querySelector('.line-counter-slot-content');
  if (slotContent) {
    const preElement = slotContent.querySelector('pre');
    if (preElement) {
      // Handle <pre> tag content
      const content = preElement.textContent || "";
      const lines = content.split('\n');
      lineNumbers.value = Array.from({ length: lines.length }, (_, i) => i + 1);
    } else {
      // Handle other HTML content
      const rowCount = countRows(slotContent);
      lineNumbers.value = Array.from({ length: rowCount }, (_, i) => i + 1);
    }
  }
};



onMounted(async () => {
  await nextTick();
  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(() => {
      updateLineNumbers();
    });

    const preElement = document.querySelector("pre");
    if (preElement) {
      resizeObserver.observe(preElement);
    }
  }
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});

// Initial update when the component is mounted
watchEffect(() => {
  updateLineNumbers();
});
</script>

<script lang="ts">
export default {
  name: "LineCounterWrapper"
}
</script>
