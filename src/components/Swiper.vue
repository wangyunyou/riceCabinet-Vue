<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner.id" v-for="banner in banners">
        <img :src="banner.visitUrl" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template> 

<script>
import VueAwesomeSwiper from "vue-awesome-swiper";
import Vue from "vue";
import "swiper/css/swiper.css";
// import axios from "axios";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);
export default {
  data() {
    return {
      banners: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
        // ...
      }
    };
  },
  mounted() {
    console.log("Current Swiper instance object", this.mySwiper);
    this.mySwiper.slideTo(3, 1000, false);
    this.$axios({
      method: "post",
      url: "/api/rice-service/getFileAll",
      //text格式
      params: {
        type: "1"
      }
      //json格式
      // data: {
      //   type: '1'
      // }
    }).then(res => {
      console.log(res);
      this.banners = res.data.data;
    });
  }
};
</script>

<style>
.swiper-wrapper {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}

.swiper-slide {
  width: 100% !important;
}

.swiper-slide img {
  width: 100%;
  display: block;
}

.swiper-container {
  overflow: visible;
}

.swiper-pagination {
  overflow: auto;
  bottom: -1.1rem !important;
}

.swiper-pagination-bullet {
  width: 15px;
  height: 3px;
  border-radius: 0;
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #bf8d5b;
}
</style>