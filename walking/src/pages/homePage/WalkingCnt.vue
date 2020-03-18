<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:34:15
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-18 20:49:55
 * @Description: 地图
 -->
<template>
  <div class="LoginPage_wrapper">
    <h2>行走</h2>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.LoginPage_wrapper {
  .amap-wrapper {
    .amap-box {
      width: 100%;
      height: 400px;
    }
  }
}
</style>