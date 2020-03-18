<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:22:15
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-18 19:02:22
 * @Description: 
 -->
<template>
  <div class="LoginPage_wrapper">
    <h2>
        登录页面
    </h2>
    <router-link :to="{name:'walking'}">登录(进入主页)</router-link>
    <router-link :to="{name:'register'}">免费注册(进入注册页面)</router-link>
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