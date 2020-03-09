import Vue from 'vue'
import App from './App'

// 引入图标字体
import "./static/iconfont/index.css";

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
