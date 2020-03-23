<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:37:51
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 15:07:00
 * @Description: 
 -->
<template>
  <div class="AboutCnt_wrapper">
    <AboutHeader></AboutHeader>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import AboutHeader from "@/pages/homePage/aboutCnt/AboutHeader";

export default {
  components: {
    AboutHeader
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
.AboutCnt_wrapper {
  position: relative;
  background-color: #fafafa;
  .content {
    box-sizing: border-box;
    height: 100%;
  }
}
</style>