<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:22:22
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-21 11:49:10
 * @Description: 登录注册框！
 -->
<template>
  <div class="Login_wrapper">
    <!-- <div class="top_wrapper" :style="{backgroundImage:`url(${bgImg})`}"> -->

    <div class="top_wrapper">
      <div class="logo_wrapper">
        <img :src="logoImg" alt />
      </div>
      <h3>{{ isRegister?"Sign Up":"Sign In" }}</h3>
    </div>

    <div class="content_wrapper">
      <!-- 登录界面 -->
      <div class="login_content" :class="{active:!isRegister&&isTop,selected:!isRegister}">
        <div class="title">行走,欢迎您!</div>
        <div class="tips">请登录进入行走主页</div>
        <InputItem
          v-for="(item) in loginInputs"
          :key="item.inputId"
          :placeholder="item.placeholder"
          :inputType="item.inputType"
          :inputId="item.inputId"
          @inputHandle="getLoginInputValue"
        ></InputItem>

        <button
          class="login_btn"
          @click="loginHandle"
          :disabled="!isLogin"
          :class="{active:!isRegister&&isLogin}"
        >
          <p style="display:none">登录</p>
          <img :src="loginImg" alt />
        </button>

        <div class="register_wrapper" :to="{name:'register'}">
          <span class="register_tip">没有账号可</span>
          <button class="register_link" @click="register_traggle">免费注册</button>
        </div>
      </div>

      <!-- 注册界面 -->
      <div class="register_content" :class="{active:isRegister&&isTop,selected:isRegister}">
        <div class="title">行走,欢迎您!</div>
        <div class="tips">请先注册自己的账号</div>
        <InputItem
          v-for="(item) in registerInputs"
          :key="item.inputId"
          :placeholder="item.placeholder"
          :inputType="item.inputType"
          :inputId="item.inputId"
          @inputHandle="getRegisterInputValue"
        ></InputItem>

        <button
          class="register_btn"
          @click="register_traggle"
          :disabled="!isLogin"
          :class="{active:isRegister&&isLogin}"
        >立即注册</button>
        
        <div class="toLogin">
          已经有帐号
          <button @click="register_traggle">直接登录</button>
        </div>
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
      isRegister: false, // 判断是登录还是注册框，初始化为登录框
      bgImg: require("../../assets/img/login/firstPage.jpg"),
      logoImg: require("../../assets/img/login/logo.png"),
      bgImg: require("../../assets/img/login/firstPage.jpg"),
      loginImg: require("../../assets/img/login/login.png"),
      // 登录输入框
      loginInputs: [
        {
          inputId: "username",
          inputType: "text",
          placeholder: "username"
        },
        {
          inputId: "password",
          inputType: "password",
          placeholder: "password"
        }
      ],
      // 注册输入框
      registerInputs: [
        {
          inputId: "register_username",
          inputType: "text",
          placeholder: "username"
        },
        {
          inputId: "register_confirm_password",
          inputType: "password",
          placeholder: "confirm password"
        },
        {
          inputId: "register_password",
          inputType: "password",
          placeholder: "password"
        }
      ],
      inputMsgs: {},
      login_inputMsgs: {}, //登录框的输入框信息
      register_inputMsgs: {} //注册框的输入信息
    };
  },
  methods: {
    loginHandle() {
      console.log("点击");
      if (this.isLogin) {
        // 在允许登录的时候，才执行函数
        this.$router.push({ name: "walking" });
      }
    },
    getLoginInputValue(value) {
      // 根据不同的回传inputId进行区分！
      let { inputId } = value;
      // inputMsgs是对象！！！！vue监听不到属性值的变化！！
      this.$set(this.login_inputMsgs, inputId, { ...value });
      // console.log("this.login_inputMsgs", this.login_inputMsgs);
    },
    getRegisterInputValue(value) {
      // 根据不同的回传inputId进行区分！
      let { inputId } = value;
      // inputMsgs是对象！！！！vue监听不到属性值的变化！！
      this.$set(this.register_inputMsgs, inputId, { ...value });
      // console.log("this.register_inputMsgs", this.register_inputMsgs);
    },
    // 登录界面和注册界面切换
    register_traggle() {
      this.isRegister = !this.isRegister;
    }
  },
  computed: {
    isTop() {
      let inputMsgs = {};
      if (this.isRegister) {
        inputMsgs = this.register_inputMsgs;
      } else {
        inputMsgs = this.login_inputMsgs;
      }
      let flag = false;
      Object.keys(inputMsgs).forEach(item => {
        if (!!inputMsgs[item].isFocus) {
          flag = true;
        }
      });
      return flag;
    },
    isLogin() {
      let inputMsgs = {};
      let length = "";
      if (this.isRegister) {
        inputMsgs = this.register_inputMsgs;
        length = this.registerInputs.length;
      } else {
        inputMsgs = this.login_inputMsgs;
        length = this.loginInputs.length;
      }

      let flag = true;
      if (Object.keys(inputMsgs).length < length) {
        return false;
      }
      Object.keys(inputMsgs).forEach(item => {
        // console.log(this.inputMsgs[item].inputValue);
        if (!inputMsgs[item].inputValue) {
          console.log("true");
          flag = false;
        }
      });
      return flag;
    }
  },
  mounted() {
    let {isRegister} = this.$route.params;
    if(isRegister){
      this.isRegister = true;
    }
  }
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
  position: relative;
  overflow: hidden;
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
  .content_wrapper {
    width: 100%;
    height: calc(100% - 170px);
    overflow: hidden;
  }

  // 登录界面
  .login_content,
  .register_content {
    position: absolute;
    top: 170px;
    left: 0px;
    z-index: 9;
    width: 100%;
    height: calc(100% - 170px);
    background-color: #fafafa;
    box-shadow: 0px -4px 4px 0px #888888a8;
    display: flex;
    flex-direction: column;
    align-items: center;
    // visibility: hidden;
    opacity: 0;
    transform: translateZ(0px);
    transition: opacity 0.4s ease-in-out,transform 0.7s ease-in-out;
    &.selected {
      // 指定当前选中的界面
      transform: translateZ(0px);
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }
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
    .register_btn {
      margin-top: 24px;
      width: 270px;
      height: 46px;
      background-color: #888;
      border-radius: 24px;
      color: #fafafa;
      font-size: 21px;
      letter-spacing: 3px;
      &.active {
        background-color: #1c82d4;
      }
    }
    .toLogin{
      margin-top: 24px;
      font-size: 14px;
      button{
        font-size: 17px;
        color: #1c82d4;
        border-bottom: 1px solid #1c82d4;
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
        padding-right: 14px;
      }
      .register_link {
        font-size: 19px;
        border-bottom: 1px solid #007ef9;
        padding: 4px 0;
        color: #007ef9;
      }
    }
  }
  .login_content {
    transform: translateX(-100%);
  }
  .register_content {
    transform: translateX(100%);
  }
}
</style>