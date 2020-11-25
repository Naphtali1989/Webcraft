<template>
    <section>
        <!-- <hero /> -->
        <!-- <header-sample /> -->
        <!-- <grid-sample /> -->
        <grid-card />
    </section>
</template>

<script>
import headerSample from '@/cmps/samples/header-samples/header-sample.vue';
import hero from '@/cmps/samples/header-samples/hero.vue';
import gridSample from '@/cmps/samples/header-samples/grid-sample.vue';
import gridCard from '@/cmps/samples/header-samples/grid-card.cmp.vue';


// import GridSample from '../cmps/samples/header-samples/grid-sample.vue';
export default {
    name: 'playground',
    components: {
        headerSample,
        hero,
        gridSample,
        gridCard


    }
}
</script>
