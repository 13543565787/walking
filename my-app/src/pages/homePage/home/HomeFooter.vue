<!--
 * @Autor: hjz
 * @Date: 2020-03-22 11:28:48
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-22 13:45:44
 * @Description: 
 -->

<template>
  <nav class="HomeFooter_wrapper">
    <ul class="nav_list">
      <li
        class="nav_item"
        :class="{active:index === curIndex}"
        v-for="(item,index) in nav_list"
        @click="setCurIndex(index)"
        :key="index"
      >
        <div class="item_content">
          <img :src="item.img" alt />
          <p class="text">{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // curIndex: 0, // 当前页面
      nav_list: [
        {
          title: "行走",
          to: "walking",
          img: require("../../../assets/img/nav/map.png")
        },
        {
          title: "写动态",
          to: "comments",
          img: require("../../../assets/img/nav/comment.png")
        },
        {
          title: "我的",
          to: "about",
          img: require("../../../assets/img/nav/about.png")
        }
      ]
    };
  },
  methods: {
    navHandle(index) {
      console.log(index);
      this.curIndex = index;
    },
    setCurIndex(index) {
      console.log("!!!");
      this.$store.dispatch("setCurCntIndexFun", index);
      this.$router.push({ name: this.nav_list[index].to });
      console.log(this.$store.state.curCntIndex);
    }
  },
  computed: {
    curIndex() {
      return this.$store.state.curCntIndex;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
@keyframes line_animation {
  0% {
    clip: rect(0px, 46px, 2px, 0px); // 上
  }
  25% {
    clip: rect(0px, 2px, 46px, 0px); // 左
  }
  50% {
    clip: rect(44px, 46px, 46px, 0px); // 下
  }
  75% {
    clip: rect(0px, 46px, 46px, 44px); // 右
  }
  100% {
    clip: rect(0px, 46px, 2px, 0px);
  }
}
.HomeFooter_wrapper {
  position: relative;
  width: 100%;
  height: 46px;
  background-color: #fafafa;
  ul.nav_list {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li.nav_item {
      width: 42px;
      height: 42px;
      text-align: center;
      transition: transform 0.4s;
      position: relative;
      z-index: 999;
      &.active {
        // transform: scale(1.2);
        &::before,
        &::after {
          animation: line_animation 8s linear infinite;
          box-shadow: inset 0 0 0 1px;
        }
        &::before {
          animation-delay: -4s;
        }
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        // background-color: rgba(255, 0, 0, 0.3);
        z-index: 99;
        color: #69ca62;
        margin: -2px;
        display: block;
        box-sizing: border-box;
      }
      .item_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 26px;
          height: 26px;
        }
        text {
          font-size: 14px;
        }
      }
    }
  }
}
</style>