import { createApp } from "vue";
import { router } from "./router/router";
import App from "./App";
import "./style/common.scss";

const app = createApp(App);
app.use(router).mount("#app");
