<template>
  <p>Task A</p>
  <span>Counter</span>
  &nbsp;
  <span>{{ props.counter }}</span>
  <button @click="handleCounter">+</button>
</template>
<script setup lang="ts">
const props = defineProps({
  counter: {
    type: Number,
    require: false,
    default: 0,
  },
});

const emits = defineEmits<{
  (e: "handleCounter", counter: number): void;
}>();

const handleCounter = () => {
  console.log("Run");
  emits("handleCounter", 10);
};
</script>
<style lang="scss"></style>
