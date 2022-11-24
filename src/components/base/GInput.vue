<script setup lang="ts">
import type { PropType } from "vue";
type InputTypes =
  | "text"
  | "email"
  | "password"
  | "checkbox"
  | "radio"
  | undefined;

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
};

defineProps({
  type: {
    type: String as PropType<InputTypes>,
    require: true,
    default: "text",
    validator: (value: string) => {
      const _inputType = ["text", "email", "password", "checkbox", "radio"];
      return _inputType.includes(value);
    },
  },
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
    default: " ",
  },
  classes: {
    type: String,
    require: false,
    default: "form-input__value",
  },
  modelValue: {
    type: String,
    require: false,
  },
});
</script>

<template>
  <div class="form-input__item">
    <!-- Left label -->

    <!-- Input tag -->
    <input
      :type="type"
      :value="modelValue"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :class="classes"
      @input="onInput"
    />
    <slot name="leftLabel" className="form-input__label--left"></slot>
    <!-- Placeholder -->
    <label class="form-input__placeholder"
      ><slot name="placeholder"></slot
    ></label>
    <!-- Right label -->
    <div class="form-input__label--right">
      <slot
        name="rightLabelText"
        className="form-input__label--right-text"
      ></slot>
      <slot
        name="rightLabelIcon"
        className="form-input__label--right-icon"
      ></slot>
    </div>
  </div>
</template>

<style lang="scss">
// FORM INPUT
.form-input {
  &__item {
    position: relative;
    width: 100%;

    &:has(.form-input__label--left) {
      & .form-input__value {
        padding: 0 20px 0 54px;
      }

      & .form-input__label--right {
        right: 20px;
      }
    }

    & .form-input__label--right {
      right: 4px;
    }
  }
  &__value {
    padding: 0 20px 0 54px;
    width: 100%;
    height: 44px;
    border: 1px solid var(--neutral-1-05);
    border-radius: 12px;
    background: var(--background-8);

    &:not(.form-input__label--left) {
      padding: 0 12px 0 12px;

      & + .form-input__placeholder {
        left: 14px;
      }
    }

    &:not(:placeholder-shown) ~ .form-input__placeholder {
      display: none;
    }

    &:focus {
      outline: none;
      border-color: var(--neutral-2-03);
      color: var(--neutral-2-03);
    }

    &:not(:focus) {
      color: var(--neutral-2-03);
    }
  }

  &__label--left {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    transition: all 0.2s;
  }

  &__label--right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    transition: all 0.2s;
    cursor: pointer;

    &-text,
    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-text {
      margin-right: 8px;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.6rem;
      color: var(--neutral-1-03);
    }
  }

  &__placeholder {
    position: absolute;
    top: 50%;
    left: 58px;
    transform: translateY(-50%);
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;
    color: var(--neutral-2-04);
    user-select: none;
    pointer-events: none;
    transition: all 0.2s;
  }
}
</style>
