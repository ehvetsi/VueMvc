<template>
  <div>
    <input :type="type" :name="name" v-bind="validations" />
  </div>
</template>
<script>
export default {
  name: 'app',
  props: {
    validations: {},
    type:String,
    name:String
  },
  data() {
    return {
      fieldType:type || 'text'
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style>

</style>