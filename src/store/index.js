import Vue from 'vue'
import Vuex from 'vuex'
// import vuetron from 'vuetron '

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    // vuetron.VuetronVuex()
  ],
  state: {
    commdityShoppingName: '陈记九三鸭霸王',
    commdityShopping: []
  },

  mutations: {
    setCommdityShoppingName (state, commdityShoppingName) {
      state.commdityShoppingName = commdityShoppingName
    },
    setCommdityShopping (state, commdityShopping) {
      state.commdityShopping = commdityShopping
    }
  },

  actions: {
    setCommdityShoppingName ({ commit }, commdityShoppingName) {
      commit('setCommdityShoppingName', commdityShoppingName)
    },
    setCommdityShopping ({commit}, commdityShopping) {
      commit('setCommdityShopping', commdityShopping)
    }
  }
})
