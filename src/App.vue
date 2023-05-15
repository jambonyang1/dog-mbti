<template>
  <div>
    <nav-bar></nav-bar>
    <image-interact></image-interact>
  </div>
</template>

<script>
import Vue from "vue";
import ImageInteract from "./components/ImageInteract.vue";
import NavigationBar from "./components/NavigationBar.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export default {
  name: "App",
  components: {
    "image-interact": ImageInteract,
    "nav-bar": NavigationBar,
  },
};
</script>
