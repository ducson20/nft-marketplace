<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  count: {
    type: Number,
    require: false,
    default: 0,
  },
  inputVal: {
    type: String,
    require: false,
    default: "",
  },
});

const emits = defineEmits<{
  (e: "handleCount"): void;
  (e: "update:inputVal", value: string): void;
}>();

const handleCount = () => {
  emits("handleCount");
};

const handleInputText = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:inputVal", target.value);
};

const counterChecked = () => {
  console.log("Rerender");
  if (props.count === 10) return "success";
};
</script>
<template>
  <h1>Counter Page</h1>
  <span
    >Counter {{ props.count }} {{ counterChecked() }}
    <button @click="handleCount">+</button>
  </span>
  <label for=""
    >Field <input type="text" @input="handleInputText" :value="inputVal" />
    {{ inputVal }}</label
  >
</template>

<style lang="scss"></style>
