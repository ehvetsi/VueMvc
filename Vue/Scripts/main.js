import Vue from 'vue/dist/vue.min.js'
import App from '../Components/Home/App.vue'
import Btn from '../Components/Teste/button.vue'
import inputmask from '../Components/Home/textbox.vue'

new Vue({
  el: '#app',
  components: {
    App,
    Btn,
    inputmask
  }
})