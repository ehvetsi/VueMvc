<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
export default {
        name: 'app',
  props: {
    jsonModel: Array
  },
  data() {
    return {
      msg: 'Welcome ',
      teste: []

    }
  },
  mounted() {
    this.teste.push(1);
    this.teste.push(2);
    this.teste.push(3);
    this.teste.push(4);
  }
}
</script>
<style>

</style>