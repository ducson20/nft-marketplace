import Cookies from "js-cookie";
import type { IUserInfoResponse } from "@/services/user";
const TOKEN_KEY = "x-auth-token";
export const USER_INFO_KEY = "userInfo";
export function getToken(): any {
  return Cookies.get(TOKEN_KEY);
}

export function setToken(token: string, expiredTime: number): void {
  // Convert from minutes to day
  let expiredTimeDay = expiredTime / 24 / 60;
  Cookies.set(TOKEN_KEY, token, { expires: expiredTimeDay });
}

export function removeToken(): void {
  Cookies.remove(TOKEN_KEY);
}

export function setUserInfoLocalStorage(userInfo: IUserInfoResponse): void {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
}

export function getUserInfoLocalStorage(): IUserInfoResponse {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY) || "{}");
}

export function removeUserInfoLocalStorage(): void {
  localStorage.removeItem(USER_INFO_KEY);
}
