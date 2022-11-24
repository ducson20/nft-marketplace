<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  tag: {
    type: String,
    require: true,
    default: "p",
    validator: (value: string) => {
      const _textType = ["h1", "h2", "h3", "p", "span", "label"];
      return _textType.includes(value);
    },
  },
  for: {
    type: String,
    require: false,
  },
  classes: {
    type: String,
    require: false,
  },
});

const getForProp = computed(() => (props.tag === "label" ? props.for : null));
</script>

<template>
  <component :class="classes" :is="tag" :for="getForProp">
    <slot></slot>
  </component>
</template>

<style></style>
