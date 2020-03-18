<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:34:15
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-18 20:30:58
 * @Description: 
 -->
<template>
  <div class="LoginPage_wrapper">
    <h2>行走</h2>
    <div class id="container"></div>
  </div>
</template>

<script>
// import AMap from 'AMap'
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    init() {
      if (window.AMap) {
        // var map = new AMap.Map("container");
        console.log(window.AMap);
      }
      // var map = new AMap.Map("container");
      // var map = new AMap.Map("container", {
      //   resizeEnable: true, //是否监控地图容器尺寸变化
      //   zoom: 11, //初始化地图层级
      //   center: [116.397428, 39.90923] //初始化地图中心点
      // });
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
  #container {
    width: 100%;
    height: 400px;
  }
}
</style>