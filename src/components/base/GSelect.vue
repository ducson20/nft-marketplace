<script setup lang="ts">
import type { PropType } from "vue";

type OptionTypes = {
  label: String;
  value: String;
};
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
const onSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

defineProps({
  id: {
    type: String,
    require: false,
  },
  name: {
    type: String,
    require: false,
  },
  placeholder: {
    type: String,
    require: false,
  },
  classes: {
    type: String,
    require: false,
  },
  modelValue: {
    type: String,
    require: false,
  },
  options: {
    type: Array as PropType<OptionTypes[]>,
  },
});
</script>

<template>
  <select :id="id" :name="name" :placeholder="placeholder" :classes="classes" :value="modelValue" @change="onSelect">
    <option v-for="option in options" :key="JSON.stringify(option)" :value="option.value">
      {{ option?.label }}
    </option>
  </select>
</template>

<style lang=""></style>