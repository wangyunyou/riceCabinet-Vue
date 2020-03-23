<template>
  <div class="container" v-title data-title="活动">
    <div class="tip">排名不分先后</div>
    <div class="chooseBox">
      <img src="http://rpic.gisea.cn/city.png" class="icon" alt />
      <div style="margin-right:4px" @click="showPopup">{{city}}</div>
      <van-icon name="arrow-down" />
    </div>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="businessList"
      v-if="hasCity"
    >
      <div
        v-for="item in business"
        :key="item.id"
        class="businessItem"
        @click="toDetail(item.realname,item.id,item.state)"
      >
        <div class="itemType">
          <div class="type">{{item.realname}}</div>
          <div class="address">{{item.address}}</div>
        </div>
        <div class="isActivity">
          <van-icon name="arrow" />
        </div>
      </div>
    </van-list>

    <div v-else class="chooseTip">请在上方选择城市</div>

    <van-popup v-model="show" position="bottom" :style="{ height: '42%' }">
      <van-picker
        show-toolbar
        :columns="columns"
        @change="onChange"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
    <!-- <button @click="chooseActivity">跳转</button> -->
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Popup } from "vant";
import { Picker } from "vant";
import { Icon } from "vant";
import { List } from "vant";
import { Toast } from "vant";

Vue.use(Toast);
Vue.use(List);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Picker);

export default {
  name: "Activity",
  data() {
    return {
      show: false,
      columns: [],
      city: "",
      business: [],
      hasCity: false,
      pageNum: 0,
      pageSize: 10,
      loading: false,
      finished: false
    };
  },
  created() {
    axios({
      method: "post",
      url: "/api/rice-service/getAllCity"
    }).then(res => {
      console.log(res);
      res.data.data.unshift("请选择城市");
      this.columns = res.data.data;
      this.city = res.data.data[0];
    });
  },
  methods: {
    // chooseActivity() {
    //   this.$router.push("/chooseActivity");
    // },
    showPopup() {
      this.show = true;
    },
    onChange(picker, value) {
      console.log(value);
      this.city = value;
    },
    onCancel() {
      this.show = false;
    },
    onConfirm() {
      this.pageNum = 1;
      this.finished = false;
      this.show = false;
      this.business = [];
      if (this.city == "请选择城市") {
        this.hasCity = false;
      } else {
        if (this.hasCity == true) {
          this.onLoad();
        }
        this.hasCity = true;
      }
    },
    onLoad() {
      this.chooseCity();
      this.pageNum++;
    },
    chooseCity() {
      axios({
        method: "post",
        url: "/api/rice-service/getByCityNameOperator",
        params: {
          cityName: this.city,
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
      }).then(res => {
        console.log(res);
        let businessList = res.data.data.list;
        this.loading = false;

        if (businessList == null || businessList.length === 0) {
          // 加载结束
          this.finished = true;
          return;
        }

        if (businessList.length < this.pageSize) {
          this.finished = true;
        }

        if (this.pageNum == 1) {
          this.business = businessList;
        } else {
          this.business = this.business.concat(businessList);
        }
      });
    },
    toDetail(realname, id, state) {
      console.log(realname, id, state);
      if (state == 0) {
        Toast("该运营商暂时无法提供活动");
      } else {
        this.$router.push({
          path: "/chooseActivity",
          query: { id: id, name: realname }
        });
      }
    }
  }
};
</script>

<style scoped>
.tip {
  width: 100%;
  height: 25px;
  line-height: 25px;
  background: #f1f1f1;
  color: #888;
  text-align: center;
  font-size: 0.9rem;
}

.chooseBox {
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.icon {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 5px;
}

.businessList {
  width: 100%;
  border-top: 1px solid #f5f5f5;
}

.businessItem {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
}

.itemType {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.isActivity {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 125px;
  color: #888;
}

.type {
  font-size: 16px;
  color: #242424;
}

.address {
  font-size: 13px;
  color: #a9a9a9;
}

.in {
  margin-left: 5px;
}

.chooseTip {
  width: 100%;
  margin-top: 150px;
  text-align: center;
}
</style>