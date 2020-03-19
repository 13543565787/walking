<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:22:31
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-19 19:46:24
 * @Description: 登录界面的盒子，包含首页、登录页、注册页
 -->
<template>
  <div class="LoginPage_wrapper">
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
.LoginPage_wrapper{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>