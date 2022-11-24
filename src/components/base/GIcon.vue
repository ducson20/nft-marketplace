<script setup lang="ts">
import { computed } from "vue";
import {
  CalendarOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons-vue";

const props = defineProps<{
  icon: string;
}>();
const componentIs = computed(() => {
  switch (props.icon) {
    case "calendar-outlined":
      return CalendarOutlined;
    case "close-circle-filter":
      return CloseCircleOutlined;
    case "check-circle-filled":
      return CheckCircleOutlined;
    case "exclamation-circle-filled":
      return ExclamationCircleOutlined;
    case "info-circle-filled":
      return InfoCircleOutlined;
    case "close-circle-outlined":
      return CloseCircleOutlined;
    case "loading-outline":
      return LoadingOutlined;
    default:
      return CalendarOutlined;
  }
});
</script>
<template>
  <component :is="componentIs" />
</template>
<style lang=""></style>
