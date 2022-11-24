import router from "@/router";
import { defineStore } from "pinia";

import type {
  ISignInRequest,
  ISignInResponse,
  IUserInfoResponse,
} from "@/services/user/model";
import UserService from "@/services/user";
import {
  getToken,
  setToken,
  removeToken,
  setUserInfoLocalStorage,
  removeUserInfoLocalStorage,
} from "@/utils/auth";
import { store } from "@/store";

export type TInitUserStore = {
  token: string;
  userInfo: IUserInfoResponse;
};

const initUserStore: TInitUserStore = {
  token: "",
  userInfo: {
    userID: "",
    username: "",
    email: "",
    fullName: "",
    age: 0,
    gender: "",
    roles: [],
    roleHighest: "",
  },
};

export const useUserStore = defineStore({
  id: "app-user",
  state: () => initUserStore,
  getters: {
    getToken(): string {
      return this.token || getToken();
    },

    fullName(): string {
      const { fullName } = this.userInfo;
      return fullName;
    },

    userId(): string {
      return this.userInfo.userID;
    },
  },

  actions: {
    async signIn(params: ISignInRequest) {
      const { userInfo, tokenType, token }: ISignInResponse =
        await UserService.signIn(params);

      this.setUserInfo(userInfo);
      this.token = token;

      this.setToken(token);
      setUserInfoLocalStorage(userInfo);

      return userInfo;
    },

    async logout() {
      removeToken();
      removeUserInfoLocalStorage();
      await UserService.logout();
      router.push("/sign-in");
      // setTimeout(() => location.reload(), 0);
    },

    setToken(token: string) {
      setToken(token, 1000000);
    },

    setUserInfo(userInfo: IUserInfoResponse) {
      this.userInfo = { ...userInfo };
    },

    isMyID(userID: string): boolean {
      return this.userInfo.userID === userID;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
