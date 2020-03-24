<template>
  <div id="Tprops">
    <div :style="{color:mycolor}" @click="call">测试组件</div>
  </div>
</template>
<script>
export default {
  name: "Tprops",
  props: ["mycolor"],
  data() {
    return {};
  },
  methods: {
    call() {
      this.$emit("display", { name: "success" });
    }
  }
};
</script>
<style>
</style>     