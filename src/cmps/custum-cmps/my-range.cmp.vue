<template>
    <div class="block">
    <span class="demonstration">Customized initial value</span>
    <el-slider v-model="value"></el-slider>
  </div>
</template>

<script>
export default {
    props:{
        options:Array
    },
    data() {
        return {
            value: ''
        }
    },

    methods:{

        emitChange(){
            this.$emit('change', this.value)
        }
    }
}
</script>