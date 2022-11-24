import { ref, provide } from "vue";

export function useLoading() {
  const isLoading = ref<boolean>(false);
  const setIsLoading = (_isLoading: boolean) => {
    isLoading.value = _isLoading;
  };

  provide("setIsLoading", setIsLoading);

  return { isLoading };
}
