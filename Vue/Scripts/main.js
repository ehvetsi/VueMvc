import Vue from 'vue/dist/vue.min.js'
import App from '../Components/Home/App.vue'
import Btn from '../Components/Teste/button.vue'
import dotnetValidator from '../node_modules/vue-dotnet-validator/dist/index.js';



var vm=new Vue({
  el: '#app',
  components: {
    App,
    Btn,
    validator: dotnetValidator.validator(),
    vueDotnetValidatorGroup: dotnetValidator.validatorGroup
  }
})

console.log(vm)
//vm.components = {
//  app,
//  Btn,
//  ValidatorGroup: dotnetValidator.validatorGroup,
//  Validator: dotnetValidator.validator()
//}

Vue.config.devtools = true
