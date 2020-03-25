<!--
 * @Autor: hjz
 * @Date: 2020-03-23 19:49:46
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-25 16:13:48
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
      <ul class="img_list">
        <li class="list_item" v-for="(item,index) in dataUrls" :key="index">
          <div class="img_wrapper">
            <!-- <img ref="img" :style="{height:`${img_width}px`}" :src="item" alt /> -->
            <img :src="item" alt />
            <button class="delete_btn" @click="deleteHandle(index)"></button>
          </div>
        </li>
        <li class="list_item" v-show="img_length < 9">
          <label class="img_wrapper label_add" for="selectphoto"></label>
        </li>
      </ul>
      <!-- <img :src="dataUrl" alt /> -->
    </div>

    <div class="bottom_content">
      <div class="selectphoto">
        <label for="selectphoto" class="select_label">
          <img :src="photoImg" alt />
        </label>
        <input
          accept="image/*"
          ref="fileInput"
          id="selectphoto"
          multiple
          @change="selectHandle"
          type="file"
        />
        <span class="img_tips">最多9张照片哦！</span>
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
      files: "", // 文件列表
      photoImg: require("../../../assets/img/home/momentCnt/photo.png"),
      // 图片url列表
      dataUrls: [],
    };
  },
  methods: {
    selectHandle(value) {
      console.log(value);
      let fileInput = this.$refs.fileInput;
      // 通过DOM取文件数据
      this.files = fileInput.files;

      if (this.files.length + this.img_length > 9) {
        console.log("不行！");
        return;
      }

      this.files.forEach((file, index) => {
        this.imgPreview(this.files[index]);
      });

      console.log(this.files);
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
          self.dataUrls.push(this.result);
          // console.log(this.result);
        };
      }
    },
    deleteHandle(index){
      this.dataUrls.splice(index,1);
    }
  },
  computed: {
    txt_length() {
      return this.input_txt.length;
    },
    img_length() {
      // 最多上传9个图片
      let length = this.dataUrls.length;
      return length;
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
    button {
      font-size: 17px;
      color: #fafafa;
      padding: 4px 9px;
      letter-spacing: 2px;
      background-color: #5a8c6e;
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
      // border-bottom: 1px solid #ccc;
    }
    textarea::-webkit-input-placeholder {
      color: #b3b3b3;
      vertical-align: baseline;
      line-height: normal;
    }
  }

  .photo_show {
    width: 100%;
    height: auto;
    padding: 0 14px;
    box-sizing: border-box;
    margin-bottom: 44px;
    .img_list {
      width: 100%;
      padding: 0 4px;
      height: auto;
      display: flex;
      // justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      li.list_item {
        flex-basis: 32.4%;
        box-sizing: border-box;
        margin: 0.4%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        // 添加图片的图标
        label.label_add {
          border: 1px dashed #cbd1d7;
          position: relative;
          &::after,
          &::before {
            display: block;
            content: "";
            background-color: #ccc;
            position: absolute;
            left: calc(50% - 1px);
            top: calc(50% - 22px);
            width: 2px;
            height: 44px;
          }
          &::before {
            transform: rotate(90deg);
          }
        }
        .img_wrapper {
          position: relative;
          padding-bottom: 100%;
          width: 100%;
          height: 0;
          img {
            position: absolute;
            left: 0px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          button.delete_btn {
            position: absolute;
            right: 0px;
            top: 0px;
            background-color: #444;
            width: 24px;
            height: 24px;
            opacity: 0.44;
            &::after,
            &::before {
              display: block;
              content: "";
              background-color: #fafafa;
              position: absolute;
              left: calc(50% - 1px);
              top: calc(50% - 9px);
              width: 2px;
              height: 17px;
              transform: rotate(45deg);
              border-radius: 2px;
            }
            &::before {
              transform: rotate(135deg);
            }
          }
        }
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .bottom_content {
    position: fixed;
    bottom: 46px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .selectphoto {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
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
      span.img_tips {
        font-size: 14px;
        color: #444;
      }
    }

    span.length {
      color: #111;
      font-size: 21px;
    }
  }
}
</style>