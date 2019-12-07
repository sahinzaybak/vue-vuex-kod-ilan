<template>
  <div id="app">
    <div class="wrapper">
      <Headers />
      <transition name="fade">
        <router-view :key="$route.fullPath" />
        <!-- Componentlerin içinde linke tıklayınca sayfayı render etmeesi için :key -->
      </transition>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import Headers from "./components/header";
export default {
  name: "app",
  components: { Headers },
  data() {
    return {};
  },

};
</script>

<style lang="scss">
@import "assets/scss/bootstrap.min";
@import "assets/scss/global";
@import "assets/scss/swiper";
</style>
