import Vue from 'vue/dist/vue.min.js'
import Btn from './button.vue'

var vm = new Vue({
  el: '#app',
  components: {
    Btn
  }
})
Vue.config.devtools = true