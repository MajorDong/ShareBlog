import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.filter('formatDate', function(dateStr){
  let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
  let publishTime = dateObj.getTime()
  let now = Date.now()
  let gapTime = Math.abs(now - publishTime)
  let str 
  switch (true) {
    case gapTime < 60000:
      str = '刚刚'
      break
    case gapTime < 1000 * 3600:
      str = Math.floor(gapTime/60000) + '分钟前'
      break
    case gapTime < 1000 * 3600 * 24:
      str = Math.floor(gapTime/(1000*3600)) + '小时前'
      break
    default:
      str = Math.floor(gapTime/(1000*3600*24)) + '天前'
  }
  return str
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
