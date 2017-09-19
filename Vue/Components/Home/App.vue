<template>
  <div>
    <input type="text" name="LastName" v-bind="validations" />
    <input type="submit" value="Envia"/>
  </div>
</template>
<script>
import { KendoCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  name: 'app',
  props: {
    validations: {}
  },
  data() {
    return {
      phoneNumber: ' ',
      teste: []

    }
  },
  mounted() {
    this.teste.push(1);
    this.teste.push(2);
    this.teste.push(3);
    this.teste.push(4);
  },
  methods: {
    onSubmit: function(ev) {
      debugger;
      var validator = this.kendoValidator
      var status = kendo.jQuery('.status')

      if (validator.validate()) {
        status.text('Hooray! Your tickets has been booked!')
          .removeClass('invalid')
          .addClass('valid')
      } else {
        status.text('Oops! There is invalid data in the form.')
          .removeClass('valid')
          .addClass('invalid')
      }
    }
  }
}
</script>
<style>

</style>