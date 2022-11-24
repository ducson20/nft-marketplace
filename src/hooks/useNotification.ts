import { h } from "vue";
import { notification as Notification } from "ant-design-vue";
import GIcon from "@/components/base/GIcon.vue";
import "ant-design-vue/es/notification/style/css";

type TType = "success" | "error" | "info" | "warning";

const message = {
  success: "Success",
  error: "Error",
  info: "Info",
  warning: "Warning",
};

const notification = (type: TType, description: string, duration: 3) => {
  Notification[type]({
    message: message[type],
    description,
    duration,
    closeIcon: () => h(GIcon, { icon: "close-circle-filter" }),
    class: `ant-notification-notice--${type}`,
  });
};

export function useNotification() {
  return { createNotification: notification, Notification };
}
