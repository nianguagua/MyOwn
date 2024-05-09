import "./assets/main.css";
/*引入element-plus*/
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import EchartCom from "./components/EchartCom.vue";

// axios.<method> 能够提供自动完成和参数类型推断功能

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(ElementPlus);
// app.component("EchartCom", EchartCom); //全局组件注册后在所有页面中可以使用，影响后期维护
app.mount("#app");
