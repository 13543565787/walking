<!--
 * @Autor: hjz
 * @Date: 2020-03-23 11:13:50
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 20:23:22
 * @Description: 
 -->
<template>
  <div class="Footprint_wrapper">
    <h2>我的足迹</h2>
    <ul class="menber_list">
      <li class="list_item" v-for="(item,index) in footprint_list" :key="index">
        <router-link tag="div" class="item_wrapper" :to="{name:'moment'}">
          <img class="place_img" :src="item.picture" alt />
          <div class="detail_wrapper">
            <h4 class="place_txt">{{ item.place }}</h4>
            <div class="other_detail">
              <img class="locate_img" :src="locateImg" alt="">
              <span class="location_txt">{{ item.location }}</span>
              <span class="time">{{ item.time }}</span>
            </div>
          </div>
          <button class="btn">
            <img :src="btnImg" alt="">
          </button>
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
      footprint_list: [
        {
          location: "广东-广州",
          place: "景点A",
          time: "2020-03-23",
          picture: require("../../../assets/img/home/aboutCnt/footprint/pic1.jpg")
        },
        {
          location: "四川-成都",
          place: "景点B",
          time: "2020-03-23",
          picture: require("../../../assets/img/home/aboutCnt/footprint/pic2.jpg")
        },
        {
          location: "北京市",
          place: "景点C",
          time: "2020-03-23",
          picture: require("../../../assets/img/home/aboutCnt/footprint/pic3.jpg")
        },
        {
          location: "重庆市",
          place: "景点D",
          time: "2020-03-23",
          picture: require("../../../assets/img/home/aboutCnt/footprint/pic4.jpg")
        },
        {
          location: "日本-横滨",
          place: "景点E",
          time: "2020-03-23",
          picture: require("../../../assets/img/home/aboutCnt/footprint/pic5.jpg")
        }
      ],
      locateImg: require("../../../assets/img/home/aboutCnt/footprint/locate.png"),
      btnImg: require("../../../assets/img/home/aboutCnt/btn.png"),
    };
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.Footprint_wrapper {
  h2 {
    width: 100%;
    font-size: 24px;
    padding: 14px;
    padding-bottom: 4px;
    box-sizing: border-box;
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
      background-color: #fff;
      width: 100%;
      .item_wrapper {
        padding: 14px 14px;

        display: flex;
        justify-items: center;
        align-items: center;
        position: relative;
        img.place_img {
          width: 74px;
          height: 74px;
          margin-right: 14px;
        }
        .detail_wrapper {
          flex: 1;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .place_txt {
            width: 100%;
            font-size: 24px;
            color: #141414;
            margin-bottom: 7px;
            letter-spacing: 2px;
          }
          .other_detail {
            width: 100%;
            height: 100%;
            color: #444;
            display: flex;
            align-items: center;
            font-size: 14px;
            padding: 7px 0;
            img.locate_img{
              width: 21px;
              height: 21px;
              margin-right: 4px;
            }
            .location_txt {
              // width: 74px;
              width: auto;
              display: inline-block;
              flex: 0 0 auto;
              margin-right: 14px;
            }
            .time {
              flex: 1;
              
            }
          }
        }
        .btn {
          position: absolute;
          right: 14px;
          img{
            width: 24px;
            height: 24px;
            transform: rotate(90deg);
          }
        }
      }
    }
  }
}
</style>