import Vue from 'vue'
import store from "@/store";
import App from "@/App";
import MpvueRouterPatch from "mpvue-router-patch";

Vue.config.productionTip = false
Vue.use(MpvueRouterPatch);
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mp项目',
      navigationBarTextStyle: 'black'
    }
  }
}
