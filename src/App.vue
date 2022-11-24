<script setup lang="ts">
import { useLoading } from "@/hooks/useLoading";
import { useConfirmModal } from "@/hooks/useConfirmModal";
import { useLocalStorage } from "./hooks/useLocalStorage";
import GModalConfirm from "@/components/base/GConfirmModal.vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const { isLoading } = useLoading();
const { confirmModalVisible, confirmModalConfig } = useConfirmModal();
useLocalStorage();

</script>
<template>
  <a-spin :spinning="isLoading" :delay="200">
    <router-view />
  </a-spin>
  <GModalConfirm
    v-model:visible="confirmModalVisible"
    :confirmModalConfig="confirmModalConfig"
  />
</template>

<style lang="scss">
.ant-input {
  &:not(.ant-input-password input) {
    border-radius: 12px !important;
  }
}

.ant-input-password {
  border-radius: 12px !important;
}

.ant-spin-dot {
  top: 120% !important;
}
</style>
