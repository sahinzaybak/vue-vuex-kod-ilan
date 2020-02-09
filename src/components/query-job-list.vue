<template>
  <div class="jobs">
    <div class="custom-container">
      <h4>Şu anda {{setJobList.length}} ilan listeleniyor.</h4>
      <div class="jobs-list" v-for="job in setJobList" :key="job.id">
        <router-link :to="{path : '/ilanlar/' + job.slug}">
          <div class="jobs-list__top">
            <div class="jobs-list__left-wrp">
              <div class="jobs-list__item">
                <div class="jobs-list-left">
                  <img :src="job.company.logo" alt />
                </div>
                <div class="jobs-list-center">
                  <a href="#" class="jobs-list__title">{{job.position}}</a>
                  <div class="jobs-list-center__bottom">
                    <router-link
                      :to="{path : '/firmalar/' + job.company.slug}"
                      class="jobs-list__company"
                    >
                      <img class="jobs-list__bag" src="../assets/img/bag.png" />
                      {{job.company.name}}
                    </router-link>
                    <router-link
                      :to="{path : '/sehirler/' + job.location}"
                      class="jobs-list__district"
                    >
                      <img class="jobs-list__map" src="../assets/img/map.png" />
                      {{job.location}}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="jobs-list__right-wrp">
              <div class="jobs-list-right">
                <a href="#" class="jobs-list__state" v-if="job.type==1">Tam Zamanlı</a>
                <a href="#" class="jobs-list__state" v-if="job.type==2">Freelance</a>
                <a href="#" class="jobs-list__state intern" v-if="job.type==3">Stajyer</a>
                <a href="#" class="jobs-list__apply">Detaylar</a>
              </div>
            </div>
          </div>
          <div class="jobs-list__bottom">
            <div class="jobs-list-center__tag">
              <router-link
                :to="{path : 'etiket/' + tag.name}"
                class="jobs-list__tag"
                v-for="tag in job.tags"
                :key="tag.id"
              >{{tag.name}}</router-link>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  name: "joblist",
  props: ["setJobList"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.jobs {
  padding-bottom: 150px;
  margin-top: -40px;
  .custom-container {
    width: 1200px;
  }
  &-list {
    position: relative;
    border-bottom: 1px solid #f1f1f1;
    padding: 27px 0;
    margin-bottom: 10px;
    transition: all 0.5s;
    box-shadow: #c3c3c3 1px 23px 60px -7px;
    cursor: pointer;
    border-left: 3px solid #f7963f;
    background-color: white;
    padding-left: 25px;
    cursor: pointer;
    &__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__bottom {
      padding-left: 130px;
      padding-top: 12px;
    }
    &__item {
      display: flex;
      align-items: center;
    }
    &-center {
      display: flex;
      flex-direction: column;
      margin-right: 80px;
      &__tag {
        margin-top: 9px;
      }
    }
    &__company,
    &__district {
      font-size: 15px;
      margin-right: 25px;
      color: #5f5f5f;
      font-weight: 800;
      cursor: pointer;
    }
    &__company {
      max-width: 277px;
      width: auto;
    }
    &-center {
      &__bottom {
        display: flex;
        align-items: center;
      }
    }
    &__title {
      margin-bottom: 15px;
      font-size: 25px;
      color: black;
      max-width: 640px;
    }
    &__tag {
      padding: 4px 8px;
      margin-right: 10px;
      color: #4c4c4c;
      border-radius: 4px;
      font-size: 14px;
      line-height: 2.5;
      transition: all 0.5s;
      border: 1px solid #676666;
      &:hover {
        background-color: #f7963f;
        border-color: #f7963f;
        color: white;
      }
    }
    &__bag {
      width: 24px;
      position: relative;
      top: -3px;
      margin-right: 8px;
    }
    &__map {
      width: 24px;
      opacity: 0.5;
    }
    &__apply {
      padding: 9px 21px;
      border: 1px solid #636363;
      color: black;
      transition: all 0.5s;
      &:hover {
        background-color: #232323;
        color: white;
        border-color: #232323;
      }
    }
    &__state {
      margin-right: 15px;
      padding: 9px 21px;
      border: 1px solid #74bd3d;
      color: #74bd3d;
      transition: all 0.5s;
      &:hover {
        background-color: #74bd3d;
        color: white;
      }
      &.intern {
        border: 1px solid #dc48b8;
        color: #dc48b8;
        &:hover {
          background-color: #dc48b8;
          color: white;
        }
      }
    }
    &-left {
      margin-right: 20px;
      margin-left: 18px;
      img {
        max-width: 95px;
      }
    }
    &__right {
      &-wrp {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 32px;
      }
    }
    &:hover {
      border-left-width: 15px;
    }
  }
  &-all {
    text-align: center;
    display: inline-block;
    margin: 50px auto;
    width: 312px;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    background-color: #f7963f;
    transition: all 0.5s;
    cursor: pointer;
    &__link {
      color: white;
      font-size: 20px;
    }
    &:hover {
      .jobs-all__link {
        color: #2f2f2f;
      }
    }
  }
}
</style>
