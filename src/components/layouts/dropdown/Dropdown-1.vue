<script setup lang="ts">
const props = defineProps({
  leftText: {
    type: String,
    require: true,
  },
  rightText: {
    type: String,
    require: false,
  },
});
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__wrapper">
      <slot name="leftIcon" className="dropdown__icon"></slot>
      <span class="dropdown__left-text">{{ props.leftText }}</span>
    </div>
    <div class="dropdown__wrapper">
      <slot name="rightIcon" className="dropdown__icon"></slot>
      <span class="dropdown__right-text">{{ props.rightText }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.dropdown {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: var(--background-8);
  border: 1px solid var(--neutral-1-05);
  border-radius: 12px;
  cursor: pointer;
  opacity: 1;
  transition: all 0.6 linear 0s;

  &:hover {
    opacity: 0.8;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child {
      margin-right: 48px;
    }
  }

  &__icon {
    margin-right: 12px;
  }
  &__left-text {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--neutral-1-03);
  }

  &__right-text {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--neutral-1-03);
  }
}
</style>
