<template>
    <div class="form-group">
        <label class="control-label" v-if="label" for="id">{{label}}</label>
        <input :type="type" :name="name" :class="[classes]" :id="id"/>
    </div>
</template>
<script>
    export default {
        props: {
            type: String,
            name: String,
            classes: String,
            id: String,
            label:String
        },
        data() {
            return {

            }
        },
        mounted(){
            console.log(this.classes);
        }
    }
</script>
<style>
</style>