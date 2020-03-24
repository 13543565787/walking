<!--
 * @Autor: hjz
 * @Date: 2020-03-23 19:49:30
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-24 20:00:08
 * @Description: 首页是动态！！！
 -->
<template>
  <div class="MomentCnt_wrapper">
    <h2>全部动态</h2>
    <ul class="moment_list">
      <li class="list_item" v-for="(item,index) in moment_list" :key="index">
        <div class="item_wrapper">
          <div class="title_wrapper">
            <img class="user_img" :src="item.picture" alt />
            <div class="detail_wrapper">
              <!-- 用户名 -->
              <div class="username_wrapper">
                <span class="username">{{ item.username }}</span>
                <img class="gender_img" :src="item.gender == 1? maleImg:femaleImg" alt />
                <img class="vip_img" v-show="item.vip" :src="vipImg" alt />
              </div>
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
          <div class="btn_wrapper">
            <button @click="likeHandle(index)" class="like_btn" :class="{active:item.like}">
              <img :src="item.like ? islikeImg : likeImg" alt />
              <span>点赞</span>
            </button>
            <button @click="commentHandle(index)" class="comment_btn">
              <img :src="commentImg" alt />
              <span>评论</span>
            </button>
          </div>
          <div class="comment_input" :class="{active:index == curComment}">
            <input type="text" ref="input" @blur="blurHandle()" />
            <button @touchstart="sentHandle(index)">发送</button>
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
    <div class="bottom">已经到底了哦^_^</div>
    <router-link tag="button" class="to_compose" :to="{name:'compose'}">
      <img :src="linkImg" alt />
    </router-link>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      curComment: -1,
      timer: "",
      moment_list: [
        {
          username: "用户1",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic1.jpg"),
          location: "广东-广州",
          gender: 1,
          vip: true,
          like: false,
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
          username: "用户2",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic2.jpg"),
          location: "广东-广州",
          gender: 0,
          vip: true,
          like: false,
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
          username: "用户3",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic3.jpg"),
          location: "广东-广州",
          gender: 0,
          vip: true,
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
          username: "用户4",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic4.jpg"),
          location: "广东-广州",
          gender: 1,
          vip: true,
          like: false,
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
          username: "用户5",
          picture: require("../../../assets/img/home/aboutCnt/attention/pic5.jpg"),
          location: "广东-广州",
          gender: 0,
          vip: true,
          like: false,
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
      locateImg: require("../../../assets/img/home/aboutCnt/footprint/locate.png"),
      maleImg: require("../../../assets/img/home/aboutCnt/attention/male.png"),
      femaleImg: require("../../../assets/img/home/aboutCnt/attention/female.png"),
      vipImg: require("../../../assets/img/home/aboutCnt/attention/vip.png"),
      likeImg: require("../../../assets/img/home/momentCnt/like.png"),
      islikeImg: require("../../../assets/img/home/momentCnt/islike.png"),
      commentImg: require("../../../assets/img/home/momentCnt/comment.png"),
      linkImg: require("../../../assets/img/home/momentCnt/link.png")
    };
  },
  methods: {
    likeHandle(index) {
      let newObj = this.moment_list[index];
      newObj.like = !newObj.like;
      // this.$set(obj, key, value)
      this.$set(this.moment_list, index, { ...newObj });
    },
    commentHandle(index) {
      this.timer = setTimeout(() => {
        this.$refs.input[index].focus();
      }, 300);
      this.curComment = index;
    },
    sentHandle(index) {
      console.log("!!!");
      console.log();
      let content = this.$refs.input[index].value;
      if (!content) {
        return;
      }
      let newObj = this.moment_list[index];
      newObj.comment.push({
        user: "何处惹尘埃",
        content: content
      });
      this.$set(this.moment_list, index, { ...newObj });
    },
    blurHandle() {
      this.curComment = -1;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.MomentCnt_wrapper {
  width: 100%;
  height: auto;
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
          img.user_img {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            margin-right: 14px;
          }
          .detail_wrapper {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .username_wrapper {
              display: flex;
              justify-items: center;
              align-items: center;
              span.username {
                font-size: 17px;
                color: #141414;
                letter-spacing: 1px;
                margin-right: 7px;
              }
              img.gender_img {
                width: 21px;
                height: 21px;
              }
              img.vip_img {
                width: 21px;
                height: 21px;
              }
            }
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
        .btn_wrapper {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          padding: 7px 0;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            font-size: 14px;
            &:last-child {
              margin-right: 14px;
            }
            img {
              width: 18px;
              height: 18px;
            }
          }
          .like_btn.active {
            // transform: scale(1.1);
            
            img {
              // background-color: red;
            }
          }
        }
        .comment_input {
          width: 100%;
          box-sizing: border-box;
          background-color: #fafafa;
          display: flex;
          justify-content: space-between;
          align-items: center;
          // display: none;
          visibility: hidden;
          height: 0;
          overflow: hidden;
          &.active {
            padding: 4px 14px;
            margin-bottom: 14px;
            height: 100%;
            visibility: visible;
            display: flex;
          }
          input {
            flex: 1;
            width: 100%;
            margin-right: 24px;
            outline-style: none;
            border: 1px solid #999;
            padding: 7px 14px;
            font-size: 14px;
            border-radius: 7px;
          }
          button {
            flex: 0 0 auto;
            padding: 7px 9px;
            color: #fff;
            font-size: 14px;
            letter-spacing: 2px;
            background-color: #007ef9;
            border-radius: 7px;
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
  .bottom {
    font-size: 17px;
    padding: 14px 0;
    color: #141414;
    letter-spacing: 2px;
    text-align: center;
  }
  .to_compose {
    position: fixed;
    bottom: 84px;
    right: 14px;
    background-color: #1793eb;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    opacity: 0.94;
    box-shadow: 0 6px 30px 0 rgba(38, 88, 187, 0.28);
    img {
      width: 34px;
      height: 34px;
      // padding: 7px;
    }
  }
}
</style>