import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role : null
  },
  mutations: {
    BECOME_ADMIN(state){
      state.role = "admin"
    },
    BECOME_MEMBER(state){
      state.role = "member"
    },
    DISCONNECT(state){
      state.role = null
    }
  },
  actions: {
    toggle_admin(context,state){
      context.commit('BECOME_ADMIN',state)
    },
    toggle_member(context,state){
      context.commit('BECOME_MEMBER',state)
    },
    toggle_disconnect(context,state){
      context.commit('DISCONNECT',state);
    }
  },
  modules: {
  }
})
