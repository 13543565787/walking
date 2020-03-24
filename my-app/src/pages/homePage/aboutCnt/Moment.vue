<!--
 * @Autor: hjz
 * @Date: 2020-03-23 11:11:18
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-24 17:22:36
 * @Description: 查看动态的界面，
 -->
<template>
  <div class="Moment_wrapper">
    <AboutHeader :username="userMsg.username" :userImg="userMsg.userImg" :detail="userMsg.detail"></AboutHeader>
    <h2>{{ !!userMsg.username?"ta的动态":"我的动态" }}</h2>
    <ul class="moment_list">
      <li class="list_item" v-for="(item,index) in moment_list" :key="index">
        <div class="item_wrapper">
          <div class="title_wrapper">
            <!-- <img class="user_img" :src="item.picture" alt /> -->
            <div class="detail_wrapper">
              <!-- 用户信息 -->
              <div class="other_detail">
                <span class="time">{{ item.time }}</span>
                <img class="locate_img" :src="locateImg" alt />
                <span class="location_txt">{{ item.location }}</span>
              </div>
            </div>
          </div>
          <div class="content_wrapper">
            <div class="content">{{ item.moment.content }}</div>
            <img class="content_img" :src="item.moment.img" />
          </div>
          <!-- 评论区 -->
          <div class="comment_wrapper">
            <ul class="comment_list">
              <li
                class="list_item"
                v-for="(comment_item,comment_index) in item.comment"
                :key="comment_index"
              >
                <span class="username">{{ comment_item.user }}:</span>
                <span class="comment_content">{{ comment_item.content }}</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AboutHeader from "@/pages/homePage/aboutCnt/AboutHeader";

export default {
  components: {
    AboutHeader
  },
  data() {
    return {
      userMsg: {
        username: "何处惹尘埃",
        userImg: require("../../../assets/img/home/profileImg.jpg"),
        detail: "简介：It's meant to be!"
      },
      moment_list: [
        {
          location: "广东-广州",

          time: "2020-03-23",
          moment: {
            content:
              "当落日沉没.银灰色的暮露笼罩着草原的时候，你就会看见无数点红火光，那是牧民们在烧铜壶准备晚餐。",
            img: require("../../../assets/img/home/aboutCnt/footprint/pic1.jpg")
          },
          comment: [
            { user: "用户1", content: "哇！这地方真美，有机会我也去看看" }
          ]
        },
        {
          location: "广东-广州",
          time: "2020-03-23",
          moment: {
            content:
              "美丽的西湖风景上渔歌交错，晶莹的湖水在阳光的照耀下如一面金黄色的镜子，显得格外好看。",
            img: require("../../../assets/img/home/aboutCnt/footprint/pic2.jpg")
          },
          comment: [
            { user: "用户1", content: "哇！这地方真美，有机会我也去看看" }
          ]
        },
        {
          location: "广东-广州",
          time: "2020-03-23",
          moment: {
            content:
              "开时间的牵绊，邀阳光作伴，约清风同行，收拾起行囊，我们去亲近草原吧，去亲近辽阔无边的草原。",
            img: require("../../../assets/img/home/aboutCnt/footprint/pic3.jpg")
          },
          comment: [
            {
              user: "用户1",
              content:
                "哇！这地方真美，有机会我也去看看,哇！这地方真美，有机会我也去看看哇！这地方真美，有机会我也去看看哇！这地方真美，有机会我也去看看"
            },
            {
              user: "用户2",
              content:
                "哇！这地方真美，有机会我也去看看,哇！这地方真美，有机会我也去看看哇！这地方真美，有机会我也去看看哇！这地方真美，有机会我也去看看"
            }
          ]
        },
        {
          location: "广东-广州",
          time: "2020-03-23",
          moment: {
            content:
              "苍松挺拔，青草葱翠，山间微风袭过，花香四溢，馨香扑鼻，沁人心扉，抬眼望蓝天白云高山飞鸟，好一个活力四射的盛夏!",
            img: require("../../../assets/img/home/aboutCnt/footprint/pic4.jpg")
          },
          comment: [
            { user: "用户1", content: "哇！这地方真美，有机会我也去看看" }
          ]
        },
        {
          location: "广东-广州",
          time: "2020-03-23",
          moment: {
            content:
              "林子的泥土夹杂着清新的气味，草叶慢慢地探头，在树根，在灌木丛，在你的脚下，安静地蔓延着不为人知的浅绿。像淡淡的水粉。",
            img: require("../../../assets/img/home/aboutCnt/footprint/pic5.jpg")
          },
          comment: [
            { user: "用户1", content: "哇！这地方真美，有机会我也去看看" }
          ]
        }
      ],
      locateImg: require("../../../assets/img/home/aboutCnt/footprint/locate.png")
    };
  },
  methods: {},
  computed: {},
  mounted() {
    this.$route.params;
    if (this.$route.params) {
      console.log(this.$route.params);
      const {username,userImg,detail} = this.$route.params;
      this.userMsg = {
        username: username,
        userImg: userImg,
        detail: detail,
      };
    }
  }
};
</script>

<style scoped lang="less">
.Moment_wrapper {
  margin-top: -100px; // 直接覆盖！！！
  h2 {
    padding: 14px;
    font-size: 24px;
    letter-spacing: 2px;
    border-bottom: 1px solid #ddd;
    color: #444;
  }
  ul.moment_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    // padding: 14px;
    box-sizing: border-box;
    li.list_item {
      .item_wrapper {
        padding: 14px;
        box-sizing: border-box;
        width: 100%;
        border-bottom: 1px solid #ddd;
        .title_wrapper {
          width: 100%;
          display: flex;
          justify-items: center;
          align-items: center;
          position: relative;
          .detail_wrapper {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .other_detail {
              width: 100%;
              height: 100%;
              color: #444;
              display: flex;
              align-items: center;
              font-size: 14px;
              padding-top: 4px;
              .time {
                flex: 0 0 auto;
                line-height: 19px;
                margin-right: 14px;
                font-size: 15px;
              }
              img.locate_img {
                width: 19px;
                height: 19px;
                margin-right: 4px;
              }
              .location_txt {
                flex: 1 1 auto;
                // width: 74px;
                width: auto;
                display: inline-block;
                margin-right: 14px;
              }
            }
          }
        }
        .content_wrapper {
          width: 100%;
          margin-top: 14px;
          .content {
            font-size: 14px;
            color: #141414;
          }
          img.content_img {
            width: 100%;
            height: auto;
            padding: 7px 0;
          }
        }
        .comment_wrapper {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          background-color: #fafafa;
          font-size: 14px;
          color: #141414;
          line-height: 1.5;
          ul.comment_list {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            li.list_item {
              width: 100%;
              margin: 4px 0;
              span.username {
                font-weight: bold;
                margin-right: 7px;
              }
              span.comment_content {
              }
            }
          }
        }
      }
    }
  }
}
</style>