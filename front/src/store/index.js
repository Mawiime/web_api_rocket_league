import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    admin: false
  },
  mutations: {
    BECOME_ADMIN(state){
      state.admin = true
    }
  },
  actions: {
    toggle_admin(context,state){
      context.commit('BECOME_ADMIN',state)
    }
  },
  modules: {
  }
})
