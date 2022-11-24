import type {
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
  IUserInfoResponse,
} from "./model";

import { get, post } from "@/utils/http";

enum URL {
  signIn = "/auth/sign-in",
  signUp = "/auth/sign-up",
  logout = "/auth/logout",
  getUserInfo = "/user/info",
  changePassword = "/user/change-password",
}



class UserService {
  static _instance = new UserService();

  async signIn(formData: ISignInRequest) {
    return await post<ISignInResponse>({
      url: URL.signIn,
      data: formData,
    });
  }

  async signUp(formData: ISignUpRequest) {
    return await post<ISignUpResponse>({
      url: URL.signUp,
      data: formData,
    });
  }

  async logout() {
    return await get({
      url: URL.logout,
    });
  }

  async getUserInfo() {
    return await get<IUserInfoResponse>({ url: URL.getUserInfo });
  }
}

export type {
  ISignInRequest,
  ISignInResponse,
  ISignUpRequest,
  ISignUpResponse,
  IUserInfoResponse,
};

export default UserService._instance;
