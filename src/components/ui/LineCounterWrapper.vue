<template>
  <div class="flex pt-4 pl-4 pr-0 justify-end">
    <!-- Line Numbers Column -->
    <div class="text-lynch text-right">
      <div v-for="n in lineNumbers" :key="n" class="">
        {{ n }}
      </div>
    </div>
    <!-- Content Column -->
    <div class="flex-grow line-counter-slot-content pl-4">
      <slot name="default"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, onUnmounted, watchEffect, nextTick} from "vue";

const lineNumbers = ref<number[]>([]);
let resizeObserver: ResizeObserver;

const countRows = (element: Element): number => {
  let rowCount = 0;
  const rows = element.querySelectorAll('.row');
  console.log('countRows',rows)
  element.querySelectorAll('.row').forEach(_ => {
    rowCount++;
  });
  return rowCount;
};

const updateLineNumbers = () => {
  console.log('updateLineNumbers')
  const slotContent = document.querySelector('.line-counter-slot-content');
  console.log('updateLineNumbers slotContent',slotContent)
  if (slotContent) {
    const preElement = slotContent.querySelector('pre');
    if (preElement) {
      console.log('updateLineNumbers pre',preElement)
      // Handle <pre> tag content
      const content = preElement.textContent || "";
      const lines = content.split('\n');
      lineNumbers.value = Array.from({ length: lines.length }, (_, i) => i + 1);
    } else {
      // Handle other HTML content
      console.log('updateLineNumbers no pre',slotContent)
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
    const rows = document.querySelectorAll('.row');
    if (rows.length) {
      rows?.forEach(row => resizeObserver.observe(row));
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
