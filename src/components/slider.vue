<template>
  <div class="slider">
    <swiper :options="swiperOption">
      <swiper-slide class="slide slider-item">
        <img src="https://connxus.com/wp-content/uploads/2018/10/44741940_m.jpg" alt />
      </swiper-slide>
      <swiper-slide class="slide slider-item">
        <img src="https://connxus.com/wp-content/uploads/2018/10/44741940_m.jpg" alt />
      </swiper-slide>
    </swiper>
    <!-- <div class="swiper-pagination"></div> -->

    <search />
  </div>
</template>

<script>
import search from "./search";
export default {
  name: "Slider",
  components: { search },
  data() {
    return {
      swiperOption: {
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        }
      }
    };
  }
};
</script>
<style lang="scss">
.slider {
  position: relative;
  height: 92vh;
  overflow: hidden;
  border-bottom: 10px solid #f7963f;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #f7963f8a;
    pointer-events: none;
    width: 100%;
    height: 100%;
    z-index: 9;
    background: #f12711;
    background: -webkit-linear-gradient(to right, #31302ea6, #212120d6);
    background: linear-gradient(to right, #31302ea6, #212120d6);
  }
}
</style>
