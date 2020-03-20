<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:22:15
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-20 17:16:29
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
      <p class="input_wrapper">
        <input
          type="text"
          class="username"
          v-model="username"
          @focus="focusHandle(1)"
          @blur="blurHandle(1)"
          @input="changeHandle(1)"
          placeholder="username"
          ref="username_input"
        />
        <i class="username_icon" @click="deleteHandle(1)" :class="{active:username_icon}"></i>
      </p>

      <p class="input_wrapper">
        <input
          type="password"
          class="password"
          v-model="password"
          @focus="focusHandle(2)"
          @blur="blurHandle(2)"
          @input="changeHandle(2)"
          placeholder="password"
          ref="password_input"
        />
        <i class="password_icon" @click="deleteHandle(2)" :class="{active:password_icon}"></i>
      </p>

      <button class="login_btn" @click="loginHandle" :disabled="!isLogin" :class="{active:isLogin}">
        <p style="display:none">登录</p>
        <img :src="loginImg" alt />
      </button>

      <!-- <button class="register_btn" @click="loginHandle" :disabled="!isLogin" :class="{active:isLogin}">
        <p style="display:none">登录</p>
        <img :src="loginImg" alt />
      </button> -->

      <div class="register_wrapper" :to="{name:'register'}">
        <span class="register_tip">没有账号可 </span>
        <router-link tag="a" class="register_btn" :to="{name:'register'}">免费注册</router-link>
      </div>
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
      loginImg: require("../../assets/img/login/login.png"),
      name: "",
      isTop: "", // 登录框是否置顶

      username: "", // input的用户名
      password: "", // input的密码
      username_icon: false, // 展示删除键
      password_icon: false, // 展示删除键

      isLogin: false // 判断是否可以登录
    };
  },
  methods: {
    focusHandle(index) {
      this.isTop = true;
      // console.log("focus" + index);
      if (index === 1) {
        this.$refs.username_input.placeholder = "";
        if (!!this.username) {
          this.username_icon = true;
        }
      } else {
        this.$refs.password_input.placeholder = "";
        if (!!this.password) {
          this.password_icon = true;
        }
      }
    },
    blurHandle(index) {
      // console.log("blur" + index);
      this.isTop = false;
      if (index === 1) {
        this.$refs.username_input.placeholder = "username";
        this.username_icon = false;
      } else {
        this.$refs.password_input.placeholder = "password";
        this.password_icon = false;
      }
    },
    changeHandle(index) {
      // console.log("this.username", this.username);
      if (index === 1) {
        if (this.username) {
          this.username_icon = true;
          if (this.password) {
            // 逻辑是在用户名和密码都同时存在时候，才允许登录
            this.isLogin = true; // 允许登录
          } else {
            this.isLogin = false; // 不允许登录
          }
        } else {
          this.username_icon = false;
          this.isLogin = false; // 不允许登录
        }
      } else {
        if (this.password) {
          this.password_icon = true;
          console.log("!!!!登录");
          if (this.username) {
            // 逻辑是在用户名和密码都同时存在时候，才允许登录
            this.isLogin = true; // 允许登录
          } else {
            this.isLogin = false; // 不允许登录
          }
        } else {
          this.password_icon = false;
          this.isLogin = false; // 不允许登录
        }
      }
    },
    deleteHandle(index) {
      if (index === 1) {
        this.username = "";
        this.$refs.username_input.focus();
      } else {
        this.password = "";
        this.$refs.password_input.focus();
      }
    },
    loginHandle() {
      console.log("点击");
      if (this.isLogin) {
        // 在允许登录的时候，才执行函数
        if (this.username == "aaa" && this.password == "123") {
          console.log("!!登录成功!!");
          this.$router.push({ name: "walking" });
        }
      }
    }
  },
  computed: {
    // isTop(){}
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
        border-bottom:1px solid #007ef9;
        padding: 4px 0;
        color: #007ef9;
      }
    }
  }
}
</style>