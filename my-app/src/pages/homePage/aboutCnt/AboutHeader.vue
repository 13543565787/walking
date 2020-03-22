<!--
 * @Autor: hjz
 * @Date: 2020-03-21 23:24:00
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-22 11:16:58
 * @Description: 个人中心的头部
 -->
<template>
  <div class="AboutHeader_wrapper">
    
    <div class="about_msgs_wrapper">
      <div class="img_wrapper">
        <img :src="aboutImg" alt="">
      </div>
      
    </div>
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
  components:{

  },
  data(){
    return {
      about_list:[
        {tab:"关注",number:"645"},
        {tab:"粉丝",number:"11454"},
        {tab:"足迹",number:"64514"},
      ],
      // aboutImg: require("../../../assets/img/home/"),
    }
  },
  methods: {},
  computed: {},
  mounted(){

  },
}
</script>

<style scoped lang="less">
.AboutHeader_wrapper{
  width: 100%;
  height: 210px;
  background-color: #aaaaaa;
  position: absolute;
  top: 0;
  left: 0;
}
</style>