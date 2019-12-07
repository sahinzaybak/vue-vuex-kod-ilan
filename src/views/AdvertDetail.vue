<template>
  <div>
    <div class="detail" v-for="detail in jobDetails" :key="detail.id">
      <div class="detail-header">
        <div class="custom-container">
          <h2 class="detail-jobTitle">{{detail.position}}</h2>
        </div>
      </div>

      <div class="detail-wrp">
        <div class="custom-container">
          <div class="row">
            <div class="detail-wrp__left col-12 col-md-8">
              <div class="detail-top">
                <div class="detail-logo">
                  <img :src="detail.company.logo" alt />
                </div>
                <div class="detail-company">
                  <p class="detail-company__name">{{detail.company.name}}</p>
                  <div class="detail-company__grup">
                    <p class="detail-company__info">{{detail.company.www}}</p>
                    <p class="detail-company__info">
                      <img class="jobs-list__map" src="../assets/img/map.png" />
                      {{detail.location}}
                    </p>
                  </div>
                </div>
              </div>

              <div class="detail-center">
                <div class="detail-desc">
                  <p class="detail-desc__text" v-html="detail.description"></p>
                </div>
              </div>
            </div>

            <div class="detail-wrp__right col-12 col-md-4">
              <similarAdvert />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
import similarAdvert from "../components/similar-adverts";
export default {
  name: "advertDetail",
  components: { similarAdvert },
  data() {
    return {
      slug: this.$route.params.detailSlug
    };
  },
  created() {
    this.setJobDetail();
  },
  computed: {
    ...mapState(["jobDetails"])
  },
  methods: {
    ...mapActions(["fetchJobDetail"]),

    setJobDetail() {
      this.fetchJobDetail(this.slug);
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
  &-jobTitle {
    margin-bottom: 0;
    font-weight: 700;
    font-size: 52px;
    position: relative;
    z-index: 9;
    color: #e2e2e2;
  }
  &-company {
    margin-left: 35px;
    max-width: 755px;
    &__name {
      color: #1b1b1b;
      font-size: 40px;
      margin-bottom: 2px;
      line-height: 1.3;
    }
    &__info {
      font-size: 16px;
      color: #989898;
      margin-right: 16px;
    }
    &__grup {
      display: flex;
      position: relative;
      top: 10px;
    }
  }
  &-desc {
    &__text {
      font-size: 17px;
      color: #5d5d5d;
      p {
        color: #3c3b3b;
        font-size: 17px;
        line-height: 2;
      }
      div,
      li {
        line-height: 2;
      }
      li {
        list-style-type: circle;
        position: relative;
        left: 18px;
      }
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
