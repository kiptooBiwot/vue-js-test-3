import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import VueTailwind from "vue-tailwind";
import "./assets/tailwind.css";

// import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // VueTailwind,
  render: (h) => h(App),
}).$mount("#app");
