<script setup lang="ts">
import { computed } from "vue";
import type { PropType } from "vue";
type IButtonHtmlType = "button" | "submit" | "reset" | undefined;
type IButtonType =
  | "primary"
  | "danger"
  | "special"
  | "light"
  | "secondary"
  | "secondary-navbar"
  | "normal"
  | "basic"
  | undefined;
type IButtonSize = "full" | "large" | "regular" | "small" | undefined;
type IProps = {
  htmlType?: string;
  buttonType?: string;
  size?: boolean;
  disabled?: boolean;
  loading?: boolean;
};

const props = defineProps({
  htmlType: {
    type: String as PropType<IButtonHtmlType>,
    require: false,
    default: "button",
    validator: (value: string) => {
      const _buttonHtmlType = ["button", "submit", "reset"];
      return _buttonHtmlType.includes(value);
    },
  },
  buttonType: {
    type: String as PropType<IButtonType>,
    require: true,
    default: "primary",
    validator: (value: string) => {
      const _buttonType = [
        "primary",
        "danger",
        "special",
        "light",
        "secondary",
        "secondary-navbar",
        "normal",
        "basic",
      ];
      return _buttonType.includes(value);
    },
  },
  size: {
    type: String as PropType<IButtonSize>,
    require: false,
    default: "regular",
    validator: (value: string) => {
      const _buttonSize = ["full", "large", "regular", "small"];
      return _buttonSize.includes(value);
    },
  },
  disabled: {
    type: Boolean,
    require: false,
    default: false,
  },
});

const btnClassName = computed(() => {
  return [
    {
      [`btn--${props.buttonType}`]: props.buttonType,
      [`btn__size--${props.size}`]: props.size,
    },
  ];
});
</script>
<template>
  <button
    :htmlType="props.htmlType"
    :buttonType="props.buttonType"
    :size="props.size"
    :disabled="props.disabled"
    :class="['btn', btnClassName]"
  >
    <slot name="leftIcon" className="btn__left-icon"></slot>
    <slot></slot>
    <slot name="rightIcon" className="btn__right-icon"></slot>
  </button>
</template>
<style lang="scss">
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--btn-regular);
  font-size: var(--btn-font-regular);
  --border: 2px;
  font-weight: 500;
  border-radius: 12px;
  border: none;

  cursor: pointer;
  transition: all 0.2s linear;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }

  &__left-icon,
  &__right-icon {
    display: flex;
    align-items: center;

    svg {
      width: 12px;
      height: 12px;
    }
  }

  &__left-icon {
    margin-right: 8px;
  }

  &__right-icon {
    margin-left: 8px;
  }

  &--primary {
    color: var(--neutral-1-03);
    background: var(--primary-2-01);
    border: 2px solid var(--primary-2-01);

    &:hover {
      background: var(--primary-2-03);
      color: var(--white);
      border: 2px solid var(--primary-2-03);
    }
  }

  &--light {
    color: var(--primary-2-02);
    background: var(--background-primary);
    border: 2px solid var(--primary-2-02);
  }

  &--danger {
    position: relative;
    color: var(--white);
    background: var(--primary-1-01);
    background-clip: padding-box; /* !important */
    border: var(--border) solid transparent; /* !important */
    border-radius: 12px;
    z-index: 0;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      margin: calc(var(--border) * -1); /* !important */
      background: var(--primary-1-01);
      border-radius: inherit; /* !important */
    }
  }

  &--special {
    position: relative;
    background: var(--white);
    background-clip: padding-box; /* !important */
    border: var(--border) solid transparent; /* !important */
    border-radius: 12px;

    &:hover {
      opacity: 1;
    }

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      margin: calc(var(--border) * -1); /* !important */
      border-radius: inherit; /* !important */
      background: var(--primary-1-01);
    }

    span {
      background: var(--primary-1-01);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &--light {
    color: var(--primary-2-02);
    background: var(--background-primary);
    border: 2px solid var(--primary-2-02);
  }

  &--secondary {
    color: var(--neutral-1-05);
    background: transparent;
    border: 2px solid var(--neutral-1-05);
  }

  &--secondary-navbar {
    color: var(--neutral-1-05);
    background: none;
    border: 1px solid transparent;
    &:hover {
      background: var(--neutral-1-07);
      border: 1px solid var(--neutral-1-07);
    }
  }

  &--normal {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--neutral-1-03);
    background: var(--background-8);
    border: 1px solid var(--neutral-1-05);

    &:hover {
      background: var(--neutral-1-07);
    }
  }

  &--basic {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--neutral-1-03);
    background: var(--background-03);
    border: 1px solid var(--neutral-1-05);
  }

  &__size {
    width: auto;
    &--full {
      width: 100%;
      justify-content: center;
    }
    &--large {
      font-size: var(--btn-font-small);
      padding: var(--btn-large);
    }

    &--regular {
      font-size: var(--btn-font-small);
      padding: var(--btn-regular);
    }

    &--small {
      font-size: var(--btn-font-small);
      padding: var(--btn-small);
    }
  }
}
</style>
