<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:48:51
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-19 21:23:02
 * @Description: 
 -->
<template>
  <div class="FirstPage_wrapper" :style="{backgroundImage:`url(${bgImg})`}">
    <div class="login_wrapper">
      <div class="title_content">
        <h2>行走</h2>
        <div class="icons">
          <i class="xing">行</i>
          <i class="zou">走</i>
        </div>
        <p>WALKING</p>
      </div>
      <div class="btn_wrapper">
        <router-link tag="button" class="login_btn" :to="{name:'login'}">登录/LOGIN</router-link>
        <router-link tag="button" class="register_btn" :to="{name:'register'}">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bgImg: require("../../assets/img/login/firstPage.jpg")
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
@keyframes line_animate {
  0% {
    transform: translateX(-24px);
  }
  100% {
    transform: translateX(184px);
  }
}
.FirstPage_wrapper {
  width: 100%;
  height: 100%;
  background: no-repeat right top / cover;
  position: relative;
  .login_wrapper {
    // background-color: #aaa;
    width: 150px;
    // height: 270px;
    height: auto;
    position: absolute;
    right: 14px;
    top: 240px;
    // transform: translateY(-50%);
    color: #141414;
    .title_content {
      .icons {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .xing,
        .zou {
          padding: 0 4px;
          font-size: 44px;
        }
        .xing {
          transform: rotate(-15deg);
        }
        .zou {
          transform: rotate(15deg);
        }
      }
      h2 {
        font-size: 0;
        visibility: hidden;
      }
      p {
        font-size: 31px;
        letter-spacing: 1px;
        text-align: center;
        padding-top: 4px;
        &::after{
          content: "";
          display: block;
          width: 34px;
          height: 2px;
          // background-color: #2997ff;
          border-radius: 4px;
          // background-color: #2997ff;
          // background: linear-gradient(180deg, #2997ff,#2997ff62, #00000000);
          // background: -webkit-linear-gradient(180deg, #2997ff,#2997ff62, #00000000);
          
          background: linear-gradient(-90deg, #2997ff,rgba(255, 255, 255, 0));
          background:-moz-linear-gradient(-90deg, #2997ff,rgba(255, 255, 255, 0));
          background:-webkit-linear-gradient(-90deg, #2997ff,rgba(255, 255, 255, 0));
          background:-o-linear-gradient(-90deg, #2997ff,rgba(255, 255, 255, 0));
          animation: line_animate 1.4s linear infinite;
        }
      }
    }
    .btn_wrapper{
      // background-color: #ccc;
      width: 100%;
      height: 120px;
      margin-top: 24px;
      .login_btn{
        width: 100%;
        height: 60px;
        background-color: #007ef9;
        font-size: 19px;
        // font-weight: bold;
        color: #fff;
        // border: 1px solid #141414;
        border-radius: 34px;
      }
      .register_btn{
        width: 100%;
        height: 60px;
        font-size: 19px;

      }
    }
  }
}
</style>