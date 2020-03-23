<template>
  <div class="container" v-title data-title="选择活动">
    <div class="chooseBox">
      <img src="http://rpic.gisea.cn/city.png" class="icon" alt />
      <div style="margin-right:4px">{{name}}</div>
    </div>

    <div v-if="hasActivity">
      <div class="activityItem" v-for="item in item" :key="item.id">
        <img :src="item.visit_url" mode="widthFix" />
      </div>
    </div>

    <div v-else>
      <div class="none">
        <img src="http://rpic.gisea.cn/none.png" mode="widthFix" />
      </div>
      <div class="noneTip">当前运营商暂时没有活动</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "ChooseActivity",
  data() {
    return {
      id: "",
      name: "",
      hasActivity: false,
      item: []
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.name = this.$route.query.name;
    axios({
      method: "post",
      url: "/api/rice-service/getOperatorActivityDetail",
      params: {
        operatorId: this.id
      }
    }).then(res => {
      console.log(res);

      if (JSON.stringify(res.data.data) == "[]") {
        this.hasActivity = false;
      } else {
        let activity = [];
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].activity_state == 1) {
            activity.push(res.data.data[i]);
          }
        }
        if (activity.length != 0) {
          this.item = activity;
          this.hasActivity = true;
        } else {
          this.hasActivity = false;
        }
      }
    });
  }
};
</script>

<style scoped>
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

.activityItem {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}

.activityItem img {
  width: 100%;
  display: block;
  margin-bottom: 20px;
}

.none {
  width: 100%;
  margin-top: 45%;
  margin-bottom: 20px;
  text-align: center;
}

.none image {
  width: 40%;
}

.noneTip {
  width: 100%;
  text-align: center;
  color: #afb4bf;
}
</style>