import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "@/store";
import { setupGlobDirectives } from "@/directives";
import "ant-design-vue/dist/antd.less";
import "@/assets/global.scss";

import { DefaultLayout, NavbarFooterLayout } from "@/components/layouts";

const app = createApp(App);

app.component("default-layout", DefaultLayout);

app.component("no-banner-layout", NavbarFooterLayout);

app.use(router);

app.use(store);

setupGlobDirectives(app);

app.mount("#app");
