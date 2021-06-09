import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import mixins from "@/utils/mixins.js";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "@/utils/filters";
import "./assets/styles/tailwind.css";
import "./assets/styles/style.scss";
import "swiper/css/swiper.css";

Vue.config.productionTip = false;

Vue.mixin(mixins);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
