<template>
  <div>
    <div class="detail">
      <div class="detail-header">
        <div class="custom-container">
          <h2 class="detail-jobTitle">{{company}} şirketine ait ilanlar</h2>
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
  name: "district-detail",
  components: { queryJobList },
  data() {
    return {
      company: this.$route.params.companySlug
    };
  },
  computed: {
    ...mapState(["jobList"])
  },
  created() {
    this.setCompanyJobList();
  },
  methods: {
    ...mapActions(["fetchCompanyJobList"]),
    
    setCompanyJobList() {
      this.fetchCompanyJobList(this.company);
    }
  }
};
</script>

<style lang="scss">
.detail {
  padding-top: 81px;
  background-image: url(https://cdn-desktop.sikayetvar.com/images/complaint-story-bg.png);
  background-attachment: fixed;
  &-top {
    display: flex;
    align-items: center;
    height: 219px;
    border-bottom: 1px solid #d4d4d4;
    margin-bottom: 50px;
  }
  &-header {
    position: relative;
    height: 260px;
    background-image: url(https://eo4society.esa.int/wp-content/uploads/2019/09/second-phiweek-image-1.jpeg);
    background-size: cover;
    .custom-container {
      height: 100%;
      display: flex;
      align-items: center;
      color: #f1a560;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
      background: linear-gradient(to right, #00000080, #000000e0);
    }
  }
  &-wrp {
    &__left {
      padding-right: 150px;
    }
    &__right {
      margin-top: 145px;
    }
  }
}
</style>
