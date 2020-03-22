<!--
 * @Autor: hjz
 * @Date: 2020-03-22 11:28:12
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-22 15:00:56
 * @Description: 
 -->

<template>
  <div class="HomeHeader_wrapper">
    <h2 class="logo_txt">行走</h2>
    <label class="search_wrapper" :class="{active:isFocus}">
      <img :src="searchImg" alt />
      <input
        @focus="focusHandle"
        @blur="blurHandle"
        type="text"
        class="search_input"
        placeholder="寻找你的足迹..."
      />
    </label>
    <div class="profile_wrapper">
      <img :src="profileImg" alt />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      profileImg: require("../../../assets/img/home/profileImg.jpg"),
      searchImg: require("../../../assets/img/home/search.png"),
      isFocus: false
    };
  },
  methods: {
    focusHandle() {
      this.isFocus = true;
    },
    blurHandle() {
      this.isFocus = false;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.HomeHeader_wrapper {
  background-color: #fff;
  position: relative;
  z-index: 999;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo_txt {
    flex: 0 0 auto;
    width: 57px;
    height: 44px;
    margin: 0 14px;
    line-height: 44px;
    color: #0084ff;
    font-size: 24px;
    letter-spacing: 4px;
  }
  .search_wrapper {
    flex: 1 1 auto;
    // padding: 4px 17px 4px 34px;
    padding: 4px 0;
    box-sizing: border-box;
    height: 34px;
    background-color: #e3e3e5;
    border-radius: 17px;
    display: flex;
    align-items: center;
    border: 1px solid #e3e3e5;
    transition: all 0.4s ease-out;
    &.active{
      background-color: #fff;
      border: 1px solid #aaa;
    }
    img {
      flex: 0 0 auto;
      margin: 0 7px 0px 10px;
      width: 21px;
      height: 21px;
    }
    input {
      flex: 1 1 auto;
      width: 100%;
      height: 100%;
      padding-right: 14px;
      color: #1a1a1a;
      line-height: auto;
      outline-style: none;
      background: transparent;
      font-size: 15px;
      border: none;
      box-sizing: border-box;
    }
  }
  .profile_wrapper {
    flex: 0 0 auto;
    width: 40px;
    height: 40px;
    margin: 0 14px;
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
    }
  }
}
</style>