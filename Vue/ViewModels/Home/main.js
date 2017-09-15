import Vue from 'vue/dist/vue.js'
//const Vue = require('vue/dist/vue.js');
const Teste = require('./teste.js');

const v = new Vue({
  el: '#app',
  components: {
    Teste
  },
  data: {
    message: 'Hello Vue.js!'
  }
})