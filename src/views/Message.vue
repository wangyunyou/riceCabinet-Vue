<template>
  <div>
    {{message}}
    {{count}}
    {{list}}
    {{listCount}}
    <button @click="handleClick">change</button>
    <button @click="increasre">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello",
      a: 1
    };
  },
  methods: {
    handleClick() {
      this.message = "vue" + this.a++;
    },
    increasre() {
      this.$store.commit("increment");
    },
    decrease() {
      this.$store.commit("decrease");
    }
  },
  mounted() {
    console.log(this.$store.state.count);
    console.log(this.$store.getters.filteredList);
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    list() {
      return this.$store.getters.filteredList;
    },
    listCount() {
      return this.$store.getters.listCount;
    }
  }
};
</script>
<style lang="">
</style>