import { createApp } from "vue";
import "./style.css";
import "./Sign.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./components/routers";

createApp(App).use(createPinia()).use(router).mount("#app");
