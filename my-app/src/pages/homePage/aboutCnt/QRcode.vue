<!--
 * @Autor: hjz
 * @Date: 2020-03-24 18:30:11
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-24 18:53:37
 * @Description: 
 -->
<template>
  <div class="qrcode_wrapper">
    <h2>二维码</h2>
    <div class="img_wrapper">
      <!-- <img :src="qrcode" alt /> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      qrcode: require("../../../assets/img/home/aboutCnt/qrcode/qrcode.jpg"),
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.qrcode_wrapper {
  width: 100%;
  height: 100vh;
  padding: 14px;
  box-sizing: border-box;
  h2 {
    padding: 14px;
    font-size: 24px;
    letter-spacing: 2px;
    border-bottom: 1px solid #ddd;
    color: #444;
  }
  div.img_wrapper {
    width: 100%;
    img {
      width: 100%;
      // height: auto;
    }
  }
}
