<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:09:10
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-19 13:41:17
 * @Description: 主页盒子，包含三大模块
 -->
<template>
  <div class="LoginPage_wrapper">
    <nav>底部导航栏
      <router-link :to="{name:'walking'}">行走</router-link>
      <router-link :to="{name:'writing'}">写动态</router-link>
      <router-link :to="{name:'about'}">我的</router-link>
      
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  components:{

  },
  data(){
    return {

    }
  },
  methods: {},
  computed: {},
  mounted(){

  },
}
</script>

<style scoped lang="less">

</style>