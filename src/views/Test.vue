<template>
  <div id="test">
    <h6 style="text-align:center">测试</h6>
    <div>{{tips}}</div>
    <div v-show="show">show</div>
    <button @click="changeShow">切换显示</button>
    <ul>
      <li v-for="item in todos" :key="item.text" @click="log(item.text)">{{item.text}}</li>
    </ul>
    <input maxlength="10" v-model="message" />
    <div>您输入的是：{{ message }}</div>
    <Tprops mycolor="blue" @display="showSuccess"></Tprops>
    <div>子组件传值{{name}}</div>
  </div>
</template>
<script>
import Tprops from "@/components/Tprops";

export default {
  components: {
    Tprops
  },
  data() {
    return {
      tips: "页面加载于" + new Date().toLocaleString(),
      show: false,
      todos: [{ text: "学习 JavaScript" }, { text: "学习 Vue" }],
      message: "",
      name: ""
    };
  },
  mounted() {},
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    log(e) {
      console.log(e);
    },
    showSuccess(data) {
      this.name = data.name;
    }
  }
};
</script>
<style>
</style>     