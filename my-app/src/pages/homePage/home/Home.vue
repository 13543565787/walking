<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:09:10
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-22 14:30:11
 * @Description: 主页盒子，包含三大模块
 -->
<template>
  <div class="Home_wrapper">
    <HomeHeader class="header"></HomeHeader>
    <router-view class="content"></router-view>
    <HomeFooter class="footer"></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "@/pages/homePage/home/HomeHeader.vue";
import HomeFooter from "@/pages/homePage/home/HomeFooter.vue";
export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.Home_wrapper {
  width: 100%;
  height: 100vh;
  position: relative;
  .header{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 9999;
  }
  .content {
    width: 100%;
    min-height: 100%;
    padding: 45px 0 46px;
    box-sizing: border-box;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0px;
    z-index: 9999;
  }
}
</style>