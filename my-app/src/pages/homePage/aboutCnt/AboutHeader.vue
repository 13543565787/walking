<!--
 * @Autor: hjz
 * @Date: 2020-03-21 23:24:00
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 11:59:34
 * @Description: 个人中心的头部
 -->
<template>
  <div class="AboutHeader_wrapper">
    <div class="about_msgs_wrapper">
      <div class="img_wrapper">
        <img :src="aboutImg" alt />
        <img :src="menberImg" class="menber" alt="">
      </div>
      <div class="detail_wrapper">
        <h3 class="username">
          <span>何处惹尘埃</span>
          <img :src="genderImg" alt />
        </h3>
        <h4 class="detail_txt">简介：It's meant to be!</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      aboutImg: require("../../../assets/img/home/profileImg.jpg"),
      genderImg: require("../../../assets/img/home/gender.png"),
      menberImg: require("../../../assets/img/home/menber.png"),
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.AboutHeader_wrapper {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  .about_msgs_wrapper {
    width: 100%;
    height: 100px;
    padding: 14px 14px;
    box-sizing: border-box;
    display: flex;
    // justify-content: space-between;
    .img_wrapper {
      flex: 0 0 auto;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 14px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .menber{
        border-radius: 50%;
        background-color: #d81e06;

        width: 19px;
        height: 19px;
        position: absolute;
        right: -3px;
        bottom: 0px;
      }
    }
    .detail_wrapper {
      flex: 1 1 auto;
      width: 100%;
      height: 64px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .username {
        margin-bottom: 4px;
        display: flex;
        align-items: center;
        span {
          font-size: 21px;
          line-height: 30px;
          letter-spacing: 2px;
          font-weight: normal;
          margin-right: 4px;
          color: #141414;
        }
        img {
          width: 21px;
          height: 21px;
        }
      }
      .detail_txt {
        font-weight: normal;
        font-size: 14px;
        color: #444;
      }
    }
  }
}
</style>