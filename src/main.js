import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式
import './style/index.less'

// 引入 element-ui
import ElementUI from 'element-ui';
// 引入 element-ui 样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 引入全局组件
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
