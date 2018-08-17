import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-icon': '../../static/dist/icon/index',
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-radio': '../../static/dist/radio/index'
    }
  }
}
