import { ref, provide } from "vue";
import type { IConfirmConfig } from "@/services/modal/modal";
export function useConfirmModal() {
  const initModalConfig: IConfirmConfig = {
    title: "",
    subTitle: "",
    icon: "info-circle-outline",
    onOK: () => {},
    onCancel: () => {},
  };

  const confirmModalVisible = ref<boolean>(false);
  const confirmModalConfig = ref({ ...initModalConfig });

  const showConfirmModal = (confirmConfig: IConfirmConfig) => {
    confirmModalVisible.value = true;
    confirmModalConfig.value = { ...initModalConfig };
    console.log(Object.keys(confirmConfig));
    // Object.keys(confirmConfig).map(
    //   (key) => (confirmModalConfig.value[key] = confirmConfig[key])
    // );
  };
  provide("showConfirmModal", showConfirmModal);
  return { confirmModalVisible, confirmModalConfig };
}
