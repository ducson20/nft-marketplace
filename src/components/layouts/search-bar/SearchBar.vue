<script setup lang="ts">
import { reactive } from "vue";
import GButton from "@/components/base/GButton.vue";
import GInput from "@/components/base/GInput.vue";
import { ArrowLeftIcon, SearchIcon, CloseIcon } from "@/components/svg";

type TSearchForm = {
  searchText: string;
};

const searchForm = reactive<TSearchForm>({
  searchText: "",
});

const onInput = (value: string) => {};
</script>

<template>
  <div class="search grid wide">
    <div class="search-bar__top">
      <GButton class="search-bar__btn--filter" buttonType="normal">
        <template #leftIcon="{ className }">
          <span :class="className"> <ArrowLeftIcon /></span>
        </template>
        Filter
      </GButton>
      <GButton class="search-bar__btn--f5" buttonType="basic">F5</GButton>
      <GInput
        class="search-bar__input--search"
        @update:model-value="onInput"
        v-model="searchForm.searchText"
      >
        <template #leftLabel="{ className }">
          <span :className="className"> <SearchIcon /></span>
        </template>
        <template #placeholder> Search Item </template>
        <template #rightLabelText="{ className }">
          <span :class="className"> CLEAR </span>
        </template>
        <template #rightLabelIcon="{ className }">
          <span :class="className"> <CloseIcon /> </span>
        </template>
      </GInput>
    </div>
  </div>
</template>

<style lang="scss">
.search-bar {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__btn {
    &--filter,
    &--f5 {
      margin-right: 8px;
    }
  }

  &__input {
    &--search {
      margin-right: 8px;
    }
  }
}
</style>
