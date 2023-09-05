<template>
  <div :class="widthClassMap[size]" ref="containerDiv" class="relative p-4 max-w-full text-lynch">
    <pre class="js-comment text-lynch relative z-10 pl-6">{{ formatedText }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const containerDiv = ref(null);
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: "sm"  // default to "sm" if no size prop is passed
  }
});

const widthClassMap = {
  sm: 'w-[200px] lg:w-[520px]',
  md: 'w-[250px] lg:w-[700px]',
  // add more sizes as needed
};

let maxLineLength = ref(120);

onMounted(() => {
  if ('ResizeObserver' in window && containerDiv.value) {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        // Here, 7 is an assumed average pixel width of a monospace character in Fira Code font.
        maxLineLength.value = Math.floor(entry.contentRect.width / 7);
      }
    });
    resizeObserver.observe(containerDiv.value);

    // Cleanup observer on component unmount
    onUnmounted(() => {
      resizeObserver.disconnect();
    });
  }
});

const formatAsBlockComment = (text: string, maxLineLength: number) => {
  let result = '/**\n';
  let currentLine = ' *';

  const words = text.split(' ');

  words.forEach(word => {
    if (currentLine.length + word.length > maxLineLength) {
      result += currentLine + '\n';
      currentLine = ' * ' + word;
    } else {
      currentLine += ' ' + word;
    }
  });

  // Add any remaining content
  if (currentLine.trim() !== '*') {
    result += currentLine + '\n';
  }

  result += ' **/';
  return result;
}

const formatedText = computed(() => formatAsBlockComment(props.text, maxLineLength.value));
</script>

<script lang="ts">
export default {
  name: "CommentedTextBlock"
}
</script>

<style scoped>
.js-comment {
  font-family: 'Fira Code', monospace;
  white-space: pre-wrap;
}
</style>
