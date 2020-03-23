<!--
 * @Autor: hjz
 * @Date: 2020-03-23 11:10:28
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 11:54:59
 * @Description: 个人主页的首页
 -->
<template>
  <div class="FirstPage_wrapper">
    <ul class="item_list">
      <li v-for="(item,index) in about_list" :key="index" class="list_item">
        <div class="item_wrapper">
          <div class="number">{{ item.number }}</div>
          <div class="tab">{{ item.tab }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      about_list: [
        { tab: "关注", number: "645" },
        { tab: "粉丝", number: "11454" },
        { tab: "足迹", number: "64514" }
      ]
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.FirstPage_wrapper {
  height: 200vh;
  .item_list {
    width: 100%;
    height: auto;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
}
</style>