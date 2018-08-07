import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

// 添加 config json
export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-row': '../../static/dist/row/index',
      'i-col': '../../static/dist/col/index',
      'i-button': '../../static/dist/button/index',
      'i-input': '../../static/dist/input/index',
      'i-tab-bar': '../../static/dist/tab-bar/index',
      'i-tab-bar-item': '../../static/dist/tab-bar-item/index',
      'i-divider': '../../static/dist/divider/index',
      'i-card': '../../static/dist/card/index',
      'i-grid': '../../static/dist/grid/index',
      'i-grid-item': '../../static/dist/grid-item/index',
      'i-grid-icon': '../../static/dist/grid-icon/index',
      'i-grid-label': '../../static/dist/grid-label/index',
      'i-spin': '../../static/dist/spin/index',
      'i-icon': '../../static/dist/icon/index',
      'i-load-more': '../../static/dist/load-more/index'
    }
  }
}
