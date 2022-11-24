<script setup lang="ts">
import { ref, shallowRef, KeepAlive } from "vue";

import TaskA from "./TaskA.vue";
import TaskB from "./TaskB.vue";

const tabName = shallowRef(TaskA);
const counter = ref<number>(0);
const textInput = ref<string>("sonld");

const handleCounter = (counterVal: number) => {
  counter.value += 1;
};
</script>

<template>
  <label for="">Task A</label>
  <input type="radio" v-model="tabName" :value="TaskA" />
  <label for="">Task B</label>
  <input type="radio" v-model="tabName" :value="TaskB" />
  <component :is="tabName" @handleCounter="handleCounter"></component>
</template>

<style lang="scss"></style>
