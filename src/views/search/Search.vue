<script setup lang="ts">
import { ref, reactive } from "vue";
import GButton from "@/components/base/GButton.vue";
import GInput from "@/components/base/GInput.vue";
import DropdownCustom from "@/components/layouts/dropdown/Dropdown-1.vue";
import {
  ArrowLeftIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  SearchIcon,
  CloseIcon,
  SortIcon,
  ColOption1Icon,
  ColOption2Icon,
} from "@/components/svg";

type TSearchForm = {
  searchText: string;
};

const searchForm = reactive<TSearchForm>({
  searchText: "",
});

const onInput = (value: string) => {};

const colOption = ref<string>("option-1");

const changeColOption = (optionName: string) => {};

const colOptionConstant = [
  {
    id: 1,
    value: "option-1",
    icon: ColOption1Icon,
  },
  {
    id: 2,
    value: "option-2",
    icon: ColOption2Icon,
  },
];
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
      <GButton class="search-bar__btn--f5" buttonType="normal">F5</GButton>
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
      <DropdownCustom leftText="Sort" rightText="Recent"
        ><template #leftIcon="{ className }"
          ><span :class="className"><SortIcon /></span
        ></template>
        <template #rightIcon="{ className }"
          ><span :class="className"><ArrowDownIcon /></span> </template
      ></DropdownCustom>
      <div class="search-bar__col-option">
        <template v-for="option in colOptionConstant" :key="option.id">
          <span
            @click="changeColOption(option.value)"
            :class="`search-bar__col-${option.value}`"
          >
            <component :is="option.icon" />
          </span>
        </template>
      </div>
    </div>
    <div class="search-info">
      <span class="search-info__label">
        Total: <span class="search-info__value">2,798 items</span></span
      >
      <span class="search-info__label">
        Last Update: <span class="search-info__value">3 min ago</span></span
      >
    </div>

    <ul class="search-aside">
      <li>
        <span class="search-aside__title">Status</span
        ><span><ArrowUpIcon /></span>
      </li>
      <li>
        <span class="search-aside__title">Price</span
        ><span><ArrowUpIcon /></span>
      </li>
      <li>
        <span class="search-aside__title">Type</span
        ><span><ArrowUpIcon /></span>
      </li>
      <li>
        <span class="search-aside__title">Properties</span
        ><span><ArrowUpIcon /></span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.search {
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

    &__col-option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 16px;
      padding: 6px 6px;
      background: var(--primary-2-01);
      border-radius: 12px;

      span {
        display: flex;
        padding: 8px;
        background: var(--white);
        border-radius: 8px;
        cursor: pointer;
        opacity: 1;
        transition: all 0.6 linear 0s;

        &:hover {
          opacity: 0.8;
        }

        &:first-child {
          margin-right: 8px;
        }
      }
    }
  }

  .search-info {
    margin: 16px 0;
    &__label {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.4rem;
      color: var(--neutral-1-02);

      &:first-child {
        margin-right: 16px;
      }
    }

    &__value {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
      color: var(--neutral-2-03);
    }
  }

  .search-aside {
    li {
    }

    &__title {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 2.4rem;
      color: var(--neutral-1-03);
    }
  }
}
</style>
