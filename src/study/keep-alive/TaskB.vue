<template>
  <p>Task B</p>
  <span>Input text</span>
  &nbsp;
  <input type="text" v-model="props.textInput" />
</template>
<script setup lang="ts">
const props = defineProps({
  textInput: {
    type: String,
    require: false,
    default: "",
  },
});
</script>
<style lang="scss"></style>
