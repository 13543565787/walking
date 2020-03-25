<!--
 * @Autor: hjz
 * @Date: 2020-03-25 12:17:09
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-25 12:54:26
 * @Description: title通用组件！
 -->
<template>
  <div class="Title_wrapper">
    <h2>{{ title }}</h2>
    <button @click="backHandle">
      <img :src="backImg" alt />
    </button>
    <div class="logo_wrapper">
      <img :src="logoImg" alt />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      // require:true,
      default: "标题"
    }
  },
  data() {
    return {
      backImg: require("../../assets/img/login/login.png"),
      logoImg: require("../../assets/img/login/logoImg.jpg")
    };
  },
  methods: {
    backHandle() {
      this.$router.back(-1);
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.Title_wrapper {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 7px 14px;
  // background-color: #5a8c6e;
  border-bottom: 1px solid #ddd;
  position: relative;
  h2 {
    letter-spacing: 3px;
    font-size: 24px;
    font-weight: bold;
    // color: #5a8c6e;
    color: #fff;
    -webkit-text-stroke: 1px #5a8c6e;
    // -webkit-text-stroke: 1px #fff;
  }
  button, .logo_wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5a8c6e;
    border-radius: 50%;
    img {
      width: 34px;
      height: 34px;
      transform: rotate(180deg);
    }
  }
  button{
    left: 7px;
  }
  .logo_wrapper{
    right: 14px;
    img {
      transform: none;
    }
  }
}
</style>