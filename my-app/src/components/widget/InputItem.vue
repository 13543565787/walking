<!--
 * @Autor: hjz
 * @Date: 2020-03-20 15:10:10
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-25 13:15:46
 * @Description: input 组件
 -->
<template>
  <div class="InputItem_wrapper">
    <input
      class="input_item"
      :type="inputType"
      v-model="inputMsg.inputValue"
      :placeholder="placeholder"
      @focus="focusHandle"
      @blur="blurHandle"
      @input="inputHandle"
      ref="inputItem"
    />
    <i class="delete_icon" @click="deleteHandle" :class="{active:deleteShow}"></i>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    deleteShow() {
      return this.inputMsg.isFocus && !!this.inputMsg.inputValue;
    }
  },
  props: {
    inputType: {
      require: false,
      default: "text"
    },
    placeholder: {
      require: false,
      default: "请输入"
    },
    inputType: {
      require: false,
      default: "text"
    },
    inputId: {
      require: false,
      default: "1111"
    }
  },
  data() {
    return {
      inputMsg: {
        inputId: "",
        isFocus: false,
        isBlur: true,
        inputValue: "" // input内容
      }
    };
  },
  methods: {
    deleteHandle() {
      this.inputMsg.inputValue = "";
      this.$refs.inputItem.focus(); // 重新获得焦点！！
    },
    focusHandle() {
      console.log("focus");
      this.$refs.inputItem.placeholder = "";
      this.inputMsg.isFocus = true;
      this.inputMsg.isBlur = false;
      // TODO:每一个事件，都回传父组件，参数为input的信息对象！
      this.$emit("inputHandle", this.inputMsg);
    },
    blurHandle() {
      this.inputMsg.isFocus = false;
      this.inputMsg.isBlur = true;
      this.$refs.inputItem.placeholder = this.placeholder;
      // TODO:每一个事件，都回传父组件，参数为input的信息对象！
      this.$emit("inputHandle", this.inputMsg);
    },
    inputHandle() {
      // TODO:每一个事件，都回传父组件，参数为input的信息对象！
      this.$emit("inputHandle", this.inputMsg);
    }
  },
  mounted() {
    // 初始化id值
    this.inputMsg.inputId = this.inputId;
  }
};
</script>

<style scoped lang="less">
.InputItem_wrapper {
  width: auto;
  height: auto;
  display: inline-block;
  box-sizing: border-box;
  margin: 7px 0;
  position: relative;
  input.input_item {
    position: relative;
    z-index: 101;
    text-align: center;
    // text-indent: 21px;
    width: 270px;
    height: 44px;
    line-height: normal;
    border-radius: 24px;
    outline-style: none;
    border: 1px solid #ccc;
    font-size: 21px;
    color: #141414;
    caret-color: #1c82d4;
    -webkit-appearance: none;
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #6a6f77;
    }
  }
  i.delete_icon {
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 999;
    right: 14px;
    top: calc(50% - 10px);
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.4s;
    &.active {
      opacity: 1;
    }
    &::after,
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #aaa;
      position: absolute;
      top: calc(50% - 1px);
    }
    &::before {
      transform: rotate(90deg);
    }
  }
}
</style>