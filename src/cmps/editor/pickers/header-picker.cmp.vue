<template>
    <section>
        <h1>Header picker</h1>
        <slot></slot>
        <div class="sample-preview flex column place-items">
            <img src="@/assets/img/profile.jpg" />

        </div>
    </section>
</template>

<script>
import headerSample from '@/cmps/samples/header-samples/header-sample.vue';
export default {
    name: 'header-picker',
    components: {
        headerSample
    }
}
</script>

<style scoped lang="scss">
.sample-preview {
    width: 10rem;
    img {
        width: 100%;
        object-fit: cover;
    }
}
</style>