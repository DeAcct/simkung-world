import { createApp } from "vue";
import { router } from "./router";
import App from "./App";
import "./common.scss";

const app = createApp(App);
app.use(router).mount("#app");
