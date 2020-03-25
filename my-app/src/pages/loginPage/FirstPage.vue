<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:48:51
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-25 12:03:23
 * @Description: 
 -->
<template>
  <div class="FirstPage_wrapper">
    <div class="logo_wrapper">
      <img :src="logoImg" alt />
    </div>
    <div class="login_wrapper">
      <div class="title_content">
        <h2>行走</h2>
        <div class="icons">
          <i class="xing">行</i>
          <i class="zou">走</i>
        </div>
      </div>
      <!-- <p class="title">WALKING</p> -->
      <p class="desc">手机地图/社交产品</p>
    </div>
    <div class="btn_wrapper">
      <router-link tag="button" :to="{name:'login'}">进一步了解</router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      bgImg: require("../../assets/img/login/firstPage.jpg"),
      logoImg: require("../../assets/img/login/logoImg.jpg")
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
  background-color: #5a8c6e;
  // background: linear-gradient(180deg, #5a8c6e, #3a5846);
  position: relative;
  .logo_wrapper {
    width: 240px;
    height: 240px;
    position: absolute;
    top: 100px;
    left: 0px;
    right: 0px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login_wrapper {
    width: 250px;
    height: auto;
    position: absolute;
    top: 340px;
    left: 0px;
    right: 0px;
    margin: auto;
    color: #fafafa;
    .title_content {
      width: 100%;
      display: flex;
      justify-content: center;
      .icons {
        width: 150px;
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
    }
    p.title {
      font-size: 31px;
      letter-spacing: 1px;
      text-align: center;
      padding-top: 4px;
    }
    p.desc {
      padding-top: 14px;
      width: 100%;
      text-align: center;
      letter-spacing: 7px;
      font-size: 21px;
    }
  }
  .btn_wrapper {
    position: absolute;
    top: 470px;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    justify-content: center;
    button {
      display: block;
      width: 240px;
      height: 60px;
      background-color: #376146;
      font-size: 19px;
      color: #fff;
      border-radius: 34px;
      letter-spacing: 2px;
    }
  }
}
</style>