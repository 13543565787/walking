<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:22:22
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-20 17:35:57
 * @Description: 
 -->
<template>
  <div class="Login_wrapper">
    <!-- <div class="top_wrapper" :style="{backgroundImage:`url(${bgImg})`}"> -->

    <div class="top_wrapper">
      <div class="logo_wrapper">
        <img :src="logoImg" alt />
      </div>
      <h3>Sign In</h3>
    </div>
    <div class="login_content" :class="{active:isTop}">
      <div class="title">行走,欢迎您!</div>
      <div class="tips">请登录进入行走主页</div>
      <InputItem
        v-for="(item) in loginInputs"
        :key="item.inputId"
        :placeholder="item.placeholder"
        :inputType="item.inputType"
        :inputId="item.inputId"
        @inputHandle="getInputValue"
      ></InputItem>

      <button class="login_btn" @click="loginHandle" :disabled="!isLogin" :class="{active:isLogin}">
        <p style="display:none">登录</p>
        <img :src="loginImg" alt />
      </button>

      <!-- <button class="register_btn" @click="loginHandle" :disabled="!isLogin" :class="{active:isLogin}">
        <p style="display:none">登录</p>
        <img :src="loginImg" alt />
      </button>-->

      <div>{{ isLogin }}</div>

      <div class="register_wrapper" :to="{name:'register'}">
        <span class="register_tip">没有账号可</span>
        <router-link tag="a" class="register_btn" :to="{name:'register'}">免费注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import InputItem from "@/components/widget/InputItem.vue";
export default {
  components: {
    InputItem
  },
  data() {
    return {
      bgImg: require("../../assets/img/login/firstPage.jpg"),
      logoImg: require("../../assets/img/login/logo.png"),
      bgImg: require("../../assets/img/login/firstPage.jpg"),
      loginImg: require("../../assets/img/login/login.png"),
      loginInputs: [
        {
          inputId: "username",
          inputType: "text",
          placeholder: "username"
        },
        {
          inputId: "confirm_password",
          inputType: "password",
          placeholder: "confirm password"
        },
        {
          inputId: "password",
          inputType: "password",
          placeholder: "password"
        }
      ],
      inputMsgs: {}
    };
  },
  methods: {
    loginHandle() {
      console.log("点击");
      if (this.isLogin) {
        // 在允许登录的时候，才执行函数
        if (this.username == "aaa" && this.password == "123") {
          console.log("!!登录成功!!");
          this.$router.push({ name: "walking" });
        }
      }
    },
    getInputValue(value) {
      // 根据不同的回传inputId进行区分！

      let { inputId } = value;
      // inputMsgs是对象！！！！vue监听不到属性值的变化！！
      this.$set(this.inputMsgs, inputId, { ...value });
      // console.log("this.inputMsgs", this.inputMsgs);
    }
  },
  computed: {
    isTop() {
      let flag = false;
      Object.keys(this.inputMsgs).forEach(item => {
        if (!!this.inputMsgs[item].isFocus) {
          flag = true;
        }
      });
      return flag;
    },
    isLogin() {
      let flag = true;
      if (Object.keys(this.inputMsgs).length < this.loginInputs.length) {
        return false;
      }
      Object.keys(this.inputMsgs).forEach(item => {
        // console.log(this.inputMsgs[item].inputValue);
        if (!this.inputMsgs[item].inputValue) {
          console.log("true");
          // flag = flag && true;
          flag = false;
        }
      });
      return flag;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
@keyframes login_animate {
  0% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(14px);
  }
  100% {
    transform: translateX(-4px);
  }
}
.Login_wrapper {
  width: 100%;
  height: 100%;

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
    box-shadow: 0px -4px 4px 0px #888888a8;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.7s ease-in-out;
    &.active {
      transform: translateY(-170px);
    }
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
    p.input_wrapper {
      box-sizing: border-box;
      margin: 7px 0;
      position: relative;
      input {
        text-align: center;
        // text-indent: 21px;

        width: 270px;
        height: 44px;
        line-height: normal;
        border-radius: 24px;
        outline-style: none;
        border: 1px solid #ccc;
        font-size: 21px;
        color: #141414;
        caret-color: #1c82d4;
        &::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #6a6f77;
        }
      }
      i {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 14px;
        top: calc(50% - 10px);
        transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0.4s;
        &.active {
          opacity: 1;
          visibility: visible;
        }
        &::after,
        &::before {
          content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: #aaa;
          position: absolute;
          top: calc(50% - 1px);
        }
        &::before {
          transform: rotate(90deg);
        }
      }
      i.username_icon {
      }
      i.password_icon {
      }
    }

    .login_btn {
      width: 64px;
      height: 64px;
      background-color: #888;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 24px 0;
      &.active {
        background-color: #2997ff;
        img {
          animation: login_animate 1.4s infinite linear;
        }
      }
      img {
        width: 34px;
        height: 34px;
      }
    }
    .register_wrapper {
      width: 270px;
      height: auto;
      text-align: center;
      font-size: 17px;
      letter-spacing: 1px;
      color: #444;
      .register_tip {
      }
      .register_btn {
        font-size: 19px;
        // text-decoration: underline;
        border-bottom: 1px solid #007ef9;
        padding: 4px 0;
        color: #007ef9;
      }
    }
  }
}
</style>