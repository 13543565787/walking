<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:22:31
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-20 11:29:00
 * @Description: 登录界面的盒子，包含首页、登录页、注册页
 -->
<template>
  <div class="LoginPage_wrapper" ref="loginpage">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    init() {
      // 初始化页面高度，防止输入框的输入法导致页面变形！！！
      this.clientHeight = this.$refs.loginpage.clientHeight;
      this.$refs.loginpage.style.height = this.clientHeight + "px";
      console.log("登录界面初始化高度！");
    }
  },
  computed: {},
  mounted() {
    this.init();
  }
};
</script>

<style scoped lang="less">
.LoginPage_wrapper {
  width: 100%;
  height: 100vh; // 这个会使页面变形，所以需要给出固定值！
  overflow: hidden;
  background-color: #fafafa;
}
</style>