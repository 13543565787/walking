<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:22:15
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-20 01:02:47
 * @Description: 
 -->
<template>
  <div class="Login_wrapper" ref="loginpage">
    <!-- <div class="top_wrapper" :style="{backgroundImage:`url(${bgImg})`}"> -->
    <div class="top_wrapper">
      <div class="logo_wrapper">
        <img :src="logoImg" alt />
      </div>
      <h3>Sign In</h3>
    </div>
    <div class="login_content">
      <div class="title">行走,欢迎您!</div>
      <div class="tips">请登录进入行走主页</div>
      <input type="text" class="username" v-model="name" @blur="blurHandle" placeholder="username" />
      <input type="password" class="password" placeholder="password" />
      <router-link tag="button" class="login_btn" :to="{name:'walking'}">登录(进入主页)</router-link>
      <div class="register_tip">没有账号可免费注册</div>
      <router-link tag="button" class="register_btn" :to="{name:'register'}">免费注册(进入注册页面)</router-link>
      <div class="hover">{{ clientHeight }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bgImg: require("../../assets/img/login/firstPage.jpg"),
      logoImg: require("../../assets/img/login/logo.png"),
      bgImg: require("../../assets/img/login/firstPage.jpg"),
      name: "",
      clientHeight: ""
    };
  },
  methods: {
    blurHandle() {
      console.log("!!!");
      // document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  },
  computed: {},
  mounted() {
    // this.clientHeight = document.documentElement.clientHeight;
    console.log(this.$refs.loginpage);
    this.clientHeight = this.$refs.loginpage.clientHeight;
    window.onresize = () => {
      // this.clientHeight = this.$refs.loginpage.clientHeight;
      this.$refs.loginpage.style.height = this.clientHeight + "px";
    };
  }
};
</script>

<style scoped lang="less">
.Login_wrapper {
  width: 100%;
  height: 100%;
  // position: fixed;
  // top: 0;
  // overflow: hidden;
  // background-color: #ccc;
  // background-image: linear-gradient(180deg, #66b7f9, #1c82d4);

  .top_wrapper {
    width: 100%;
    height: 170px;
    position: relative;
    background-image: linear-gradient(180deg, #66b7f9, #1c82d4);

    .logo_wrapper {
      width: 64px;
      height: 64px;
      background-color: #fafafa;
      border-radius: 50%;
      position: absolute;
      top: 34px;
      left: 0px;
      right: 0px;
      margin: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      width: 100%;
      font-size: 31px;
      text-align: center;
      position: absolute;
      bottom: 14px;
      color: #fafafa;
    }
  }
  .login_content {
    width: 100%;
    height: calc(100% - 170px);
    background-color: #fafafa;
    box-shadow: 0px -1px 7px 0px #888;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-size: 24px;
      color: #1c82d4;
      font-weight: bold;
      margin: 34px 0 14px;
    }
    .tips {
      font-size: 17px;
      letter-spacing: 1px;
      color: #666;
      margin-bottom: 24px;
    }
    input {
      margin: 7px 0;
      width: 270px;
      height: 37px;
      // line-height: 37px;
      // line-height: 1;
      // box-sizing: border-box;

      border-radius: 24px;
      outline-style: none;
      border: 1px solid #ccc;
      text-indent: 21px;
      font-size: 21px;
      color: #141414;
      caret-color: #1c82d4;
      &::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #6a6f77;
      }
    }
    .login_btn {
    }
    .register_btn {
    }
  }
}
</style>