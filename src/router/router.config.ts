import BlankLayout from "@/components/layouts/blank-layout/BlankLayout.vue";
import Home from "@/views/home/Home.vue";
import RoleEnum from "@/enums/RoleEnum";
export const accessRoutes = [
  {
    path: "/",
    name: "app",
    // redirect: "/",
    component: BlankLayout,
    children: [
      {
        path: "/",
        name: "home",
        meta: {},
        component: Home,
      },
      {
        path: "/search",
        name: "search",
        meta: { layout: "no-banner" },
        component: () => import("@/views/search/Search.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    meta: { hidden: true, roles: [RoleEnum.ADMIN] },
    component: () => import("@/views/admin/Dashboard.vue"),
  },
];

const constantRoutes = [
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("@/views/auth/SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("@/views/auth/SignUp.vue"),
  },
  ...accessRoutes,
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/error-page/404.vue"),
  },
  {
    path: "/403",
    name: "not-auth",
    component: () => import("@/views/error-page/403.vue"),
  },

  {
    path: "/test",
    name: "test",
    meta: { layout: "no-banner" },
    component: () => import("@/study/index.vue"),
  },
];

export default constantRoutes;
