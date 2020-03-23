<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:37:51
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 12:00:42
 * @Description: 
 -->
<template>
  <div class="AboutCnt_wrapper">
    <AboutHeader></AboutHeader>
    <router-view class="content"></router-view>
    <!-- <ul class="traggle_list">
      <li class="traggle_item">
        <FirstPage></FirstPage>
      </li>
      <li class="traggle_item">
        <Footprint></Footprint>
      </li>
      <li class="traggle_item">
        <Moment></Moment>
      </li>
    </ul> -->
  </div>
</template>

<script>
import AboutHeader from "@/pages/homePage/aboutCnt/AboutHeader";
// import FirstPage from "@/pages/homePage/aboutCnt/FirstPage";
// import Footprint from "@/pages/homePage/aboutCnt/Footprint";
// import Moment from "@/pages/homePage/aboutCnt/Moment";

export default {
  components: {
    AboutHeader,
    // FirstPage,
    // Footprint,
    // Moment,
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
  .content{
    background-color: #fafafa;
    box-sizing: border-box;
    padding-top: 14px;
  }
}
</style>