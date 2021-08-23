import Vue from 'vue'
import App from './App'

// 导入自定义头部组件
import cuCustom from './css/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

// 消息列表组件
import message from './pages/message/index'
Vue.component('message' ,message)

// 还有列表组件
import friends from './pages/friends/index'
Vue.component('friends', friends)

// 个人信息组件
import mine from './pages/mine/index'
Vue.component('mine', mine)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
