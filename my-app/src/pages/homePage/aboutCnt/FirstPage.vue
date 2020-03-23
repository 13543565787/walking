<!--
 * @Autor: hjz
 * @Date: 2020-03-23 11:10:28
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 16:17:13
 * @Description: 个人主页的首页
 -->
<template>
  <div class="FirstPage_wrapper">
    <ul class="item_list">
      <li v-for="(item,index) in about_list" :key="index" class="list_item">
        <router-link tag='div' class="item_wrapper" :to="{name:item.to,params:{isAttention:item.params}}">
          <div class="number">{{ item.number }}</div>
          <div class="tab">{{ item.tab }}</div>
        </router-link>
        <!-- <div class="item_wrapper">
          <div class="number">{{ item.number }}</div>
          <div class="tab">{{ item.tab }}</div>
        </div> -->
      </li>
    </ul>
    <ul class="link_list">
      <li class="list_item" v-for="(item,index) in link_list" :key="index">
        <router-link tag="div" class="item_wrapper" :to="{name:item.to}">
          <img class="icon" :src="item.img" />
          <div class="title">{{ item.title }}</div>
          <img class="btnImg" :src="btnImg" alt />
        </router-link>
      </li>
    </ul>
    <router-link tag="button" :to="{name:'login'}" class="btn_wrapper">
      <img class="icon" :src="switchImg" />
      <span>切换账号</span>
    </router-link>
    <router-link tag="button" :to="{name:'loginFirstPage'}" class="btn_wrapper">
      <img class="icon" :src="exitImg" />
      <span>退出登录</span>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      about_list: [
        { tab: "关注", number: "645" ,to:'attention', params:true},
        { tab: "粉丝", number: "11454" ,to:'attention',params:false},
        { tab: "足迹", number: "64514" ,to:'footprint',params:false}
      ],
      link_list: [
        {
          title: "全部动态",
          img: require("../../../assets/img/home/aboutCnt/moment.png"),
          to: 'moment'
        },
        {
          title: "我的足迹",
          img: require("../../../assets/img/home/aboutCnt/footprint.png"),
          to: 'footprint'
        },
        {
          title: "我的二维码",
          img: require("../../../assets/img/home/aboutCnt/qrcode.png"),
          to: ''
        },
        {
          title: "帮助与反馈",
          img: require("../../../assets/img/home/aboutCnt/feedback.png"),
          to: 'feedback'
        }
      ],
      switchImg: require("../../../assets/img/home/aboutCnt/switch.png"),
      exitImg: require("../../../assets/img/home/aboutCnt/exit.png"),
      btnImg: require("../../../assets/img/home/aboutCnt/btn.png")
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.FirstPage_wrapper {
  width: 100%;
  // height: auto;
  height: 100%;
  padding-top: 14px;
  .item_list {
    width: 100%;
    height: auto;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    padding: 14px 0px;

    .list_item {
      flex: 1;
      margin-right: -1px;
      border-right: 1px solid #aaa;
      &:last-child {
        border-right: none;
      }
      .item_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .number {
          font-size: 15px;
          color: #111;
        }
        .tab {
          font-size: 14px;
          color: #141414;
        }
      }
    }
  }
  .link_list {
    width: 100%;
    padding: 0px 14px;
    box-sizing: border-box;
    background-color: #fff;
    .list_item {
      &:last-child {
        .item_wrapper {
          border: none;
        }
      }
      .item_wrapper {
        width: 100%;
        // height: 64px;
        padding: 14px 0px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        img.icon {
          flex: 0 0 auto;
          width: 24px;
          height: 24px;
        }
        .title {
          flex: 1;
          width: 100%;
          color: #141414;
          font-size: 17px;
          margin-left: 14px;
        }
        img.btnImg {
          flex: 0 0 auto;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  button.btn_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 0;
    background-color: #fff;
    margin: 14px 0;
    img.icon {
      width: 24px;
      height: 24px;
      margin-right: 14px;
    }
    span {
      color: #111;
      font-size: 21px;
    }
  }
}
</style>