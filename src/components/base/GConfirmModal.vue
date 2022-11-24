<script setup lang="ts">
import { computed } from "vue";
import GIcon from "./GIcon.vue";
import GButton from "./GButton.vue";
import type { IConfirmConfig } from "@/services/modal/modal";
const props = defineProps<{
  visible: boolean;
  confirmModalConfig: Required<IConfirmConfig>;
}>();

const visible = computed({
  get() {
    return props.visible;
  },
  set(value) {
    emit("update:visible", value);
  },
});

const handleOK = () => {
  props.confirmModalConfig.onOK();
  visible.value = false;
};

const handleCancel = () => {
  props.confirmModalConfig.onCancel();
  visible.value = false;
};

const emit = defineEmits(["update:visible"]);
</script>

<template>
  <a-modal
    v-model:visible="visible"
    centered
    class="g-confirm-modal"
    :z-index="10000"
    :footer="false"
    :closable="false"
  >
    <GIcon :icon="props.confirmModalConfig.icon"></GIcon>
    <div>
      <h3>{{ props.confirmModalConfig.title }}</h3>
      <p>{{ props.confirmModalConfig.subTitle }}</p>
    </div>
    <div>
      <GButton buttonType="light" @click="handleCancel">Cancel</GButton>
      <GButton buttonType="primary" @click="handleOK">OK</GButton>
    </div>
  </a-modal>
</template>

<style lang="scss"></style>
