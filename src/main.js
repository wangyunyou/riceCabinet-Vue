import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import axios from "axios";

import "./assets/normalize.css";

Vue.use(Vuex);

//使用$axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

//Vuex
const store = new Vuex.Store({
  state: {
    count: 50,
    list: [1, 5, 8, 10, 30, 50]
  },
  getters: {
    filteredList: state => {
      return state.list.filter(item => item < 10);
    },
    listCount: (state, getters) => {
      return getters.filteredList.length;
    }
  },
  mutations: {
    increment(state, n = 10) {
      state.count += n;
    },
    decrease(state) {
      state.count--;
    }
  }
});

//自定义指令改title
Vue.directive("title", {
  inserted: function(el) {
    document.title = el.dataset.title;
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
