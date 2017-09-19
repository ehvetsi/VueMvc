import Vue from 'vue/dist/vue.min.js'
import App from './App.vue'
import '@progress/kendo-ui'
import { KendoCalendar } from '@progress/kendo-dateinputs-vue-wrapper'

var vm = new Vue({
  el: '#app',
  components: {
    app,
    KendoCalendar
  }
})

Vue.config.devtools = true