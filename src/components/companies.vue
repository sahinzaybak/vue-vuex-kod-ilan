<template>
  <div class="companies">
    <div class="compaines-title_wrp">
      <h2 class="companies-title">İlan Veren Firmalar</h2>
    </div>
    <div class="companies-wrp">
      <swiper :options="swiperOption">
        <swiper-slide class="slide slider-item" v-for="job in jobList" :key="job.id">
           <router-link :to="{path : 'ilanlar/' + job.slug}">
          <div class="companies-item">
            <img class="companies-item__logo" :src="job.company.logo" />
            <p class="companies-item__name">12</p>
            <p class="companies-item__district">{{job.location}}</p>

            <div class="companies-info">
              <div class="companies-info__item">
                <p class="companies-info__number">{{job.company.name.length}}</p>
                <p class="companies-info__text">İlan Sayısı</p>
              </div>
              <div class="companies-info__item">
                <p class="companies-info__number">56</p>
                <p class="companies-info__text">İşe Alım</p>
              </div>
              <div class="companies-info__item">
                <p class="companies-info__number">29</p>
                <p class="companies-info__text">Marka Yorumu</p>
              </div>
            </div>
          </div>
           </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        spaceBetween: 15,
        slidesPerView: 6,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    ...mapState(["jobList"])
  }
};
</script>

<style lang="scss">
.swiper-container {
  overflow: visible;
}
.companies {
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 9;
  top: -135px;
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-right: 1px solid gainsboro;
    border: 1px solid gainsboro;
    border-radius: 10px;
    padding: 6px 0;
    padding-bottom: 11px;
    height: 170px;
    cursor: pointer;
        box-shadow: #b5b5b5 1px 23px 60px -7px;
    &__logo {
      max-width: 65px;
      min-height: 68px;
    }
    &__name {
      font-size: 16px;
      color: #f7963f;
      font-weight: 700;
      text-align: center;
      padding: 0 9px;
    }
    &__district {
      color: #3a3a3a;
      font-size: 18px;
      margin-top: 1px;
      font-weight: 500;
    }
    &:hover {
      .companies-info {
        opacity: 1;
      }
    }
  }
  &-title {
    color: white;
    font-weight: 300;
    position: relative;
    top: -10px;
  }
  &-info {
    display: flex;
    opacity: 0;
    position: absolute;
    left: 0;
    z-index: 9;
    top: -200px;
    background-color: #1f1f1fa3;
    padding: 31px 28px;
    border-radius: 8px;
    width: 560px;
    transition: all 0.5s;

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 4px 5px;
      border-radius: 5px;
      padding: 16px 8px;
      margin-right: 20px;
      width: 343px;
      color: white;
      &:nth-child(1) {
        background: linear-gradient(45deg, #f04666 0%, #ffa18b 100%);
      }
      &:nth-child(2) {
        background: linear-gradient(45deg, #ff973b 0%, #ffe328 100%);
      }
      &:nth-child(3) {
        background: linear-gradient(45deg, #42d16a 0%, #8fd142 100%);
        margin-right: 0;
      }
    }
    &__number {
      color: white;
      font-weight: 900;
      font-size: 40px;
    }
    &__text {
      color: white;
      font-weight: 500;
      font-size: 17px;
      width: 100%;
      text-align: center;
    }
    &:after {
      content: "";
      position: absolute;
      border-top: solid 11px #f7963f;
      border-left: solid 7px transparent;
      border-right: solid 7px transparent;
      bottom: -11px;
    }
  }
}
</style>
