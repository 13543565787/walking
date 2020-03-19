<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:09:10
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-19 17:15:27
 * @Description: 主页盒子，包含三大模块
 -->
<template>
  <div class="Home_wrapper">
    <nav class="nav_wrapper">
      <ul class="nav_list">
        <li class="nav_item" @click="navHandle(index)" :class="{active:index === curIndex}" v-for="(item,index) in nav_list" :key="index">
          <router-link class="item_content" :to="{name: item.to }" tag='div' >
            <img :src="item.img" alt="">
            <h3>{{ item.title }}</h3>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      curIndex: 0, // 当前页面
      nav_list:[
        {title:"行走",to:"walking",img:require("../../assets/img/nav/map.png")},
        {title:"写动态",to:"writing",img:require("../../assets/img/nav/comment.png")},
        {title:"我的",to:"about",img:require("../../assets/img/nav/about.png")},
      ],
    };
  },
  methods: {
    navHandle(index){
      console.log(index);
      this.curIndex = index;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.Home_wrapper {
  .nav_wrapper {
    position: absolute;
    left: 0px;
    bottom: 45px;
    z-index: 99;
    width: 100%;
    height: 66px;
    ul.nav_list {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      li.nav_item {
        width: 50px;
        height: 100%;
        text-align: center;
        transition: transform 0.4s;
        &.active{
          transform: scale(1.2);
        }
        .item_content{
          img{
            width: 44px;
            height: 44px;
          }
        }
      }
    }
  }
}
</style>