import Vue from 'vue'
import Vuex from 'vuex'
// import vuetron from 'vuetron '
import createPersistedState from 'vuex-persistedstate'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => wx.getStorageSync(key, value),
        removeItem: key => wx.clearStorageSync(key)
      }
    })
  ],
  state: {
    commdityShoppingName: '',
    commdityShopping: [],
    commdityOrder: []
  },

  mutations: {
    setCommdityShoppingName (state, commdityShoppingName) {
      state.commdityShoppingName = commdityShoppingName
    },
    setCommdityShopping (state, commdityShopping) {
      state.commdityShopping.push(commdityShopping)
    },
    setCommdityShoppingAdd (state, commdityShoppingIndex) {
      state.commdityShopping[commdityShoppingIndex].commoditySum++
    },
    setCommdityShoppingLess (state, commdityShoppingIndex) {
      if (state.commdityShopping[commdityShoppingIndex].commoditySum >= 1) {
        state.commdityShopping[commdityShoppingIndex].commoditySum--
        if (state.commdityShopping[commdityShoppingIndex].commoditySum === 0) {
          _.pullAt(state.commdityShopping, commdityShoppingIndex)
        }
      }
    },
    setCommdityShoppingClear (state) {
      state.commdityShopping = []
    },
    setCommdityOrder (state, commdityOrder) {
      let commdityOrderClone = _.clone(commdityOrder)
      state.commdityOrder.push(commdityOrderClone)
    }
  },

  actions: {
    setCommdityShoppingName ({ commit }, commdityShoppingName) {
      commit('setCommdityShoppingName', commdityShoppingName)
    },
    setCommdityShopping ({commit}, commdityShopping) {
      commit('setCommdityShopping', commdityShopping)
    },
    setCommdityShoppingAdd ({commit}, commdityShoppingIndex) {
      commit('setCommdityShoppingAdd', commdityShoppingIndex)
    },
    setCommdityShoppingLess ({commit}, commdityShoppingIndex) {
      commit('setCommdityShoppingLess', commdityShoppingIndex)
    },
    setCommdityShoppingClear ({commit}) {
      commit('setCommdityShoppingClear')
    },
    setCommdityOrder ({commit}, commdityOrder) {
      commit('setCommdityOrder', commdityOrder)
    }
  }
})
