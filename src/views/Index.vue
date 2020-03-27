<template>
  <div id="container">
    <router-view />
    <van-tabbar
      safe-area-inset-bottom
      v-model="active"
      active-color="#EEC487"
      inactive-color="#777"
      route
      v-if="$route.meta.showTab"
    >
      <van-tabbar-item replace to="/">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.indexActive : icon.indexInactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/Mine">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.mineActive : icon.mineInactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 0,
      icon: {
        indexActive: "http://rpic.gisea.cn/home_1.png",
        indexInactive: "http://rpic.gisea.cn/home_2.png",
        mineActive: "http://rpic.gisea.cn/my_1.png",
        mineInactive: "http://rpic.gisea.cn/my_2.png"
      }
    };
  },
  mounted() {}
};
</script>

<style scoped>
</style>