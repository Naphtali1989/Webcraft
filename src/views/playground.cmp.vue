<template>
    <section>
        <hero />
    </section>
</template>

<script>
import headerSample from '@/cmps/samples/header-samples/header-sample.vue';
import hero from '@/cmps/samples/header-samples/hero.vue';
export default {
    name: 'playground',
    components: {
        headerSample,
        hero

    }
}
</script>

<style>
</style>