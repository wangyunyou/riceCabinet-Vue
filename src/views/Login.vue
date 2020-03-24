<template>
  <div class="background" v-title data-title="商家登录">
    <div class="itemBox">
      <div class="item">
        <div class="title">用户名</div>
        <div class="inputBox">
          <input class="fullInput" type="text" v-model="username" placeholder="请输入用户名" />
        </div>
      </div>
      <div class="item">
        <div class="title">密码</div>
        <div class="inputBox">
          <input class="fullInput" type="text" placeholder="请输入密码" />
        </div>
      </div>
      <div class="item">
        <div class="title">校验码</div>
        <div class="inputBox">
          <input class="input55" type="text" placeholder="请输入验证码" />
          <Code class="input45" :value.sync="validCode" width="40%" height="2.5rem"></Code>
        </div>
      </div>
    </div>

    <!-- <div class="form-group" style="display: flex;">
      <div>
        <span>验证码：</span>
        <input type="text" id="code" v-model="code" class="code" placeholder="请输入您的验证码" />
      </div>
      <div class="login-code" @click="refreshCode">
        <s-identify :identifyCode="identifyCode"></s-identify>9
      </div>
    </div>-->
    <button class="loginBtn" @click="login">登录</button>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
import Code from "@/components/Code";

Vue.use(Dialog);
export default {
  components: {
    Code
  },

  data() {
    return {
      validCode:'',
      motto: "wangyunyou",
      username: "",
      images: [
        {
          url: "http://rpic.gisea.cn/banner/banner.png"
        },
        {
          url: "http://rpic.gisea.cn/banner/banner.png"
        }
      ]
    };
  },

  methods: {
    login() {
      console.log(this.username);
      console.log(this.validCode)
      if (this.username === "王云优") {
        Dialog.alert({
          title: "提示",
          message: "登录成功"
        }).then(() => {
          //close
          console.log("弹窗已关闭");
        });
      } else {
        Dialog.alert({
          title: "提示",
          message: "您的用户名或密码不正确"
        }).then(() => {
          //close
          console.log("弹窗已关闭");
        });
      }
    }
  }
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
  background: url(http://rpic.gisea.cn/Sign-in.png) no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
}

.itemBox {
  width: 100%;
  margin-top: 100px;
  padding: 20px;
  box-sizing: border-box;
}

.item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  height: 3rem;
  background: transparent;
}

.title {
  width: 20%;
  color: #a39fa0;
}

.inputBox {
  width: 80%;
  color: #a39fa0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.fullInput {
  width: 100%;
  border: 1px solid #a39fa0;
  color: #a39fa0;
  border-radius: 3px;
  background: #faf6f61f;
}

input {
  height: 2.5rem;
  padding: 0 5px;
  box-sizing: border-box;
}

.input55 {
  width: 55%;
  color: #a39fa0;
  border: 1px solid #a39fa0;
  border-radius: 3px;
  background: #faf6f61f;
  margin-right: 5%;
}

.input45 {
  width: 40%;
  height: 1.5rem;
  background: #fff;
}

.loginBtn {
  width: 90%;
  height: 40px;
  line-height: 40px;
  position: fixed;
  left: 5%;
  bottom: 50px;
  background: linear-gradient(to bottom, #f3dfb1, #caab73, #c7a86f);
  color: #6f541c;
  border: none;
  border-radius: 20px;
  line-height: 40px;
  letter-spacing: 0.5rem;
}

.code {
  width: 124px;
  height: 31px;
  border: 1px solid rgba(186, 186, 186, 1);
}
.login-code {
  cursor: pointer;
}
</style>
