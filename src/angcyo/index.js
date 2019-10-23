/**
 * 基础组件
 * */
import Vue from 'vue'
import router from './base/router'

/**
 * IView 4.0组件
 * https://www.iviewui.com/docs/guide/start
 * */
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

/**
 * 首页
 * */
import AppVue from '@/App'

Vue.config.productionTip = false
Vue.use(ViewUI)

const App = {
    start() {
        new Vue({
            router,
            render: h => h(AppVue)
        }).$mount('#app')
    }
}

export default App