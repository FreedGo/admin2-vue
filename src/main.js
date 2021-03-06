// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.min.css'
// 加载字体图标样式文件
import 'font-awesome/css/font-awesome.css'

// 导入自己的样式文件
import './assets/less/index.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
