import {topCategory} from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state: () =>{
    return {
      list: topCategory.map(item =>({ name: item}))
    }
  },

  mutations:{
    setList(state,headCategory){
      state.list = headCategory
    },

    // 修改一级分类下的open 数据为true
    show(state,item){
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },

    hide(state,item){
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }

  },

  actions:{
    async getList({commit}){
     const {result} = await findAllCategory();
     result.forEach(item =>{
       item.open = false
     })
      commit('setList', result)
    }
  }
}
