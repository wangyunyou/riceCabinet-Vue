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

    let b = '{"status":"success","con":"\u63d0\u4ea4\u6210\u529f"}';
    console.log(b);
    console.log(JSON.parse(b));

    const Zootopia = [
      { name: "Nick", gender: 1, species: "Fox" },
      { name: "Judy", gender: 0, species: "Bunny" }
    ];
    for (const { name, species } of Zootopia) {
      console.log(`hi,I am ${name},and I am a ${species}`);
    }
  },

  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
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