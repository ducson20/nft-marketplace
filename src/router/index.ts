import { createRouter, createWebHistory } from "vue-router";
import routes from "./router.config";
import { getToken } from "@/utils/auth";
import { usePermissionStoreWithOut } from "@/store/modules/permission";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "nft-landing-page-link ",
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

const permissionStore = usePermissionStoreWithOut();

const withList = ["/sign-in", "/sign-up", "/test", "/", "search"];

router.beforeEach(async (to, _, next) => {
  const hasToken = getToken();
  const toRouteRoles = to.meta.roles as string[];
  const toRouteHidden = to.meta.hidden;
  if (hasToken) {
    if (to.path === "/sign-in" || to.path === "/sign-up") {
      next({ path: "/" });
    }

    if (!permissionStore.isUserInfoReady) {
      // await permissionStore.getPermission();
    }

    if (toRouteHidden && !toRouteRoles?.includes(permissionStore.role)) {
      next({ path: "/403", replace: true });
    }

    next();
    return;
  } else {
    console.log(withList.indexOf(to.path));
    if (withList.indexOf(to.path) !== -1) {
      next();
    }
    next({ path: "/sign-in", query: { path: to.fullPath } });
  }
});

export default router;
