<!--
 * @Autor: hjz
 * @Date: 2020-03-23 15:58:22
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-24 19:52:04
 * @Description: 
 -->
<template>
  <div class="Feedback_wrapper">
    <h2>反馈</h2>
    <div class="score_wrapper feedback_item">
      <span>网页评分：</span>
      <ul class="score_list">
        <li class="list_item" v-for="(item,index) in 5" :key="index">
          <button @click="radioHandle(index)" class="score_btn">
            <img :src="score >= index ? isstar : nostar" alt />
          </button>
        </li>
      </ul>
    </div>
    <div class="feedback_type feedback_item">
      <span>反馈类型：</span>
      <select name="feedback_type" id>
        <option value disabled selected>请选择反馈类型</option>
        <option value>信息安全问题</option>
        <option value>个人隐私问题</option>
        <option value>产品功能问题</option>
        <option value>网页美观问题</option>
        <option value>使用咨询</option>
        <option value>意见建议或其他</option>
      </select>
    </div>
    <div class="feedback_detail feedback_item">
      <span>问题描述：</span>
      <textarea placeholder="请写下您的问题描述..." name="feedback_detail" id></textarea>
    </div>
    <div class="btn_wrapper">
      <button class="submit_btn">提交反馈</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      score: 4,
      isstar: require("../../../assets/img/home/aboutCnt/feedback/isstar.png"),
      nostar: require("../../../assets/img/home/aboutCnt/feedback/nostar.png")
    };
  },
  methods: {
    radioHandle(index) {
      console.log(index);
      this.score = index;
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="less">
.Feedback_wrapper {
  h2 {
    padding: 14px;
    font-size: 24px;
    letter-spacing: 2px;
    border-bottom: 1px solid #ddd;
    color: #444;
  }
  .feedback_item {
    padding: 14px 34px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    span {
      flex: 0 0 auto;
      font-size: 20px;
      color: #141414;
    }
  }
  .score_wrapper {
    ul.score_list {
      flex: 1;
      width: 100%;
      display: flex;
      align-items: center;
      li.list_item {
        margin-right: 4px;
        button.score_btn {
          width: auto;
          height: auto;
          display: block;
          img {
            width: 34px;
            height: 34px;
          }
        }
      }
    }
  }
  .feedback_type {
    select {
      outline-style: none;
      box-sizing: border-box;
      width: 190px;
      padding: 4px 7px;
      line-height: 1.5;
      color: #141414;
      font-size: 14px;
    }
  }
  .feedback_detail {
    align-items: flex-start;
    textarea {
      outline-style: none;
      box-sizing: border-box;
      width: 190px;
      padding: 4px 7px;
      line-height: 1.5;
      color: #141414;
      font-size: 14px;
      resize: none;
      height: 90px;
    }
  }
  .submit_btn {
    margin: 44px auto 0;
    display: block;
    width: 210px;
    height: 48px;
    line-height: 34px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    background-color: #007ef9;
    font-size: 21px;
    padding: 7px 14px;
    border-radius: 24px;
  }
}
</style>