<template>
  <div>
    <analyze />
  </div>
</template>

<script>
import Vue from "vue";
// import Home from "./components/Home.vue";
import Analyze from "./components/Analyze.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export default {
  name: "App",
  components: {
    // "main-page": Home,
    analyze: Analyze,
  },
};
</script>
