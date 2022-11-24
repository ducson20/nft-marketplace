import { defineStore } from "pinia";
import { useUserStoreWithOut } from "@/store/modules/user";
import RoleEnum from "@/enums/RoleEnum";
import type { IUserInfoResponse } from "@/services/user";
import UserService from "@/services/user";
import { store } from "@/store";

const userStore = useUserStoreWithOut();

type TInitPermission = {
  isUserInfoReady: boolean;
  role: string;
};

const initPermissionStore: TInitPermission = {
  isUserInfoReady: false,
  role: "",
};

export const usePermissionStore = defineStore({
  id: "app-permission",
  state: () => initPermissionStore,
  getters: {
    isGuest(): boolean {
      return this.role === RoleEnum.GUEST;
    },
    isUser(): boolean {
      return this.role === RoleEnum.USER;
    },
    isAdmin(): boolean {
      return this.role === RoleEnum.ADMIN;
    },
  },

  actions: {
    async getPermission() {
      const { roleHighest }: IUserInfoResponse =
        await UserService.getUserInfo();
      console.log(await UserService.getUserInfo());
      this.isUserInfoReady = true;
      this.role = roleHighest;
      // userStore.setUserInfo(userInfo);
    },
  },
});

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store);
}