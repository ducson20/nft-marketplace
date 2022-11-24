import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useUserStoreWithOut } from "@/store/modules/user";
import { useNotification } from "@/hooks/useNotification";
import router from "@/router";
import { isString } from "./is";
import { getToken } from "./auth";

enum MethodEnums {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

const { createNotification } = useNotification();

const BASE_URL =
  import.meta.env.MODE === "development" ||
  import.meta.env.MODE === "production"
    ? window.location.protocol +
      "//" +
      window.location.hostname +
      (import.meta.env.VITE_VUE_APP_SERVER_PORT
        ? ":" + import.meta.env.VITE_VUE_APP_SERVER_PORT
        : window.location.port
        ? ":" + window.location.port
        : "") +
      "/" +
      import.meta.env.VITE_VUE_APP_API_BASE_URL
    : "";

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: "Bearer " + token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (!isString(response.data)) return response.data;

    const successMessage = response.data;

    createNotification("success", successMessage, 3);
  },
  (error) => {
    if ([401, 403].includes(error.response.status)) {
      router.push({
        path: "/login",
        query: { path: router.currentRoute.value.fullPath },
      });

      return useUserStoreWithOut().logout();
    }

    if (error.response.data) {
      const { message } = error.response.data;
      createNotification("error", message, 3);
    }

    return Promise.reject(error);
  }
);

const request = <T, R = T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
) => {
  return instance.request<T, R>({ ...config, ...options });
};

export function get<T = any, R = T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
) {
  return request<T, R>({ ...config, method: MethodEnums.GET }, options);
}

export function post<T = any, R = T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
) {
  return request<T, R>({ ...config, method: MethodEnums.POST }, options);
}

export function patch<T = any, R = T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
) {
  return request<T, R>({ ...config, method: MethodEnums.PATCH }, options);
}

export function put<T = any, R = T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
) {
  return request<T, R>({ ...config, method: MethodEnums.PUT }, options);
}

export function remove<T = any, R = T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
) {
  return request<T, R>({ ...config, method: MethodEnums.DELETE }, options);
}

export default request;
export type { AxiosInstance, AxiosResponse };
