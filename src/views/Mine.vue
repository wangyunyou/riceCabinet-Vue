<template>
  <div class="container" v-title data-title="我的">
    <div class="photoBox">
      <van-icon name="smile-o" style="font-size:50px" />
      <div style="margin-top:10px">王云优</div>
    </div>
    <ul class="itemBox">
      <li v-for="item in array" :key="item.title" @click="toUrl(item.to)">
        <div class="imgBox">
          <img :src="item.icon" alt />
        </div>
        {{item.title}}
      </li>
    </ul>
    <div style="height:10px;background:#f5f5f5"></div>
    <van-cell-group>
      <van-cell
        v-for="item in userItems"
        :key="item.title"
        :title="item.title"
        is-link
        :to="item.to"
        :icon="item.icon"
      />
    </van-cell-group>
    <div style="height:10px;background:#f5f5f5"></div>
    <van-cell-group>
      <van-cell
        v-for="item in businessItems"
        :key="item.title"
        :title="item.title"
        is-link
        :to="item.to"
        :icon="item.icon"
      />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { Icon } from "vant";

Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  data() {
    return {
      array: [
        {
          icon: "http://rpic.gisea.cn/money.png",
          title: "我的钱包",
          to: "Money"
        },
        {
          icon: "http://rpic.gisea.cn/Record.png",
          title: "消费记录",
          to: "PayRecord"
        },
        {
          icon: "http://rpic.gisea.cn/Prize.png",
          title: "中奖记录",
          to: "PrizeRecord"
        }
      ],
      userItems: [
        { icon: "http://rpic.gisea.cn/help.png", title: "帮助", to: "Help" }
        // { icon: "http://rpic.gisea.cn/service.png", title: "客服", to: "help" }
      ],
      businessItems: [
        {
          icon: "http://rpic.gisea.cn/business.png",
          title: "我是商家",
          to: "Login"
        }
      ]
    };
  },
  methods: {
    toUrl(url) {
      this.$router.push("/" + url);
    }
  }
};
</script>

<style scoped>
.photoBox {
  width: 100%;
  height: 150px;
  background: #303845;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #29313d;
}

.itemBox {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #303845;
  color: #fff;
  border-top: 1px solid #3d4552;
}

.itemBox li {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.9rem;
}

.imgBox {
  width: 50%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.itemBox li img {
  width: 30px;
  height: 30px;
  margin-bottom: 4px;
}
</style>
