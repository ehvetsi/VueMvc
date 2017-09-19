import Vue from 'vue/dist/vue.min.js';
import App from '../Components/Home/App.vue';
import '@progress/kendo-ui';
import { KendoCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
import { KendoMaskedTextBox, KendoInputsInstaller } from '@progress/kendo-inputs-vue-wrapper'
import { KendoValidator, KendoLayoutInstaller } from '@progress/kendo-layout-vue-wrapper'

Vue.use(KendoLayoutInstaller)
Vue.use(KendoInputsInstaller)
Vue.component(KendoCalendar.name, KendoCalendar)

new Vue({
  el: '#app',
  components: {
    App,
    KendoCalendar,
    KendoMaskedTextBox,
    KendoValidator
  }
})

Vue.config.devtools = true