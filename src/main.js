import Vue from 'vue'
import ElementUI from 'element-ui'

import './components/theme/index.css'
import Navi from './components/Navi/Navi'


Vue.use(ElementUI)

new Vue({
    el: '#app',
    render: h => h(Navi)
})
