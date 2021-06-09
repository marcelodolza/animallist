<template>
  <div id="app" class="flex flex-col min-h-screen overflow-x-hidden">
    <Loader :visible="loading" />
    <Header :routeName="routeName" />
    <transition :name="transition.name" :mode="transition.mode">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer, Loader } from "@/components";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Loader,
  },
  data() {
    return {
      loading: true,
      routeName: this.$route.name,
      transition: {
        name: "slide-top",
        mode: "out-in",
      },
    };
  },
  mounted() {
    // Simulating the first loading
    setTimeout(() => {
      this.loading = false;
    }, 700);
  },
  watch: {
    // Setting route transition effects
    $route(to, from) {
      this.routeName = to.name;
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;

      if (to.meta.transition) {
        const { name, mode } = to.meta.transition;
        this.transition = {
          name: name,
          mode: mode || mode === "" ? mode : "out-in",
        };
      } else {
        this.transition = {
          name: toDepth < fromDepth ? "slide-bottom" : "slide-top",
          mode: "out-in",
        };
      }
    },
  },
};
</script>
