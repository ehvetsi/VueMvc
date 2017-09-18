<template>
    <div>
        <slot name="content"></slot>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome ',
                teste : [],
                nome:"Jão"

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