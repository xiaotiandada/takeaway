import Vue from 'vue'
import App from './App'

import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/order/main',
      'pages/shopp/main',
      'pages/user/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0097ff',
      navigationBarTitleText: '小优外卖',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#6f6f6f',
      selectedColor: '#18a3ff',
      backgroundColor: '#ffffff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/main',
          iconPath: 'static/img/wm.png',
          selectedIconPath: 'static/img/wms.png',
          text: '外卖'
        },
        {
          pagePath: 'pages/order/main',
          iconPath: 'static/img/dd.png',
          selectedIconPath: 'static/img/dds.png',
          text: '订单'
        },
        {
          pagePath: 'pages/shopp/main',
          iconPath: 'static/img/tj1.png',
          selectedIconPath: 'static/img/tj1s.png',
          text: '推荐'
        },
        {
          pagePath: 'pages/user/main',
          iconPath: 'static/img/user.png',
          selectedIconPath: 'static/img/users.png',
          text: '我的'
        }
      ]
    }
  }
}
