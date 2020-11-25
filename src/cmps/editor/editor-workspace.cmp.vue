<template>
    <section class='editor-workspace flex column'>
        <component :is="cmp.type" v-for="(cmp,idx) in cmps" :key="idx" :info="cmp.info" />
    </section>
</template>

<script>
import sampleHero from "@/cmps/editor/sample-hero.cmp.vue";
export default {
    name: 'editor-workspace',
    props: {
        cmps: {
            type: Array
        }
    },
    components: {
        sampleHero
    }
}
</script>

<style>
</style>