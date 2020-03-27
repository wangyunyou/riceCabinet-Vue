<template>
  <div>
    <button @click="toTest">去测试页面，导航守卫</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {




  },
  //导航守卫
  beforeRouteEnter(to, from, next) {
    console.log(to.name,from.name);
    // 如果想获取到实例的话
    // next(vm=>{
    //   // 这里的vm是组件的实例（this）
    // });
    next();
  },
  // 路由即将要离开的时候调用此方法
  // 比如说，用户编辑了一个东西，但是还么有保存，这时候他要离开这个页面，就要提醒他一下，还没保存，是否要离开
  beforeRouteLeave(to, from, next) {
    const leave = confirm("确定要离开吗？");
    if (leave) next();
    // 离开
    else next(false); // 不离开
  },


  methods: {
    toTest() {
      this.$router.push("/Test");
    }
  },
  computed: {}
};
</script>
<style scoped>
</style>     