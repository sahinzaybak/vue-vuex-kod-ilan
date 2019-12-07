<template>
  <div>
    <h2 class="similar-title">Benzer İlanlar</h2>
    <div class="similar">
      <div
        class="similar-item"
        @click="detailJob(similar.slug)"
        v-for="similar in similarAdverts"
        :key="similar.id"
      >
        <div class="similar-item-left">
          <div class="similar-item__logo">
            <img :src="similar.company.logo" alt />
          </div>
        </div>
        <div class="similar-item-right">
          <div class="similar-item__company">
            <h3 class="similar-item__name">{{similar.company.name}}</h3>
            <h4 class="similar-item__position">{{similar.position}}</h4>
            <p class="similar-item__location">
              <img src="../assets/img/map.png" alt />
              {{similar.location}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "similarAdvert",
  data() {
    return {
      slug: this.$route.params.detailSlug
    };
  },
  created() {
    this.fecthSimilar();
  },
  computed: {
    ...mapState(["similarAdverts"])
  },
  methods: {
    ...mapActions(["fetchSimilarAdverts", "fetchJobDetail"]),

    fecthSimilar() {
      this.fetchSimilarAdverts(this.slug);
    },
    detailJob(setSlug) {
      this.fetchJobDetail(setSlug);
      // this.$router.push({ path: setSlug });
    }
  }
};
</script>

<style lang="scss">
.similar {
  border: 1px solid #dadada;
  border-radius: 4px;
  background-color: #ffffff85;
  box-shadow: #fbf8f8 1px 27px 60px 4px;
  &-title {
    font-size: 24px;
    margin-top: 60px;
    margin-bottom: 25px;
  }
  &-item {
    display: flex;
    border-bottom: 1px solid #e0dbdb;
    padding: 26px 25px;
    transition: all 0.5s;
    cursor: pointer;
    &__logo {
      max-width: 40px;
    }
    &-left {
      margin-right: 23px;
    }
    &__location {
      img {
        width: 16px;
        opacity: 0.6;
        position: relative;
        top: -1px;
      }
    }
    &__name,
    &__position {
      margin-bottom: 10px;
    }
    &__name {
      font-size: 19px;
      color: #f7963f;
    }
    &__position {
      font-size: 16px;
    }
    &__location {
      color: #4e4e4e;
      font-size: 14px;
    }
    &:hover {
      background-color: white;
      border-color: #f7963f;
    }
  }
}
</style>
