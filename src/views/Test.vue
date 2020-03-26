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
    <div>您输入的是：{{ reverse }}</div>
    <Tprops mycolor="blue" @display="showSuccess"></Tprops>
    <div>子组件传值{{name}}</div>
    <div :class="{red:isRed}" :style="color">我是红色</div>
    <div v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username" />
    </div>
    <div v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email" />
    </div>
    <button @click="changeMode">Toggle login type</button>
    <ul>
      <li v-for="item in items" :key="item.message">{{ item.message }}</li>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>
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
      name: "",
      isRed: false,
      size: 30,
      color: {
        "font-size": "30px",
        color: "#f00"
      },
      loginType: "username",
      items: [{ message: "Foo" }, { message: "Bar" }],
      numbers: [1, 2, 3, 4, 5]
    };
  },
  mounted() {
    this.$set(this.color, "font-weight", "bold");

    console.log(this.$el)
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    log(e) {
      console.log(e);
    },
    showSuccess(data) {
      this.name = data.name;
    },
    changeMode() {
      if (this.loginType == "username") {
        this.loginType = "email";
      } else {
        this.loginType = "username";
      }
    }
  },
  computed: {
    reverse() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  }
};
</script>
<style scoped>
.red {
  color: #f00;
}
</style>     