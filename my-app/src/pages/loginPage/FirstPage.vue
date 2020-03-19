<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:48:51
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-18 18:55:16
 * @Description: 
 -->
<template>
  <div class="LoginPage_wrapper">
    <h2>
        行走首页
    </h2>
    <router-link :to="{name:'login'}">登录</router-link>
    <router-link :to="{name:'register'}">注册</router-link>
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