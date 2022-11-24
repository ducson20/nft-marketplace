import type { App, Directive, DirectiveBinding } from "vue";
import { usePermissionStore } from "@/store/modules/permission";

const permissionStore = usePermissionStore();

const mounted = (el: HTMLElement, { value }: DirectiveBinding) => {
  if (value && !value.include(permissionStore.role)) {
    el.remove();
  }
};

const roleDirective: Directive = {
  mounted,
};

export function setupRoleDirective(app: App) {
  app.directive("role", roleDirective);
}

export default roleDirective;
