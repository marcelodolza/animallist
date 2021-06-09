import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/animals/:category/:animalId?",
    name: "Details",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Details" */ "../views/Details.vue"),
  },
  {
    path: "/animals/:category/:animalId?/enquire",
    name: "DetailsEnquire",
    props: true,
    meta: { transition: { name: "fullslide", mode: "" } },
    component: () =>
      import(
        /* webpackChunkName: "DetailsEnquire" */ "../views/DetailsEnquire.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 400);
    });
  },
});

export default router;
