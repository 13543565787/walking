<!--
 * @Autor: hjz
 * @Date: 2020-03-18 18:34:21
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 20:05:48
 * @Description: 动态页面，一个即可！包含发动态，查看全部动态（含评论功能）
 -->
<template>
  <div class="MomentCnt_wrapper">
    <h2>
        动态
    </h2>
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
.MomentCnt_wrapper{
  width: 100%;
}
</style>