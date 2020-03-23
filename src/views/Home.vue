<template>
  <div class="container" v-title data-title="海粮米业">
    <div class="itemBar">
      <img class="barBg" src="http://rpic.gisea.cn/banner_top.png" alt />
      <ul class="itemBox">
        <li @click="toScan">
          <img src="http://rpic.gisea.cn/Scan.png" alt />
          <span>扫一扫</span>
        </li>
        <li @click="toActivity">
          <img src="http://rpic.gisea.cn/activity.png" alt />
          <span>活动</span>
        </li>
      </ul>
    </div>
    <Swiper></Swiper>
    <div class="indexTitle">
      <img src="http://rpic.gisea.cn/Title_1.png" />
    </div>
    <div class="words">
      <div>全自动智能售米柜，柜内米源为优质“盐田玉”大米，全部农场直供。智能自助化的购买方式，避免面对面接触购买。</div>
      <div>柜内恒温除湿，不受潮、防虫蛀，是为社区居民24小时全天候服务的鲜米提供者。</div>
      <div>使用时，只需选择大米规格，扫码支付后即可自助取袋装米，比传统买米方式更便捷省力，让买米成为轻松事。</div>
    </div>
    <div class="imgNormal">
      <img src="http://rpic.gisea.cn/Cabinet.png" />
    </div>
    <div style="width:100%;height:20rpx;background:#f5f5f5;"></div>
    <div class="indexTitle">
      <img src="http://rpic.gisea.cn/Title_2.png" />
    </div>
    <div class="fullImg">
      <img src="http://rpic.gisea.cn/rice.png" />
    </div>
    <div style="height:100px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import Vue from "vue";
import Swiper from "@/components/Swiper.vue";
import { Button } from "vant";
import { Dialog } from "vant";

Vue.use(Dialog);
Vue.use(Button);
export default {
  name: "Home",
  components: {
    Swiper
  },
  data() {
    return {};
  },
  methods: {
    toActivity() {
      console.log(this.$router);
      this.$router.push("/Activity");
    },
    toScan() {
      Dialog.alert({
        title: "会员功能暂未开放，敬请期待"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>
<style scoped>
.itemBar {
  width: 100%;
  position: relative;
  margin: 10px 0;
}

.barBg {
  width: 100%;
}

.itemBox {
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
}

.itemBox li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25%;
  height: 100%;
}

.itemBox li img {
  width: 40%;
}

.itemBox li span {
  font-size: 0.9rem;
  color: #bf8d5b;
  margin-top: 1px;
}

.indexTitle,
.fullImg {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: 30px;
}

.imgNormal {
  width: 100%;
  padding: 0 25%;
  box-sizing: border-box;
}

.indexTitle img,
.imgNormal img,
.fullImg img {
  width: 100%;
}

.words {
  width: 100%;
  font-size: 0.9rem;
  padding: 10px;
  box-sizing: border-box;
  text-align: justify;
}
</style>
