<!--
 * @Autor: hjz
 * @Date: 2020-03-23 16:03:12
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-24 17:13:45
 * @Description: 
 -->
<template>
  <div class="Attention_wrapper">
    <h2>{{ isAttention ? "关注列表":"粉丝列表"}}</h2>
    <ul class="menber_list">
      <li class="list_item" v-for="(item,index) in menber_list" :key="index">
        <router-link :to="{name:'onemoment',params:{username:item.name,userImg:item.picture,detail:item.detail}}" tag="div" class="item_wrapper">
          <img class="pic_img" :src="item.picture" alt />
          <span class="name">{{ item.name }}</span>
          <img class="gender_img" :src="item.gender == 1? maleImg:femaleImg" alt />
          <img class="vip_img" v-show="item.vip" :src="vipImg" alt />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isAttention: false,
      menber_list: [
        {
          name: "用户1",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic1.jpg"),
          vip: true,
          gender: 1,
          detail:"新的一天新的开始！人生前方总有希望！"
        },
        {
          name: "用户2",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic2.jpg"),
          vip: true,
          gender: 0,
          detail:"新的一天新的开始！人生前方总有希望！"
        },
        {
          name: "用户3",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic3.jpg"),
          vip: true,
          gender: 1,
          detail:"新的一天新的开始！人生前方总有希望！"
        },
        {
          name: "用户4",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic4.jpg"),
          vip: false,
          gender: 2,
          detail:"新的一天新的开始！人生前方总有希望！"
        },
        {
          name: "用户5",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic5.jpg"),
          vip: true,
          gender: 1,
          detail:"新的一天新的开始！人生前方总有希望！"
        }
      ],
      maleImg: require("../../../assets/img/home/aboutCnt/attention/male.png"),
      femaleImg: require("../../../assets/img/home/aboutCnt/attention/female.png"),
      vipImg: require("../../../assets/img/home/aboutCnt/attention/vip.png")
    };
  },
  methods: {},
  computed: {},
  mounted() {
    if (this.$route.params.isAttention) {
      this.isAttention = true;
    }
  }
};
</script>

<style scoped lang="less">
.Attention_wrapper {
  h2 {
    width: 100%;
    font-size: 24px;
    padding: 14px 0 4px;
    padding-left: 14px;
    color: #141414;
    letter-spacing: 2px;
    // text-align: center;
    font-weight: normal;
  }
  .menber_list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    // align-items: center;

    .list_item {
      flex: 0 0 auto;
      margin: 4px 0;
      padding: 14px 14px;
      background-color: #fff;
      width: 100%;
      .item_wrapper {
        display: flex;
        justify-items: center;
        align-items: center;
        img.pic_img {
          width: 44px;
          height: 44px;
        }
        span.name {
          font-size: 17px;
          color: #141414;
          letter-spacing: 1px;
          padding: 0 13px;
        }
        img.gender_img {
          width: 24px;
          height: 24px;
        }
        img.vip_img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>