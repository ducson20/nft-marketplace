<script setup lang="ts">
import Counter from "./Counter.vue";
import { shallowRef, ref, isReactive, shallowReactive, reactive } from "vue";

console.log("App Test");

const counter = shallowRef<{ count: number }>({ count: 0 });
const inputVal = ref<string>("inputVal");

const state = reactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});

state.foo++;

state.nested.bar++;

const referenceType = (state: any) => {
  state.foo = 5;
};
// referenceType(state);

// console.log("Foo: ", isReactive(state.foo), " ", state.foo);
// console.log("Nested: ", isReactive(state.nested), " ", state.nested);

const state2 = shallowRef({
  data: {
    count: 1,
  },
});

// does NOT trigger change
state2.value.data.count = 2;
console.log(state2.value.data);

// does trigger change
// state2.value = {
//   data: {
//     count: 2,
//   },
// };

const handleCount = () => {
  counter.value = { count: (counter.value.count += 1) };
};

const handleInputText = (value: string) => {
  inputVal.value = value;
};
</script>
<template>
  <div class="app-test">
    <Counter
      :count="counter.count"
      v-model:inputVal="inputVal"
      @handle-count="handleCount"
    ></Counter>
  </div>
</template>

<style lang="scss">
.app-test {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
