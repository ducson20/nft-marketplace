import { ref, onMounted, onUpdated, watch, provide } from "vue";
import type { IUserInfoResponse } from "@/services/user";
import { getUserInfoLocalStorage, setUserInfoLocalStorage } from "@/utils/auth";

export function useLocalStorage() {
  const userInfo = ref<IUserInfoResponse>({
    userID: "",
    username: "",
    email: "",
    fullName: "",
    age: 0,
    gender: "",
    roles: [],
    roleHighest: "",
  });

  onMounted(() => {
    userInfo.value = getUserInfoLocalStorage();
  });

  onUpdated(() => {
    userInfo.value = getUserInfoLocalStorage();
  });

  watch(
    () => userInfo.value,
    (newValue: IUserInfoResponse) => {
      setUserInfoLocalStorage(newValue);
    },
    { deep: true }
  );

  provide("userInfo", userInfo);
}
