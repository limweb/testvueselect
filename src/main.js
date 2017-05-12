// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



Vue.config.productionTip = false

window.bus = new Vue({
    data () {
      return {
        details:[
                {id:'', name:'', price:0 ,category: 0 },
                {id:'', name:'', price:0 ,category: 0 },
                {id:'', name:'', price:0 ,category: 0 },
                {id:'', name:'', price:0 ,category: 0 },
                ],
        item: {
          id: '',
          name: '',
          category_id: ''
        }
      }
    }
});

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
