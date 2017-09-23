import Vue from 'vue/dist/vue.min.js'
import Textbox from '../Shared/textbox.vue'
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';

const validator = new Validator();

Vue.use(VeeValidate);

var vm = new Vue({
  el: '#app',
  components: {
    Textbox
  },
  data: {
    email: '',
    errors:''
  },
  watch: {
    email(value) {
      this.validator.validate("email", value);
    }
  },
  created() {
    this.validator = new Validator({
      email: {required:true,min_value:2, max_value:20,decimal:3},
    });
    this.$set(this, 'errors', this.validator.errors);
  }
})

Vue.config.devtools = true