/*
 * @Autor: hjz
 * @Date: 2020-03-19 00:16:09
 * @LastEditors: hjz
 * @LastEditTime: 2020-03-22 12:00:57
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curCntIndex:0, // 关联底部栏当前选中
  },
  mutations: {
    setCurCntIndex:(state,index)=>{
      state.curCntIndex = index;
    }
  },
  actions: {
    setCurCntIndexFun:(content,index)=>{
      content.commit('setCurCntIndex',index);
    }
  },
  modules: {
  }
})
