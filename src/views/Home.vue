<template>
  <div class="home">
    <Slider />
    <Companie />
    <JobList />
  </div>
</template>



<script>
import Slider from "../components/slider";
import Companie from "../components/companies";
import JobList from "../components/jobs-list";
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: { Headers, Slider, Companie, JobList },

  data() {
    return {};
  },

};
</script>

<style lang="scss">
.home {
  background-image: url(https://cdn-desktop.sikayetvar.com/images/complaint-story-bg.png);
  background-attachment: fixed;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #82828240;
    z-index: -1;
  }
}
</style>
