import { createStore } from 'vuex'

export default createStore({
  state: {
    cover_show: true
  },
  mutations: {
    set_cover_show(state, payload) {
      state.cover_show = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
