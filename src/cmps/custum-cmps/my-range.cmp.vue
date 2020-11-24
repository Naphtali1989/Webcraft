<template>
    <div class="block">
        <el-slider :max="options.max" :min="options.min" v-model="value"></el-slider>
    </div>
</template>

<script>
export default {
    props: {
        options: Object
    },
    data() {
        return {
            value: this.options.initVal
        }
    },

    methods: {
        emitChange() {
            this.$emit('change', this.value)
        }
    }
}
</script>