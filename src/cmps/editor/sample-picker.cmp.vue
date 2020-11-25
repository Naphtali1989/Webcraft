<template>
    <section class="sample-picker">
        <slot></slot>
        <sample-list />
    </section>
</template>

<script>
import sampleList from '@/cmps/editor/sample-list.cmp.vue'
export default {
    name: 'sample-picker',
    components: {
        sampleList
    }
}
</script>

<style>
</style>