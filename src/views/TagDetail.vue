<template>
   <div>
    <div class="detail">
      <div class="detail-header">
        <div class="custom-container">
          <h2 class="detail-jobTitle">{{tagName}} etiketine ait ilanlar</h2>
        </div>
      </div>
      <div class="detail-wrp">
        <div class="custom-container">
          <div class="row">
            <div class="detail-wrp__right col-12 col-md-12">
              <queryJobList :setJobList="jobList" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import queryJobList from "../components/query-job-list";

export default {
  name: "tag-detail",
  components: { queryJobList },
  data() {
    return {
      tagName: this.$route.params.tagSlug
    };
  },
  computed: {
    ...mapState(["jobList"])
  },
  created() {
    this.setTagJobList();
  },
  methods: {
    ...mapActions(["fetchTagJobList"]),
    
    setTagJobList() {
      this.fetchTagJobList(this.tagName);
    }
  }
};
</script>

<style lang="scss">

</style>
