<!--
 * @Autor: hjz
 * @Date: 2020-03-23 16:03:12
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-23 16:18:45
 * @Description: 
 -->
<template>
  <div class="CmtsCnt_wrapper">
    <h2>{{ isAttention ? "关注列表":"粉丝列表"}}</h2>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isAttention: false
    };
  },
  methods: {},
  computed: {},
  mounted() {
    if (this.$route.params.isAttention) {
      this.isAttention = true;
    }
  }
};
</script>

<style scoped lang="less">
.CmtsCnt_wrapper {
  height: 200vh;
}
</style>