<!--
 * @Autor: hjz
 * @Date: 2020-03-23 19:49:46
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-24 01:12:53
 * @Description: 写动态（类似于发朋友圈）
 -->
<template>
  <div class="MomentCnt_wrapper">
    <div class="title_wrapper">
      <h2>写动态</h2>
      <router-link tag="button" :to="{name:'moment'}">发送</router-link>
    </div>
    <div class="textarea_wrapper">
      <textarea v-model="input_txt" placeholder="分享你的动态..."></textarea>
    </div>

    <div class="photo_show">
      <img :src="dataUrl" alt />
    </div>

    <div class="bottom">
      <div class="selectphoto">
        <label for="selectphoto" class="select_label">
          <img :src="photoImg" alt />
        </label>
        <input accept="image/*" ref="fileInput" id="selectphoto" @change="selectHandle" type="file" />
      </div>
      <span class="length">{{ txt_length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      input_txt: "",
      file: "",
      dataUrl: "",
      photoImg: require("../../../assets/img/home/momentCnt/photo.png")
    };
  },
  methods: {
    selectHandle(value) {
      console.log(value);
      let fileInput = this.$refs.fileInput;
      // 通过DOM取文件数据
      this.file = fileInput.files[0];
      this.imgPreview(this.file);
      console.log(this.file);
    },
    imgPreview(file) {
      let self = this;
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        // 创建一个reader
        let reader = new FileReader();
        // 将图片将转成 base64 格式
        reader.readAsDataURL(file);
        // 读取成功后的回调
        reader.onloadend = function() {
          self.dataUrl = this.result;
          console.log(this.result);
        };
      }
    }
  },
  computed: {
    txt_length() {
      return this.input_txt.length;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.MomentCnt_wrapper {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .title_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    padding: 14px;
    color: #444;

    border-bottom: 1px solid #ddd;
    h2 {
      font-size: 21px;
      letter-spacing: 2px;
    }
    button{
      font-size: 17px;
      color: #fafafa;
      padding: 4px 9px;
      letter-spacing: 2px;
      background-color: #0073f9;
      border-radius: 7px;
    }
  }
  .textarea_wrapper {
    padding: 14px;
    width: 100%;
    box-sizing: border-box;
    textarea {
      width: 100%;
      height: 147px;
      border: none;
      outline-style: none;
      overflow: hidden;
      color: #444;
      resize: none;
      font-size: 20px;
      // line-height: ;
    }
    // textarea:focus {
    //   outline-offset: -2px;
    // }
    // input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: #b3b3b3;
      vertical-align: baseline;

      line-height: normal;
    }
  }

  .photo_show {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  .bottom {
    position: fixed;
    bottom: 46px;
    width: 100%;
    box-sizing: border-box;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .selectphoto {
      position: relative;
      label.select_label {
        width: 44px;
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 27px;
          height: 27px;
        }
      }
      input {
        display: none;
      }
    }
    span.length {
      color: #111;
      font-size: 21px;
    }
  }
}
</style>